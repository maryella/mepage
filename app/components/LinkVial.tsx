export function LinkVial({
  pathD,
  name,
  link,
  square = true,
}: {
  pathD: string;
  link: string;
  name: string;
  square?: boolean;
}) {
  return (
    <div className="flex">
      <a
        href={link}
        target="_blank"
        aria-label={`Link to ${name}`}
        className="group"
      >
        <div className="">
          <div className="flex flex-col w-16 sm:w-24 h-32">
            <div className="h-10 border-4 border-neutral-400 rounded-md group-hover:bg-neutral-600" />
            <div className="flex w-4/5 h-2 border-x-4 border-neutral-400 group-hover:bg-neutral-600 self-center" />
            <div className="h-32 border-4 border-neutral-400 rounded-md  group-hover:bg-neutral-600 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50%"
                viewBox={`0 0 ${square ? "512" : "448"} 512`}
                className="self-center"
              >
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path
                  d={pathD}
                  className="fill-[#e5e5e5] hover:fill-[#ffffff] transition duration-200"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
