import {FC, ReactNode} from "react";

interface Props {
  variant?: `filled` | `outlined` | `custom`;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  variant = `outlined`,
  disabled = false,
  className = ``,
  children,
  onClick,
}) => {
  const variants = {
    filled: `bg-orange text-white hover:bg-orange-300 focus:bg-orange-200 focus:text-orange`,
    outlined: `border border-gray border-solid text-gray-100 hover:bg-orange hover:text-white focus:bg-orange-200 focus:text-orange`,
    custom: ``,
  };

  return (
    <button
      className={`
        button

        inline-flex
        items-center
        gap-2
        px-5
        py-3
        rounded-xl
        cursor-pointer
        transition-all
        duration-300
        outline-0

        disabled:opacity-50
        disabled:cursor-default

        ${className}
        ${variants[variant]}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
