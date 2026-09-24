const levels = {
  beginner: [
    ["Warm up your fingers", "Easy start", "slow hands make steady progress"],
    ["Find a soft rhythm", "Gentle rhythm", "type each word with calm care"],
    ["A sunny sentence", "Short and sweet", "small steps can feel bright"],
    ["Make room to grow", "Easy flow", "good habits grow day by day"],
    ["Settle into it", "Keep going", "focus on the next little word"],
    ["Your quiet superpower", "Steady hands", "patient practice builds real skill"],
    ["A friendly pace", "No rush", "your pace is exactly enough today"],
    ["Keep it light", "Breathe easy", "soft shoulders help fingers fly"],
    ["Bloom one key at a time", "Growing", "every key press helps you learn"],
    ["A small win", "You got this", "smooth typing starts with simple words"],
    ["Follow the path", "Stay curious", "let your eyes lead your hands"],
    ["One more moment", "Easy focus", "clear thoughts make cleaner typing"],
    ["Bright little progress", "Keep blooming", "practice turns effort into ease"],
    ["Calm and ready", "Gentle challenge", "take a breath then trust your hands"],
    ["A lovely loop", "Steady flow", "read type pause and begin again"],
    ["Good things repeat", "Getting stronger", "kind practice makes confident fingers"],
    ["Build your base", "Smooth sailing", "each lesson makes the next one lighter"],
    ["A little longer", "Almost there", "stay relaxed while the sentence grows"],
    ["Growing confidence", "Nice work", "your hands already know more than before"],
    ["Beginner bloom", "Level complete", "you have built a beautiful starting rhythm"]
  ],
  intermediate: [
    ["Add a little sparkle", "Punctuation", "A clear mind, a steady breath, and a kind reset can change the whole day."],
    ["Work the rhythm", "Flow practice", "When the pace feels right, your fingers can move with more ease and less effort."],
    ["Curious by nature", "Longer line", "Try asking better questions: What feels smooth? Where could I slow down and learn?"],
    ["Balance the basics", "Numbers ahead", "For 10 focused minutes, let accuracy lead; the speed will happily follow."],
    ["A fresh perspective", "Keep moving", "Great practice is not about being perfect; it is about returning with a playful spirit."],
    ["Mix it up", "Symbols + words", "Notes, lists, and emails all need care—especially when details matter most."],
    ["The little pause", "Focus reset", "Pause for a second. Relax your wrists. Then return to the next word with intention."],
    ["Practice with purpose", "Sentence flow", "Good technique grows quietly, one repeatable choice at a time."],
    ["A thoughtful pace", "Numbers ahead", "Read the full phrase first, then let your hands finish the work in 3, 2, 1."],
    ["Stay wonderfully human", "Friendly challenge", "A typo is simply feedback, not a verdict; fix it, learn from it, move on."],
    ["A polished note", "Punctuation", "Hello, future me: thank you for making time to learn something useful today."],
    ["Creative momentum", "Longer line", "Ideas become real through small actions, repeated often enough to become natural."],
    ["Details count", "Precision", "Check the commas, notice the spaces, and give every character its proper place."],
    ["Make the time", "Numbers + symbols", "A 15-minute practice block can be more powerful than a plan that waits for someday."],
    ["Bring the energy", "Speed builder", "Stay light on the keys; a relaxed touch creates a faster, more reliable rhythm."],
    ["Your next chapter", "Sentence flow", "Progress looks ordinary up close, then remarkable when you look back after a few weeks."],
    ["A clear finish", "Precision", "Before you press send, review once, breathe once, and trust the work you have done."],
    ["A bit bolder", "Longer line", "Challenge is a friendly invitation to discover the skill waiting inside you."],
    ["Own the pattern", "Rhythm check", "Typing well means listening to your pace, adjusting gently, and keeping your eyes ahead."],
    ["Intermediate bloom", "Level complete", "You turned attention into momentum—and momentum into a skill you can use anywhere."]
  ],
  advanced: [
    ["Precision under pressure", "Symbols", "The quick brown fox jumps over 13 lazy dogs; each one watches the clock at 07:45."],
    ["Write it clearly", "Punctuation", "“Clarity is kindness,” she wrote, then added: “Check the details before you decide.”"],
    ["Command the keyboard", "Code-like text", "const focus = true; if (focus) { practice(); improve(); repeat(); }"],
    ["A sharper edge", "Mixed characters", "Score: 98.4% | Time: 01:27 | Goal: keep your errors below 3 per minute."],
    ["Careful composition", "Dense sentence", "Although the deadline moved twice, the team delivered a thoughtful, well-tested result on Friday."],
    ["The useful formula", "Symbols + numbers", "speed = (correctCharacters / 5) ÷ elapsedMinutes; accuracy should guide the result."],
    ["Fast, not frantic", "Punctuation", "Move quickly—but never wildly. A crisp correction now prevents a messy revision later."],
    ["A tiny system", "Code-like text", "function improve(skill) { return skill + practice + rest; } // Run daily."],
    ["Measure what matters", "Numbers", "In 2026, a 2% improvement each week compounds into a remarkably different baseline."],
    ["Nuance is the work", "Quotes", "He asked, “Is it ready?” I replied, “It is reviewed, tested, and ready to share.”"],
    ["Structure and flow", "Mixed characters", "Plan → draft → test → refine. Repeat the loop until quality feels effortless."],
    ["Concentrated practice", "Dense sentence", "The best performers do not avoid hard passages; they isolate them, study them, and try again."],
    ["A technical thought", "Code-like text", "await Promise.all(tasks.map(task => task.complete({ careful: true })));"],
    ["The final review", "Precision", "Names, dates, URLs, and totals deserve a second look—because trust lives in the details."],
    ["Quick calculation", "Numbers + symbols", "Revenue grew from $4,250.00 to $5,015.50 (+18.01%) during Q3—nice work!"],
    ["Stay in control", "Punctuation", "Even at high speed, keep your hands loose, your eyes forward, and your attention steady."],
    ["Elegant complexity", "Dense sentence", "A well-designed system makes the difficult task feel understandable, repeatable, and surprisingly calm."],
    ["Tight turnaround", "Mixed characters", "ETA: 4:30 p.m. — Please review items #12, #14, and #21 before the meeting."],
    ["Professional polish", "Precision", "Thank you for your time; I have attached the revised proposal, timeline, and supporting notes."],
    ["Advanced bloom", "Master level", "Speed is not the finish line: confident, accurate communication is the skill worth growing."]
  ]
};

const timedPrompts = [
  "A calm rhythm helps every small action feel lighter and more reliable.",
  "Practice is not a performance; it is a quiet promise to your future self.",
  "Read ahead, relax your hands, and let accuracy create the pace.",
  "The best improvement comes from showing up with patience and curiosity.",
  "Clear writing begins with clear thinking, one careful character at a time.",
  "Progress is built from ordinary minutes used with a little intention.",
  "A good typing habit makes every message, note, and idea easier to share."
];

const practiceWordsPerLevel = { beginner: 5, intermediate: 15, advanced: 25 };
const passageFillers = [
  "Keep your attention on the next phrase, and allow your hands to settle into an even rhythm.",
  "A measured pace makes space for cleaner choices, especially when a sentence becomes more detailed.",
  "Notice the shape of the words before you type them, then let accuracy lead each small movement.",
  "When an error appears, correct it with patience and continue without giving the mistake extra weight.",
  "Strong practice is built from calm repetition, clear focus, and the willingness to improve one line at a time.",
  "Your goal is not to rush through the passage; your goal is to make every character feel intentional.",
  "The more gently you return to the task, the more naturally confidence and consistency begin to grow.",
  "Good technique supports quick thinking, clear communication, and work that feels reliable from beginning to end.",
  "Stay relaxed through commas, numbers, symbols, and longer phrases, because each detail deserves the same care.",
  "A thoughtful typing rhythm turns a demanding passage into a sequence of manageable, satisfying little steps.",
  "Use this moment to build fluency: read ahead, breathe steadily, and trust the habits you are creating.",
  "Progress becomes visible when careful practice repeats often enough to feel comfortable, useful, and genuinely yours."
];
const cpmFillers = [
  "Character by character, you are building a dependable rhythm that can carry through longer work without losing clarity.",
  "Keep your eyes moving ahead of your hands, and let the space between words become part of the pattern you trust.",
  "A CPM session rewards steady focus, so make each phrase smooth before trying to make it faster.",
  "The goal is continued, accurate motion: notice the punctuation, meet the spaces cleanly, and keep your shoulders relaxed.",
  "Longer passages give your fingers time to settle into a natural cadence while your attention stays gently engaged.",
  "Every correct character adds to the total, and every thoughtful correction helps the next sentence feel even more fluid.",
  "Use the full timer as a friendly conversation with the keyboard, not as a race against yourself.",
  "With each paragraph, the rhythm becomes more familiar, the movements become lighter, and the work begins to flow."
];

function buildPassage(seed, targetWords, index, fillers) {
  const parts = [seed].concat(fillers.slice(index % fillers.length), fillers.slice(0, index % fillers.length));
  const words = [];
  let partIndex = 0;
  while (words.length < targetWords) {
    words.push(...parts[partIndex % parts.length].trim().split(/\s+/));
    partIndex += 1;
  }
  return words.slice(0, targetWords).join(" ");
}

const modeInfo = {
  beginner: { label: "Beginner", tips: ["Relax your shoulders and look ahead.", "Let each word arrive at an easy pace.", "Accuracy is your best warm-up."] },
  intermediate: { label: "Intermediate", tips: ["Read one phrase ahead of your fingers.", "Let punctuation set a calm rhythm.", "You are building flow, not rushing."] },
  advanced: { label: "Advanced", tips: ["Stay light on the keys and precise.", "Trust your rhythm when symbols appear.", "Smooth corrections beat frantic speed."] }
};

const $ = selector => document.querySelector(selector);
const refs = {
  modeTabs: document.querySelectorAll(".mode-tab"),
  testTypes: document.querySelectorAll(".test-type"),
  levelGrid: $("#levelGrid"), durationGrid: $("#durationGrid"), levelHeading: $("#levelHeading"),
  completionCount: $("#completionCount"), totalCompleted: $("#totalCompleted"), bloomCount: $("#bloomCount"),
  meta: $("#challengeMeta"), title: $("#challengeTitle"), chip: $("#challengeChip"), tip: $("#tipText"),
  prompt: $("#typingPrompt"), input: $("#typingInput"), inputHelp: $("#inputHelp"),
  progressFill: $("#progressFill"), progressTrack: $("#progressTrack"), progressLabel: $("#progressLabel"),
  primaryName: $("#primaryStatName"), primary: $("#primaryStat"), accuracy: $("#accuracyStat"),
  timeName: $("#timeStatName"), time: $("#timeStat"), best: $("#bestStat"),
  reset: $("#resetButton"), celebration: $("#celebration"), celebrationEyebrow: $("#celebrationEyebrow"),
  celebrationTitle: $("#celebrationTitle"), celebrationCopy: $("#celebrationCopy"), next: $("#nextButton"),
  themeToggle: $("#themeToggle"), themeIcon: $("#themeIcon"),
  infoDialog: $("#infoDialog"), dialogTitle: $("#dialogTitle"), dialogBody: $("#dialogBody"),
  dialogClose: $("#dialogClose"), panelButtons: document.querySelectorAll("[data-panel]"), copyrightYear: $("#copyrightYear")
};

const storageKey = "typebloom-progress-v2";
let saved = loadSaved();
let state = {
  kind: "practice", mode: saved.lastMode || "beginner", level: saved.lastLevel || 1,
  testType: "speed", duration: 2, promptIndex: 0, startedAt: null, elapsed: 0,
  timer: null, finished: false, totalTyped: 0, totalCorrect: 0, lineStarts: [0], lineHeight: 0
};

function loadSaved() {
  try { return JSON.parse(localStorage.getItem(storageKey)) || { completed: {}, best: {}, lastMode: "beginner", lastLevel: 1 }; }
  catch { return { completed: {}, best: {}, lastMode: "beginner", lastLevel: 1 }; }
}
function save() {
  saved.lastMode = state.mode; saved.lastLevel = state.level;
  localStorage.setItem(storageKey, JSON.stringify(saved));
}
function currentText() {
  if (state.kind === "practice") {
    const seed = levels[state.mode][state.level - 1][2];
    const goal = practiceWordsPerLevel[state.mode] * state.level;
    return buildPassage(seed, goal, state.level - 1, passageFillers);
  }
  if (state.kind === "cpm") {
    return buildPassage(timedPrompts[state.promptIndex % timedPrompts.length], 180, state.promptIndex, cpmFillers);
  }
  return timedPrompts[state.promptIndex % timedPrompts.length];
}
function key() {
  return state.kind === "practice" ? state.mode + "-" + state.level : state.testType + "-" + state.duration;
}
function formatTime(seconds) {
  const mins = Math.floor(Math.max(0, seconds) / 60);
  const secs = Math.floor(Math.max(0, seconds) % 60).toString().padStart(2, "0");
  return mins + ":" + secs;
}
function typedCorrect(text, target) {
  let correct = 0;
  Array.from(text).forEach((letter, index) => { if (letter === target[index]) correct += 1; });
  return correct;
}
function statValues() {
  const target = currentText();
  const liveTyped = refs.input.value.length;
  const liveCorrect = typedCorrect(refs.input.value, target);
  const elapsed = state.finished ? state.elapsed : state.startedAt ? (Date.now() - state.startedAt) / 1000 : 0;
  const typed = state.totalTyped + liveTyped;
  const correct = state.totalCorrect + liveCorrect;
  const accuracy = typed ? Math.round((correct / typed) * 100) : 100;
  const wpm = elapsed ? Math.max(0, Math.round((correct / 5) / (elapsed / 60))) : 0;
  const cpm = elapsed ? Math.max(0, Math.round(correct / (elapsed / 60))) : 0;
  return { elapsed, typed, correct, accuracy, wpm, cpm };
}
function promptLineFor(characterIndex) {
  let line = 0;
  state.lineStarts.forEach((start, index) => { if (characterIndex >= start) line = index; });
  return line;
}
function updatePromptViewport() {
  const cursor = Math.max(0, Math.min(refs.input.value.length, currentText().length - 1));
  const offset = promptLineFor(cursor) * state.lineHeight;
  refs.prompt.style.transform = "translateY(-" + offset + "px)";
}
function measurePromptLines() {
  const letters = refs.prompt.querySelectorAll("span");
  const starts = [0];
  let previousTop = letters.length ? letters[0].offsetTop : 0;
  letters.forEach((letter, index) => {
    if (index && letter.offsetTop > previousTop) starts.push(index);
    previousTop = letter.offsetTop;
  });
  state.lineStarts = starts;
  state.lineHeight = Number.parseFloat(window.getComputedStyle(refs.prompt).lineHeight) || 0;
  updatePromptViewport();
}
function renderPrompt(measureLines) {
  const target = currentText();
  const typed = refs.input.value;
  const fragment = document.createDocumentFragment();
  Array.from(target).forEach((letter, index) => {
    const span = document.createElement("span"); span.textContent = letter;
    if (index < typed.length) span.className = typed[index] === letter ? "correct" : "incorrect";
    else if (index === typed.length && !state.finished) span.className = "current";
    fragment.append(span);
  });
  refs.prompt.replaceChildren(fragment);
  if (measureLines) {
    refs.prompt.style.transform = "translateY(0px)";
    requestAnimationFrame(measurePromptLines);
  } else updatePromptViewport();
}
function refreshStats() {
  const stats = statValues();
  const isCpm = state.kind === "cpm";
  const value = isCpm ? stats.cpm : stats.wpm;
  const unit = isCpm ? "CPM" : "WPM";
  refs.primary.innerHTML = value + " <small>" + unit + "</small>";
  refs.accuracy.innerHTML = stats.accuracy + "<small>%</small>";
  if (state.kind === "practice") {
    const progress = Math.min(100, Math.round((refs.input.value.length / currentText().length) * 100));
    refs.time.textContent = formatTime(stats.elapsed);
    refs.progressFill.style.width = progress + "%";
    refs.progressTrack.setAttribute("aria-valuenow", String(progress));
    refs.progressLabel.textContent = progress + "% complete";
  } else {
    const remaining = Math.max(0, state.duration * 60 - stats.elapsed);
    const progress = Math.min(100, Math.round((stats.elapsed / (state.duration * 60)) * 100));
    refs.time.textContent = formatTime(remaining);
    refs.progressFill.style.width = progress + "%";
    refs.progressTrack.setAttribute("aria-valuenow", String(progress));
    refs.progressLabel.textContent = Math.ceil(remaining / 60) + " min left";
  }
}
function isLevelUnlocked(mode, level) {
  return level === 1 || Boolean(saved.completed[mode + "-" + (level - 1)]);
}
function renderLevels() {
  refs.levelGrid.replaceChildren();
  const complete = saved.completed;
  levels[state.mode].forEach((level, index) => {
    const number = index + 1;
    const unlocked = isLevelUnlocked(state.mode, number);
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = !unlocked;
    button.className = "level-button" + (state.level === number && state.kind === "practice" ? " active" : "") + (complete[state.mode + "-" + number] ? " completed" : "") + (!unlocked ? " locked" : "");
    button.textContent = number;
    button.setAttribute("aria-label", unlocked ? "Open " + modeInfo[state.mode].label + " level " + number : "Finish level " + (number - 1) + " to unlock level " + number);
    if (unlocked) button.addEventListener("click", () => selectPractice(state.mode, number));
    refs.levelGrid.append(button);
  });
  const count = Object.keys(complete).filter(item => item.startsWith(state.mode + "-")).length;
  refs.levelHeading.textContent = modeInfo[state.mode].label + " levels";
  refs.completionCount.textContent = count + " / 20";
  refs.totalCompleted.textContent = Object.keys(complete).length;
  refs.bloomCount.textContent = Object.keys(complete).length;
}
function renderDurations() {
  refs.durationGrid.replaceChildren();
  for (let minutes = 2; minutes <= 15; minutes += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "duration-button" + (state.kind !== "practice" && state.duration === minutes ? " active" : "");
    button.textContent = minutes;
    button.title = minutes + " minutes";
    button.setAttribute("aria-label", minutes + " minute timed test");
    button.addEventListener("click", () => selectTimed(state.testType, minutes));
    refs.durationGrid.append(button);
  }
}
function updateNav() {
  refs.modeTabs.forEach(tab => {
    const active = state.kind === "practice" && tab.dataset.mode === state.mode;
    tab.classList.toggle("active", active); tab.setAttribute("aria-selected", String(active));
  });
  refs.testTypes.forEach(tab => tab.classList.toggle("active", state.kind !== "practice" && tab.dataset.test === state.testType));
  renderLevels(); renderDurations();
}
function setBest() {
  const result = saved.best[key()];
  const unit = state.kind === "cpm" ? "CPM" : "WPM";
  refs.best.innerHTML = result ? result.value + " <small>" + unit + "</small>" : "—";
}
function stopTimer() { clearInterval(state.timer); state.timer = null; }
function cleanChallenge() {
  stopTimer(); state.startedAt = null; state.elapsed = 0; state.finished = false; state.totalTyped = 0; state.totalCorrect = 0; state.lineStarts = [0]; state.lineHeight = 0;
  refs.input.value = ""; refs.input.disabled = false; refs.input.placeholder = "Click here and begin typing...";
  refs.celebration.hidden = true; refs.next.disabled = false;
}
function renderPractice() {
  const item = levels[state.mode][state.level - 1];
  const wordGoal = practiceWordsPerLevel[state.mode] * state.level;
  cleanChallenge();
  refs.meta.textContent = modeInfo[state.mode].label + " · Level " + state.level;
  refs.title.textContent = item[0]; refs.chip.textContent = item[1] + " · " + wordGoal + " words";
  refs.tip.textContent = modeInfo[state.mode].tips[(state.level - 1) % modeInfo[state.mode].tips.length];
  refs.inputHelp.textContent = "A " + wordGoal + "-word challenge. Keep it smooth, one phrase at a time.";
  refs.primaryName.textContent = "Speed"; refs.timeName.textContent = "Time";
  renderPrompt(true); refreshStats(); setBest(); updateNav(); save();
}
function renderTimed() {
  cleanChallenge(); state.promptIndex = 0;
  const cpm = state.testType === "cpm";
  refs.meta.textContent = (cpm ? "CPM test" : "Speed test") + " · " + state.duration + " minutes";
  refs.title.textContent = cpm ? "Build your character count" : "Find your focused speed";
  refs.chip.textContent = state.duration + "-minute " + (cpm ? "CPM session" : "WPM session");
  refs.tip.textContent = cpm ? "Every correct character contributes to your CPM." : "Keep a smooth pace for the full session.";
  refs.inputHelp.textContent = cpm ? "The countdown begins with your first letter. Each CPM passage is 180 words long." : "The countdown begins with your first letter. Finish a prompt to receive another.";
  refs.primaryName.textContent = cpm ? "Characters" : "Speed"; refs.timeName.textContent = "Time left";
  renderPrompt(true); refreshStats(); setBest(); updateNav();
}
function selectPractice(mode, level) {
  if (!isLevelUnlocked(mode, level)) return;
  state.kind = "practice"; state.mode = mode; state.level = level; renderPractice();
  requestAnimationFrame(() => refs.input.focus());
}
function selectTimed(type, duration) {
  state.kind = type; state.testType = type; state.duration = duration || state.duration; renderTimed();
  requestAnimationFrame(() => refs.input.focus());
}
function startTimer() {
  if (state.startedAt) return;
  state.startedAt = Date.now();
  state.timer = setInterval(() => {
    if (state.kind !== "practice" && statValues().elapsed >= state.duration * 60) finishTimed();
    else refreshStats();
  }, 200);
}
function completePractice() {
  if (state.finished) return;
  state.finished = true; state.elapsed = (Date.now() - state.startedAt) / 1000; stopTimer(); refs.input.disabled = true;
  const stats = statValues(); const old = saved.best[key()];
  const score = { value: stats.wpm, accuracy: stats.accuracy };
  const isBest = !old || score.value > old.value || (score.value === old.value && score.accuracy > old.accuracy);
  saved.completed[key()] = true; if (isBest) saved.best[key()] = score;
  refs.celebrationEyebrow.textContent = "Level complete";
  refs.celebrationTitle.textContent = isBest ? "A brand-new personal best!" : "That was lovely!";
  refs.celebrationCopy.textContent = stats.wpm + " WPM at " + stats.accuracy + "% accuracy. " + (isBest ? "Your garden is growing!" : "Every repeat makes you steadier.");
  refs.next.textContent = state.level < 20 ? "Next level →" : "Continue →";
  refs.celebration.hidden = false; refreshStats(); setBest(); updateNav(); save();
}
function finishTimed() {
  if (state.finished) return;
  state.finished = true; state.elapsed = state.duration * 60; stopTimer(); refs.input.disabled = true;
  const stats = statValues(); const isCpm = state.testType === "cpm"; const value = isCpm ? stats.cpm : stats.wpm; const unit = isCpm ? "CPM" : "WPM";
  const old = saved.best[key()]; const isBest = !old || value > old.value || (value === old.value && stats.accuracy > old.accuracy);
  if (isBest) saved.best[key()] = { value, accuracy: stats.accuracy };
  refs.celebrationEyebrow.textContent = state.duration + "-minute test complete";
  refs.celebrationTitle.textContent = isBest ? "A fresh personal best!" : "Strong, steady work!";
  refs.celebrationCopy.textContent = value + " " + unit + " at " + stats.accuracy + "% accuracy. " + (isBest ? "That is a lovely new benchmark." : "Try it again when you feel ready.");
  refs.next.textContent = "Try another duration →"; refs.celebration.hidden = false; refreshStats(); setBest(); save();
}
function nextPrompt() {
  const target = currentText();
  state.totalTyped += refs.input.value.length;
  state.totalCorrect += typedCorrect(refs.input.value, target);
  state.promptIndex += 1; refs.input.value = ""; renderPrompt(true); refreshStats();
}
function onTyping() {
  if (state.finished) return;
  if (refs.input.value.length && !state.startedAt) startTimer();
  if (state.kind !== "practice" && state.startedAt && statValues().elapsed >= state.duration * 60) { finishTimed(); return; }
  renderPrompt(); refreshStats();
  if (state.kind === "practice" && refs.input.value.length >= currentText().length) completePractice();
  if (state.kind !== "practice" && refs.input.value.length >= currentText().length) nextPrompt();
}
function reset() {
  if (state.kind === "practice") renderPractice(); else renderTimed();
  refs.input.focus();
}
function next() {
  if (state.kind !== "practice") { selectTimed(state.testType, state.duration); return; }
  if (state.level < 20) selectPractice(state.mode, state.level + 1);
  else {
    const order = ["beginner", "intermediate", "advanced"];
    const nextMode = order[order.indexOf(state.mode) + 1];
    if (nextMode) selectPractice(nextMode, 1);
    else { refs.celebrationTitle.textContent = "You grew the whole garden!"; refs.celebrationCopy.textContent = "All 60 levels are complete. Pick any level to keep sharpening your rhythm."; refs.next.disabled = true; refs.next.textContent = "Garden complete ✦"; }
  }
}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme; localStorage.setItem("typebloom-theme", theme);
  const dark = theme === "dark"; refs.themeIcon.textContent = dark ? "☀" : "☾";
  refs.themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
}

const infoPanels = {
  about: {
    title: "About TypeBloom",
    html: `<p>TypeBloom is a friendly, no-install browser typing practice tool designed to make improvement feel simple, calm, and useful.</p><p>Practice with progressive levels, timed WPM and CPM sessions, and personal-best tracking stored locally in your browser.</p><h3>Our Philosophy</h3><p>Accuracy, consistency, and comfortable technique come before simply chasing a bigger number.</p>`
  },
  privacy: {
    title: "Privacy Policy",
    html: `<p><strong>Last Updated:</strong> September 2026</p><p>TypeBloom may use local browser storage to remember practice progress, personal bests, last selected level, and theme preference.</p><p>Third-party services such as Google AdSense, when enabled, may use cookies or similar technologies for advertising. We do not control data collected by those third parties.</p><h3>Contact</h3><p><a class="dialog-link" href="mailto:contactussiteinfotechdesk@gmail.com">contactussiteinfotechdesk@gmail.com</a></p>`
  },
  contact: {
    title: "Contact Us",
    html: `<p>We value your feedback, questions, suggestions, and ideas for improving TypeBloom.</p><p><a class="dialog-email" href="mailto:contactussiteinfotechdesk@gmail.com">✉️ contactussiteinfotechdesk@gmail.com</a></p><p class="dialog-muted">We usually respond within 24–48 hours.</p>`
  }
};
function openInfoPanel(name) {
  const panel = infoPanels[name];
  if (!panel) return;
  refs.dialogTitle.textContent = panel.title;
  refs.dialogBody.innerHTML = panel.html;
  if (typeof refs.infoDialog.showModal === "function") refs.infoDialog.showModal();
  else refs.infoDialog.setAttribute("open", "");
}
function closeInfoPanel() {
  if (refs.infoDialog.open && typeof refs.infoDialog.close === "function") refs.infoDialog.close();
  else refs.infoDialog.removeAttribute("open");
}

refs.modeTabs.forEach(tab => tab.addEventListener("click", () => selectPractice(tab.dataset.mode, 1)));
refs.testTypes.forEach(tab => tab.addEventListener("click", () => selectTimed(tab.dataset.test, state.duration)));
refs.input.addEventListener("input", onTyping); refs.reset.addEventListener("click", reset); refs.next.addEventListener("click", next);
refs.themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
refs.panelButtons.forEach(button => button.addEventListener("click", () => openInfoPanel(button.dataset.panel)));
if (refs.dialogClose) refs.dialogClose.addEventListener("click", closeInfoPanel);
if (refs.infoDialog) refs.infoDialog.addEventListener("click", event => { if (event.target === refs.infoDialog) closeInfoPanel(); });
if (refs.infoDialog) refs.infoDialog.addEventListener("cancel", closeInfoPanel);
window.addEventListener("resize", () => { if (!state.finished) renderPrompt(true); });
setTheme(localStorage.getItem("typebloom-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
const savedLevel = Math.min(20, Math.max(1, state.level));
selectPractice(state.mode, isLevelUnlocked(state.mode, savedLevel) ? savedLevel : 1);
if (refs.copyrightYear) refs.copyrightYear.textContent = String(new Date().getFullYear());
