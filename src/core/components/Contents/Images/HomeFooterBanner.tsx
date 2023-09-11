import { FooterBannerImg } from './FooterBannerImg';

export const HomeFooterBanner = () => {
  const overlayColor = 'rgba(0, 0, 100, 0.5)';

  const divStyle = {
    backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <>
      <div className="px-28 ">
        <div style={divStyle} className="fixed">
          <FooterBannerImg />
        </div>
      </div>
    </>
  );
};
