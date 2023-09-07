import { Space } from '@components/Spacer/Space';

interface Props {
  children?: React.ReactNode;
  name?: string;
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<Props> = ({
  name,
  placeholder,
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="w-full px-28">
          <div className="">
            <label className="text-[#7642B7] text-2xl">{label}</label>
          </div>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="given-name"
            className={`text-white text-2xl placeholder:text-left bg-[#222325] ring-0 ${
              type
                ? 'border-b-2 border-b-white ring-0 border-t-[#222325] border-x-[#222325]'
                : 'border-b-2 '
            } w-full py-2 px-2`}
          />
        </div>
      </div>
      <Space />
    </>
  );
};
