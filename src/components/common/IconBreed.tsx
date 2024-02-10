type Props = {
  color?: string;
};

export const IconBreed = ({color = `black`}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_11_2174)">
        <path
          d="M14.2857 7.14287V10C14.2857 10.3789 14.4362 10.7423 14.7041 11.0102C14.972 11.2781 15.3354 11.4286 15.7143 11.4286H16.4286M16.4286 11.4286C17.1863 11.4286 17.9131 11.1276 18.4489 10.5918C18.9847 10.0559 19.2857 9.32921 19.2857 8.57145V4.28573C19.2857 3.90685 19.1352 3.54349 18.8673 3.27558C18.5994 3.00767 18.236 2.85716 17.8571 2.85716H15.7143C15.2622 2.85673 14.8166 2.74901 14.4143 2.54287C13.0503 1.83107 11.5384 1.44941 9.99999 1.42859C8.45195 1.44493 6.92966 1.82673 5.55714 2.54287C5.16214 2.74135 4.72768 2.84875 4.28571 2.85716H2.14285C1.76397 2.85716 1.40061 3.00767 1.1327 3.27558C0.864789 3.54349 0.714279 3.90685 0.714279 4.28573V8.57145C0.714279 9.32921 1.0153 10.0559 1.55112 10.5918C2.08694 11.1276 2.81366 11.4286 3.57142 11.4286M16.4286 11.4286L15.9857 13.6714C15.7133 15.0588 14.9674 16.3085 13.8756 17.2068C12.7838 18.1051 11.4139 18.5962 9.99999 18.5962C8.58614 18.5962 7.21618 18.1051 6.12437 17.2068C5.03255 16.3085 4.28668 15.0588 4.01428 13.6714L3.57142 11.4286M3.57142 11.4286H4.28571C4.66459 11.4286 5.02795 11.2781 5.29586 11.0102C5.56377 10.7423 5.71428 10.3789 5.71428 10V7.14287M9.28571 14.2857H10.7143"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_2174">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
