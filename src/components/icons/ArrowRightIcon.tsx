import { SVGAttributes } from "react";

const ArrowRightIcon = (props: SVGAttributes<SVGSVGElement>) => {
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
      <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
};

export default ArrowRightIcon;
