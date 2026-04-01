import Header from "../Header";
import ProfileCard from "../ProfileCard";
import TextWithHeader from "../TextWithHeader";
import myProfilePic from "../assets/035_small.png";
import Presentpic from "../assets/img2.jpg";
function About() {
  return (
    <>
      <Header title="About The Creator" subtitle="This is the about page for my project!" />

      <div className="grid grid-cols-2 gap-4">
        <ProfileCard
          cardHeadert=<strong>Present me</strong>
          cardSubtitlet="What I am now..."
          cardPict={Presentpic}
          cardBlurbt="I'm part of the Oakland Tech Robotics team as a manager and logistics coordinator."
          cardHeader="Lucius Sixtos"
          cardPic={myProfilePic}
          cardSubtitle="A little bit about me..."
          cardBlurb=" I love 3D modeling on blender and graphic design."
        />
      </div>
      <TextWithHeader
        mySubtitle="My mission"
        myText="My mission is to bring light to an issue that is often overlooked in the mental state of men. I want to create a safe space for men to talk about their feelings and mental health without fear of judgement. I want to create a community where men can support each other and share their experiences. I want to create a platform where men can release their emotions and find solace in knowing they are not alone."
      />
    </>
  );
}

export default About;