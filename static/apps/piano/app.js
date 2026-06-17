const WHITE_SPEC = [
  ["Tab", 0, "Tab"], ["q", 2, "Q"], ["w", 4, "W"], ["e", 5, "E"],
  ["r", 7, "R"], ["t", 9, "T"], ["y", 11, "Y"], ["u", 12, "U"],
  ["i", 14, "I"], ["o", 16, "O"], ["p", 17, "P"], ["[", 19, "["],
  ["]", 21, "]"], ["\\", 23, "\\"],
];

const BLACK_SPEC = [
  ["1", 1, 0, "1"], ["2", 3, 1, "2"], ["4", 6, 3, "4"],
  ["5", 8, 4, "5"], ["6", 10, 5, "6"], ["8", 13, 7, "8"],
  ["9", 15, 8, "9"], ["-", 18, 10, "-"], ["=", 20, 11, "="],
  ["Backspace", 22, 12, "BACK"],
];

const THUMB_SPEC = [
  ["z", 4, "Z"], ["x", 5, "X"], ["c", 7, "C"], ["v", 21, "V"],
  ["b", 23, "B"], ["n", 12, "N"], ["m", 14, "M"], [",", 16, ","],
  [".", 17, "."], ["/", 19, "/"],
];

const NOTE_NAMES_EN = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const NOTE_NAMES_ES = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si"];
const BASE_MIDI = 60;
const PUBLIC_INTERFACE = Object.freeze({
  projectId: "J015",
  version: "0.2.12",
  catalogPolicy: "public-domain-or-original",
  eventNamespace: "piano",
  events: ["ready", "note", "step", "playback", "mode", "labels", "wave", "octave", "item", "library"],
});
const LIBRARY_MODES = ["all", "lesson", "song"];
const LIBRARY_LABELS = Object.freeze({
  all: "All",
  lesson: "Lessons",
  song: "Songs",
});
const FINGER_NAMES = Object.freeze({
  1: "thumb",
  2: "index",
  3: "middle",
  4: "ring",
  5: "little",
});
const READOUT_RELEASE_GAP_MS = 70;

const FIND_C = [[60, 1], [72, 1], [60, 1], [72, 2]];
const C_POSITION = [[60, 1], [62, 1], [64, 1], [65, 1], [67, 1], [67, 1], [65, 1], [64, 1], [62, 1], [60, 2]];
const CHORD_ROOTS = Array.from({ length: 12 }, (_, idx) => 60 + idx);
const CLOSE_CHORDS_MAJOR_MINOR = CHORD_ROOTS.flatMap((root) => [
  [root, .75], [root + 4, .75], [root + 7, 1.25],
  [root, .75], [root + 3, .75], [root + 7, 1.25],
]);
const CLOSE_CHORDS_FINGERING = CLOSE_CHORDS_MAJOR_MINOR.map((_, idx) => {
  const pos = idx % 6;
  if (pos === 0 || pos === 3) return "RH 1";
  if (pos === 1 || pos === 4) return "RH 3";
  return "RH 5";
});
const THUMB_UNDER_C_SCALE = [[60, 1], [62, 1], [64, 1], [65, 1], [67, 1], [69, 1], [71, 1], [72, 2], [72, 1], [71, 1], [69, 1], [67, 1], [65, 1], [64, 1], [62, 1], [60, 2]];
const ECHO_PATTERNS = [[60, 1], [62, 1], [64, 1], [64, 1], [62, 1], [60, 1], [60, 1], [64, 1], [67, 1], [67, 1], [64, 1], [60, 2]];
const BROKEN_TRIADS = [[60, 1], [64, 1], [67, 1], [64, 1], [65, 1], [69, 1], [72, 1], [69, 1], [67, 1], [71, 1], [74, 1], [71, 2]];
const EASY_PARTY_RIFF = [[60, .5], [64, .5], [67, .5], [69, .5], [70, .5], [69, .5], [67, .5], [64, .5], [60, .5], [64, .5], [67, .5], [72, .5], [70, .5], [69, .5], [67, .5], [60, 1]];
const HOT_CROSS = [[64, 1], [62, 1], [60, 1], [64, 1], [62, 1], [60, 1], [60, .5], [60, .5], [60, .5], [60, .5], [62, .5], [62, .5], [62, .5], [62, .5], [64, 1], [62, 1], [60, 1]];
const MARY = [[64, 1], [62, 1], [60, 1], [62, 1], [64, 1], [64, 1], [64, 2], [62, 1], [62, 1], [62, 2], [64, 1], [67, 1], [67, 2], [64, 1], [62, 1], [60, 1], [62, 1], [64, 1], [64, 1], [64, 1], [64, 1], [62, 1], [62, 1], [64, 1], [62, 1], [60, 2]];
const TWINKLE = [[60, 1], [60, 1], [67, 1], [67, 1], [69, 1], [69, 1], [67, 2], [65, 1], [65, 1], [64, 1], [64, 1], [62, 1], [62, 1], [60, 2], [67, 1], [67, 1], [65, 1], [65, 1], [64, 1], [64, 1], [62, 2], [67, 1], [67, 1], [65, 1], [65, 1], [64, 1], [64, 1], [62, 2], [60, 1], [60, 1], [67, 1], [67, 1], [69, 1], [69, 1], [67, 2], [65, 1], [65, 1], [64, 1], [64, 1], [62, 1], [62, 1], [60, 2]];
const ODE = [[64, 1], [64, 1], [65, 1], [67, 1], [67, 1], [65, 1], [64, 1], [62, 1], [60, 1], [60, 1], [62, 1], [64, 1], [64, 1.5], [62, .5], [62, 2], [64, 1], [64, 1], [65, 1], [67, 1], [67, 1], [65, 1], [64, 1], [62, 1], [60, 1], [60, 1], [62, 1], [64, 1], [62, 1.5], [60, .5], [60, 2]];
const JINGLE = [[64, 1], [64, 1], [64, 2], [64, 1], [64, 1], [64, 2], [64, 1], [67, 1], [60, 1], [62, 1], [64, 4], [65, 1], [65, 1], [65, 1], [65, 1], [65, 1], [64, 1], [64, 1], [64, .5], [64, .5], [62, 1], [62, 1], [64, 1], [62, 2], [67, 2]];
const HAPPY = [[67, .5], [67, .5], [69, 1], [67, 1], [72, 1], [71, 2], [67, .5], [67, .5], [69, 1], [67, 1], [74, 1], [72, 2], [67, .5], [67, .5], [79, 1], [76, 1], [72, 1], [71, 1], [69, 1], [77, .5], [77, .5], [76, 1], [72, 1], [74, 1], [72, 2]];
const SATIE = [[64, 2], [66, 2], [67, 2], [69, 2], [71, 2], [69, 2], [67, 2], [66, 2], [64, 2], [62, 2], [60, 4], [64, 2], [67, 2], [71, 2], [69, 4]];
const SATIE_GYMNOPEDIE_2 = [[62, 2], [65, 2], [69, 2], [72, 2], [71, 2], [69, 2], [65, 2], [62, 4], [64, 2], [67, 2], [71, 2], [74, 2], [72, 2], [71, 2], [69, 4]];
const SATIE_GNOSS1 = [[65, 2], [69, 1], [68, 1], [65, 2], [62, 2], [65, 2], [60, 4], [65, 2], [69, 1], [68, 1], [65, 2], [64, 2], [62, 2], [60, 4]];
const SATIE_JE_TE_VEUX = [[67, 1], [69, 1], [71, 1], [72, 1], [74, 2], [72, 1], [71, 1], [69, 2], [67, 1], [69, 1], [71, 2], [69, 2], [67, 4]];
const TARREGA = [[64, 1], [67, 1], [72, 2], [71, 1], [69, 1], [67, 2], [65, 1], [64, 1], [62, 2], [64, 1], [67, 1], [72, 2]];
const GRANADOS = [[69, 1], [71, 1], [72, 2], [71, 1], [69, 1], [67, 2], [65, 1], [67, 1], [69, 2], [64, 1], [65, 1], [67, 2]];
const ALBENIZ = [[64, .5], [76, .5], [64, .5], [76, .5], [67, .5], [76, .5], [67, .5], [76, .5], [69, .5], [76, .5], [69, .5], [76, .5], [67, .5], [76, .5], [64, .5], [76, .5]];
const SPANISH_ROMANCE = [[64, 1], [64, 1], [64, 1], [64, 1], [62, 1], [60, 1], [62, 1], [64, 1], [67, 1], [67, 1], [67, 1], [67, 1], [65, 1], [64, 1], [65, 1], [67, 1]];
const SOFT_ROCK_BALLAD = [[60, 1], [64, 1], [67, 2], [69, 1], [67, 1], [64, 2], [65, 1], [69, 1], [72, 2], [71, 1], [69, 1], [67, 2], [62, 1], [65, 1], [69, 2], [67, 1], [65, 1], [64, 2], [60, 1], [64, 1], [67, 2], [72, 2], [71, 1], [69, 1], [67, 4]];
const SOFT_ROCK_CHORUS = [[67, 1], [69, 1], [72, 2], [72, 1], [71, 1], [69, 2], [65, 1], [67, 1], [69, 2], [69, 1], [67, 1], [65, 2], [64, 1], [65, 1], [67, 2], [69, 1], [67, 1], [64, 2], [60, 1], [64, 1], [67, 1], [72, 1], [71, 1], [69, 1], [67, 2]];
const BELL_OSTINATO = [[64, .5], [67, .5], [71, .5], [76, .5], [72, .5], [76, .5], [71, .5], [67, .5], [65, .5], [69, .5], [72, .5], [77, .5], [74, .5], [77, .5], [72, .5], [69, .5], [64, .5], [67, .5], [71, .5], [76, .5], [72, .5], [76, .5], [79, .5], [76, .5]];

const ITEMS = [
  {
    kind: "lesson",
    type: "basics",
    title: "Find C / Find Do",
    goal: "Use the 2-black-key group, then press the white key just to its left.",
    focus: "keyboard geography",
    fingers: "RH 1, then RH 5",
    fingering: ["RH 1", "RH 5", "RH 1", "RH 5"],
    stepMs: 520,
    defaultWait: true,
    notes: FIND_C,
  },
  {
    kind: "lesson",
    type: "basics",
    title: "C position / Do position",
    goal: "Place fingers 1-2-3-4-5 on C-D-E-F-G and play up, then down.",
    focus: "right-hand position",
    fingers: "1-2-3-4-5",
    fingering: ["RH 1", "RH 2", "RH 3", "RH 4", "RH 5", "RH 5", "RH 4", "RH 3", "RH 2", "RH 1"],
    stepMs: 520,
    defaultWait: true,
    notes: C_POSITION,
  },
  {
    kind: "lesson",
    type: "harmony",
    title: "Close chords: major/minor triads",
    goal: "For each root, play major 1-3-5, then minor 1-b3-5 in close position.",
    focus: "major/minor chord color and close-position geography",
    fingers: "1-3-5",
    fingering: CLOSE_CHORDS_FINGERING,
    stepMs: 360,
    defaultWait: true,
    notes: CLOSE_CHORDS_MAJOR_MINOR,
  },
  {
    kind: "lesson",
    type: "technique",
    title: "C scale thumb-under",
    goal: "Use 1-2-3, pass the thumb under to F, then continue 1-2-3-4-5.",
    focus: "scale fingering and hand travel",
    fingers: "RH up: 1-2-3-1-2-3-4-5",
    fingering: ["RH 1", "RH 2", "RH 3", "RH 1", "RH 2", "RH 3", "RH 4", "RH 5", "RH 5", "RH 4", "RH 3", "RH 2", "RH 1", "RH 3", "RH 2", "RH 1"],
    stepMs: 500,
    defaultWait: true,
    notes: THUMB_UNDER_C_SCALE,
  },
  {
    kind: "lesson",
    type: "basics",
    title: "Echo patterns",
    goal: "Repeat short shapes: up, down, then skip notes.",
    focus: "listen, repeat, keep the hand still",
    fingers: "1-2-3 then 1-3-5",
    fingering: ["RH 1", "RH 2", "RH 3", "RH 3", "RH 2", "RH 1", "RH 1", "RH 3", "RH 5", "RH 5", "RH 3", "RH 1"],
    stepMs: 480,
    defaultWait: true,
    notes: ECHO_PATTERNS,
  },
  {
    kind: "lesson",
    type: "basics",
    title: "Broken chord shapes",
    goal: "Feel C, F, and G as simple 1-3-5 shapes before playing songs.",
    focus: "chord geography",
    fingers: "1-3-5",
    fingering: ["RH 1", "RH 3", "RH 5", "RH 3", "RH 1", "RH 3", "RH 5", "RH 3", "RH 1", "RH 3", "RH 5", "RH 3"],
    stepMs: 460,
    defaultWait: true,
    notes: BROKEN_TRIADS,
  },
  {
    kind: "lesson",
    type: "riff",
    title: "Easy party riff",
    goal: "Play a short original rock shape that sounds complete with one hand.",
    focus: "steady pulse, C-E-G anchor, blues color",
    fingers: "1-3-5, then reach to A/Bb",
    fingering: ["RH 1", "RH 3", "RH 5", "RH 4", "RH 5", "RH 4", "RH 5", "RH 3", "RH 1", "RH 3", "RH 5", "RH 5", "RH 4", "RH 3", "RH 2", "RH 1"],
    stepMs: 240,
    defaultWait: true,
    notes: EASY_PARTY_RIFF,
  },
  { kind: "song", title: "Hot Cross Buns", stepMs: 460, notes: HOT_CROSS },
  { kind: "song", title: "Mary Had a Little Lamb", stepMs: 440, notes: MARY },
  { kind: "song", title: "Twinkle Twinkle Little Star", stepMs: 440, notes: TWINKLE },
  { kind: "song", title: "Ode to Joy - Beethoven", stepMs: 430, notes: ODE },
  { kind: "song", title: "Jingle Bells", stepMs: 380, notes: JINGLE },
  { kind: "song", title: "Happy Birthday", stepMs: 430, notes: HAPPY },
  { kind: "song", title: "Gymnopedie No. 1 - Erik Satie", stepMs: 520, notes: SATIE },
  { kind: "song", title: "Gymnopedie No. 2 - Erik Satie", stepMs: 520, notes: SATIE_GYMNOPEDIE_2 },
  { kind: "song", title: "Gnossienne No. 1 - Erik Satie", stepMs: 500, notes: SATIE_GNOSS1 },
  { kind: "song", title: "Je te veux - Erik Satie", stepMs: 420, notes: SATIE_JE_TE_VEUX },
  { kind: "song", title: "Lagrima - Francisco Tarrega", stepMs: 430, notes: TARREGA },
  { kind: "song", title: "Danza Espanola No. 5 - Enrique Granados", stepMs: 360, notes: GRANADOS },
  { kind: "song", title: "Asturias - Isaac Albeniz (ostinato)", stepMs: 150, notes: ALBENIZ },
  { kind: "song", title: "Spanish Romance / Romance de Amor (anonymous)", stepMs: 340, notes: SPANISH_ROMANCE },
  { kind: "song", title: "Soft rock ballad - original study", stepMs: 360, notes: SOFT_ROCK_BALLAD },
  { kind: "song", title: "Soft rock chorus - original study", stepMs: 320, notes: SOFT_ROCK_CHORUS },
  { kind: "song", title: "Bell ostinato - original study", stepMs: 220, notes: BELL_OSTINATO },
];

const keyOffsets = new Map([...WHITE_SPEC, ...BLACK_SPEC, ...THUMB_SPEC].map((spec) => [spec[0], spec[1]]));
const guideKeyOffsets = new Map([...WHITE_SPEC, ...BLACK_SPEC].map((spec) => [spec[0], spec[1]]));
const offsetToKey = new Map([...guideKeyOffsets].map(([key, offset]) => [offset, key]));
const keysDown = new Set();
let audioCtx = null;
let itemIndex = 0;
let item = ITEMS[itemIndex];
let itemPos = 0;
let timer = 0;
let playing = false;
let waitMode = item.defaultWait;
let noteMode = "en";
let libraryMode = "all";
let octaveOffset = 0;
let lastTime = performance.now();
let lastMidi = null;
let wrongKey = null;
let waveVisible = false;
let rafId = null;
let mistakes = 0;
let completions = 0;
let pressedReadoutGapUntil = 0;

const keyboard = document.getElementById("keyboard");
const statusLine = document.getElementById("statusLine");
const currentNote = document.getElementById("currentNote");
const pressedLine = document.getElementById("pressedLine");
const fingerLine = document.getElementById("fingerLine");
const itemLine = document.getElementById("itemLine");
const lessonLine = document.getElementById("lessonLine");
const detailLine = document.getElementById("detailLine");
const nextLine = document.getElementById("nextLine");
const waveCanvas = document.getElementById("waveCanvas");
document.documentElement.dataset.catalogPolicy = PUBLIC_INTERFACE.catalogPolicy;

function appState() {
  return {
    projectId: PUBLIC_INTERFACE.projectId,
    itemIndex,
    itemTitle: item.title,
    itemKind: item.kind,
    itemPos,
    itemLength: item.notes.length,
    mistakes,
    completions,
    playing,
    waitMode,
    noteMode,
    libraryMode,
    octaveOffset,
    guideMidi: guideMidi(),
    guideKey: guideKey(),
    currentFinger: currentFinger(),
    lastMidi,
    pressedMidi: pressedMidiValues(),
    pressedReadoutGapActive: performance.now() < pressedReadoutGapUntil,
  };
}

function emitAppEvent(type, detail = {}) {
  window.dispatchEvent(new CustomEvent(`${PUBLIC_INTERFACE.eventNamespace}:${type}`, {
    detail: {
      ...detail,
      state: appState(),
    },
  }));
}

window.QwertyPiano = Object.freeze({
  interface: PUBLIC_INTERFACE,
  getState: appState,
});

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function midiToName(midi) {
  const names = noteMode === "es" ? NOTE_NAMES_ES : NOTE_NAMES_EN;
  return `${names[midi % 12]}${Math.floor(midi / 12) - 1}`;
}

function pressedMidiValues() {
  return [...keysDown]
    .filter((key) => keyOffsets.has(key))
    .map((key) => BASE_MIDI + keyOffsets.get(key) + octaveOffset)
    .sort((a, b) => a - b);
}

function normalizeKey(event) {
  if (event.key === " ") return "Space";
  if (event.key === "Tab") return "Tab";
  if (event.key.length === 1) return event.key.toLowerCase();
  return event.key;
}

function ensureAudio() {
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function playMidi(midi) {
  ensureAudio();
  lastMidi = midi;
  const now = audioCtx.currentTime;
  const freq = midiToFreq(midi);
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.18, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
  gain.connect(audioCtx.destination);
  [1, 0.5, 0.25, 0.125, 0.063, 0.031].forEach((weight, idx) => {
    const osc = audioCtx.createOscillator();
    const partialGain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq * (idx + 1);
    partialGain.gain.value = weight;
    osc.connect(partialGain).connect(gain);
    osc.start(now);
    osc.stop(now + 1.7);
  });
  emitAppEvent("note", { midi, freq });
}

function noteEntry(step) {
  return Array.isArray(step) ? { midi: step[0], beats: step[1] ?? 1 } : { midi: step, beats: 1 };
}

function guideMidi() {
  return noteEntry(item.notes[itemPos]).midi;
}

function guideKey() {
  const midi = guideMidi();
  if (!midi) return null;
  return offsetToKey.get(midi - BASE_MIDI - octaveOffset) ?? null;
}

function currentFinger() {
  return item.fingering?.[itemPos] ?? "";
}

function fingerDisplay(finger) {
  const match = finger.match(/\b([1-5])\b/);
  return match ? `${finger} ${FINGER_NAMES[match[1]]}` : finger;
}

function currentKind() {
  return item.kind === "lesson" ? `lesson (${item.type})` : "song";
}

function filteredItemIndexes() {
  return ITEMS
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => libraryMode === "all" || entry.kind === libraryMode)
    .map(({ index }) => index);
}

function currentLibraryPosition() {
  const indexes = filteredItemIndexes();
  const position = indexes.indexOf(itemIndex);
  return { indexes, position: position === -1 ? 0 : position };
}

function resetItemState() {
  item = ITEMS[itemIndex];
  itemPos = 0;
  timer = 0;
  playing = false;
  waitMode = !!item.defaultWait;
  wrongKey = null;
  mistakes = 0;
  completions = 0;
}

function startPause() {
  ensureAudio();
  playing = !playing;
  if (playing && itemPos === 0) timer = 0;
  update();
  emitAppEvent("playback", { playing });
}

function nextItem() {
  const { indexes, position } = currentLibraryPosition();
  itemIndex = indexes[(position + 1) % indexes.length];
  resetItemState();
  update();
  emitAppEvent("item", { index: itemIndex, title: item.title, libraryMode });
}

function advanceOne() {
  const nextPos = (itemPos + 1) % item.notes.length;
  if (nextPos === 0) completions += 1;
  itemPos = nextPos;
  timer = 0;
  const midi = guideMidi();
  if (midi && !waitMode) playMidi(midi);
  emitAppEvent("step", { itemPos, midi });
}

function toggleWaitMode() {
  waitMode = !waitMode;
  update();
  emitAppEvent("mode", { waitMode });
}

function toggleLabels() {
  noteMode = noteMode === "en" ? "es" : "en";
  update();
  emitAppEvent("labels", { noteMode });
}

function toggleLibraryMode() {
  const current = LIBRARY_MODES.indexOf(libraryMode);
  libraryMode = LIBRARY_MODES[(current + 1) % LIBRARY_MODES.length];
  const indexes = filteredItemIndexes();
  if (!indexes.includes(itemIndex)) {
    itemIndex = indexes[0];
    resetItemState();
  } else {
    playing = false;
    timer = 0;
    wrongKey = null;
  }
  update();
  emitAppEvent("library", { libraryMode });
}

function toggleWave() {
  waveVisible = !waveVisible;
  waveCanvas.classList.toggle("visible", waveVisible);
  update();
  emitAppEvent("wave", { waveVisible });
}

function shiftOctave(direction) {
  octaveOffset = Math.max(-36, Math.min(24, octaveOffset + direction * 12));
  update();
  emitAppEvent("octave", { octaveOffset });
}

function pressPianoKey(key) {
  const offset = keyOffsets.get(key);
  if (offset === undefined) return false;
  const midi = BASE_MIDI + offset + octaveOffset;
  playMidi(midi);
  const expected = guideKey();
  if ((waitMode || !playing) && expected) {
    if (key === expected) {
      wrongKey = null;
      advanceOne();
    } else {
      wrongKey = key;
      mistakes += 1;
      window.setTimeout(() => {
        wrongKey = null;
        renderKeyboard();
      }, 220);
    }
  }
  update();
  return true;
}

// Build a key's note/QWERTY label via textContent (never innerHTML) so these
// labels can never become an HTML-injection sink, even if a future edit routes
// dynamic/user input into them. Inputs are frozen constants today; this keeps
// the sink permanently inert. (sekker.anti hardening, 2026-06-17.)
function setKeyLabel(el, noteText, labelText) {
  const note = document.createElement("span");
  note.className = "note";
  note.textContent = noteText;
  const label = document.createElement("span");
  label.className = "label";
  label.textContent = labelText;
  el.replaceChildren(note, label);
}

function renderKeyboard() {
  keyboard.replaceChildren();
  const whiteW = keyboard.clientWidth / WHITE_SPEC.length;
  const blackW = whiteW * 0.62;
  const compact = keyboard.clientHeight < 250;
  const whiteH = compact ? 170 : 220;
  const thumbW = whiteW * 0.78;
  const thumbGap = compact ? 3 : 4;
  const thumbH = compact ? 36 : 44;
  const thumbTop = whiteH + (compact ? 8 : 12);
  const thumbTotal = THUMB_SPEC.length * thumbW + (THUMB_SPEC.length - 1) * thumbGap;
  const thumbStart = Math.max(0, (keyboard.clientWidth - thumbTotal) / 2);
  const expected = guideKey();
  WHITE_SPEC.forEach(([key, offset, label], idx) => {
    const el = document.createElement("div");
    el.className = "white-key";
    if (key === expected) el.classList.add("guide");
    if (keysDown.has(key)) el.classList.add("pressed");
    if (key === wrongKey) el.classList.add("wrong");
    el.style.left = `${idx * whiteW}px`;
    el.style.width = `${whiteW - 2}px`;
    setKeyLabel(el, midiToName(BASE_MIDI + offset + octaveOffset), label);
    keyboard.appendChild(el);
  });
  BLACK_SPEC.forEach(([key, offset, afterIdx, label]) => {
    const el = document.createElement("div");
    el.className = "black-key";
    if (key === expected) el.classList.add("guide");
    if (keysDown.has(key)) el.classList.add("pressed");
    if (key === wrongKey) el.classList.add("wrong");
    el.style.left = `${(afterIdx + 1) * whiteW - blackW / 2}px`;
    el.style.width = `${blackW}px`;
    setKeyLabel(el, midiToName(BASE_MIDI + offset + octaveOffset), label);
    keyboard.appendChild(el);
  });
  THUMB_SPEC.forEach(([key, offset, label], idx) => {
    const el = document.createElement("div");
    el.className = "thumb-key";
    if (keysDown.has(key)) el.classList.add("pressed");
    if (key === wrongKey) el.classList.add("wrong");
    el.style.left = `${thumbStart + idx * (thumbW + thumbGap)}px`;
    el.style.top = `${thumbTop}px`;
    el.style.width = `${thumbW}px`;
    el.style.height = `${thumbH}px`;
    setKeyLabel(el, midiToName(BASE_MIDI + offset + octaveOffset), label);
    keyboard.appendChild(el);
  });
}

function update() {
  const midi = guideMidi();
  const { indexes, position } = currentLibraryPosition();
  const libraryLabel = LIBRARY_LABELS[libraryMode];
  const pressedNames = performance.now() < pressedReadoutGapUntil ? [] : pressedMidiValues().map(midiToName);
  const finger = currentFinger();
  currentNote.textContent = playing ? `Playing: ${midiToName(midi)}` : (midi ? `Ready: ${midiToName(midi)}` : "Ready");
  pressedLine.textContent = pressedNames.length
    ? `pressed: ${pressedNames.join("  ")}`
    : "pressed: -";
  fingerLine.textContent = finger ? `target: ${midiToName(midi)} | finger: ${fingerDisplay(finger)}` : "";
  statusLine.textContent = `Public-safe web piano - ${libraryLabel.toLowerCase()} library`;
  itemLine.textContent = `${currentKind()} ready (${position + 1}/${indexes.length}): ${item.title}`;
  lessonLine.textContent = item.kind === "lesson"
    ? `goal: ${item.goal} | step ${itemPos + 1}/${item.notes.length} | mistakes ${mistakes} | loops ${completions}`
    : "";
  detailLine.textContent = item.kind === "lesson"
    ? `focus: ${item.focus} | fingers: ${item.fingers} | mode: ${waitMode ? "wait-for-press" : "auto-play"} | range: ${midiToName(BASE_MIDI + octaveOffset)}-${midiToName(BASE_MIDI + 23 + octaveOffset)}`
    : `library: ${libraryLabel} | mode: ${waitMode ? "wait-for-press" : "auto-play"} | notes: ${noteMode === "es" ? "Do Re Mi" : "C D E"} | range: ${midiToName(BASE_MIDI + octaveOffset)}-${midiToName(BASE_MIDI + 23 + octaveOffset)}`;
  const upcoming = [];
  for (let i = 1; i <= 8; i += 1) upcoming.push(midiToName(noteEntry(item.notes[(itemPos + i) % item.notes.length]).midi));
  nextLine.textContent = `next: ${upcoming.join("  ")}`;
  document.getElementById("playBtn").textContent = playing ? "Pause" : "Play";
  document.getElementById("libraryBtn").textContent = libraryLabel;
  document.getElementById("modeBtn").textContent = waitMode ? "Auto" : "Wait";
  document.getElementById("labelsBtn").textContent = noteMode === "es" ? "EN" : "ES";
  document.getElementById("playBtn").setAttribute("aria-pressed", String(playing));
  document.getElementById("libraryBtn").setAttribute("aria-pressed", String(libraryMode !== "all"));
  document.getElementById("modeBtn").setAttribute("aria-pressed", String(waitMode));
  document.getElementById("labelsBtn").setAttribute("aria-pressed", String(noteMode === "es"));
  document.getElementById("waveBtn").setAttribute("aria-pressed", String(waveVisible));
  renderKeyboard();
}

function tick(now) {
  const dt = now - lastTime;
  lastTime = now;
  if (playing && !waitMode) {
    timer += dt;
    const step = noteEntry(item.notes[itemPos]);
    if (timer >= step.beats * item.stepMs) {
      timer = 0;
      advanceOne();
    }
  }
  drawWave();
  rafId = requestAnimationFrame(tick);
}

function drawWave() {
  if (!waveVisible) return;
  const ctx = waveCanvas.getContext("2d");
  const w = waveCanvas.width;
  const h = waveCanvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#101525";
  ctx.fillRect(0, 0, w, h);
  const midi = lastMidi || guideMidi() || BASE_MIDI;
  const freq = midiToFreq(midi);
  ctx.fillStyle = "#aac8e8";
  ctx.font = "16px Menlo, monospace";
  ctx.fillText(`HARMONIC WAVE ${midiToName(midi)} ${freq.toFixed(1)} Hz - fixed 12 ms window`, 18, 26);
  const mid = h / 2 + 18;
  ctx.strokeStyle = "#38445f";
  ctx.beginPath();
  ctx.moveTo(16, mid);
  ctx.lineTo(w - 16, mid);
  ctx.stroke();
  const weights = [1, .5, .25, .125, .063, .031];
  const samples = 260;
  const phase = performance.now() / 1000;
  const composite = [];
  for (let s = 0; s < samples; s += 1) {
    const t = (s / samples) * 0.012 + phase;
    let y = 0;
    weights.forEach((weight, idx) => {
      y += weight * Math.sin(2 * Math.PI * freq * (idx + 1) * t);
    });
    composite.push(y);
  }
  const peak = Math.max(...composite.map(Math.abs)) || 1;
  ctx.strokeStyle = "#ffd978";
  ctx.lineWidth = 2;
  ctx.beginPath();
  composite.forEach((y, idx) => {
    const x = 16 + idx * (w - 32) / (samples - 1);
    const py = mid - (y / peak) * 36;
    if (idx === 0) ctx.moveTo(x, py);
    else ctx.lineTo(x, py);
  });
  ctx.stroke();
}

window.addEventListener("keydown", (event) => {
  const key = normalizeKey(event);
  if ([" ", "Tab", "Backspace", "ArrowLeft", "ArrowRight", "F5", "F6", "F7", "F8"].includes(event.key)) event.preventDefault();
  if (keysDown.has(key)) return;
  keysDown.add(key);
  if (key === "Space") startPause();
  else if (event.key === "F5") nextItem();
  else if (event.key === "F6") toggleWaitMode();
  else if (event.key === "F7") toggleLabels();
  else if (event.key === "F8") toggleWave();
  else if (event.key === "ArrowLeft") shiftOctave(-1);
  else if (event.key === "ArrowRight") shiftOctave(1);
  else pressPianoKey(key);
});

window.addEventListener("keyup", (event) => {
  keysDown.delete(normalizeKey(event));
  pressedReadoutGapUntil = performance.now() + READOUT_RELEASE_GAP_MS;
  update();
  window.setTimeout(update, READOUT_RELEASE_GAP_MS);
});

document.getElementById("playBtn").addEventListener("click", startPause);
document.getElementById("nextBtn").addEventListener("click", nextItem);
document.getElementById("libraryBtn").addEventListener("click", toggleLibraryMode);
document.getElementById("modeBtn").addEventListener("click", toggleWaitMode);
document.getElementById("labelsBtn").addEventListener("click", toggleLabels);
document.getElementById("waveBtn").addEventListener("click", toggleWave);
window.addEventListener("resize", renderKeyboard);

update();
emitAppEvent("ready", { interface: PUBLIC_INTERFACE });
rafId = requestAnimationFrame(tick);
