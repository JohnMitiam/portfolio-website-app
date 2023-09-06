interface Props {
  children?: React.ReactNode;
}

export const SubHeaderContainers: React.FC<Props> = ({ children }) => {
  return (
    <span className="text-[#e6db74] text-3xl flex justify-center mx-96 pt-4 pb-12">
      <span className="text-center">{children}</span>
    </span>
  );
};
