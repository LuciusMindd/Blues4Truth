import Header from "../Header";
import News from "../newstemplate";
import Presentpic from "../assets/pfp.png";
function Journal() {
  return (
    <>
      <Header title="Updates and News" subtitle="This is the update page for my project!" />

      <div className="grid grid-cols-1 gap-4">
        <News
          cardHeadert=<strong>First Update</strong>
          cardSubtitlet="3/27/2026"
          cardPict={Presentpic}
          cardBlurbt="This is the first update for my project! expect more updates to come very soon to be put on here!"
          
        />
      </div>
    </>
  );
}

export default Journal;