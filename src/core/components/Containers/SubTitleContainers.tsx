interface Props {
  children?: React.ReactNode;
}

export const SubTitleContainers: React.FC<Props> = ({ children }) => {
  return (
    <span className="text-[#e6db74] text-2xl flex justify-center mx-96 pt-4 pb-12">
      <span className="text-center">{children}</span>
    </span>
  );
};
