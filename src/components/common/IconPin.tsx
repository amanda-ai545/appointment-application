import {FC} from "react";

interface Props {
  color?: string;
}

export const IconPin: FC<Props> = ({color = `black`}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.99999 10.8334C11.3807 10.8334 12.5 9.71407 12.5 8.33335C12.5 6.95264 11.3807 5.83335 9.99999 5.83335C8.61928 5.83335 7.49999 6.95264 7.49999 8.33335C7.49999 9.71407 8.61928 10.8334 9.99999 10.8334Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99999 18.3334C13.3333 15 16.6667 12.0153 16.6667 8.33335C16.6667 4.65146 13.6819 1.66669 9.99999 1.66669C6.3181 1.66669 3.33333 4.65146 3.33333 8.33335C3.33333 12.0153 6.66666 15 9.99999 18.3334Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
