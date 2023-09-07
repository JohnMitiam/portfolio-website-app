interface Props {
  children?: React.ReactNode;
}

export const SubHeaderContainersColumn: React.FC<Props> = ({ children }) => {
  return (
    <div className="justify-center flex pl-24 pr-16 pt-8">
      <span className="text-[#e6db74] text-xl">{children}</span>
    </div>
  );
};
