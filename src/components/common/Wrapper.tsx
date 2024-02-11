import {FC, ReactNode} from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export const Wrapper: FC<Props> = ({className = ``, children}) => {
  return (
    <div
      className={`
        wrapper

        w-full
        h-full

        ${className}
      `}
    >
      {children}
    </div>
  );
};
