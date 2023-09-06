import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children?: React.ReactNode;
}

export const CenterButtons: React.FC<Props> = ({ children, to }) => {
  return (
    <div className="justify-center flex">
      <Link
        to={to}
        className=" px-10 rounded-md bg-[#5ED7FF] py-6 hover:bg-[#7642B7] hover:shadow-md text-white text-3xl"
      >
        {children}
      </Link>
    </div>
  );
};
