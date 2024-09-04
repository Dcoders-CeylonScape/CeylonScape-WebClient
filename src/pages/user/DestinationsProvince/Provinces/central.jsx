export default function Central() {
  return (
    <div className="ps-5">
      <div className="text-black font-inter text-[20px] font-medium leading-normal underline decoration-primary_pri50 underline-offset-8 decoration-4">
        Central Province
      </div>

      <div className="text-black mt-5 font-inter text-[12px] md:text-[14px] lg:text-[16px] font-semibold leading-normal">
        Top five places to visit
      </div>
      <ul className="list-none pl-2 mt-2 space-y-2 text-[12px] md:text-[14px] lg:text-[16px]">
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Kandy
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Nuwara Eliya
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Ella
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Hatton
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Ramboda
        </li>
      </ul>
      <div className="mt-4 text-[12px] md:text-[14px] lg:text-[16px]">
        <div>
          The Central Province is famed for its scenic highlands and tea
          plantations. Kandy, the cultural capital, is renowned for the Temple
          of the Tooth and its vibrant cultural festivals. The city's rich
          heritage and beautiful lake add to its charm, making it a must-visit
          for those interested in Sri Lankan culture and history.
        </div>
        <div className="mt-2">
          Nuwara Eliya, known as "Little England," is celebrated for its cool
          climate and picturesque landscapes. The area is surrounded by lush tea
          estates and offers stunning views of rolling hills and waterfalls.
          Ella, with its dramatic scenery and outdoor adventures, provides
          opportunities for hiking, sightseeing, and exploring Sri Lanka's
          natural beauty.
        </div>
        <div className="mt-2">
          Hatton, a key area in the tea-growing region, offers a tranquil
          environment and access to scenic train rides through the highlands.
          Ramboda is known for its spectacular waterfall and serene
          surroundings. The Central Province presents a mix of cultural,
          historical, and natural attractions, making it a diverse and
          captivating region for travelers.
        </div>
      </div>
    </div>
  );
}
