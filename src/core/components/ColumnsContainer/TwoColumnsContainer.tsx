interface Props {
  children?: React.ReactNode;
}

export const TwoColumnsContainer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-2">{children}</div>
      </div>
    </>
  );
};
