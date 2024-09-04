import BackgroundImage from "../../assets/images/background_home.jpg";
import Button from "@mui/material/Button";

import TopAttraction1Img from "../../assets/images/top_attraction1.png";
import TopAttraction2Img from "../../assets/images/top_attraction2.png";
import TopAttraction3Img from "../../assets/images/top_attraction3.png";
import TopAttraction4Img from "../../assets/images/top_attraction4.png";
import TopAttraction5Img from "../../assets/images/top_attraction5.png";
import TopAttraction6Img from "../../assets/images/top_attraction6.png";
import TopAttraction7Img from "../../assets/images/top_attraction7.png";
import TopAttraction8Img from "../../assets/images/top_attraction8.png";

import TopExp1Img from "../../assets/images/top_exp1.png";
import TopExp2Img from "../../assets/images/top_exp2.png";
import TopExp3Img from "../../assets/images/top_exp3.png";
import TopExp4Img from "../../assets/images/top_exp4.png";
import TopExp5Img from "../../assets/images/top_exp5.png";
import TopExp6Img from "../../assets/images/top_exp6.png";

import IconStarImg from "../../assets/images/icon_star.png";
import HotelImg from "../../assets/images/hotel.png";

function Home() {
  return (
    <div className="font-poppins">
      <div className="relative">
        <div className="w-full">
          <img
            src={BackgroundImage}
            className="h-full w-full object-cover sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-[100vh]"
            alt=""
          />
        </div>

        <div className="absolute bottom-[30px] w-full flex flex-col items-center p-4">
          <div
            className="text-white text-[90px] font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px]"
            style={{
              textShadow: "0 0 10px rgba(0, 0, 0, 1)",
            }}
          >
            Explore the Wonders of
          </div>
          <div
            className="text-white font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[200px]"
            style={{
              textShadow: "0 0 10px rgba(0, 0, 0, 1)",
              marginBottom: "-10px",
            }}
          >
            Sri Lanka
          </div>
        </div>
      </div>

      <div className="my-10 flex flex-col items-center">
        <div className="text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[20em]">
          Sri Lanka's beauty is as diverse as it is captivating, offering lush
          landscapes, pristine beaches, and rich cultural heritage. From the
          misty mountains of Nuwara Eliya to the ancient ruins of Anuradhapura,
          every corner tells a story of its vibrant history and natural
          splendor. The island's biodiversity, highlighted by its national parks
          like Yala and Udawalawe, teems with exotic wildlife such as elephants
          and leopards. With its warm hospitality and flavorsome cuisine, Sri
          Lanka invites travelers to explore its scenic wonders and immerse
          themselves in its colorful tapestry of traditions.
        </div>

        <Button
          href="provinces/western"
          variant="contained"
          sx={{ textTransform: "none", fontSize: "20px", marginTop: "2.5rem" }}
          className="!font-poppins !font-medium !bg-primary_pri50 !text-white !rounded-full !px-4 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"
        >
          Start Your Adventure
        </Button>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-2xl font-medium my-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[40px]">
          Top Attractions
        </div>

        <div className="w-full flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-[32px]">
          <div className="flex w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[20em] gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
            <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
              <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px] w-full">
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
                  <img
                    src={TopAttraction1Img}
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
                  <img
                    src={TopAttraction2Img}
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full">
                <img src={TopAttraction3Img} className="w-full h-auto" alt="" />
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
              <div className="w-full">
                <img src={TopAttraction4Img} className="w-full h-auto" alt="" />
              </div>
              <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px] w-full">
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
                  <img
                    src={TopAttraction5Img}
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
                  <img
                    src={TopAttraction6Img}
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[20em] gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
            <div className="w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 2xl:w-[76.4%]">
              <img src={TopAttraction7Img} className="w-full h-auto" alt="" />
            </div>
            <div className="w-full sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 2xl:w-[23.6%]">
              <img src={TopAttraction8Img} className="w-full h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <div className="text-2xl font-medium text-center my-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[40px]">
          Top Experience the Rich Culture of Sri Lanka
        </div>

        <div className="text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[20em] mb-5">
          Experiencing the rich culture of Sri Lanka is a journey through time
          and tradition, where ancient customs blend seamlessly with modern
          life. The island's cultural heritage is showcased in its majestic
          temples like the Sacred Tooth Relic in Kandy, vibrant festivals such
          as the Esala Perahera, and the intricate art of traditional dance and
          music.
        </div>

        <div className="flex w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[20em] gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
          <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
            <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px] w-full">
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
                <img src={TopExp1Img} className="w-full h-auto" alt="" />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
                <img src={TopExp2Img} className="w-full h-auto" alt="" />
              </div>
            </div>
            <div className="w-full">
              <img src={TopExp3Img} className="w-full h-auto" alt="" />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px]">
            <div className="w-full">
              <img src={TopExp4Img} className="w-full h-auto" alt="" />
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-[32px] w-full">
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
                <img src={TopExp5Img} className="w-full h-auto" alt="" />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-[50%]">
                <img src={TopExp6Img} className="w-full h-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <div className="text-2xl font-medium my-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[40px]">
          What's New
        </div>

        <div className="text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[20em] mb-5">
          We're excited to introduce our new AI-powered trip planner, designed
          to craft personalized travel itineraries based on your unique inputs
          like the number of days, destination, and personal preferences.
          Whether you're seeking adventure, relaxation, or cultural exploration,
          our AI takes the guesswork out of planning by curating the perfect
          trip tailored just for you. With this innovative feature, planning
          your next getaway becomes effortless, allowing you to focus on
          enjoying the journey while we handle the details.
        </div>

        <Button
          variant="contained"
          sx={{ textTransform: "none", fontSize: "20px" }}
          className="!font-poppins !font-medium !bg-primary_pri50 !text-white !rounded-full !px-4 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"
        >
          Plan Your Trip Now <img src={IconStarImg} className="ms-2" alt="" />
        </Button>

        <div className="text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[20em] my-5">
          Our latest innovation is an all-in-one AI assistant designed to handle
          all your tourism-related needs effortlessly. From providing general
          travel information and helping you apply for visas to booking hotels
          and planning detailed, this AI assistant is your ultimate travel
          companion. It simplifies the entire travel experience by managing
          tasks seamlessly, allowing you to enjoy a stress-free journey. Whether
          you're planning a quick getaway or a complex trip, our AI assistant
          ensures that every aspect of your travel is taken care of with ease
          and precision.
        </div>

        <Button
          variant="contained"
          sx={{ textTransform: "none", fontSize: "20px" }}
          className="!font-poppins !font-medium !bg-primary_pri50 !text-white !rounded-full !px-4 !py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-[24px] 2xl:py-[10px]"
        >
          Ceylon Ai <img src={IconStarImg} className="ms-2" alt="" />
        </Button>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[20em] py-16">
        <img src={HotelImg} className="w-full rounded-lg" alt="" />
      </div>
    </div>
  );
}

export default Home;
