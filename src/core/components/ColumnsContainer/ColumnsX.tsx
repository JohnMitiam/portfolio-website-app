interface Props {
  children?: React.ReactNode;
}

export const ColumnsX: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full pl-24 pr-16 pb-16 pt-8 border-t col-span-1">
        {children}
      </div>
    </>
  );
};
