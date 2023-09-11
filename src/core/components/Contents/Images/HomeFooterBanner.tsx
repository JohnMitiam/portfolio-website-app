import { FooterBannerImg } from './FooterBannerImg';
import './Paralax.css';

export const HomeFooterBanner = () => {
  return (
    <>
      <div className="px-28 ">
        <div className="footer-container">
          <div className="relative">
            <FooterBannerImg />
            <div className="parallax-overlay" />
          </div>
        </div>
      </div>
    </>
  );
};
