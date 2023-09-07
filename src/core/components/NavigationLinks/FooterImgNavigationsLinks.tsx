import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children?: React.ReactNode;
}

export const FooterImgNavigationLinks: React.FC<Props> = ({ children, to }) => {
  return (
    <>
      <Link
        className="text-md text-[#6EC1E4] hover:text-[#7642B7] hover:pb-3 px-4"
        to={to}
      >
        {children}
      </Link>
    </>
  );
};
