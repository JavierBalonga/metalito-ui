import { SVGAttributes } from "react";

const ArrowDownIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...props}
    >
      <polyline points="5 8.5 12 15.5 19 8.5" />
    </svg>
  );
};

export default ArrowDownIcon;
