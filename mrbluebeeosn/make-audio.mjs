import { EdgeTTS } from "node-edge-tts";
import { mkdirSync, existsSync, statSync, unlinkSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const VOICE = "en-US-AriaNeural";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const AUDIO = path.join(ROOT, "public", "assets", "audio");

const LESSONS = {
  dictation: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  numbers00100: [
    "Zero",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
    "One hundred",
  ],
  colors0112: [
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Orange",
    "Purple",
    "Pink",
    "Black",
    "White",
    "Brown",
    "Grey",
    "Beige",
  ],
  numbers1120: [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
  ],
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isValid = (f) => existsSync(f) && statSync(f).size > 1000;

const tts = new EdgeTTS({
  voice: VOICE,
  lang: "en-US",
  outputFormat: "audio-24khz-96kbitrate-mono-mp3",
});

const asked = process.argv.slice(2);
const names = asked.length ? asked : Object.keys(LESSONS);

for (const name of names) {
  const texts = LESSONS[name];
  if (!texts) {
    console.log(`Unknown lesson: ${name}. Available: ${Object.keys(LESSONS).join(", ")}`);
    process.exit(1);
  }

  const dir = path.join(AUDIO, name);
  mkdirSync(dir, { recursive: true });

  for (let i = 0; i < texts.length; i++) {
    const file = path.join(dir, `${String(i + 1).padStart(2, "0")}.mp3`);
    const label = `${name}/${path.basename(file)}`;

    if (isValid(file)) {
      console.log(`skip ${label}`);
      continue;
    }

    let done = false;
    for (let attempt = 1; attempt <= 5 && !done; attempt++) {
      try {
        await tts.ttsPromise(texts[i], file);
        console.log(`ok   ${label}`);
        done = true;
      } catch (e) {
        if (existsSync(file)) unlinkSync(file);
        console.log(`fail ${label}: ${e.message}, retry in 60s (${attempt}/5)`);
        await sleep(60000);
      }
    }
    if (!done) process.exit(1);

    await sleep(3000);
  }
}

console.log(`Done. Files in ${AUDIO}`);