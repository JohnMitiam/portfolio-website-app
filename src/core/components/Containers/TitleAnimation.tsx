interface Props {
  children?: React.ReactNode;
}

export const TitleAnimation: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <span className="text-[#e6db74] text-8xl space-x-4">
        <span className="">{'{ "'}</span>
        <span className="text-white">{children}</span>
        <span>{'" }'}</span>
      </span>
    </div>
  );
};
