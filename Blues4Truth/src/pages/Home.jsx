import Header from "../Header";
import Hometemp from "../hometemp";
import Presentpic from "../assets/postits/Mauro.jpg";
function Home() {
  return (
    <>
      <Header title= <strong> Blues4Truth </strong>/>

      <div className="grid grid-cols-1 gap-4">
        <Hometemp
          cardHeadert=<strong> Quote of the Day:</strong>
          cardPict={Presentpic}
          cardBlurbt="I believe the biggest stigma right now, with mental health, is that a lot of men are not talking about it. – Mauro Ranallo"
          
        />
      </div>
    </>
  );
}

export default Home;