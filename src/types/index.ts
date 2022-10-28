import { PAGES } from '../constants';

// Abstract type for defining dictionaries
export type AbstractType = {
  [key: string]: string;
};

export type PagesType = AbstractType;

// Link element type. Optional target and icon.
export type LinkType = {
  title: string;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  icon?: string;
};

// Project element type.
export type ProjectType = {
  title: string;
  items: {
    title: string;
    href: string;
    disable?: boolean;
  }[];
};

export type WebAppType = {
  title: string;
  description: string;
  href: string;
  img?: string;
};

export type ContactType = {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
};

// Store state type.
export type StateType = {
  links: LinkType[];
  headerTitle: string;
  briefInfoText: string;
  projects: ProjectType[];
  webApps: WebAppType[];
  contacts: ContactType[];
  currentPage: typeof PAGES[keyof typeof PAGES];
};
