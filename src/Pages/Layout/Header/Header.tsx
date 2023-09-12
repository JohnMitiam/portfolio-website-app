import { useState } from 'react';

import { MyLogo } from '@components/MyLogo/MyLogo';
import { NavigationLinks } from '@components/NavigationLinks/NavigationsLinks';

export const Header = () => {
  const [activeNavigationLink, setActiveNavigationLink] = useState(
    localStorage.getItem('activeNavigationLink') || 'home'
  );

  const handleActiveNavigationLink = (menu) => {
    setActiveNavigationLink(menu);
    localStorage.setItem('activeNavigationLink', menu);
  };

  const activeNavigationLinkClass = (menu) =>
    activeNavigationLink === menu
      ? 'text-3xl text-blue-500 pb-3 border-b border-blue-500 px-4'
      : 'text-3xl text-[#e6db74] hover:text-[#6EC1E4] hover:pb-3 hover:border-b hover:border-[#6EC1E4] px-4';

  return (
    <>
      <div className="flex justify-between px-52 font-VT323">
        <div>
          <MyLogo />
        </div>
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
            <div className={`${activeNavigationLinkClass('about')}`}>
              _about
            </div>
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
      </div>
    </>
  );
};
