interface Props {
  children?: React.ReactNode;
}

export const HeaderContainersColumn: React.FC<Props> = ({ children }) => {
  return (
    <span className="text-white flex justify-center text-6xl">{children}</span>
  );
};
