import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children?: React.ReactNode;
}

export const NavigationLinks: React.FC<Props> = ({ children, to }) => {
  return (
    <>
      <Link
        className="text-2xl text-[#e6db74] hover:text-[#6EC1E4] hover:pb-3 hover:border-b hover:border-[#6EC1E4] px-4"
        to={to}
      >
        {children}
      </Link>
    </>
  );
};
