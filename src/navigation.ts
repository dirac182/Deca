
export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'About Us',
      href: '#features',
    },
    {
      text: 'Our Mission',
      href: '#content',
    },
  ],
  actions: [{ text: 'Contact Us', href: '#contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Home', href: '#' },
        { text: 'About Us', href: '#features' },
        { text: 'Our Mission', href: '#content' },
        { text: 'Contact Us', href: '#contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '', href:'/terms' },
    { text: '', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
};
