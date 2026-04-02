import Header from "../Header";
import News from "../newstemplate";
import Presentpic from "../assets/pfp.png";
function Home() {
  return (
    <>
      <Header title= <strong> Blues4Truth </strong>/>

      <div className="grid grid-cols-1 gap-4">
        <News
          cardHeadert=<strong> Quote of the Day:</strong>
          cardPict={Presentpic}
          cardBlurbt="By clicking on the button below, a tab will open that will showcase the app and it's progress. If the app doesn't load, then the server needs to be reset from both ends."
          
        />
      </div>
    </>
  );
}

export default Home;