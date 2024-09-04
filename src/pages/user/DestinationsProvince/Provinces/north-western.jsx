export default function NorthWestern() {
  return (
    <div className="ps-5">
      <div className="text-black font-inter text-[20px] font-medium leading-normal underline decoration-primary_pri50 underline-offset-8 decoration-4">
        North Western Province
      </div>

      <div className="text-black mt-5 font-inter text-[12px] md:text-[14px] lg:text-[16px] font-semibold leading-normal">
        Top five places to visit
      </div>
      <ul className="list-none pl-2 mt-2 space-y-2 text-[12px] md:text-[14px] lg:text-[16px]">
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Kurunegala
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Negombo
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Chilaw
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Hettipola
        </li>
        <li className="before:content-['-'] before:mr-2 before:text-black">
          Maho
        </li>
      </ul>
      <div className="mt-4 text-[12px] md:text-[14px] lg:text-[16px]">
        <div>
          The North Western Province is known for its rich cultural heritage and
          beautiful coastal landscapes. Kurunegala, the provincial capital, is a
          historic city surrounded by ancient temples and scenic views. The
          area’s cultural significance is highlighted by its historical sites
          and traditional architecture.
        </div>
        <div className="mt-2">
          Negombo, a popular coastal town, is renowned for its lively fishing
          industry, picturesque beaches, and vibrant markets. Chilaw offers a
          serene coastal experience with its lagoons and beaches, making it a
          great destination for relaxation and nature enthusiasts.
        </div>
        <div className="mt-2">
          Hettipola provides a glimpse into rural Sri Lankan life, with its lush
          landscapes and traditional villages. Maho, known for its tranquil
          environment, is an ideal spot for those seeking a peaceful retreat.
          The North Western Province combines cultural richness with natural
          beauty, offering a diverse range of experiences for visitors.
        </div>
      </div>
    </div>
  );
}
