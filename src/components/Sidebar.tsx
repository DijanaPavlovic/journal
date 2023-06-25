import {
  IoIosJournal,
  IoIosList,
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosTimer,
} from "react-icons/io";
import type { IconType } from "react-icons";
import cn from "classnames";
import { useEffect, useState } from "react";
import Link from "next/link";

interface SidebarItemProps {
  isExpanded: boolean;
  Icon: IconType | (() => JSX.Element);
  label: string;
  link: string;
  classes?: string;
}

const SidebarItem = ({
  isExpanded,
  Icon,
  label,
  link,
  classes,
}: SidebarItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 200);

      return () => clearTimeout(timeoutId);
    } else {
      setIsVisible(false);
    }
  }, [isExpanded]);

  return (
    <Link
      href={link}
      className={cn(
        `flex items-center py-2.5 w-full justify-${
          isExpanded ? "between" : "center"
        }`,
        classes
      )}
    >
      <Icon className="h-6 w-6" />
      {isExpanded && (
        <span className={`ml-2 ${isVisible ? "block" : "hidden"}`}>
          {label}
        </span>
      )}
    </Link>
  );
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`left-0 h-screen bg-peach flex flex-col items-center px-5 shadow-lg transition-width duration-500 ease-in-out ${
        isExpanded ? "w-1/6" : "w-16"
      }`}
    >
      <div
        className={cn(
          "flex w-full h-16 items-center",
          `${isExpanded ? "justify-end" : "justify-center"}`
        )}
      >
        <button onClick={() => setIsExpanded(!isExpanded)} className="h-fit">
          {isExpanded ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
      </div>
      <SidebarItem
        isExpanded={isExpanded}
        Icon={IoIosList}
        label="Today's to-do"
        link="todo"
      />
      <SidebarItem
        isExpanded={isExpanded}
        Icon={IoIosJournal}
        label="Today's journal"
        link=""
      />
      <SidebarItem
        isExpanded={isExpanded}
        Icon={IoIosTimer}
        label="Week goals"
        link=""
      />
    </div>
  );
};

export default Sidebar;
