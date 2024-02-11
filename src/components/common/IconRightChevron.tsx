import {FC} from "react";

interface Props {
  color?: string;
}

export const IconRightChevron: FC<Props> = ({color = `black`}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        className="icon-fill"
        d="M7.25801 14.4164C7.3351 14.4936 7.42667 14.5549 7.52748 14.5968C7.6283 14.6386 7.73636 14.6601 7.84551 14.6601C7.95465 14.6601 8.06271 14.6386 8.16353 14.5968C8.26434 14.5549 8.35591 14.4936 8.43301 14.4164L12.258 10.5914C12.3353 10.5143 12.3965 10.4227 12.4384 10.3219C12.4802 10.2211 12.5017 10.113 12.5017 10.0039C12.5017 9.89475 12.4802 9.78668 12.4384 9.68587C12.3965 9.58506 12.3353 9.49349 12.258 9.41639L8.43301 5.59139C8.35585 5.51424 8.26426 5.45304 8.16346 5.41129C8.06266 5.36953 7.95461 5.34804 7.84551 5.34804C7.7364 5.34804 7.62836 5.36953 7.52755 5.41128C7.42675 5.45304 7.33516 5.51424 7.25801 5.59139C7.18085 5.66854 7.11965 5.76013 7.0779 5.86094C7.03615 5.96174 7.01466 6.06978 7.01466 6.17889C7.01466 6.288 7.03615 6.39604 7.0779 6.49684C7.11965 6.59765 7.18085 6.68924 7.25801 6.76639L10.4913 10.0081L7.25801 13.2414C6.93301 13.5664 6.94134 14.0997 7.25801 14.4164Z"
        fill={color}
      />
    </svg>
  );
};
