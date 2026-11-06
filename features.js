(function () {
"use strict";
const KEY="typebloom-progress-v2", $=id=>document.getElementById(id), app=window.TypeBloomApp;
if(!app)return;
const defaults={dailyMinutes:10,targetWpm:40,targetAccuracy:95};
const dateKey=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const sessionData=()=>Array.isArray(app.getData().sessions)?app.getData().sessions.filter(s=>s&&Number.isFinite(Number(s.at))):[];
const clamp=(v,min,max)=>Math.min(max,Math.max(min,Number(v)||min));
function goals(){const d=app.getData();if(!d.goals||typeof d.goals!=="object")d.goals={...defaults};d.goals={dailyMinutes:clamp(d.goals.dailyMinutes,1,180),targetWpm:clamp(d.goals.targetWpm,1,250),targetAccuracy:clamp(d.goals.targetAccuracy,50,100)};return d.goals;}
function meter(id,pct){const el=$(id);if(!el)return;const v=clamp(pct,0,100);el.setAttribute("aria-valuenow",String(Math.round(v)));const fill=el.querySelector("span");if(fill)fill.style.width=v+"%";}
function renderGoals(){
 const g=goals(),all=sessionData(),now=new Date(),today=dateKey(now),start=new Date(now.getFullYear(),now.getMonth(),now.getDate()-6).getTime();
 const recent=all.filter(s=>Number(s.at)>=start),todaySecs=all.filter(s=>dateKey(new Date(Number(s.at)))===today).reduce((a,s)=>a+(Number(s.seconds)||0),0),weekSecs=recent.reduce((a,s)=>a+(Number(s.seconds)||0),0);
 const avg=k=>{const a=recent.map(s=>Number(s[k])).filter(v=>Number.isFinite(v)&&v>=0);return a.length?a.reduce((x,y)=>x+y,0)/a.length:null;};
 const wpm=avg("wpm"),accuracy=avg("accuracy"),byDay={};recent.forEach(s=>{const d=dateKey(new Date(Number(s.at)));byDay[d]=(byDay[d]||0)+(Number(s.seconds)||0);});
 const met=Object.values(byDay).filter(v=>v>=g.dailyMinutes*60).length;
 $("goalDailyMinutes").value=g.dailyMinutes;$("goalTargetWpm").value=g.targetWpm;$("goalTargetAccuracy").value=g.targetAccuracy;
 $("goalTodayValue").textContent=(todaySecs/60).toFixed(1)+" / "+g.dailyMinutes+" min";
 $("goalWeekValue").textContent=(weekSecs/60).toFixed(1)+" / "+(g.dailyMinutes*7)+" min";
 $("goalWpmValue").textContent=wpm==null?"—":Math.round(wpm)+" WPM";$("goalWpmMeta").textContent="Target: "+g.targetWpm+" WPM";
 $("goalAccuracyValue").textContent=accuracy==null?"—":accuracy.toFixed(1)+"%";$("goalAccuracyMeta").textContent="Target: "+g.targetAccuracy+"%";
 $("goalWeekSummary").textContent=met+" of 7 days reached the daily practice target. Weekly totals include all recorded sessions.";
 meter("goalTodayMeter",todaySecs/(g.dailyMinutes*60)*100);meter("goalWeekMeter",weekSecs/(g.dailyMinutes*420)*100);
 app.persist();
}
$("goalSettingsForm")?.addEventListener("submit",e=>{
 e.preventDefault();const daily=Number($("goalDailyMinutes").value),wpm=Number($("goalTargetWpm").value),acc=Number($("goalTargetAccuracy").value);
 if(!Number.isInteger(daily)||daily<1||daily>180||!Number.isInteger(wpm)||wpm<1||wpm>250||!Number.isInteger(acc)||acc<50||acc>100){$("goalSaveStatus").textContent="Use 1–180 minutes, 1–250 WPM, and 50–100% accuracy.";return;}
 app.getData().goals={dailyMinutes:daily,targetWpm:wpm,targetAccuracy:acc};app.persist();$("goalSaveStatus").textContent="Goals saved on this browser.";renderGoals();
});
$("startCustomButton")?.addEventListener("click",()=>{
 const text=$("customTextSource").value.trim(),status=$("customTextStatus");
 if(text.length<20){status.textContent="Add at least 20 characters to create a useful practice passage.";$("customTextSource").focus();return;}
 if(text.length>4000){status.textContent="Keep your passage below 4,000 characters.";return;}
 const ok=app.startCustom(text,$("customDuration").value,"Custom text");
 status.textContent=ok?"Custom practice is ready. The passage is not saved in session history.":"The passage could not be started.";
});
$("exportProgressButton")?.addEventListener("click",()=>{
 try{const backup={app:"TypeBloom",formatVersion:1,exportedAt:new Date().toISOString(),storageKey:KEY,data:JSON.parse(JSON.stringify(app.getData()))};
 const blob=new Blob([JSON.stringify(backup,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download="typebloom-progress-backup-"+dateKey(new Date())+".json";document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 $("backupStatus").textContent="Backup downloaded. Store the JSON file somewhere private and safe.";
 }catch(e){$("backupStatus").textContent="Could not create a backup in this browser.";}
});
$("importProgressButton")?.addEventListener("click",()=>$("progressBackupFile")?.click());
$("progressBackupFile")?.addEventListener("change",async e=>{
 const file=e.target.files?.[0];if(!file)return;
 try{
  if(file.size>5*1024*1024)throw new Error("Backup file is larger than 5 MB.");
  const parsed=JSON.parse(await file.text()),d=parsed?.app==="TypeBloom"&&parsed.formatVersion===1?parsed.data:null;
  if(!d||typeof d!=="object"||Array.isArray(d)||!d.completed||typeof d.completed!=="object"||!d.best||typeof d.best!=="object"||!Array.isArray(d.sessions)||!d.dailyHistory||typeof d.dailyHistory!=="object")throw new Error("This is not a valid TypeBloom backup.");
  if(!confirm("Import this backup? It will replace the progress currently saved in this browser. Download the current backup first if you want to keep it.")){$("backupStatus").textContent="Import cancelled. Current progress is unchanged.";return;}
  localStorage.setItem(KEY,JSON.stringify(d));$("backupStatus").textContent="Backup imported. Reloading…";location.reload();
 }catch(err){$("backupStatus").textContent=err.message||"Could not read this backup. Existing progress is unchanged.";}
 finally{e.target.value="";}
});
const rows=["1234567890","qwertyuiop","asdfghjkl","zxcvbnm"],words=("after again answer apple around balance basic become better bright build calm careful character choose clear cloud common complete confident correct create daily detail easy effort every example finger focus flower gentle good grow habit hands happy help home improve inside jump keyboard kind learn letter light little make natural notice open people practice precise progress quick quiet reach read repeat reliable rhythm right safe school smooth soft space steady student study sunny sure system thank think touch train tree useful warm water welcome work write").split(" ");
function allMistakes(){const totals={},patterns={};sessionData().forEach(s=>(Array.isArray(s.mistakes)?s.mistakes:[]).forEach(m=>{
 const label=String(m.label||""),count=Math.max(0,Number(m.count)||0);if(!count)return;
 if(label==="space")totals[" "] = (totals[" "]||0)+count;
 else{const expected=Array.from(label.split(" → ")[0]||"")[0];if(expected&&/^[a-z0-9]$/i.test(expected))totals[expected.toLowerCase()]=(totals[expected.toLowerCase()]||0)+count;}
 patterns[label]=(patterns[label]||0)+count;
}));return{totals,patterns:Object.entries(patterns).map(([label,count])=>({label,count})).sort((a,b)=>b.count-a.count).slice(0,8)};}
function buildDrill(k){if(k===" ")return "a calm pace is easier to keep. read each phrase and leave a clear space between every word. steady practice makes typing feel natural.";if(/^[0-9]$/.test(k))return ("1234567890 "+k+" 2026 1234 5678 9090 2468 1357 ").repeat(8);
 const found=words.filter(w=>w.includes(k)),bank=found.length?found:words,t=[];while(t.join(" ").length<420)t.push(bank[t.length%bank.length]);return t.join(" ").slice(0,700);}
function startDrill(text,label){const ok=app.startCustom(text,2,label);$("heatmapStatus").textContent=ok?"Your focused drill is ready in the practice area.":"The focused drill could not be started.";}
function renderHeatmap(){
 const host=$("keyboardHeatmap");if(!host)return;const {totals,patterns}=allMistakes();host.replaceChildren();const max=Math.max(1,...Object.values(totals));
 rows.forEach(rowText=>{const row=document.createElement("div");row.className="heatmap-row";Array.from(rowText).forEach(k=>{const n=totals[k]||0,b=document.createElement("button");b.type="button";b.className="heat-key";b.textContent=k;b.title=k.toUpperCase()+" · "+n+" target-character mismatches. Select for a drill.";b.setAttribute("aria-label",b.title);b.style.setProperty("--heat",String(n/max));b.addEventListener("click",()=>startDrill(buildDrill(k),"Key drill · "+k.toUpperCase()));row.append(b);});host.append(row);});
 const space=document.createElement("button");space.type="button";space.className="heat-key heat-space";space.textContent="Space";const n=totals[" "]||0;space.title="Space · "+n+" target-character mismatches. Select for a drill.";space.setAttribute("aria-label",space.title);space.style.setProperty("--heat",String(n/max));space.addEventListener("click",()=>startDrill(buildDrill(" "),"Space-bar drill"));host.append(space);
 const patternsHost=$("heatmapPatterns");patternsHost.replaceChildren();if(!patterns.length){const p=document.createElement("p");p.className="progress-history-note";p.textContent="No key-level mistakes recorded yet. Complete a new session to start this view.";patternsHost.append(p);}else{const h=document.createElement("p");h.className="eyebrow";h.textContent="Most repeated mismatch patterns";patternsHost.append(h);patterns.slice(0,5).forEach(x=>{const p=document.createElement("span");p.className="heat-pattern";p.textContent=x.label+" · "+x.count;patternsHost.append(p);});}
}
$("targetedDrillButton")?.addEventListener("click",()=>{
 const p=allMistakes().patterns.filter(x=>x.label!=="space"&&!x.label.startsWith("extra →")).slice(0,5);if(!p.length){$("heatmapStatus").textContent="Complete a new practice session first. Your result will provide the patterns for this drill.";return;}
 const texts=p.map(x=>{const c=Array.from(x.label.split(" → ")[0]||"")[0]?.toLowerCase();return c?buildDrill(c):"";}).filter(Boolean);
 startDrill(texts.join(" ").slice(0,1200),"Targeted keyboard drill");
});
$("progressButton")?.addEventListener("click",()=>{renderGoals();renderHeatmap();});
window.addEventListener("typebloom:session-recorded",()=>{renderGoals();renderHeatmap();});
window.addEventListener("storage",()=>{renderGoals();renderHeatmap();});
renderGoals();renderHeatmap();
})();