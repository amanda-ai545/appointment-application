type Props = {
  color?: string;
};

export const IconSubscription = ({color = `black`}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.6667 7.91665V5.99998C16.6667 5.06656 16.6667 4.59985 16.485 4.24333C16.3252 3.92973 16.0703 3.67476 15.7567 3.51497C15.4002 3.33332 14.9334 3.33331 14 3.33331H4.33335C3.39993 3.33331 2.93322 3.33331 2.5767 3.51497C2.2631 3.67476 2.00813 3.92973 1.84834 4.24333C1.66669 4.59985 1.66669 5.06656 1.66669 5.99998V14C1.66669 14.9334 1.66669 15.4001 1.84834 15.7566C2.00813 16.0702 2.2631 16.3252 2.5767 16.485C2.93322 16.6666 3.39993 16.6666 4.33335 16.6666L14 16.6666C14.9334 16.6666 15.4002 16.6666 15.7567 16.485C16.0703 16.3252 16.3252 16.0702 16.485 15.7566C16.6667 15.4001 16.6667 14.9334 16.6667 14V12.0833M12.5 9.99998C12.5 9.61277 12.5 9.41916 12.532 9.25816C12.6636 8.59701 13.1804 8.08018 13.8415 7.94867C14.0025 7.91665 14.1961 7.91665 14.5834 7.91665H16.25C16.6372 7.91665 16.8308 7.91665 16.9918 7.94867C17.653 8.08018 18.1698 8.59701 18.3013 9.25816C18.3334 9.41916 18.3334 9.61277 18.3334 9.99998C18.3334 10.3872 18.3334 10.5808 18.3013 10.7418C18.1698 11.4029 17.653 11.9198 16.9918 12.0513C16.8308 12.0833 16.6372 12.0833 16.25 12.0833H14.5834C14.1961 12.0833 14.0025 12.0833 13.8415 12.0513C13.1804 11.9198 12.6636 11.4029 12.532 10.7418C12.5 10.5808 12.5 10.3872 12.5 9.99998Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
