import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "src/data/likes.json");

// Helper function to read likes
async function readLikes() {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    return JSON.parse(data).likes;
  } catch {
    // If file doesn't exist or is invalid, return 0
    return 0;
  }
}

// Helper function to write likes
async function writeLikes(likes: number) {
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify({ likes }, null, 2));
}

export async function GET() {
  const likes = await readLikes();
  return NextResponse.json({ likes });
}

export async function POST() {
  const currentLikes = await readLikes();
  const newLikes = currentLikes + 1;
  await writeLikes(newLikes);
  return NextResponse.json({ likes: newLikes });
}
