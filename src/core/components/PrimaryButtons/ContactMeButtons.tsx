interface Props {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: any;
}

export const ContactMeButtons: React.FC<Props> = ({
  children,
  type,
  onClick,
}) => {
  return (
    <div className="justify-center flex">
      <button
        onClick={onClick}
        type={type || 'button'}
        className=" px-10 rounded-md bg-[#5ED7FF] py-4 hover:bg-[#7642B7] hover:shadow-md text-white text-2xl"
      >
        {children}
      </button>
    </div>
  );
};
