import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import News from "../newstemplate";
import Presentpic from "../assets/postits/pong.png";
function Profile() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    navigate("/pong");
  };

  return (
    <>
      <Header title="Mental Games" subtitle="Great games for untangling a stressful day in the world we live in..." />

      <div className="grid grid-cols-1 gap-4">
        <button
          onClick={handleImageClick}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <News
            cardHeadert=<strong> Paddling to Balence</strong>
            cardPict={Presentpic}
            cardBlurbt="Games will be added here soon whenever I have more time for another draft"
            
          />
        </button>
      </div>
    </>
  );
}

export default Profile;