import BackgroundImage from '../../assets/images/background_home.jpg';
import Button from '@mui/material/Button';

import TopAttraction1Img from '../../assets/images/top_attraction1.png';
import TopAttraction2Img from '../../assets/images/top_attraction2.png';
import TopAttraction3Img from '../../assets/images/top_attraction3.png';
import TopAttraction4Img from '../../assets/images/top_attraction4.png';
import TopAttraction5Img from '../../assets/images/top_attraction5.png';
import TopAttraction6Img from '../../assets/images/top_attraction6.png';
import TopAttraction7Img from '../../assets/images/top_attraction7.png';
import TopAttraction8Img from '../../assets/images/top_attraction8.png';

import TopExp1Img from '../../assets/images/top_exp1.png';
import TopExp2Img from '../../assets/images/top_exp2.png';
import TopExp3Img from '../../assets/images/top_exp3.png';
import TopExp4Img from '../../assets/images/top_exp4.png';
import TopExp5Img from '../../assets/images/top_exp5.png';
import TopExp6Img from '../../assets/images/top_exp6.png';

import IconStarImg from '../../assets/images/icon_star.png';
import HotelImg from '../../assets/images/hotel.png';

function Home() {
    return (
        <div>
            <div className={"relative"}>
                <div className={'w-full'}>
                    <img src={BackgroundImage} className={'h-[100vh] w-full object-cover'} alt=""/>
                </div>

                <div className={"absolute bottom-[-30px] w-full flex flex-col items-center"}>
                    <div className={"text-white text-[90px] font-semibold font-poppins"} style={{
                        textShadow: "0 0 10px rgba(0, 0, 0, 1)",
                    }}>Explore the Wonders of</div>
                    <div className={"text-white text-[200px] relative bottom-10 font-semibold font-poppins"} style={{
                        textShadow: "0 0 10px rgba(0, 0, 0, 1)",
                    }}>Sri Lanka</div>
                </div>
            </div>

            <div className={"my-10 font-poppins font-regular flex flex-col items-center"}>
                <div className={"text-center px-[20em] max-2xl:px-[15em] max-xl:px-[10em]"}>
                    Sri Lanka's beauty is as diverse as it is captivating, offering lush landscapes, pristine beaches, and rich cultural heritage.
                    From the misty mountains of Nuwara Eliya to the ancient ruins of Anuradhapura, every corner tells a story of its vibrant history
                    and natural splendor. The island's biodiversity, highlighted by its national parks like Yala and Udawalawe, teems with exotic
                    wildlife such as elephants and leopards. With its warm hospitality and flavorsome cuisine, Sri Lanka invites travelers to explore
                    its scenic wonders and immerse themselves in its colorful tapestry of traditions.
                </div>

                <Button variant="contained" sx={{textTransform: 'none', fontSize: '20px', marginTop: '2.5rem'}}
                        className={"!font-poppins !font-medium !bg-primary_pri50 !text-white !rounded-full !px-[24px] !py-[10px]"}>Start Your Adventure</Button>
            </div>

            <div className={"flex flex-col items-center"}>
                <div className={"text-[40px] font-poppins font-medium my-10"}>Top Attractions</div>
                <div className={"w-full flex flex-col gap-y-[32px]"}>
                    <div className={"flex w-full px-[20em] max-2xl:px-[15em] max-xl:px-[10em] gap-[32px]"}>
                        <div className={"flex flex-col w-[50%] gap-[32px] gap-y-[32px]"}>
                            <div className={"flex gap-[32px] w-full"}>
                                <div className={"w-[50%]"}>
                                    <img src={TopAttraction1Img} className={"w-full"} alt=""/>
                                </div>
                                <div className={"w-[50%]"}>
                                    <img src={TopAttraction2Img} className={"w-full"} alt=""/>
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <img src={TopAttraction3Img} className={"w-full"} alt=""/>
                            </div>
                        </div>
                        <div className={"flex flex-col w-[50%] gap-[32px] gap-y-[32px]"}>
                            <div className={"w-full"}>
                                <img src={TopAttraction4Img} className={"w-full"} alt=""/>
                            </div>
                            <div className={"flex gap-[32px] w-full"}>
                                <div className={"w-[50%]"}>
                                    <img src={TopAttraction5Img} className={"w-full"} alt=""/>
                                </div>
                                <div className={"w-[50%]"}>
                                    <img src={TopAttraction6Img} className={"w-full"} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex w-full px-[20em] max-2xl:px-[15em] max-xl:px-[10em] gap-[32px]"}>
                        <div className={"w-[76.4%]"}>
                            <img src={TopAttraction7Img} className={"w-full"} alt=""/>
                        </div>
                        <div className={"w-[23.6%]"}>
                            <img src={TopAttraction8Img} className={"w-full h-full"} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flex flex-col items-center mt-10"}>
                <div className={"text-[40px] font-poppins font-medium my-10"}>Top Experience the Rich Culture of Sri Lanka</div>

                <div className={"text-center px-[20em] max-2xl:px-[15em] max-xl:px-[10em] mb-5"}>
                    Experiencing the rich culture of Sri Lanka is a journey through time and tradition, where ancient customs blend seamlessly with modern life.
                    The island's cultural heritage is showcased in its majestic temples like the Sacred Tooth Relic in Kandy, vibrant festivals such as the
                    Esala Perahera, and the intricate art of traditional dance and music.
                </div>

                <div className={"flex w-full px-[20em] max-2xl:px-[15em] max-xl:px-[10em] gap-[32px]"}>
                    <div className={"flex flex-col w-[50%] gap-[32px] gap-y-[32px]"}>
                        <div className={"flex gap-[32px] w-full"}>
                            <div className={"w-[50%]"}>
                                <img src={TopExp1Img} className={"w-full"} alt=""/>
                            </div>
                            <div className={"w-[50%]"}>
                                <img src={TopExp2Img} className={"w-full"} alt=""/>
                            </div>
                        </div>
                        <div className={"w-full"}>
                            <img src={TopExp3Img} className={"w-full"} alt=""/>
                        </div>
                    </div>
                    <div className={"flex flex-col w-[50%] gap-[32px] gap-y-[32px]"}>
                        <div className={"w-full"}>
                            <img src={TopExp4Img} className={"w-full"} alt=""/>
                        </div>
                        <div className={"flex gap-[32px] w-full"}>
                            <div className={"w-[50%]"}>
                                <img src={TopExp5Img} className={"w-full"} alt=""/>
                            </div>
                            <div className={"w-[50%]"}>
                                <img src={TopExp6Img} className={"w-full"} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flex flex-col items-center mt-10"}>
                <div className={"text-[40px] font-poppins font-medium my-10"}>What's New</div>

                <div className={"text-center px-[20em] max-2xl:px-[15em] max-xl:px-[10em] mb-5"}>
                    We're excited to introduce our new AI-powered trip planner, designed to craft personalized travel itineraries
                    based on your unique inputs like the number of days, destination, and personal preferences. Whether you're seeking
                    adventure, relaxation, or cultural exploration, our AI takes the guesswork out of planning by curating the perfect
                    trip tailored just for you. With this innovative feature, planning your next getaway becomes effortless, allowing
                    you to focus on enjoying the journey while we handle the details.
                </div>

                <Button variant="contained" sx={{textTransform: 'none', fontSize: '20px'}}
                        className={"!font-poppins !font-medium !bg-primary_pri50 !text-white !rounded-full !px-[24px] !py-[10px]"}>Plan Your Trip Now <img
                    src={IconStarImg} className={"ms-2"} alt=""/></Button>

                <div className={"text-center px-[20em] max-2xl:px-[15em] max-xl:px-[10em] my-5"}>
                    Our latest innovation is an all-in-one AI assistant designed to handle all your tourism-related needs effortlessly.
                    From providing general travel information and helping you apply for visas to booking hotels and planning detailed,
                    this AI assistant is your ultimate travel companion. It simplifies the entire travel experience by managing tasks seamlessly,
                    allowing you to enjoy a stress-free journey. Whether you're planning a quick getaway or a complex trip, our AI assistant
                    ensures that every aspect of your travel is taken care of with ease and precision
                </div>

                <Button variant="contained" sx={{textTransform: 'none', fontSize: '20px'}}
                        className={"!font-poppins !font-medium !bg-primary_pri50 !text-white !rounded-full !px-[24px] !py-[10px]"}>Ceylon Ai <img
                    src={IconStarImg} className={"ms-2"} alt=""/></Button>

            </div>

            <div className={"w-full px-[20em] max-2xl:px-[15em] max-xl:px-[10em] py-16"}>
                <img src={HotelImg} className={"w-full rounded-lg"} alt=""/>
            </div>
        </div>
    );
}

export default Home;