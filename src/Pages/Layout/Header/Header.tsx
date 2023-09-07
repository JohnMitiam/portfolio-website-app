import { MyLogo } from '@components/MyLogo/MyLogo';
import { NavigationLinks } from '@components/NavigationLinks/NavigationsLinks';

export const Header = () => {
  return (
    <>
      <div className="flex justify-between px-52 font-VT323">
        <MyLogo />
        <nav className="space-x-4">
          <NavigationLinks to="/">_home</NavigationLinks>
          <NavigationLinks to="/about">_about</NavigationLinks>
          <NavigationLinks to="/resume">_resume</NavigationLinks>
          <NavigationLinks to="/contact-me">_contact</NavigationLinks>
        </nav>
      </div>
    </>
  );
};
