export default function Southern() {
  return (
    <div className="ps-5">
      <div className="text-black font-inter text-[20px] font-medium leading-normal underline decoration-primary_pri50 underline-offset-8 decoration-4">
        Southern Province
      </div>

      <div className="text-black mt-5 font-inter text-[12px] md:text-[14px] lg:text-[16px] font-semibold leading-normal">
        Top five places to visit
      </div>
      <ul className="list-none pl-2 mt-2 space-y-2 text-[12px] md:text-[14px] lg:text-[16px]">
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Galle
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Mirissa
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Unawatuna
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Hikkaduwa
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Tangalle
        </li>
      </ul>
      <div className="mt-4 text-[12px] md:text-[14px] lg:text-[16px]">
        <div>
          The Southern Province is renowned for its stunning coastal towns and
          rich colonial heritage. Galle, with its historic fortifications and
          charming old town, offers a glimpse into Sri Lanka's colonial past.
          The fort, a UNESCO World Heritage Site, is a well-preserved example of
          European architecture surrounded by beautiful ocean views.
        </div>
        <div className="mt-2">
          Mirissa is famous for its picturesque beaches and whale watching
          opportunities. The serene environment makes it an ideal spot for
          relaxation and marine life enthusiasts. Unawatuna, another popular
          beach destination, is known for its golden sands and vibrant beach
          scene, perfect for sunbathing and water sports.
        </div>
        <div className="mt-2">
          Hikkaduwa is a vibrant beach town renowned for its coral reefs and
          lively nightlife. Tangalle offers a more tranquil experience with its
          pristine beaches and secluded atmosphere. The Southern Province
          provides a diverse range of coastal experiences, from historical sites
          to serene retreats, catering to various interests.
        </div>
      </div>
    </div>
  );
}
