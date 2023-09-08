interface Props {
  children?: React.ReactNode;
}

export const TitleAnimationPages: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <span className="text-white text-8xl space-x-4">
        <span className="">{'{ "'}</span>
        <span className="text-[#5ed7ff]">{children}</span>
        <span>{'" }'}</span>
      </span>
    </div>
  );
};
