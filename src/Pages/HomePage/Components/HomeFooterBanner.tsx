import FooterBanner from './FooterBanner.png';

export const HomeFooterBanner = () => {
  const overlayColor = 'rgba(0, 0, 0, 0.5)';

  const divStyle = {
    backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${FooterBanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '400px',
    position: 'relative',
  };

  return (
    <>
      <div className="px-28">
        <div style={divStyle} />
      </div>
    </>
  );
};
