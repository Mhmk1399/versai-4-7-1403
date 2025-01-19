import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Comment {
  _id: string;
  blogId: string;
  userName: string;
  content: string;
  createdAt: string;
  parentId?: string;
  replies?: Comment[];
}

interface CommentBoxProps {
  blogId: string;
}

export default function CommentBox({ blogId }: CommentBoxProps) {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [replyTo, setReplyTo] = useState<{
    id: string;
    userName: string;
  } | null>(null);

  useEffect(() => {
    fetchComments();
  }, [blogId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?blogId=${blogId}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId,
          content: comment,
          userName: userName || "کاربر ناشناس",
          parentId: replyTo?.id || null,
        }),
      });

      if (response.ok) {
        const newComment = await response.json();
        await fetchComments(); // Refresh all comments
        setComments([newComment, ...comments]);
        setComment("");
        setUserName("");
        setReplyTo(null);
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const CommentItem = ({
    comment,
    level = 0,
  }: {
    comment: Comment;
    level?: number;
  }) => (
    <div className={`relative`}>
      {level > 0 && (
        <div
          className="absolute border-r-2 border-gold h-full left-[-24px] top-0"
          style={{ width: "2px" }}
        />
      )}
      <motion.div
        className={`p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm mb-3 
    ${level > 0 ? "mr-8 border-r-gold" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600">{comment.userName}</span>
            {comment.parentId && (
              <div className="flex items-center text-sm text-gray-500">
                <svg
                  className="w-4 h-4 mx-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>در پاسخ به</span>
              </div>
            )}
          </div>
          <span className="text-gray-600 text-sm">
            {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
        <p className="leading-relaxed text-gray-800">{comment.content}</p>

        <button
          onClick={() =>
            setReplyTo({ id: comment._id, userName: comment.userName })
          }
          className="mt-2 text-sm text-gold hover:text-amber-600 transition-colors flex items-center gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          پاسخ دادن
        </button>
      </motion.div>

      <div className="relative">
        {comment.replies?.map((reply) => (
          <CommentItem key={reply._id} comment={reply} level={level + 1} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto my-8 p-4" dir="rtl">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-center font-bold text-gray-800 mb-4"
      >
        نظرات
      </motion.h3>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 bg-white p-6 rounded-lg shadow-lg"
      >
        <motion.input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="نام شما"
          className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
        />
        {replyTo && (
          <div className="mb-4 p-2 bg-gray-100 rounded-md flex justify-between items-center">
            <span>در پاسخ به {replyTo.userName}</span>
            <button
              onClick={() => setReplyTo(null)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        )}
        <motion.textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="نظر خود را بنویسید..."
          className="w-full min-h-[100px] p-4 mb-4 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-green"
          required
          disabled={isLoading}
        />
        <motion.button
          type="submit"
          className={`px-6 py-3 text-center w-full transition-all ease-in-out rounded-md bg-gold text-black ${
            isLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-400 hover:bg-blue-600"
          }`}
          disabled={isLoading}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? "در حال ارسال..." : "ارسال نظر"}
        </motion.button>
      </motion.form>

      <div className="flex flex-col gap-4">
        {comments.map(
          (comment) =>
            !comment.parentId && (
              <CommentItem key={comment._id} comment={comment} />
            )
        )}
      </div>
    </div>
  );
}
