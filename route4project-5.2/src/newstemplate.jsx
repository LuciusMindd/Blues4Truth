function News({cardEmoji,cardBlurbt,cardHeadert,cardSubtitlet,cardPict}) {
  
  
  return ( <>
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
            className="mt-3 px-4 py-2 text-white rounded hover:bg-white-600 transition"
            onClick={() => window.alert('news card button clicked')}
          >
            Go to App
          </button>
        </div>
      </div>
    </div>
</>
  );
} 

export default News;
