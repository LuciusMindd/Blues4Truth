import Header from "../Header";
import ProfileCard from "../ProfileCard";
import myProfilePic from "../assets/postits/topicicons/isolation.png";
import Presentpic from "../assets/postits/topicicons/burnout.png";
import Presentpic2 from "../assets/postits/topicicons/fatherhood.jpg";
import Presentpic3 from "../assets/postits/topicicons/masc.jpg";
function About() {
  const handleBurnoutClick = () => {
    window.location.href = "/burnout";
  };

  const handleIsolationClick = () => {
    window.location.href = "/isolation";
  };

   const handleFatherhoodClick = () => {
    window.location.href = "/fatherhood";
  };

  return ( <>
      <Header title="Latest theraputic topics" subtitle="Most popular topics today..." />

      <div className="grid grid-cols-2 gap-4">
        <ProfileCard
          cardHeadert={<strong>Burnout</strong>}
          cardSubtitlet="500k Members"
          cardPict={Presentpic}
          cardBlurbt="A community of when men are often overwhelmed from the world."
          cardHeader="Isolation"
          cardPic={myProfilePic}
          cardSubtitle="492k Members"
          cardBlurb="A community for those feeling disconnected from the world."
          onClickLeft={handleBurnoutClick}
          onClickRight={handleIsolationClick}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProfileCard
          cardHeadert={<strong>Fatherhood</strong>}
          cardSubtitlet="362k Members"
          cardPict={Presentpic2}
          cardBlurbt="The dificulties of a father's mentality in today's world."
          cardHeader="Masculinity"
          cardPic={Presentpic3}
          cardSubtitle="280k Members"
          cardBlurb="When most men are obligated to prove their worth to the world, and how that can be a struggle from what they see."
          onClickLeft={handleFatherhoodClick}
        />
      </div>
    </>
  );
}

export default About;