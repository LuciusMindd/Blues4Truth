import { useState } from "react";

function News({cardEmoji,cardBlurbt,cardHeadert,cardSubtitlet,cardPict}) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = comment.trim();
    if (!trimmed) return;
    setComments((prev) => [...prev, trimmed]);
    setComment("");
  };

  return ( <>
    <div className="flex flex-row items-center gap-4 px-4 py-3 my-3 border-7 rounded-3xl shadow-md max-w-3xl mx-auto">
      <img src={cardPict} alt="profile pic" className="w-32 h-32 rounded-xl border-2" />
      <div className="flex-1 text-left">
        <h1 className="text-2xl font-bold">{cardHeadert}</h1>
        <h3 className="text-sm mb-2">{cardSubtitlet}</h3>
        <div className="border-3 rounded-3xl p-4">
          <span className="text-4xl">{cardEmoji}</span>
          <p className="mt-0">{cardBlurbt}</p>
          <div className="mt-3">
            <form onSubmit={handleSubmit} className="space-y-2">
              <textarea
                className="w-full border rounded p-2"
                rows={2}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave a comment"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Post Comment
              </button>
            </form>

            {comments.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {comments.map((c, idx) => (
                  <li key={idx} className="border rounded p-2 bg-slate-40">
                    {c}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2"></p>
            )}
          </div>
        </div>
      </div>
    </div>
</>
  );
} 

export default News;
