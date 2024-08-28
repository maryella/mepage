import { ReactElement } from "react";
import { sono } from "../fonts";

export function SocialCard({
  pathD,
  name,
  link,
}: {
  pathD: string;
  link: string;
  name: string;
}) {
  return (
    <div className="flex">
      <a href={link} target="_blank" className="group first:-ml-4 last:-mr-4">
        <div className="flex flex-1 py-2 flex-col items-center rounded-md p-4 group-hover:bg-[rgb(var(--foreground-rgb))]/90 transition duration-200 group-hover:shadow-md transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            width="32"
            viewBox="0 0 512 512"
          >
            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path
              d={pathD}
              className="fill-[rgb(var(--foreground-rgb))] group-hover:fill-[rgb(var(--background-start-rgb))] transition duration-200"
            />
          </svg>
          <p
            className={`${sono.className} text-sm font-medium text-center mt-2 group-hover:text-[rgb(var(--background-start-rgb))] transition duration-200`}
          >
            {name}
          </p>
        </div>
      </a>
    </div>
  );
}
