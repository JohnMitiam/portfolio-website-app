interface Props {
  children?: React.ReactNode;
}

export const ColumnsXImg: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full pl-24 pr-16 pt-8 border-t col-span-1">
        {children}
      </div>
    </>
  );
};
