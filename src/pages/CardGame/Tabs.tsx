import cn from "classnames";

interface IProps {
  activeTab: string;
  setactiveTab: (key: string) => void;
}
export default function Tabs(props: IProps) {
  const { activeTab, setactiveTab } = props;
  const tabs = [
    {
      name: "My Treasure",
      key: "mytreasure"
    },
    {
      name: "Logs",
      key: "logs"
    }
  ];
  return (
    <div className="mx-auto  text-[18px] text-[#797D8D] font-medium flex items-center max-w-[310px]">
      {tabs.map((item: any, index: number) =>
        <div
          className={cn(
            "px-[24px] py-[10px] hover:cursor-pointer ",
            activeTab === item.key
              ? "bg-[#111321] rounded-[8px] text-[#7F5BD7]"
              : ""
          )}
          onClick={() => {
            setactiveTab(item.key);
          }}
        >
          {item.name}
        </div>
      )}
    </div>
  );
}
