import { Outlet, useLocation } from "react-router-dom";
import SLMap from "../../../components/sriLankaMap";
import Gallery from "./Galleries/gallery";
import Gallery_2 from "./Galleries/gallery_2";
import Gallery_3 from "./Galleries/gallery_3";
import ProvinceNavbar from "./province-navbar";

function DestinationsProvince() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  const renderGallery = () => {
    if (
      path.includes("western") ||
      path.includes("southern") ||
      path.includes("northen")
    ) {
      return <Gallery />;
    } else if (
      path.includes("northcentral") ||
      path.includes("eastern") ||
      path.includes("northwestern")
    ) {
      return <Gallery_2 />;
    } else if (
      path.includes("central") ||
      path.includes("uva") ||
      path.includes("sabaragamuwa")
    ) {
      return <Gallery_3 />;
    } else {
      return null;
    }
  };

  return (
    <div className="mt-36">
      <div className="px-10 lg:px-[160px]">
        <div class="text-black font-inter text-[28px] font-bold leading-normal">
          Destinations
        </div>
        <div class="text-black mt-4 font-inter text-[24px] font-medium leading-normal">
          By Province
        </div>
        <div className="mb-10">
          <ProvinceNavbar />
        </div>

        <div className="flex w-full  flex-wrap justify-center">
          <div className="flex w-1/2 min-w-[260px] justify-center ">
            <SLMap />
          </div>
          <div className="w-full md:w-1/2 justify-start">
            <Outlet />
          </div>
        </div>
        <div className="mt-24 mb-24">{renderGallery()}</div>
      </div>
    </div>
  );
}

export default DestinationsProvince;
