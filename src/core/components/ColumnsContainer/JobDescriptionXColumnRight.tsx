interface Props {
  children?: React.ReactNode;
}

export const JobDescriptionXColumnRight: React.FC<Props> = ({ children }) => {
  return <div className="w-full col-span-1 pt-6 px-4 ">{children}</div>;
};
