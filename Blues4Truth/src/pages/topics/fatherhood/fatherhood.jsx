import Header from "../../../Header";
import Hometemp from "../../../hometemp";
import Presentpic from "../../../assets/postits/defaultpfp.jpg";
import Presentpic2 from "../../../assets/postits/pfp1.jpg";
import Presentpic3 from "../../../assets/postits/pfp2.jpg";
function Fatherhood() {
  return (
    <>
      <Header title={<strong>Isolation</strong>} />

      <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert={<strong>I didnt expect it to feel this quiet after work</strong>}
          cardPict={Presentpic}
          cardBlurbt="Got home today and my kid was already asleep. I stood in the kitchen eating leftovers thinking I’d feel proud or accomplished, but mostly I just felt… kind of distant. I love being a dad, but no one told me how strange the silence after work can feel. – Anonymous"
        />
      </div>


      <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert={<strong>First time my son said “I’m proud of you"</strong>}
          cardPict={Presentpic2}
          cardBlurbt="We were fixing a bike together and out of nowhere he just said it. I laughed it off but I’ve been thinking about it all day. I don’t think I hear that phrase enough in life in general. – yougottobeninja242"
        />
      </div>

    <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert={<strong>I think I’m doing okay, but I’m not sure</strong>}
          cardPict={Presentpic}
          cardBlurbt="Work ran late again. She was already asleep when I got home. I left a note by her bed but it doesn’t really fix anything. I keep telling myself it’s temporary, but I don’t know how temporary childhood is. – Anonymous"
        />
      </div>
    </>
  );
}

export default Fatherhood;