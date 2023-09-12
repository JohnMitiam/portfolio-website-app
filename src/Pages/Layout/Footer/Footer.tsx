import { useState } from 'react';

import { FacebookIcon } from '@components/HeroIcons/FacebookIcon';
import { InstagramIcon } from '@components/HeroIcons/InstagramIcon';
import { TwitterIcon } from '@components/HeroIcons/TwitterIcon';
import { FooterImgNavigationLinks } from '@components/NavigationLinks/FooterImgNavigationsLinks';
import { NavigationLinks } from '@components/NavigationLinks/NavigationsLinks';

export const Footer = () => {
  const [activeNavigationLink, setActiveNavigationLink] = useState(
    localStorage.getItem('activeNavigationLink') || 'home'
  );

  const handleActiveNavigationLink = (menu) => {
    setActiveNavigationLink(menu);
    localStorage.setItem('activeNavigationLink', menu);
  };

  const activeNavigationLinkClass = (menu) =>
    activeNavigationLink === menu
      ? 'text-md text-blue-500'
      : 'text-md text-[#e6db74] hover:text-[#6EC1E4]';

  return (
    <div className="flex justify-between px-44 py-8">
      <div className="space-x-4 flex">
        <NavigationLinks
          onClick={() => handleActiveNavigationLink('home')}
          to="/"
        >
          <div className={`${activeNavigationLinkClass('home')}`}>_home</div>
        </NavigationLinks>

        <NavigationLinks
          onClick={() => handleActiveNavigationLink('about')}
          to="/about"
        >
          <div className={`${activeNavigationLinkClass('about')}`}>_about</div>
        </NavigationLinks>

        <NavigationLinks
          onClick={() => handleActiveNavigationLink('resume')}
          to="/resume"
        >
          <div className={`${activeNavigationLinkClass('resume')}`}>
            _resume
          </div>
        </NavigationLinks>

        <NavigationLinks
          onClick={() => handleActiveNavigationLink('contact')}
          to="/contact-me"
        >
          <div className={`${activeNavigationLinkClass('contact')}`}>
            _contact me
          </div>
        </NavigationLinks>
      </div>
      <nav className="flex space-x-2">
        <FooterImgNavigationLinks to={''}>
          <FacebookIcon />
        </FooterImgNavigationLinks>
        <FooterImgNavigationLinks to={''}>
          <InstagramIcon />
        </FooterImgNavigationLinks>
        <FooterImgNavigationLinks to={''}>
          <TwitterIcon />
        </FooterImgNavigationLinks>
      </nav>
    </div>
  );
};
