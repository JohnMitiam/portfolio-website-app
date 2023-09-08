import { Space } from '@components/Spacer/Space';

interface Props {
  upLeftSym: string;
  upLeftTitle: string;
  upLeftContent: string;
  upRightSym: string;
  upRightTitle: string;
  upRightContent: string;
  lowLeftSym: string;
  lowLeftTitle: string;
  lowLeftContent: string;
  lowRightSym: string;
  lowRightTitle: string;
  lowRightContent: string;
}

export const FourXFourColumn: React.FC<Props> = ({
  upLeftSym,
  upLeftTitle,
  upLeftContent,
  upRightSym,
  upRightTitle,
  upRightContent,
  lowLeftSym,
  lowLeftTitle,
  lowLeftContent,
  lowRightSym,
  lowRightTitle,
  lowRightContent,
}) => {
  return (
    <div className=" border-y px-32">
      <></>
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-2">
          {/* upper left */}
          <div className="w-full pl-24 pr-16 pb-16 pt-8 col-span-1">
            <span className="text-3xl">
              <span className="text-[#7642B7]">{upLeftSym}</span>
              <Space />
              <span className="text-white">{upLeftTitle}</span>
              <Space />
              <span className="text-[#e6db74]">{upLeftContent}</span>
            </span>
          </div>
          {/* Upper Right */}
          <div className="w-full pl-24 pr-16 pb-16 pt-8 border-l col-span-1">
            <span className="text-3xl">
              <span className="text-[#7642B7]">{upRightSym}</span>
              <Space />
              <span className="text-white">{upRightTitle}</span>
              <Space />
              <span className="text-[#e6db74]">{upRightContent}</span>
            </span>
          </div>
        </div>
      </div>
      <></>
      <div className="flex justify-center border-t">
        <div className="w-full grid grid-cols-2">
          {/* lower left */}
          <div className="w-full pl-24 pr-16 pb-16 pt-8 col-span-1">
            <span className="text-3xl">
              <span className="text-[#7642B7]">{lowLeftSym}</span>
              <Space />
              <span className="text-white">{lowLeftTitle}</span>
              <Space />
              <span className="text-[#e6db74]">{lowLeftContent}</span>
            </span>
          </div>
          <></>
          {/* lower right */}
          <div className="w-full pl-24 pr-16 pb-16 pt-8 col-span-1 border-l">
            <span className="text-3xl">
              <span className="text-[#7642B7]">{lowRightSym}</span>
              <Space />
              <span className="text-white">{lowRightTitle}</span>
              <Space />
              <span className="text-[#e6db74]">{lowRightContent}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
