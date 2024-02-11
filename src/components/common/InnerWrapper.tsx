import {FC, ReactNode} from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export const InnerWrapper: FC<Props> = ({className = ``, children}) => {
  return (
    <div
      className={`
        inner__wrapper

        w-full
        max-w-[1920px]
        mx-auto

        ${className}
      `}
    >
      {children}
    </div>
  );
};
