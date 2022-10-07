import phllogo from "../assets/phl-art-logo.svg";

export const initState = {
  links: [
    { title: "about", href: "/about" },
    { title: "contacts", href: "/contacts" },
    {
      title: "phlart",
      href: "https://t.me/phlart",
      target: "_blank",
      icon: phllogo,
    },
  ],
  headerTitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  briefInfoText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  projects: [
    {
      title: "music",
      items: [
        { title: "filatique", href: "https://filatique.ru" },
        { title: "mixes", href: "https://filatique.ru" },
      ],
    },
    {
      title: "photo",
      items: [
        { title: "film", href: "https://filatique.ru" },
        { title: "mobile", href: "https://filatique.ru" },
        { title: "digital", href: "https://filatique.ru", disable: true },
      ],
    },
  ],
  webApps: [
    { title: "SPOSI", description: "Lorem ipsum", href: "/sposi" },
    { title: "SPOSI", description: "Lorem ipsum", href: "/sposi" },
    { title: "SPOSI", description: "Lorem ipsum", href: "/sposi" },
  ],
  contacts: [
    {
      title: "socials",
      items: [{ title: "github", href: "https://github.com/ph1l74" }],
    },
    {
      title: "for HRs",
      items: [
        { title: "LinkedIn", href: "https://filatique.ru" },
        { title: "CV", href: "https://filatique.ru" },
      ],
    },
  ],
};

export const animations = {
  defaultBlock: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 100,
        type: "spring",
        stiffness: 100,
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  },
  navContainer: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.15,
      },
    },
  },
  navLinkItem: {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
  headerTitle: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 100,
        type: "spring",
        stiffness: 100,
      },
    },
  },

  projectsContainer: {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        delayChildren: 1,
        staggerChildren: 0.15,
      },
    },
  },

  projectsCatergory: {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.15,
      },
    },
  },

  projectsLinkItem: {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },

  webAppsContainer: {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  },

  webAppsItem: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
};
