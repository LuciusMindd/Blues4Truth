import Header from "../Header";
import News from "../newstemplate";
import Presentpic from "../assets/postits/defaultpfp.jpg";
function Journal() {
  return (
    <>
      <Header title="My Profile" subtitle=" Followers: 0  |  Following: 0" />

      <div className="grid grid-cols-1 gap-4">
        <News
          cardHeadert=<strong>User #1</strong>
          cardSubtitlet="Created: 3/27/2026 ● Birthday: 6/21/2007"
          cardPict={Presentpic}
          cardBlurbt="This user is new to Blues4Truth and has not made any posts yet. Check back soon to see their content!"
          
        />
      </div>
    </>
  );
}

export default Journal;