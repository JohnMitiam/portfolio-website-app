import { BannerImg } from './BannerImg';
import './Paralax.css';

export const HomeBanner = () => {
  return (
    <>
      <div className="px-28 ">
        <div className="header-container">
          <div className="relative">
            <BannerImg />
            <div className="parallax-overlay" />
          </div>
        </div>
      </div>
    </>
  );
};
