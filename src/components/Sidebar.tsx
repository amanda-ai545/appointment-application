import {useState} from "react";

import {Logo} from "@/components/common/Logo";
import {sidebarLinks} from "@/data/sidebar-links";
import {Button} from "./common/Button";
import {IconDoubleLeftChevron} from "./common/IconDoubleLeftChevron";

export const Sidebar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div
      className={`
        sidebar
        fixed
        left-0
        w-60
        h-full
        bg-dark
        transition-all
        duration-300

        ${isToggle ? `w-[120px] [&_ul_p]:hidden [&_li]:justify-center` : ``}
      `}
    >
      <div className="sidebar__logo p-9 border-b border-solid border-white-200 desktop:p-10">
        <h1 className="grid grid-flow-col items-center justify-center gap-3">
          <Logo className="!w-[36px]" />
          <span
            className={`
              text-orange
              font-bold
              uppercase

              ${isToggle ? `hidden` : `inline-block`}
            `}
          >
            Lorem
          </span>
        </h1>
      </div>

      <div className="sidebar__links text-white leading-[19.2px] font-medium">
        <ul className="pt-10 overflow-hidden">
          {sidebarLinks.map((link) => (
            <li
              key={link.title}
              className="
                grid
                grid-flow-col
                justify-start
                gap-3
                py-5
                px-10
                border-r-4
                border-solid
                border-transparent
                text-nowrap
                cursor-pointer
                transition-all
                duration-300

                hover:border-orange-100 
                hover:text-orange-100 
                hover:bg-white-300
                
                [&_.icon-stroke]:stroke-white
                [&_.icon-stroke]:transition-all
                [&_.icon-stroke]:duration-300
                [&_.icon-stroke]:hover:stroke-orange-100 

                [&_.icon-fill]:fill-white
                [&_.icon-fill]:transition-all
                [&_.icon-fill]:duration-300
                [&_.icon-fill]:hover:fill-orange-100
              "
            >
              <div className="sidebar__links-logo w-5">{link.icon}</div>
              <p>{link.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`
          sidebar__footer
          
          grid
          gap-3
          absolute
          right-0
          bottom-0
          left-0
          m-auto
          border-t
          border-solid
          border-white-200

          ${isToggle ? `w-full px-2 py-9` : `w-[220px] p-9 desktop:p-10`}
        `}
      >
        <Logo className="max-w-[20px] mx-auto" />
        <p className="text-white-100 text-xs font-medium text-center">
          © Lorem 2023
        </p>
      </div>

      <Button
        variant="custom"
        className="absolute top-0 -right-4 bottom-0 w-[36px] h-[36px] my-auto !p-2 rounded-lg bg-dark-100"
        onClick={handleToggle}
      >
        <IconDoubleLeftChevron color="white" />
      </Button>
    </div>
  );
};
