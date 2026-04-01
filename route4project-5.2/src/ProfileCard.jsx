function ProfileCard({cardEmoji,cardHeader,cardSubtitle,cardBlurb,cardPic,cardBlurbt,cardHeadert,cardSubtitlet,cardPict}) {
  
  
  return ( <>
    <div className="inline-block px-3 my-2 font-bold border-5 rounded-3xl shadow-md">
      <h1 className="text-2xl"> {cardHeadert}</h1>
        <h3 className="text-med"> {cardSubtitlet}</h3>
        <img src={cardPict} alt="profile pic" className="block mx-auto w-32 h-32 rounded-xl border-2 my-3"/>  
      <div className="border-2 rounded-3xl p-4 my-2.5">
        <span className="text-5xl"> {cardEmoji} </span>
        <p> {cardBlurbt}</p>
      </div>
    </div><div className=" inline-block px-3 my-2 font-bold border-5 rounded-3xl shadow-md">
        <h1 className="text-2xl"> {cardHeader}</h1>
        <h3 className="text-med"> {cardSubtitle}</h3>
        <img src={cardPic} alt="profile pic" className="block mx-auto w-32 h-32 rounded-xl border-2 my-3"/>  
      <div className="border-2 rounded-3xl p-5">

        <p> {cardBlurb}</p>

          </div>
      </div>
</>
  );
} 

export default ProfileCard;
