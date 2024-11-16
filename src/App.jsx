import { useState } from "react";
import "./App.css";
import Recipies from "./Components/Receipies/Recipies";
import WantToCook from "./Components/WantToCook/WantToCook";
import CurrentlyCooking from "./Components/CurrentlyCooking/CurrentlyCooking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [wantToCooks, setwantToCooks] = useState([]);
  const [currentCooks, setCurrentCooks] = useState([]);
  const [cookingTime, setCookingTime] = useState(0);
  const [foodcalorie, totalCalorie] = useState(0);

  const perparingCook = (item, time, calorie) => {
    const newWantToCooks = wantToCooks.filter(
      (wantToCook) => wantToCook.recipe_id !== item.recipe_id
    );

    const newtime = time + cookingTime;
    setCookingTime(newtime);

    const newCalories = calorie + foodcalorie;
    totalCalorie(newCalories);

    const newCurrentCooks = [...currentCooks, item];
    setCurrentCooks(newCurrentCooks);
    setwantToCooks(newWantToCooks);
  };

  const handleWantToCook = (cook) => {
    const isExist = wantToCooks.find(
      (wantToCook) => wantToCook.recipe_id === cook.recipe_id
    );
    if (isExist) {
      toast("This item is alreday selected!");
    } else {
      const newwantToCooks = [...wantToCooks, cook];
      setwantToCooks(newwantToCooks);
    }
  };

  return (
    <>
      <header className="container mx-auto">
        <nav className="flex gap-x-2  mt-3 items-center justify-between  ">
          <h1 className="text-[#150B2B] lg:text-2xl text-xs">
            Receipe Calorie
          </h1>

          <div className="flex  text-center gap-x-1 lg:gap-x-6 ml-1 lg:ml-6">
            <a href="" className="text-xs lg:text-xl">
              Home
            </a>
            <a href="" className="text-xs lg:text-xl">
              Recipies
            </a>
            <a href="" className="text-xs lg:text-xl">
              About
            </a>
            <a href="" className="text-xs lg:text-xl">
              Search
            </a>
          </div>

          <div className="flex  rounded-3xl items-center justify-center lg:ml-6  ">
            <div className="flex lg:w-[260px] w-[80px]  bg-[#150B2B0C]  ">
              <img
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                src="../images/search.jpg"
                alt=""
              />
              <input
                className="lg:text-xl text-xs w-full lg:ml-1"
                type="text"
                placeholder="Search"
              />
            </div>

            <div className="lg:w-[48px] lg:h-[48px] w-[32px] h-[32px] bg-green-700 p-[2px] flex justify-center items-center    rounded-full">
              <img
                className="lg:w-[32px] lg:h-[32px] w-[20px] h-[20px] object-cover rounded-full"
                src="../images/profile.jpg"
                alt=""
              />
            </div>
          </div>
        </nav>

        <div className="mt-3 bg-[url('../images/background.jpg')] bg-cover bg-center  h-[400px] sm:h-[600px] md:h-[800px] lg:h-[700px] pt-[160px] lg:pt-[260px]   ">
          <h1 className="h-[100px] lg:w-[700px] h-full text-[#FFF] text-center text-3xl lg:text-5xl  mx-auto">
            Discover an amazing class for you , which will be great!
          </h1>

          <p className="mt-4 text-center mx-auto  text-[#FFF] text-xs lg:text-xl  lg:w-[700px]">
            Cooking is the art of preparing food by combining ingredients with
            care and technique, creating nourishing, flavorful, and often
            comforting dishes.
          </p>

          <div className="flex mt-10 ml-10  lg:ml-32 items-center justify-center lg:mr-10">
            <button className="bg-[#0BE58A] text-[#150B2B] text-center rounded-[50px] lg:px-6 px-3">
              Explore Now
            </button>
            <button className="ml-4 rounded-[50px] border[1px]  border-white text-[#FFFFFF] text-center ">
              Subscribe Now
            </button>
          </div>
        </div>
      </header>

      {/* our recipe section */}

      <section className="mt-4 container mx-auto">
        <h1 className="text-center mt-4 lg:mt-8 text-[#150B2B] text-4xl">
          Our Reicipies
        </h1>

        <p className="text-center mt-4 lg:mt-6 text-xl text-[#150B2B99]">
          Here you will find the best recepies of our restaurants which are very
          popular among our clients!!!
        </p>

        <ToastContainer />

        <div className="flex gap-x-1 mt-3 lg:mt-5 ">
          <div className=" w-[48%]">
            <p>1st div</p>
            <Recipies handleWantToCook={handleWantToCook}></Recipies>
          </div>

          <div className="w-[48%] rounded-[16px] border border-[#28282833]">
            <WantToCook
              perparingCook={perparingCook}
              wantToCooks={wantToCooks}
            ></WantToCook>
            <CurrentlyCooking
              currentCooks={currentCooks}
              cookingTime={cookingTime}
              foodcalorie={foodcalorie}
            ></CurrentlyCooking>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
