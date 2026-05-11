import Header from "../../../Header";
import Hometemp from "../../../hometemp";
import Presentpic from "../../../assets/postits/defaultpfp.jpg";
import Presentpic2 from "../../../assets/postits/pfp1.jpg";
import Presentpic3 from "../../../assets/postits/pfp2.jpg";
function Isolation() {
  return (
    <>
      <Header title={<strong>Isolation</strong>} />

      <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert={<strong>How my life is going alone.</strong>}
          cardPict={Presentpic}
          cardBlurbt="sometimes i feel like ive come to a point i cant even enjoy family anymore because of how distant ive become. – Anonymous"
        />
      </div>


      <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert={<strong>Feeling like I dont belong</strong>}
          cardPict={Presentpic2}
          cardBlurbt="whenever I feel like i've been let down or something, its like a spear going through my chest – Uramius242"
        />
      </div>

    <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert={<strong>My gf is always busy</strong>}
          cardPict={Presentpic3}
          cardBlurbt="since my gf hasn't been with me a lot bc of work im starting to feel like maybe its best to cut ties to not be a burden – younes9"
        />
      </div>
    </>
  );
}

export default Isolation;