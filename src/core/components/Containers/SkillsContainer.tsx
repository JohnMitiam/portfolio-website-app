interface Props {
  children?: React.ReactNode;
}

export const SKillsContainer: React.FC<Props> = ({ children }) => {
  return <div className="pl-10 py-14 space-y-4">{children}</div>;
};
