import { SVGAttributes } from "react";

const ArrowLeftIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
};

export default ArrowLeftIcon;
