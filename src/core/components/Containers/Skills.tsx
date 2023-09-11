interface Props {
  children?: React.ReactNode;
}

export const Skills: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <span className="text-[#e6db74] text-2xl">{children}</span>
    </div>
  );
};
