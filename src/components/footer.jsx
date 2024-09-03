import Logo2White from '../assets/images/logo2_white.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Footer() {
  return (
    <footer className="w-full bg-primary_pri50 py-10 px-20 lg:px-15 md:px-10 sm:px-5 font-poppins">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center mb-6">
          <img src={Logo2White} alt="Logo" className="h-12 md:h-10 sm:h-8" />
          <div className="text-white font-semibold ml-2 text-lg md:text-base sm:text-sm">Ceylonscapes</div>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-6 sm:gap-4 justify-center mb-6">
          <div className="text-white font-medium text-lg md:text-base sm:text-sm">Home</div>
          <div className="text-white font-medium text-lg md:text-base sm:text-sm">Destinations</div>
          <div className="text-white font-medium text-lg md:text-base sm:text-sm">Experience</div>
          <div className="text-white font-medium text-lg md:text-base sm:text-sm">Trip Planner</div>
          <div className="text-white font-medium text-lg md:text-base sm:text-sm">Ceylon Ai</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-white font-medium text-lg md:text-base sm:text-sm mb-3">Stay in touch</div>

          <div className="flex gap-8 md:gap-6 sm:gap-4">
            <InstagramIcon className="text-white text-4xl md:text-3xl sm:text-2xl" />
            <FacebookOutlinedIcon className="text-white text-4xl md:text-3xl sm:text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;