interface Props {
  children?: React.ReactNode;
}

export const HeaderContainers: React.FC<Props> = ({ children }) => {
  return (
    <span className="text-white flex justify-center text-9xl">{children}</span>
  );
};
