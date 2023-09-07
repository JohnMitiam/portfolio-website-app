import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children?: React.ReactNode;
}

export const FooterNavigationLinks: React.FC<Props> = ({ children, to }) => {
  return (
    <>
      <Link
        className="text-md text-[#e6db74] hover:text-[#6EC1E4] hover:pb-3 px-4"
        to={to}
      >
        {children}
      </Link>
    </>
  );
};
