import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children?: React.ReactNode;
  onClick?: any;
}

export const NavigationLinks: React.FC<Props> = ({ onClick, children, to }) => {
  return (
    <Link className="" onClick={onClick} to={to}>
      {children}
    </Link>
  );
};
