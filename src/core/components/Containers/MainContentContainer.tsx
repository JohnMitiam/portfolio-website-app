interface Props {
  children?: React.ReactNode;
}

export const MainContentContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="space-y-2 py-16 border-b-4 pb-10 border-[#616161] font-VT323">
      {children}
    </div>
  );
};
