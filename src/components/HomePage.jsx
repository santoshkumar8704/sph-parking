import React from "react";
import Navbar from "./Navbar";
import Bgimage from "./Bgimage";
import Slider from "./slider/Slider";
import MissionSection from "./MissionSection";
import { Link } from "react-router-dom"
import Featuresex from "./Featuresex";

const HomePage = () => {
  const bg =
    "https://th.bing.com/th/id/R.c6200670cfdec870d9d6f354a658b8de?rik=UzPwTWABnh0koA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f17%2f336946-parking_lot.jpg&ehk=sdJUKpAILs1M0mrgzuynLA6OdSWNJij2Uiyfj9C60Ho%3d&risl=1&pid=ImgRaw&r=0";
  const bg2 =
    "https://wallpapercrafter.com/desktop/352-cars-parking-backlight-neon-night-4k.jpg";
  const style2 = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div className="container">
        <div className="h-screen w-screen text-white" style={style2}>
          <div className=" mx-auto px-4 flex flex-col py-8 ">
            <h1 className="text-3xl font-bold text-center">
              Welcome to ParkVue
            </h1>
            <p className="text-lg mt-3 text-white font-bold text-center bg-orange-300 rounded-full py-4 px-6 ml-[500px] w-[500px]">
              Book your parking slots with ease!
            </p>
            <div className="mt-[150px] ml-[200px] text-black flex space-x-10">
              <div className="w-[500px] h-[300px] bg-white bg-opacity-90 shadow-md  rounded-xl">
                <h1 className="text-xl font-bold text-center mt-20">Book your parking slot now</h1>
                <p className="text-lg ml-5">Book your parking slot now and enjoy unlimited prizes and offers</p>
                <Link to="/parkingpage">
                  <button className="bg-orange-400 text-white font-bold  w-[200px] p-2 rounded-2xl ml-[150px]">
                    Book Now

                  </button>
                </Link>
              </div>
              <div className="w-[500px] h-[300px] bg-white bg-opacity-90 shadow-md  rounded-xl">
                <h1 className="text-xl font-bold text-center mt-20">Do you have free unused space?</h1>
                <p className="text-lg ml-5">List that place on park vue and earn money from that unused assets</p>
                <Link to="/listings">
                  <button className="bg-orange-400 text-white font-bold  w-[200px] p-2 rounded-2xl ml-[150px]">
                    List Now

                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
        <Featuresex />

        </div>
        <MissionSection />
        <div className="container ml-[200px] mt-20">
          <Slider />
        </div>
        <Bgimage
          Link1
          bg={bg}
          heading="Wanna enjoy stressless parking?"
          text="Book Your First parking slot now and get valuable rewards and offers.parking made easy with park Vue"
          button="Book Now"
        />
      </div>
    </div>
  );
};

export default HomePage;