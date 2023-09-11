interface Props {
  children?: React.ReactNode;
}

export const DateAndJobContainerXColumnLeft: React.FC<Props> = ({
  children,
}) => {
  return (
    <div className="w-full col-span-1 border-r py-12">
      <div className="grid grid-cols-3 pt-2">{children}</div>
    </div>
  );
};
