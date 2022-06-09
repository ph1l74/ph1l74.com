import phllogo from '../assets/phl-art-logo.svg'

export const initState = {
    links: [
        { title: 'about', href: '/about' },
        { title: 'contacts', href: '/contacts' },
        { title: 'phlart', href: 'https://t.me/phlart', target: "_blank", icon: phllogo },
    ],
    headerTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    briefInfoText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projects: [
        {
            title: 'music',
            items: [
                { title: 'filatique', href: 'https://filatique.ru' },
                { title: 'mixes', href: 'https://filatique.ru' }
            ]
        },
        {
            title: 'photo',
            items: [
                { title: 'film', href: 'https://filatique.ru' },
                { title: 'mobile', href: 'https://filatique.ru' },
                { title: 'digital', href: 'https://filatique.ru', disable: true },
            ]
        },
    ],
    webApps: [
        { title: "SPOSI", description: 'Lorem ipsum', href: '/sposi' },
        { title: "SPOSI", description: 'Lorem ipsum', href: '/sposi' },
        { title: "SPOSI", description: 'Lorem ipsum', href: '/sposi' }
    ]
};