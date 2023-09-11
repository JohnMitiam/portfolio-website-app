interface Props {
  children?: React.ReactNode;
}

export const OnTheJobAndSkillsAnimation: React.FC<Props> = ({ children }) => {
  return (
    <div className="col-span-2 text-end pr-8 py-24">
      <div className="flex justify-end">
        <span className="text-white text-3xl space-x-4">
          <span className="">{'<'}</span>
          <span className="text-[#7642B7]">{children}</span>
          <span>{'>'}</span>
        </span>
      </div>
    </div>
  );
};
