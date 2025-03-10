import React from "react";
import clsx from "clsx";
import { cn } from "@/app/util/tialwindUtil";

type LinkProps = {
  menu: string;
  href: string;
  className?: string;
};

const MenuLink = ({ menu, href, className }: LinkProps) => {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md",
          className
        )}
      >
        {menu}
      </a>
    </li>
  );
};

export default MenuLink;
