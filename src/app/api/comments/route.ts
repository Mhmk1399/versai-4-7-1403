import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongoose";
import Comment from "../../../../models/comment";

export async function GET(request: Request) {
  await connectToDatabase();
  if (!connectToDatabase) {
    return NextResponse.json({ error: "Failed to connect to database" });
  }
  const { searchParams } = new URL(request.url);
  const blogId = searchParams.get("blogId");

  const comments = await Comment.find({ blogId: String(blogId) })
    .sort({ createdAt: -1 })
    .exec();

  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  await connectToDatabase();
  if (!connectToDatabase) {
    return NextResponse.json({ error: "Failed to connect to database" });
  }
  if (!request.body) {
    return NextResponse.json({ error: "No request body" });
  }
  const body = await request.json();
  console.log(body);

  const { blogId, content, userName } = body;

  const comment = await Comment.create({
    blogId,
    content,
    userName: userName || "کاربر ناشناس",
  });

  return NextResponse.json(comment);
}
export async function DELETE(request: Request) {
  await connectToDatabase();
  if (!connectToDatabase) {
    return NextResponse.json({ error: "Failed to connect to database" });
  }
  if (!request.body) {
    return NextResponse.json({ error: "No request body" });
  }
  const req = await request.json();
  const id = req.id;

  await Comment.deleteOne({
    _id: id,
  });
  return NextResponse.json("comment deleted");
}
