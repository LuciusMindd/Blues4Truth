import Header from "../../../Header";
import Hometemp from "../../../hometemp";
import Presentpic from "../../../assets/postits/defaultpfp.jpg";
import Presentpic2 from "../../../assets/postits/pfp1.jpg";
import Presentpic3 from "../../../assets/postits/pfp2.jpg";
function Burnout() {
  return (
    <>
      <Header title={<strong>Burnout</strong>} />

      <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert={<strong>Recently recieved overtime </strong>}
          cardPict={Presentpic}
          cardBlurbt="i've been working a lot of overtime and its really taking a toll on me, i feel like im losing myself – Anonymous"
        />
      </div>


      <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert={<strong>How everything feels slower when i stop.</strong>}
          cardPict={Presentpic2}
          cardBlurbt="whenever I feel like i've been let down or something, its like a spear going through my chest – Uramius242"
        />
      </div>

    <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert={<strong>College work and proving for my family</strong>}
          cardPict={Presentpic}
          cardBlurbt="As much as i love my family, i feel like im doing all this work just to prove to them that im worth something, and its really exhausting. On top of that, I am doing my best in not trying to struggle in college for my degree.– Anonymous"
        />
      </div>
    </>
  );
}

export default Burnout;
