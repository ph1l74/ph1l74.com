import Link from "next/link";
import React from "react";

type NavLinkType = {
  to: string;
  children: React.ReactNode | string;
};

type LinkElemType = {
  url: string;
  title: string;
};

const NavLink: React.FC<NavLinkType> = ({ to, children }) => {
  return (
    <Link href={to} className="mr-5 hover:text-white">
      {children}
    </Link>
  );
};

const NavBar = () => {
  const links: LinkElemType[] = [
    {
      url: "/projects",
      title: "Projects",
    },
    {
      url: "/contacts",
      title: "Contacts",
    },
  ];
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      {links
        ? links.map((link, index) => (
            <NavLink key={`navLink_${index}`} to={link.url}>
              {link.title}
            </NavLink>
          ))
        : null}
    </nav>
  );
};

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Filat Astakhov</span>
        </a>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
