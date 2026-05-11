import { StrictMode } from "react";

function Profilecust({ cardEmoji, cardBlurbt, cardHeadert, cardSubtitlet, cardPict }) {
<div className="flex flex-row items-center gap-4 px-4 py-3 my-3 border-7 rounded-3xl shadow-md max-w-3xl mx-auto">
      <img src={cardPict} alt="profile pic" className="w-32 h-32 rounded-xl border-2" />
      <div className="flex-1 text-left">
        <h1 className="text-2xl font-bold">{cardHeadert}</h1>
        <h3 className="text-sm mb-2">{cardSubtitlet}</h3>
        <div className="border-3 rounded-3xl p-4">
          <span className="text-4xl">{cardEmoji}</span>
          <p className="mt-0">{cardBlurbt}</p>
          <button
            type="button"
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => { window.location.href = "http://localhost:5173/home"; }}
          >
            Go to App
          </button>
        </div>
      </div>
    </div>
}

export default Profilecust;