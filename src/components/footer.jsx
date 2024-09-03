import Logo2White from '../assets/images/logo2_white.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Footer() {
  return (
    <>
        <div className={"w-full bg-primary_pri50 py-10 px-[20em] max-2xl:px-[15em] max-xl:px-[10em] flex flex-col items-center font-poppins"}>
            <div className={"flex items-center"}>
                <img src={Logo2White} alt=""/>
                <div className={"text-white font-semibold"}>Ceylonscapes</div>
            </div>

            <div className={"flex gap-[72px] justify-center mt-10"}>
                <div className={"text-white font-medium text-[24px]"}>Home</div>
                <div className={"text-white font-medium text-[24px]"}>Destinations</div>
                <div className={"text-white font-medium text-[24px]"}>Experience</div>
                <div className={"text-white font-medium text-[24px]"}>Trip Planner</div>
                <div className={"text-white font-medium text-[24px]"}>Ceylon Ai</div>
            </div>

            <div className={"flex flex-col items-center mt-10"}>
                <div className={"text-white font-medium text-[24px]"}>Stay in touch</div>

                <div className={"flex gap-[32px] mt-3"}>
                    <InstagramIcon className={"text-white !text-4xl"} />
                    <FacebookOutlinedIcon className={"text-white !text-4xl"} />
                </div>
            </div>
        </div>
    </>
  );
}

export default Footer;