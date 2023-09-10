interface Props {
  startDate: string;
  endDate: string;
}

export const DateContent: React.FC<Props> = ({ startDate, endDate }) => {
  return (
    <div className="text-end pr-8 py-20 col-span-1">
      <span className="text-white text-2xl">{startDate}</span>
      <br />
      <span className="text-white text-2xl">{endDate}</span>
    </div>
  );
};
