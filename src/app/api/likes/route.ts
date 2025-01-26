import { NextResponse } from "next/server";
async function readLikes() {
  try {
    const data = await fetch("https://api.faztro.com/likes");
    const parsed = (await data.json()) as { likes: number };
    return typeof parsed.likes === "number" ? parsed.likes : 0;
  } catch {
    return 0;
  }
}

async function writeLikes() {
  try {
    await fetch("https://api.faztro.com/likes/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    await writeLikes();
    return NextResponse.json({ likes: newLikes });
  } catch {
    return NextResponse.json(
      { error: "Failed to update likes" },

      { status: 500 }
    );
  }
}
