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


const dailyWordBanks = {
  beginner: "apple bright calm chair cloud dance dream easy family flower fresh friend gentle happy hello home jump kind laugh light little morning music nature open peace play quiet read smile soft sunny table today together tree warm water welcome window world young".split(" "),
  intermediate: "accuracy balance browser challenge character comfortable confidence consistent creative detail effort focused keyboard language improve practice progress punctuation reliable rhythm sentence steady technique thoughtful typing useful version workflow".split(" "),
  advanced: "accuracy algorithm character composition consistent context precision performance sequence technical variable keyboard syntax function optimize reliable iteration benchmark displacement architecture debugging efficiency workflow complex punctuation protocol response structure parameter return output execute".split(" ")
};
const dailySpecialTokens = {
  beginner: ["today", "again", "together"],
  intermediate: ["accuracy", "focus", "practice", "rhythm"],
  advanced: ["2026", "98%", "WPM", "CPM", "=>", "{}", "[]", "$", "@", "#", "&&"]
};
function dailyDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}
function dailyDateObject(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}
function dailySeed(dateKey) {
  let hash = 2166136261;
  for (const char of dateKey) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}
function makeSeededRandom(seed) {
  let value = seed >>> 0;
  return function() {
    value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
    return value / 4294967296;
  };
}
function buildDailyText(difficulty, random) {
  const bank = dailyWordBanks[difficulty];
  const specials = dailySpecialTokens[difficulty];
  const targetWords = difficulty === "beginner" ? 210 : difficulty === "intermediate" ? 230 : 250;
  const words = [];
  let sentenceLength = 0;
  for (let index = 0; index < targetWords; index += 1) {
    let word = bank[Math.floor(random() * bank.length)];
    if (difficulty === "advanced" && random() > 0.9) {
      word = specials[Math.floor(random() * specials.length)];
    } else if (random() > 0.96) {
      word = word + (difficulty === "beginner" ? "," : random() > 0.5 ? "," : ":");
    }
    words.push(word);
    sentenceLength += 1;
    if (sentenceLength >= 9 + Math.floor(random() * 7)) {
      words[words.length - 1] = words[words.length - 1].replace(/[,:;!?]+$/, "") + (difficulty === "advanced" && random() > 0.72 ? "!" : ".");
      sentenceLength = 0;
    }
  }
  let text = words.join(" ");
  text = text.replace(/(^|[.!?] )([a-z])/g, (_, prefix, letter) => prefix + letter.toUpperCase());
  return text;
}
function getDailyChallenge(dateKey = dailyDateKey()) {
  const random = makeSeededRandom(dailySeed(dateKey));
  const modes = ["beginner", "intermediate", "advanced"];
  const difficulty = modes[Math.floor(random() * modes.length)];
  const title = difficulty === "beginner" ? "Gentle garden run" : difficulty === "intermediate" ? "Find your flow" : "Precision sprint";
  return {
    date: dateKey,
    difficulty,
    label: modeInfo[difficulty]?.label || difficulty,
    title,
    seconds: 60,
    targetAccuracy: 95,
    text: buildDailyText(difficulty, random)
  };
}
function getDailyHistory() {
  if (!saved.dailyHistory || typeof saved.dailyHistory !== "object") saved.dailyHistory = {};
  return saved.dailyHistory;
}
function getDailyStats() {
  const history = getDailyHistory();
  const today = dailyDateKey();
  const todayDone = Boolean(history[today]?.completed);
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const anchor = todayDone ? dailyDateObject(today) : (history[dailyDateKey(yesterdayDate)]?.completed ? yesterdayDate : null);
  let streak = 0;
  if (anchor) {
    const cursor = new Date(anchor.getFullYear(), anchor.getMonth(), anchor.getDate());
    while (history[dailyDateKey(cursor)]?.completed) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
  }
  let bestWpm = 0;
  let bestAccuracy = 0;
  Object.values(history).forEach(result => {
    if (!result) return;
    if (result.bestWpm) bestWpm = Math.max(bestWpm, Number(result.bestWpm) || 0);
    if (result.bestAccuracy) bestAccuracy = Math.max(bestAccuracy, Number(result.bestAccuracy) || 0);
  });
  const dayCells = [];
  const cursor = new Date();
  for (let index = 6; index >= 0; index -= 1) {
    const day = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() - index);
    const keyName = dailyDateKey(day);
    dayCells.push({ key: keyName, completed: Boolean(history[keyName]?.completed), label: ["S","M","T","W","T","F","S"][day.getDay()] });
  }
  const wins30 = Array.from({ length: 30 }, (_, index) => {
    const day = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() - index);
    return Boolean(history[dailyDateKey(day)]?.completed);
  }).filter(Boolean).length;
  return { todayDone, streak, bestWpm, bestAccuracy, dayCells, wins30 };
}
function recordDailyResult(stats) {
  const history = getDailyHistory();
  const date = dailyDateKey();
  const previous = history[date] || { attempts: 0, completed: false, bestWpm: 0, bestAccuracy: 0 };
  const successful = stats.accuracy >= 95;
  previous.attempts += 1;
  previous.lastWpm = stats.wpm;
  previous.lastAccuracy = stats.accuracy;
  previous.completed = previous.completed || successful;
  if (successful) {
    previous.bestWpm = Math.max(Number(previous.bestWpm) || 0, stats.wpm);
    previous.bestAccuracy = Math.max(Number(previous.bestAccuracy) || 0, stats.accuracy);
  }
  history[date] = previous;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 90);
  Object.keys(history).forEach(keyName => {
    if (dailyDateObject(keyName) < cutoff) delete history[keyName];
  });
  saved.dailyHistory = history;
  save();
  return successful;
}
function renderDailySummary() {
  if (!refs.dailyButton) return;
  const challenge = getDailyChallenge();
  const stats = getDailyStats();
  if (refs.dailyDifficulty) refs.dailyDifficulty.textContent = challenge.label;
  if (refs.dailyStreak) refs.dailyStreak.textContent = String(stats.streak);
  if (refs.dailyBest) refs.dailyBest.textContent = stats.bestWpm ? stats.bestWpm + " WPM" : "—";
  if (refs.dailyAccuracy) refs.dailyAccuracy.textContent = stats.bestAccuracy ? stats.bestAccuracy + "%" : "—";
  if (refs.daily30) refs.daily30.textContent = stats.wins30 + "/30";
  if (refs.dailyStatus) refs.dailyStatus.textContent = stats.todayDone ? "Completed today ✓ Come back tomorrow." : "60 seconds · aim for 95%+ accuracy.";
  refs.dailyButton.textContent = stats.todayDone ? "Improve today's score →" : "Start today's challenge →";
  if (refs.dailyHistory) {
    refs.dailyHistory.replaceChildren();
    stats.dayCells.forEach(day => {
      const cell = document.createElement("span");
      cell.className = "daily-history-dot" + (day.completed ? " done" : "");
      cell.textContent = day.label;
      cell.title = day.key + (day.completed ? " · completed" : " · not completed");
      cell.setAttribute("aria-label", day.key + (day.completed ? " completed" : " not completed"));
      refs.dailyHistory.append(cell);
    });
  }
}

const weakPracticeWords = "accuracy adjust again answer apple around become because before better between browser build calm careful character choose clean clear common complete confidence correct create detail easy effort every example focus gentle great improve keyboard learn letter little message natural notice practice precise progress quick quiet repeat reliable rhythm smooth space steady strong system typing useful value warm words write your yourself".split(" ");

function mistakeLabel(expected, actual) {
  if (expected === " " || actual === " ") return "space";
  if (expected === undefined) return "extra → " + actual;
  if (actual === undefined) return expected + " → missing";
  return expected + " → " + actual;
}
function collectCurrentErrors() {
  const target = currentText();
  const typed = Array.from(refs.input.value);
  const goal = Array.from(target);
  const limit = Math.max(typed.length, goal.length);
  for (let index = 0; index < limit; index += 1) {
    if (typed[index] === goal[index]) continue;
    const label = mistakeLabel(goal[index], typed[index]);
    state.errorMap[label] = (state.errorMap[label] || 0) + 1;
    state.totalErrors += 1;
  }
}
function getErrorEntries() {
  return Object.entries(state.errorMap)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}
function buildWeakPracticeText() {
  const entries = getErrorEntries().slice(0, 5);
  const focusChars = new Set();
  let wantsSpace = false;
  entries.forEach(entry => {
    if (entry.label === "space") { wantsSpace = true; return; }
    const parts = entry.label.split(" → ");
    parts.forEach(part => {
      if (part && part !== "missing" && part !== "extra") focusChars.add(part.toLowerCase());
    });
  });
  let candidates = weakPracticeWords.filter(word => {
    if (!focusChars.size) return true;
    return Array.from(word.toLowerCase()).some(ch => focusChars.has(ch));
  });
  if (!candidates.length) candidates = weakPracticeWords.slice();
  const shuffled = candidates.slice().sort(() => Math.random() - 0.5);
  const selected = [];
  for (let index = 0; index < 55; index += 1) {
    let word = shuffled[index % shuffled.length];
    if (wantsSpace && index % 9 === 0 && shuffled.length > 1) word = shuffled[(index + 3) % shuffled.length];
    selected.push(word);
  }
  return selected.join(" ");
}
function renderErrorAnalysis() {
  if (!refs.errorAnalysis) return;
  const entries = getErrorEntries().slice(0, 5);
  if (!entries.length) {
    refs.errorAnalysis.hidden = true;
    return;
  }
  refs.errorAnalysis.hidden = false;
  refs.errorSummary.textContent = state.totalErrors
    ? state.totalErrors + " mismatch" + (state.totalErrors === 1 ? "" : "es") + " found. Focus on these patterns and turn them into your next practice session."
    : "No mismatches found. Lovely precision!";
  refs.errorList.replaceChildren();
  entries.forEach((entry, index) => {
    const card = document.createElement("div");
    card.className = "error-item";
    const rank = document.createElement("span");
    rank.className = "error-rank";
    rank.textContent = String(index + 1);
    const label = document.createElement("strong");
    label.textContent = entry.label;
    const count = document.createElement("small");
    count.textContent = entry.count + " mistake" + (entry.count === 1 ? "" : "s");
    card.append(rank, label, count);
    refs.errorList.append(card);
  });
  refs.weakPracticeButton.textContent = entries.length ? "Practice these weak spots →" : "Practice weak spots →";
}

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
  errorAnalysis: $("#errorAnalysis"), errorSummary: $("#errorSummary"), errorList: $("#errorList"), weakPracticeButton: $("#weakPracticeButton"),
  themeToggle: $("#themeToggle"), themeIcon: $("#themeIcon"),
  progressButton: $("#progressButton"), progressDialog: $("#progressDialog"), progressClose: $("#progressClose"), progressRanges: document.querySelectorAll(".progress-range"),
  progressAverageWpm: $("#progressAverageWpm"), progressAverageWpmMeta: $("#progressAverageWpmMeta"), progressAverageAccuracy: $("#progressAverageAccuracy"), progressAverageAccuracyMeta: $("#progressAverageAccuracyMeta"),
  progressPracticeTime: $("#progressPracticeTime"), progressPracticeTimeMeta: $("#progressPracticeTimeMeta"), progressCompletedLevels: $("#progressCompletedLevels"), progressCompletedLevelsMeta: $("#progressCompletedLevelsMeta"),
  progressWpmChange: $("#progressWpmChange"), progressWpmChart: $("#progressWpmChart"), progressWpmNote: $("#progressWpmNote"), progressAccuracyChange: $("#progressAccuracyChange"), progressAccuracyChart: $("#progressAccuracyChart"), progressAccuracyNote: $("#progressAccuracyNote"),
  progressRecordWpm: $("#progressRecordWpm"), progressRecordAccuracy: $("#progressRecordAccuracy"), progressRecordLevels: $("#progressRecordLevels"), progressImprovementTitle: $("#progressImprovementTitle"), progressImprovementCopy: $("#progressImprovementCopy"), progressSessionsCount: $("#progressSessionsCount"), progressBestStreak: $("#progressBestStreak"), progressHistoryNote: $("#progressHistoryNote"),
  resultDetails: $("#resultDetails"), resultDate: $("#resultDate"), resultLabel: $("#resultLabel"), resultHeadline: $("#resultHeadline"), resultUnitBadge: $("#resultUnitBadge"), resultWpm: $("#resultWpm"), resultWpmUnit: $("#resultWpmUnit"), resultAccuracy: $("#resultAccuracy"), resultCorrect: $("#resultCorrect"), resultErrors: $("#resultErrors"), resultAverage: $("#resultAverage"), resultInsight: $("#resultInsight"), shareResultButton: $("#shareResultButton"), downloadResultButton: $("#downloadResultButton"), resultShareStatus: $("#resultShareStatus"),
  infoDialog: $("#infoDialog"), dialogTitle: $("#dialogTitle"), dialogBody: $("#dialogBody"),
  dialogClose: $("#dialogClose"), panelButtons: document.querySelectorAll("[data-panel]"), copyrightYear: $("#copyrightYear"),
  dailyButton: $("#dailyButton"), dailyDifficulty: $("#dailyDifficulty"), dailyStreak: $("#dailyStreak"), dailyBest: $("#dailyBest"), dailyAccuracy: $("#dailyAccuracy"), daily30: $("#daily30"), dailyStatus: $("#dailyStatus"), dailyHistory: $("#dailyHistory")
};

function setTheme(theme) {
  const normalized = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = normalized;
  try { localStorage.setItem("typebloom-theme", normalized); } catch (error) {}
  const dark = normalized === "dark";
  if (refs.themeIcon) refs.themeIcon.textContent = dark ? "☀" : "☾";
  if (refs.themeToggle) refs.themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
}
function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("typebloom-theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  } catch (error) {}
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch (error) {
    return "light";
  }
}
if (refs.themeToggle) {
  refs.themeToggle.addEventListener("click", event => {
    event.preventDefault();
    const currentTheme = document.documentElement.dataset.theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}
setTheme(getInitialTheme());

const storageKey = "typebloom-progress-v2";
let saved = loadSaved();
let state = {
  kind: "practice", mode: saved.lastMode || "beginner", level: saved.lastLevel || 1,
  testType: "speed", duration: 2, promptIndex: 0, startedAt: null, elapsed: 0,
  timer: null, finished: false, totalTyped: 0, totalCorrect: 0, totalErrors: 0, errorMap: {}, lineStarts: [0], lineHeight: 0,
  dailyChallenge: null, weakText: ""
};

function loadSaved() {
  try { return JSON.parse(localStorage.getItem(storageKey)) || { completed: {}, best: {}, lastMode: "beginner", lastLevel: 1, dailyHistory: {} }; }
  catch { return { completed: {}, best: {}, lastMode: "beginner", lastLevel: 1, dailyHistory: {} }; }
}
function save() {
  saved.lastMode = state.mode; saved.lastLevel = state.level;
  try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch (error) {}
}
if (!saved.completed || typeof saved.completed !== "object") saved.completed = {};
if (!saved.best || typeof saved.best !== "object") saved.best = {};
if (!saved.dailyHistory || typeof saved.dailyHistory !== "object") saved.dailyHistory = {};
if (!Array.isArray(saved.sessions)) saved.sessions = [];

function completedLevelCount() {
  return Object.keys(saved.completed).filter(keyName => /^(beginner|intermediate|advanced)-\d+$/.test(keyName)).length;
}
function averageOf(items, field) {
  const values = items.map(item => Number(item[field])).filter(value => Number.isFinite(value) && value >= 0);
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
}
function getSessionSummary(items = saved.sessions) {
  const sessions = items.filter(item => item && Number.isFinite(Number(item.at)));
  return {
    count: sessions.length,
    averageWpm: averageOf(sessions, "wpm"),
    averageAccuracy: averageOf(sessions, "accuracy"),
    fastestWpm: sessions.reduce((best, item) => Math.max(best, Number(item.wpm) || 0), 0),
    bestAccuracy: sessions.reduce((best, item) => Math.max(best, Number(item.accuracy) || 0), 0)
  };
}
function recordSession(stats, details) {
  const session = {
    at: Date.now(),
    kind: details.kind,
    label: details.label,
    wpm: Number(stats.wpm) || 0,
    cpm: Number(stats.cpm) || 0,
    accuracy: Number(stats.accuracy) || 0,
    typed: Number(stats.typed) || 0,
    correct: Number(stats.correct) || 0,
    errors: Number(state.totalErrors) || 0,
    seconds: Math.max(0, Number(state.elapsed) || 0),
    duration: state.duration,
    mode: state.mode,
    level: state.level
  };
  saved.sessions = (Array.isArray(saved.sessions) ? saved.sessions : []).concat(session).slice(-500);
  return session;
}
function localDateKey(date) {
  return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
}
function formatDurationLong(seconds) {
  const total = Math.max(0, Math.round(Number(seconds) || 0));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  if (hours) return hours + "h " + minutes + "m";
  if (minutes) return minutes + "m";
  return total + "s";
}
function maxStoredRecords() {
  const bests = Object.entries(saved.best || {}).filter(([keyName]) => !keyName.startsWith("cpm-")).map(([, entry]) => entry || {});
  const daily = Object.values(saved.dailyHistory || {});
  return {
    wpm: Math.max(0, ...bests.map(entry => Number(entry.value) || 0), ...daily.map(entry => Number(entry.bestWpm) || 0), ...saved.sessions.map(entry => Number(entry.wpm) || 0)),
    accuracy: Math.max(0, ...bests.map(entry => Number(entry.accuracy) || 0), ...daily.map(entry => Number(entry.bestAccuracy) || 0), ...saved.sessions.map(entry => Number(entry.accuracy) || 0))
  };
}
function buildProgressData(days) {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - days + 1);
  const previousStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (days * 2) + 1);
  const sessions = (saved.sessions || []).filter(item => item && Number.isFinite(Number(item.at)));
  const current = sessions.filter(item => item.at >= start.getTime() && item.at < new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).getTime());
  const previous = sessions.filter(item => item.at >= previousStart.getTime() && item.at < start.getTime());
  const buckets = [];
  for (let index = days - 1; index >= 0; index -= 1) {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - index);
    const keyName = localDateKey(date);
    const matching = current.filter(item => localDateKey(new Date(item.at)) === keyName);
    buckets.push({
      key: keyName,
      label: days === 7 ? date.toLocaleDateString(undefined, { weekday: "short" }) : (index % 5 === 0 || index === 0 ? date.toLocaleDateString(undefined, { month: "numeric", day: "numeric" }) : ""),
      shortDate: date.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      count: matching.length,
      avgWpm: averageOf(matching, "wpm"),
      avgAccuracy: averageOf(matching, "accuracy")
    });
  }
  const records = maxStoredRecords();
  const allSummary = getSessionSummary(sessions);
  return {
    days, buckets, current, previous,
    currentWpm: averageOf(current, "wpm"),
    currentAccuracy: averageOf(current, "accuracy"),
    previousWpm: averageOf(previous, "wpm"),
    previousAccuracy: averageOf(previous, "accuracy"),
    currentSeconds: current.reduce((sum, item) => sum + (Number(item.seconds) || 0), 0),
    records,
    allSummary,
    completed: completedLevelCount(),
    totalSeconds: sessions.reduce((sum, item) => sum + (Number(item.seconds) || 0), 0)
  };
}
function drawProgressChart(container, buckets, field, kind) {
  if (!container) return;
  container.replaceChildren();
  const values = buckets.filter(item => Number.isFinite(item[field]));
  if (!values.length) {
    const empty = document.createElement("div");
    empty.className = "progress-chart-empty";
    empty.textContent = "Complete your next session to start this chart.";
    container.append(empty);
    return;
  }
  const ns = "http://www.w3.org/2000/svg";
  const width = 600, height = 205, left = 42, right = 14, top = 12, bottom = 31;
  const chartWidth = width - left - right, chartHeight = height - top - bottom;
  const maximum = kind === "accuracy" ? 100 : Math.max(10, Math.ceil(Math.max(...values.map(item => item[field])) / 10) * 10);
  const minimum = 0;
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 " + width + " " + height);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", kind === "accuracy" ? "Daily average accuracy" : "Daily average words per minute");
  const add = (tag, attrs, textValue) => {
    const element = document.createElementNS(ns, tag);
    Object.entries(attrs || {}).forEach(([name, value]) => element.setAttribute(name, String(value)));
    if (textValue != null) element.textContent = textValue;
    svg.append(element);
    return element;
  };
  for (let tick = 0; tick <= 4; tick += 1) {
    const value = maximum - (maximum - minimum) * tick / 4;
    const y = top + chartHeight * tick / 4;
    add("line", {x1:left,y1:y,x2:width-right,y2:y,class:"progress-chart-gridline"});
    add("text", {x:left-9,y:y+4,"text-anchor":"end",class:"progress-chart-axis-label"}, Math.round(value) + (kind === "accuracy" ? "%" : ""));
  }
  const pointFor = (item) => {
    const index = buckets.indexOf(item);
    return {
      x: left + (buckets.length <= 1 ? chartWidth / 2 : index * chartWidth / (buckets.length - 1)),
      y: top + chartHeight * (1 - (item[field] - minimum) / (maximum - minimum))
    };
  };
  const pathPoints = [];
  buckets.forEach((item, index) => {
    const x = left + (buckets.length <= 1 ? chartWidth / 2 : index * chartWidth / (buckets.length - 1));
    if (index === 0 || index === buckets.length - 1 || (buckets.length === 7) || (buckets.length === 30 && index % 5 === 0)) {
      add("text", {x,y:height-9,"text-anchor":"middle",class:"progress-chart-axis-label"}, item.label || item.shortDate);
    }
    if (Number.isFinite(item[field])) {
      const point = pointFor(item);
      pathPoints.push({...point,item});
    }
  });
  if (pathPoints.length > 1) {
    add("path", {d:pathPoints.map((point,index)=>(index ? "L" : "M")+point.x.toFixed(2)+" "+point.y.toFixed(2)).join(" "),class:"progress-chart-line "+(kind === "accuracy" ? "accuracy-line" : "wpm-line")});
  }
  pathPoints.forEach(point => {
    const circle = add("circle", {cx:point.x,cy:point.y,r:4,class:"progress-chart-point "+(kind === "accuracy" ? "accuracy-point" : "wpm-point"),tabindex:0});
    const title = document.createElementNS(ns,"title");
    title.textContent = point.item.shortDate + ": " + Math.round(point.item[field]) + (kind === "accuracy" ? "% accuracy" : " WPM") + " · " + point.item.count + " session" + (point.item.count === 1 ? "" : "s");
    circle.append(title);
  });
  container.append(svg);
}
function formatChange(current, previous, unit) {
  if (current == null) return "No data yet";
  if (previous == null) return "New baseline";
  const difference = current - previous;
  const prefix = difference > 0 ? "+" : "";
  const value = unit === "pp" ? difference.toFixed(1) + " pp" : (previous ? prefix + ((difference / previous) * 100).toFixed(0) + "%" : (current ? "New baseline" : "0%"));
  return unit === "pp" ? prefix + value : value;
}
function renderProgressDashboard(days = 7) {
  const data = buildProgressData(days);
  const label = "in the last " + days + " days";
  if (refs.progressRanges) refs.progressRanges.forEach(button => {
    const active = Number(button.dataset.range) === days;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (refs.progressAverageWpm) refs.progressAverageWpm.textContent = data.currentWpm == null ? "—" : Math.round(data.currentWpm) + " WPM";
  if (refs.progressAverageWpmMeta) refs.progressAverageWpmMeta.textContent = data.current.length + " session" + (data.current.length === 1 ? "" : "s") + " " + label;
  if (refs.progressAverageAccuracy) refs.progressAverageAccuracy.textContent = data.currentAccuracy == null ? "—" : data.currentAccuracy.toFixed(1) + "%";
  if (refs.progressAverageAccuracyMeta) refs.progressAverageAccuracyMeta.textContent = "Average across " + data.current.length + " recorded session" + (data.current.length === 1 ? "" : "s");
  if (refs.progressPracticeTime) refs.progressPracticeTime.textContent = formatDurationLong(data.currentSeconds);
  if (refs.progressPracticeTimeMeta) refs.progressPracticeTimeMeta.textContent = label;
  if (refs.progressCompletedLevels) refs.progressCompletedLevels.textContent = data.completed + " / 60";
  if (refs.progressCompletedLevelsMeta) refs.progressCompletedLevelsMeta.textContent = "Completed levels saved on this device";
  if (refs.progressRecordWpm) refs.progressRecordWpm.textContent = data.records.wpm ? data.records.wpm + " WPM" : "—";
  if (refs.progressRecordAccuracy) refs.progressRecordAccuracy.textContent = data.records.accuracy ? data.records.accuracy + "%" : "—";
  if (refs.progressRecordLevels) refs.progressRecordLevels.textContent = data.completed + " / 60";
  if (refs.progressWpmChange) refs.progressWpmChange.textContent = formatChange(data.currentWpm, data.previousWpm, "%");
  if (refs.progressAccuracyChange) refs.progressAccuracyChange.textContent = formatChange(data.currentAccuracy, data.previousAccuracy, "pp");
  drawProgressChart(refs.progressWpmChart, data.buckets, "avgWpm", "wpm");
  drawProgressChart(refs.progressAccuracyChart, data.buckets, "avgAccuracy", "accuracy");
  if (refs.progressWpmNote) refs.progressWpmNote.textContent = valuesNote(data.buckets, "avgWpm", "WPM");
  if (refs.progressAccuracyNote) refs.progressAccuracyNote.textContent = valuesNote(data.buckets, "avgAccuracy", "% accuracy");
  if (refs.progressSessionsCount) refs.progressSessionsCount.textContent = data.current.length + " session" + (data.current.length === 1 ? "" : "s") + " " + label;
  const daily = getDailyStats();
  if (refs.progressBestStreak) refs.progressBestStreak.textContent = "Daily streak: " + daily.streak + " day" + (daily.streak === 1 ? "" : "s");
  if (refs.progressImprovementTitle && refs.progressImprovementCopy) {
    if (!data.current.length) {
      refs.progressImprovementTitle.textContent = "Your baseline starts here";
      refs.progressImprovementCopy.textContent = "Complete a challenge or timed test to begin building your private progress history.";
    } else if (!data.previous.length) {
      refs.progressImprovementTitle.textContent = "Your first trend is underway";
      refs.progressImprovementCopy.textContent = "Once you've practised in an earlier period, TypeBloom can compare your average speed and accuracy to measure improvement.";
    } else {
      const speedChange = data.previousWpm ? ((data.currentWpm - data.previousWpm) / data.previousWpm) * 100 : 0;
      const accuracyChange = data.currentAccuracy - data.previousAccuracy;
      if (speedChange >= 0 && speedChange >= accuracyChange) {
        refs.progressImprovementTitle.textContent = speedChange > 0 ? "Speed is your standout" : "Your speed is holding steady";
        refs.progressImprovementCopy.textContent = "Average speed " + (speedChange > 0 ? "increased " + speedChange.toFixed(0) + "%" : "is steady") + " compared with the previous " + days + "-day period. Accuracy changed " + (accuracyChange > 0 ? "+" : "") + accuracyChange.toFixed(1) + " percentage points.";
      } else {
        refs.progressImprovementTitle.textContent = accuracyChange > 0 ? "Accuracy is your standout" : "Keep building consistency";
        refs.progressImprovementCopy.textContent = "Average accuracy changed " + (accuracyChange > 0 ? "+" : "") + accuracyChange.toFixed(1) + " percentage points compared with the previous period. Average speed changed " + (speedChange > 0 ? "+" : "") + speedChange.toFixed(0) + "%.";
      }
    }
  }
  if (refs.progressHistoryNote) {
    refs.progressHistoryNote.textContent = data.current.length
      ? "Showing " + data.current.length + " completed session" + (data.current.length === 1 ? "" : "s") + " from " + label + ". New session history is stored only in this browser; older best scores and levels stay preserved."
      : "No sessions in this period yet. Older personal records and completed levels are preserved, while daily trend charts begin recording with your next completed session.";
  }
}
function valuesNote(buckets, field, suffix) {
  const recorded = buckets.filter(item => Number.isFinite(item[field])).length;
  return recorded + " of " + buckets.length + " days have results · daily averages shown in " + suffix;
}
function showResultDetails(stats, baseline, details, isBest, primaryValue, primaryUnit) {
  if (!refs.resultDetails) return;
  refs.resultDetails.hidden = false;
  if (refs.resultDate) refs.resultDate.textContent = new Date().toLocaleDateString() + " · " + formatTime(state.elapsed);
  if (refs.resultLabel) refs.resultLabel.textContent = details.label;
  if (refs.resultHeadline) refs.resultHeadline.textContent = isBest ? "New personal best!" : "A little more progress";
  if (refs.resultUnitBadge) refs.resultUnitBadge.textContent = primaryUnit;
  if (refs.resultWpm) refs.resultWpm.textContent = String(primaryValue);
  if (refs.resultWpmUnit) refs.resultWpmUnit.textContent = primaryUnit;
  if (refs.resultAccuracy) refs.resultAccuracy.textContent = stats.accuracy + "%";
  if (refs.resultCorrect) refs.resultCorrect.textContent = (Number(stats.correct) || 0).toLocaleString();
  if (refs.resultErrors) refs.resultErrors.textContent = String(state.totalErrors);
  if (refs.resultAverage) {
    if (baseline.count && baseline.averageWpm != null) {
      const delta = stats.wpm - baseline.averageWpm;
      const pct = baseline.averageWpm ? (delta / baseline.averageWpm) * 100 : 0;
      refs.resultAverage.textContent = "Your average: " + Math.round(baseline.averageWpm) + " WPM · " + (delta > 0 ? "+" : "") + pct.toFixed(0) + "% this session";
    } else refs.resultAverage.textContent = "This is your first recorded result";
  }
  if (refs.resultInsight) {
    if (!baseline.count) refs.resultInsight.textContent = "You've set your starting benchmark. Keep going!";
    else {
      const wpmDelta = baseline.averageWpm == null ? 0 : stats.wpm - baseline.averageWpm;
      const accuracyDelta = baseline.averageAccuracy == null ? 0 : stats.accuracy - baseline.averageAccuracy;
      if (isBest) refs.resultInsight.textContent = "New personal best — you've raised your own bar.";
      else if (wpmDelta > 0 && wpmDelta >= accuracyDelta) refs.resultInsight.textContent = "Your speed was above your average today.";
      else if (accuracyDelta > 0) refs.resultInsight.textContent = "Your accuracy was above your average today.";
      else refs.resultInsight.textContent = "Keep practising — consistency creates progress.";
    }
  }
  if (refs.resultShareStatus) refs.resultShareStatus.textContent = "";
}
function buildShareText() {
  const label = refs.resultLabel ? refs.resultLabel.textContent : "Typing result";
  const speed = refs.resultWpm ? refs.resultWpm.textContent : "—";
  const unit = refs.resultWpmUnit ? refs.resultWpmUnit.textContent : "WPM";
  const accuracy = refs.resultAccuracy ? refs.resultAccuracy.textContent : "—";
  const correct = refs.resultCorrect ? refs.resultCorrect.textContent : "—";
  const errors = refs.resultErrors ? refs.resultErrors.textContent : "—";
  return "TypeBloom · " + label + "\n" + speed + " " + unit + " · " + accuracy + " accuracy\n" + correct + " correct characters · " + errors + " mistakes\nPractise at https://typebloom-deg.pages.dev/";
}
async function shareLatestResult() {
  const shareData = { title: "My TypeBloom result", text: buildShareText(), url: "https://typebloom-deg.pages.dev/" };
  if (navigator.share) {
    try { await navigator.share(shareData); if (refs.resultShareStatus) refs.resultShareStatus.textContent = "Ready to share 🌱"; return; }
    catch (error) { if (error && error.name === "AbortError") return; }
  }
  try {
    await navigator.clipboard.writeText(shareData.text);
    if (refs.resultShareStatus) refs.resultShareStatus.textContent = "Result copied — paste it anywhere.";
  } catch (error) {
    if (refs.resultShareStatus) refs.resultShareStatus.textContent = "Sharing isn't available here. You can select and copy the result card text.";
  }
}
function downloadResultCard() {
  const canvas = document.createElement("canvas");
  canvas.width = 1200; canvas.height = 760;
  const ctx = canvas.getContext("2d");
  if (!ctx) { if (refs.resultShareStatus) refs.resultShareStatus.textContent = "Image export isn't supported in this browser."; return; }
  const roundedRect = (x,y,w,h,r) => { ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); };
  const dark = document.documentElement.dataset.theme === "dark";
  const bg = dark ? "#111b15" : "#f4f8f4";
  const card = dark ? "#1c2b22" : "#ffffff";
  const ink = dark ? "#f1f8f2" : "#203329";
  const muted = dark ? "#a7b8ac" : "#65786c";
  const accent = dark ? "#a0e4b5" : "#256747";
  ctx.fillStyle=bg;ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle=dark?"#24392c":"#e0f5e7";ctx.beginPath();ctx.arc(1040,90,190,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=card;roundedRect(70,55,1060,650,36);ctx.fill();
  ctx.fillStyle=accent;roundedRect(110,95,58,58,18);ctx.fill();
  ctx.fillStyle=dark?"#111b15":"#ffffff";ctx.font="bold 38px Arial";ctx.fillText("✿",125,137);
  ctx.fillStyle=ink;ctx.font="bold 38px Arial";ctx.fillText("TypeBloom",188,129);
  ctx.fillStyle=muted;ctx.font="bold 16px Arial";ctx.fillText("YOUR PRACTICE RESULT",190,155);
  ctx.fillStyle=muted;ctx.font="22px Arial";ctx.fillText(refs.resultDate?.textContent||new Date().toLocaleDateString(),850,125);
  ctx.fillStyle=ink;ctx.font="bold 30px Arial";ctx.fillText((refs.resultLabel?.textContent||"Typing result").toUpperCase(),110,226);
  ctx.fillStyle=accent;ctx.font="bold 26px Arial";ctx.fillText(refs.resultHeadline?.textContent||"Nice work!",110,270);
  const metrics=[
    ["TYPING SPEED",(refs.resultWpm?.textContent||"—")+" "+(refs.resultWpmUnit?.textContent||"WPM")],
    ["ACCURACY",refs.resultAccuracy?.textContent||"—"],
    ["CORRECT CHARACTERS",refs.resultCorrect?.textContent||"—"],
    ["MISTAKES",refs.resultErrors?.textContent||"—"]
  ];
  metrics.forEach((metric,index)=>{
    const x=110+(index%2)*500,y=310+Math.floor(index/2)*150;
    ctx.fillStyle=dark?"#25392c":"#edf4ef";roundedRect(x,y,460,120,22);ctx.fill();
    ctx.fillStyle=muted;ctx.font="bold 17px Arial";ctx.fillText(metric[0],x+24,y+35);
    ctx.fillStyle=ink;ctx.font="bold 42px Arial";ctx.fillText(metric[1],x+24,y+85);
  });
  ctx.fillStyle=muted;ctx.font="bold 20px Arial";ctx.fillText("Small steps. Real progress.",110,660);
  ctx.fillStyle=accent;ctx.font="bold 20px Arial";ctx.fillText("typebloom-deg.pages.dev",800,660);
  canvas.toBlob(blob=>{
    if(!blob){if(refs.resultShareStatus)refs.resultShareStatus.textContent="Could not export the result card.";return;}
    const url=URL.createObjectURL(blob);const link=document.createElement("a");link.href=url;link.download="typebloom-result.png";document.body.append(link);link.click();link.remove();URL.revokeObjectURL(url);
    if(refs.resultShareStatus)refs.resultShareStatus.textContent="Score card downloaded as PNG.";
  },"image/png");
}
function currentText() {
  if (state.kind === "weak") return state.weakText;
  if (state.kind === "daily") return state.dailyChallenge?.text || getDailyChallenge().text;
  if (state.kind === "practice" || state.kind === "weak") {
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
  if (state.kind === "daily") return "daily";
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
  if (state.kind === "practice" || state.kind === "weak") {
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
  refs.testTypes.forEach(tab => tab.classList.toggle("active", state.kind !== "practice" && state.kind !== "daily" && tab.dataset.test === state.testType));
  renderLevels(); renderDurations(); renderDailySummary();
}
function setBest() {
  if (state.kind === "weak") { refs.best.textContent = "—"; return; }
  if (state.kind === "daily") {
    const stats = getDailyStats();
    refs.best.innerHTML = stats.bestWpm ? stats.bestWpm + " <small>WPM</small>" : "—";
    return;
  }
  const result = saved.best[key()];
  const unit = state.kind === "cpm" ? "CPM" : "WPM";
  refs.best.innerHTML = result ? result.value + " <small>" + unit + "</small>" : "—";
}
function stopTimer() { clearInterval(state.timer); state.timer = null; }
function cleanChallenge() {
  stopTimer(); state.startedAt = null; state.elapsed = 0; state.finished = false; state.totalTyped = 0; state.totalCorrect = 0; state.totalErrors = 0; state.errorMap = {}; state.lineStarts = [0]; state.lineHeight = 0;
  refs.input.value = ""; refs.input.disabled = false; refs.input.placeholder = "Click here and begin typing...";
  refs.celebration.hidden = true; refs.next.disabled = false; if (refs.errorAnalysis) refs.errorAnalysis.hidden = true;
  if (refs.resultDetails) refs.resultDetails.hidden = true; if (refs.resultShareStatus) refs.resultShareStatus.textContent = "";
}
function renderDaily() {
  state.kind = "daily";
  state.duration = 1;
  state.dailyChallenge = getDailyChallenge();
  cleanChallenge();
  const challenge = state.dailyChallenge;
  refs.meta.textContent = "Daily Challenge · 60 seconds";
  refs.title.textContent = challenge.title;
  refs.chip.textContent = challenge.label + " · 95%+ accuracy";
  refs.tip.textContent = challenge.difficulty === "beginner" ? "Keep it calm and accurate." : challenge.difficulty === "intermediate" ? "Find a steady rhythm." : "Stay precise under pressure.";
  refs.inputHelp.textContent = "Today's passage changes at midnight. You have 60 seconds and need 95%+ accuracy to complete the challenge.";
  refs.primaryName.textContent = "Speed"; refs.timeName.textContent = "Time left";
  renderPrompt(true); refreshStats(); setBest(); updateNav(); save();
  renderDailySummary();
}
function selectDaily() {
  renderDaily();
  requestAnimationFrame(() => refs.input.focus());
}
function renderWeakPractice() {
  state.kind = "weak";
  state.weakText = buildWeakPracticeText();
  cleanChallenge();
  refs.meta.textContent = "Focused practice";
  refs.title.textContent = "Practice your weak spots";
  refs.chip.textContent = "Weak-key workout · 55 words";
  refs.tip.textContent = "Slow down and notice the tricky keys.";
  refs.inputHelp.textContent = "This short workout is generated from your most common mistakes. Accuracy first, speed second.";
  refs.primaryName.textContent = "Speed"; refs.timeName.textContent = "Time";
  renderPrompt(true); refreshStats(); setBest(); updateNav(); save();
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
    if (state.kind === "daily" && statValues().elapsed >= state.duration * 60) finishDaily();
    else if (state.kind !== "practice" && state.kind !== "weak" && state.startedAt && statValues().elapsed >= state.duration * 60) finishTimed();
    else refreshStats();
  }, 200);
}
function completePractice() {
  if (state.finished) return;
  const baseline = getSessionSummary();
  const isWeak = state.kind === "weak";
  collectCurrentErrors();
  state.finished = true; state.elapsed = (Date.now() - state.startedAt) / 1000; stopTimer(); refs.input.disabled = true;
  const stats = statValues();
  const old = isWeak ? null : saved.best[key()];
  const score = { value: stats.wpm, accuracy: stats.accuracy };
  const isBest = !isWeak && (!old || score.value > old.value || (score.value === old.value && score.accuracy > old.accuracy));

  if (!isWeak) {
    saved.completed[key()] = true;
    if (isBest) saved.best[key()] = score;
    saved.recent = { kind: "practice", mode: state.mode, level: state.level, value: stats.wpm, accuracy: stats.accuracy, unit: "WPM", errors: getErrorEntries().slice(0, 5), at: Date.now() };
    refs.celebrationEyebrow.textContent = "Level complete";
    refs.celebrationTitle.textContent = isBest ? "A brand-new personal best!" : "That was lovely!";
    refs.celebrationCopy.textContent = stats.wpm + " WPM at " + stats.accuracy + "% accuracy. " + (isBest ? "Your garden is growing!" : "Every repeat makes you steadier.") + " Press Enter to continue.";
    refs.next.textContent = state.level < 20 ? "Next level →" : "Continue →";
  } else {
    saved.recent = { kind: "weak", value: stats.wpm, accuracy: stats.accuracy, unit: "WPM", errors: getErrorEntries().slice(0, 5), at: Date.now() };
    refs.celebrationEyebrow.textContent = "Weak-key workout complete";
    refs.celebrationTitle.textContent = "Your weak spots got a little stronger. 🌱";
    refs.celebrationCopy.textContent = stats.wpm + " WPM at " + stats.accuracy + "% accuracy. Review the patterns above, then press Enter to practice again.";
    refs.next.textContent = "Practice again →";
  }

  recordSession(stats, {kind: isWeak ? "weak" : "practice", label: isWeak ? "Weak-key workout" : modeInfo[state.mode].label + " · Level " + state.level});
  showResultDetails(stats, baseline, {label: isWeak ? "Weak-key workout" : modeInfo[state.mode].label + " · Level " + state.level}, isBest, stats.wpm, "WPM");
  refs.celebration.hidden = false; refreshStats(); setBest(); renderErrorAnalysis(); updateNav(); save();
  requestAnimationFrame(() => refs.next.focus());
}
function finishDaily() {
  if (state.finished) return;
  const baseline = getSessionSummary();
  collectCurrentErrors();
  state.finished = true; state.elapsed = Math.min(60, (Date.now() - state.startedAt) / 1000); stopTimer(); refs.input.disabled = true;
  const stats = statValues();
  const successful = recordDailyResult(stats);
  const globalStats = getDailyStats();
  saved.recent = { kind: "daily", value: stats.wpm, accuracy: stats.accuracy, unit: "WPM", errors: getErrorEntries().slice(0, 5), at: Date.now() };
  refs.celebrationEyebrow.textContent = successful ? "Daily challenge complete" : "Daily challenge";
  refs.celebrationTitle.textContent = successful ? "You kept the bloom alive! 🌸" : "So close — accuracy comes first.";
  refs.celebrationCopy.textContent = successful
    ? stats.wpm + " WPM at " + stats.accuracy + "% accuracy. " + globalStats.streak + "-day streak · best " + globalStats.bestWpm + " WPM. Press Enter to try again."
    : stats.wpm + " WPM at " + stats.accuracy + "% accuracy. Reach 95%+ accuracy to complete today's challenge. Press Enter to try again.";
  refs.next.textContent = successful ? "Try again →" : "Try again →";
  recordSession(stats, {kind: "daily", label: "Daily Challenge"});
  showResultDetails(stats, baseline, {label: "Daily Challenge"}, successful, stats.wpm, "WPM");
  refs.celebration.hidden = false; refreshStats(); setBest(); renderErrorAnalysis(); renderDailySummary(); save();
  requestAnimationFrame(() => refs.next.focus());
}
function finishTimed() {
  if (state.finished) return;
  const baseline = getSessionSummary();
  collectCurrentErrors();
  state.finished = true; state.elapsed = state.duration * 60; stopTimer(); refs.input.disabled = true;
  const stats = statValues(); const isCpm = state.testType === "cpm"; const value = isCpm ? stats.cpm : stats.wpm; const unit = isCpm ? "CPM" : "WPM";
  const old = saved.best[key()]; const isBest = !old || value > old.value || (value === old.value && stats.accuracy > old.accuracy);
  if (isBest) saved.best[key()] = { value, accuracy: stats.accuracy }; saved.recent = { kind: state.testType, duration: state.duration, value, accuracy: stats.accuracy, unit, errors: getErrorEntries().slice(0, 5), at: Date.now() };
  refs.celebrationEyebrow.textContent = state.duration + "-minute test complete";
  refs.celebrationTitle.textContent = isBest ? "A fresh personal best!" : "Strong, steady work!";
  refs.celebrationCopy.textContent = value + " " + unit + " at " + stats.accuracy + "% accuracy. " + (isBest ? "That is a lovely new benchmark." : "Try it again when you feel ready.") + " Press Enter to continue.";
  refs.next.textContent = "Try another duration →";
  recordSession(stats, {kind: state.testType, label: state.duration + "-minute " + (isCpm ? "CPM test" : "speed test")});
  showResultDetails(stats, baseline, {label: state.duration + "-minute " + (isCpm ? "CPM test" : "speed test")}, isBest, value, unit);
  refs.celebration.hidden = false; refreshStats(); setBest(); renderErrorAnalysis(); save();
  requestAnimationFrame(() => refs.next.focus());
}
function nextPrompt() {
  const target = currentText();
  collectCurrentErrors();
  state.totalTyped += refs.input.value.length;
  state.totalCorrect += typedCorrect(refs.input.value, target);
  state.promptIndex += 1; refs.input.value = ""; renderPrompt(true); refreshStats();
}
function onTyping() {
  if (state.finished) return;
  if (refs.input.value.length && !state.startedAt) startTimer();
  if (state.kind !== "practice" && state.kind !== "weak" && state.startedAt && statValues().elapsed >= state.duration * 60) { if (state.kind === "daily") finishDaily(); else finishTimed(); return; }
  renderPrompt(); refreshStats();
  if ((state.kind === "practice" || state.kind === "weak") && refs.input.value.length >= currentText().length) completePractice();
  if (state.kind === "daily" && refs.input.value.length >= currentText().length) finishDaily();
  else if (state.kind !== "practice" && state.kind !== "daily" && state.kind !== "weak" && refs.input.value.length >= currentText().length) nextPrompt();
}
function reset() {
  if (state.kind === "practice") renderPractice(); else if (state.kind === "weak") renderWeakPractice(); else if (state.kind === "daily") renderDaily(); else renderTimed();
  refs.input.focus();
}
function next() {
  if (state.kind === "weak") { renderWeakPractice(); refs.input.focus(); return; }
  if (state.kind === "daily") { selectDaily(); return; }
  if (state.kind !== "practice") { selectTimed(state.testType, state.duration); return; }
  if (state.level < 20) selectPractice(state.mode, state.level + 1);
  else {
    const order = ["beginner", "intermediate", "advanced"];
    const nextMode = order[order.indexOf(state.mode) + 1];
    if (nextMode) selectPractice(nextMode, 1);
    else { refs.celebrationTitle.textContent = "You grew the whole garden!"; refs.celebrationCopy.textContent = "All 60 levels are complete. Pick any level to keep sharpening your rhythm."; refs.next.disabled = true; refs.next.textContent = "Garden complete ✦"; }
  }
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
if (refs.dailyButton) refs.dailyButton.addEventListener("click", selectDaily);
if (refs.weakPracticeButton) refs.weakPracticeButton.addEventListener("click", () => { renderWeakPractice(); requestAnimationFrame(() => refs.input.focus()); });
refs.testTypes.forEach(tab => tab.addEventListener("click", () => selectTimed(tab.dataset.test, state.duration)));
refs.input.addEventListener("input", onTyping);
refs.input.addEventListener("keydown", event => {
  if (event.key === "Enter" && state.finished) {
    event.preventDefault();
    next();
  }
});
refs.reset.addEventListener("click", reset); refs.next.addEventListener("click", next);
let activeProgressRange = 7;
if (refs.progressButton && refs.progressDialog) refs.progressButton.addEventListener("click", () => {
  renderProgressDashboard(activeProgressRange);
  if (typeof refs.progressDialog.showModal === "function") refs.progressDialog.showModal();
  else refs.progressDialog.setAttribute("open", "");
});
if (refs.progressClose) refs.progressClose.addEventListener("click", () => {
  if (refs.progressDialog && typeof refs.progressDialog.close === "function") refs.progressDialog.close();
  else if (refs.progressDialog) refs.progressDialog.removeAttribute("open");
});
if (refs.progressDialog) {
  refs.progressDialog.addEventListener("click", event => { if (event.target === refs.progressDialog && typeof refs.progressDialog.close === "function") refs.progressDialog.close(); });
}
if (refs.progressRanges) refs.progressRanges.forEach(button => button.addEventListener("click", () => {
  activeProgressRange = Number(button.dataset.range) === 30 ? 30 : 7;
  renderProgressDashboard(activeProgressRange);
}));
if (refs.shareResultButton) refs.shareResultButton.addEventListener("click", shareLatestResult);
if (refs.downloadResultButton) refs.downloadResultButton.addEventListener("click", downloadResultCard);
refs.panelButtons.forEach(button => button.addEventListener("click", () => openInfoPanel(button.dataset.panel)));
if (refs.dialogClose) refs.dialogClose.addEventListener("click", closeInfoPanel);
if (refs.infoDialog) refs.infoDialog.addEventListener("click", event => { if (event.target === refs.infoDialog) closeInfoPanel(); });
if (refs.infoDialog) refs.infoDialog.addEventListener("cancel", closeInfoPanel);
window.addEventListener("resize", () => { if (!state.finished) renderPrompt(true); });
const savedLevel = Math.min(20, Math.max(1, state.level));
if (new URLSearchParams(window.location.search).get("daily") === "1") selectDaily();
else selectPractice(state.mode, isLevelUnlocked(state.mode, savedLevel) ? savedLevel : 1);
if (refs.copyrightYear) refs.copyrightYear.textContent = String(new Date().getFullYear());
