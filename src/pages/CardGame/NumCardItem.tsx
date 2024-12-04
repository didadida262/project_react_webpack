import cn from "classnames";

interface IProps {
  time: string;
  title: string;
}
export default function NumCardItem(props: IProps) {
  const { time, title } = props;
  return (
    <div className="markBorderR flex flex-col gap-y-[10px] items-center">
      <div className="num flex items-center text-7xl font-semibold">
        {time.split("").map((item: string, index: number) =>
          <div
            key={index}
            className={cn(
              "flex aspect-[0.683] w-[35px] items-center justify-center rounded-[4px] border-[1px] border-solid border-[#FFFFFF1A] bg-[#2C212A] text-[30px] font-semibold leading-[40px] md:w-[67px] md:rounded-[8.4px] md:text-[70px] md:leading-[70px]",
              index !== time.split("").length - 1 ? "mr-[6px]" : ""
            )}
          >
            {item}
          </div>
        )}
      </div>
      <span className="text-[15px] font-semibold">
        {title}
      </span>
    </div>
  );
}
