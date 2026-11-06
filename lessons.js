(function () {
  "use strict";
  const STORAGE_KEY = "typebloom-progress-v2";
  const $ = (id) => document.getElementById(id);
  const lessons = [
    { title:"Find the home row", short:"A S D F · J K L ;", description:"The home row is the starting point for touch typing. Let your index fingers rest on F and J, where most keyboards have small raised markers.", instruction:"Left hand: A, S, D, F. Right hand: J, K, L, ;. Keep your fingers curved and your shoulders relaxed.", text:"asdf jkl; asdf jkl; fj dk sl a; jf kd ls" },
    { title:"Left-hand home keys", short:"A · S · D · F", description:"Learn the four home-row keys assigned to your left hand. Move only the finger you need, then return it to its resting key.", instruction:"A = left pinky, S = left ring, D = left middle, F = left index. Keep the other fingers relaxed on the home row.", text:"aaa sss ddd fff asdf fdsa asdf fdsa" },
    { title:"Right-hand home keys", short:"J · K · L · ;", description:"Practise the four home-row keys under your right hand. Use the small marker on J to find your position again.", instruction:"J = right index, K = right middle, L = right ring, ; = right pinky. Let your right thumb rest near the space bar.", text:"jjj kkk lll ;;; jkl; ;lkj jkl; ;lkj" },
    { title:"Reach to the top row", short:"Q W E R · U I O P", description:"Reach upward from the home row without moving your whole hand. Return each finger to its home key after the reach.", instruction:"Left fingers reach Q, W, E, R and T. Right fingers reach Y, U, I, O and P. Keep the movement light.", text:"qwer uiop qwer uiop trew poiu qwer uiop" },
    { title:"Reach to the bottom row", short:"Z X C V · N M", description:"The bottom row uses the same nearby-finger idea. Keep the movement small and return to the home row between reaches.", instruction:"Left fingers reach Z, X, C, V and B. Right fingers reach N, M, comma, period and slash.", text:"zxcv nm,. zxcv nm,. cvbn m,.z zxcv nm,." },
    { title:"Mix home and reach", short:"Short key patterns", description:"Combine keys from different rows while keeping your fingers anchored. Read the pattern before you begin.", instruction:"Move from the home row to a nearby key, then return. Avoid stretching your wrist or lifting your whole hand.", text:"far sad ask fall; jaw lad; taxi quiz; fax; jazz" },
    { title:"Numbers row", short:"1 2 3 4 · 5 6 7 8 9 0", description:"Practise number-row reaches with a light touch. Keep your eyes on the practice line and return your hand to the home row afterward.", instruction:"Use the finger nearest each number and let your hand return to its normal position. The number pad, if present, is a separate layout.", text:"1234 567890 0987654321 12345 67890" },
    { title:"Shift and punctuation", short:"Capital letters · marks", description:"Use the opposite hand for Shift when making a capital letter. Practise punctuation without sacrificing a steady rhythm.", instruction:"For a capital typed with the left hand, press right Shift; for a capital typed with the right hand, press left Shift. Keep punctuation deliberate.", text:"A S D J K L. Hello, world! Ready? Yes." },
    { title:"Put the rows together", short:"Words · rhythm · accuracy", description:"Use the whole keyboard in short phrases. Read ahead, let your fingers find their keys, and focus on accurate movement.", instruction:"Return to the home row whenever you lose your position. Look at the text rather than your hands when you feel ready.", text:"The quick brown fox jumps over the lazy dog. Practice each day, stay calm, and build a steady rhythm." }
  ];
  const list = $("lessonList"), title = $("lessonTitle"), description = $("lessonDescription");
  const instruction = $("lessonInstruction"), prompt = $("lessonPrompt"), input = $("lessonInput");
  const feedback = $("lessonFeedback"), progress = $("lessonProgress");
  let active = 0, finished = false;

  function loadData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (error) { return {}; }
  }
  function saveCompletion(index) {
    const data = loadData();
    if (!Array.isArray(data.touchLessons)) data.touchLessons = [];
    const id = String(index + 1);
    if (!data.touchLessons.includes(id)) data.touchLessons.push(id);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch (error) { feedback.textContent = "Lesson complete, but this browser could not save your progress."; }
    renderList();
  }
  const fingerFor = {
    q:"left-pinky",a:"left-pinky",z:"left-pinky","1":"left-pinky",
    w:"left-ring",s:"left-ring",x:"left-ring","2":"left-ring",
    e:"left-middle",d:"left-middle",c:"left-middle","3":"left-middle",
    r:"left-index",f:"left-index",v:"left-index",t:"left-index",g:"left-index",b:"left-index","4":"left-index","5":"left-index",
    y:"right-index",h:"right-index",n:"right-index",u:"right-index",j:"right-index",m:"right-index","6":"right-index","7":"right-index",
    i:"right-middle",k:"right-middle",",":"right-middle","8":"right-middle",
    o:"right-ring",l:"right-ring",".":"right-ring","9":"right-ring",
    p:"right-pinky",";":"right-pinky","/":"right-pinky","0":"right-pinky"
  };
  const rows = ["1234567890", "qwertyuiop", "asdfghjkl;", "zxcvbnm,./"];
  function renderKeyboard(targetChar) {
    const host = $("lessonKeyboard");
    host.replaceChildren();
    rows.forEach((rowText) => {
      const row = document.createElement("div");
      row.className = "lesson-key-row";
      Array.from(rowText).forEach((character) => {
        const key = document.createElement("span");
        key.className = "lesson-key finger-" + (fingerFor[character] || "left-index") +
          (character.toLowerCase() === targetChar.toLowerCase() ? " target" : "");
        key.textContent = character;
        if (character.toLowerCase() === targetChar.toLowerCase()) key.setAttribute("aria-current", "true");
        row.append(key);
      });
      host.append(row);
    });
    const spaceKey = document.createElement("span");
    spaceKey.className = "lesson-key lesson-space-key" + (targetChar === " " ? " target" : "");
    spaceKey.textContent = "space";
    if (targetChar === " ") spaceKey.setAttribute("aria-current", "true");
    host.append(spaceKey);
  }
  function renderList() {
    const completed = Array.isArray(loadData().touchLessons) ? loadData().touchLessons : [];
    list.replaceChildren();
    lessons.forEach((lesson, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lesson-choice" + (completed.includes(String(index + 1)) ? " completed" : "");
      button.setAttribute("aria-current", index === active ? "step" : "false");
      const number = document.createElement("span");
      number.className = "lesson-num";
      number.textContent = completed.includes(String(index + 1)) ? "✓" : String(index + 1);
      const copy = document.createElement("span");
      copy.append(document.createTextNode(lesson.title));
      const small = document.createElement("small");
      small.textContent = lesson.short;
      copy.append(small);
      button.append(number, copy);
      button.addEventListener("click", () => loadLesson(index));
      list.append(button);
    });
  }
  function updateMetrics() {
    const target = lessons[active].text, typed = input.value;
    let correct = 0;
    Array.from(typed).forEach((character, index) => { if (character === target[index]) correct += 1; });
    const accuracy = typed.length ? Math.round(correct / typed.length * 100) : 100;
    const percent = Math.min(100, Math.round(typed.length / target.length * 100));
    $("lessonProgressText").textContent = percent + "% complete";
    $("lessonAccuracy").textContent = accuracy + "% accuracy";
    $("lessonStatus").textContent = typed.length >= target.length ? "Completed" : typed.length ? "Practising" : "Ready";
    progress.setAttribute("aria-valuenow", String(percent));
    progress.querySelector("span").style.width = percent + "%";
    const next = Array.from(target)[Math.min(typed.length, target.length - 1)] || "";
    if (next) renderKeyboard(next);
    if (typed.length >= target.length && !finished) {
      finished = true;
      input.disabled = true;
      feedback.textContent = "Lesson complete! 🌱 Take a breath, then move to the next lesson when ready.";
      saveCompletion(active);
    }
  }
  function loadLesson(index) {
    active = Math.max(0, Math.min(lessons.length - 1, index));
    finished = false;
    const lesson = lessons[active];
    $("lessonMeta").textContent = "Lesson " + (active + 1) + " of " + lessons.length;
    title.textContent = lesson.title;
    description.textContent = lesson.description;
    instruction.textContent = lesson.instruction;
    prompt.textContent = lesson.text;
    input.value = "";
    input.disabled = false;
    feedback.textContent = "";
    $("lessonNext").textContent = active === lessons.length - 1 ? "Review first lesson ↺" : "Next lesson →";
    renderList();
    updateMetrics();
  }
  input.addEventListener("input", updateMetrics);
  $("lessonReset").addEventListener("click", () => { loadLesson(active); input.focus(); });
  $("lessonNext").addEventListener("click", () => { loadLesson(active === lessons.length - 1 ? 0 : active + 1); input.focus(); });
  loadLesson(0);
})();