import { EdgeTTS } from "node-edge-tts";
import { mkdirSync, existsSync, statSync, unlinkSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const VOICE = "en-US-AriaNeural";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, "public", "assets", "audio", "dictation");

const SENTENCES = [
  "Hello, Oyster Bay Sailing Club.",
  "How can I help you?",
  "I'd like to book a table for two at seven.",
  "Could you tell me where the nearest station is?",
  "The meeting has been moved to Thursday afternoon.",
  "She hasn't replied to my email yet.",
  "We're running out of time, so let's start.",
  "Do you mind if I open the window?",
  "He told me that the flight was delayed.",
  "I've been learning English for three years.",
  "Thank you for waiting.",
  "Your order is ready.",
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isValid = (f) => existsSync(f) && statSync(f).size > 1000;

mkdirSync(OUT, { recursive: true });

const tts = new EdgeTTS({
  voice: VOICE,
  lang: "en-US",
  outputFormat: "audio-24khz-96kbitrate-mono-mp3",
});

for (let i = 0; i < SENTENCES.length; i++) {
  const file = path.join(OUT, `${String(i + 1).padStart(2, "0")}.mp3`);

  if (isValid(file)) {
    console.log(`skip ${path.basename(file)}`);
    continue;
  }

  try {
    await tts.ttsPromise(SENTENCES[i], file);
    console.log(`ok   ${path.basename(file)}`);
  } catch (e) {
    if (existsSync(file)) unlinkSync(file);
    console.log(`fail ${path.basename(file)}: ${e.message}`);
    console.log("Wait a few minutes, then run again.");
    process.exit(1);
  }

  await sleep(3000);
}

console.log(`Done. Files in ${OUT}`);