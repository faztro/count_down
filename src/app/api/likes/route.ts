import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src/data");
const DATA_FILE_PATH = path.join(DATA_DIR, "likes.json");

// Helper function to ensure data directory exists
async function ensureDataDirectory() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Helper function to read likes
async function readLikes() {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const parsed = JSON.parse(data);
    return typeof parsed.likes === "number" ? parsed.likes : 0;
  } catch {
    return 0;
  }
}

// Helper function to write likes
async function writeLikes(likes: number) {
  try {
    await ensureDataDirectory();
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify({ likes }, null, 2));
  } catch (error) {
    console.error("Error writing likes:", error);
    throw new Error("Failed to save likes");
  }
}

export async function GET() {
  try {
    const likes = await readLikes();
    return NextResponse.json({ likes });
  } catch {
    return NextResponse.json({ likes: 0 }, { status: 500 });
  }
}

export async function POST() {
  try {
    const currentLikes = await readLikes();
    const newLikes = currentLikes + 1;
    await writeLikes(newLikes);
    return NextResponse.json({ likes: newLikes });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update likes" },
      { status: 500 }
    );
  }
}
