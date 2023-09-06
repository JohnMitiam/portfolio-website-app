interface Props {
  children?: React.ReactNode;
}

export const Spacer: React.FC<Props> = ({ children }) => {
  return (
    <span className="flex justify-center pt-28 pb-20 text-7xl text-[#7642B7]">
      {children}
    </span>
  );
};
