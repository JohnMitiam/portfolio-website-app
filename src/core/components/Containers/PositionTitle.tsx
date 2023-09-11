interface Props {
  children?: React.ReactNode;
}

export const PositionTitle: React.FC<Props> = ({ children }) => {
  return <span className="text-white text-2xl">{children}</span>;
};
