export interface PromoTagProps {
  bgColor?: string;
  textColor?: string;
  text: string;
}

export const PromoTag = ({
  bgColor = 'bg-orange-300',
  textColor = 'text-white',
  text,
}: PromoTagProps) => {
  return (
    <div
      className={`absolute -top-5 right-[30%] ${bgColor} p-3 font-bold capitalize rounded-lg`}
    >
      <span className={`pl-2 ${textColor}`}>{text}</span>
      <div className="relative">
        <div
          className={`-left-8 -top-9 absolute transform translate-x-1/2 translate-y-1/2 rotate-45 w-6 h-6 ${bgColor}`}
        ></div>
      </div>
    </div>
  );
};
