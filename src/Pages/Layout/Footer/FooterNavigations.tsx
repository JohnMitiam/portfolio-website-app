import { FacebookIcon } from '@components/HeroIcons/FacebookIcon';
import { InstagramIcon } from '@components/HeroIcons/InstagramIcon';
import { TwitterIcon } from '@components/HeroIcons/TwitterIcon';
import { FooterImgNavigationLinks } from '@components/NavigationLinks/FooterImgNavigationsLinks';
import { FooterNavigationLinks } from '@components/NavigationLinks/FooterNavigationsLinks';

export const FooterNavigations = () => {
  return (
    <div className="flex justify-between px-44 py-8">
      <nav className="space-x-3">
        <FooterNavigationLinks to="/">_home</FooterNavigationLinks>
        <FooterNavigationLinks to="/about">_about</FooterNavigationLinks>
        <FooterNavigationLinks to="/resume">_resume</FooterNavigationLinks>
        <FooterNavigationLinks to="/contact-me">_contact</FooterNavigationLinks>
      </nav>
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
