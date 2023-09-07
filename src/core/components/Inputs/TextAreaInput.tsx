interface Props {
  children?: React.ReactNode;
  name?: string;
  label: string;
  placeholder?: string;
  rows: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextAreaInput: React.FC<Props> = ({
  name,
  placeholder,
  label,
  value,
  onChange,
  rows,
}) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="w-full px-28">
          <div className="">
            <label className="text-[#7642B7] text-2xl">{label}</label>
          </div>
          <textarea
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="given-name"
            className={`text-white text-2xl placeholder:text-left bg-[#222325] border-t-[#222325] border-x-[#222325]  border-b-2 border-b-white w-full py-2 px-2`}
          />
        </div>
      </div>
    </>
  );
};
