/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-11-05 14:14:27
 * @LastEditors: didadida262
 * @LastEditTime: 2024-11-08 01:17:20
 */

interface IProps {
  status: string;
}
export default function StatusComponent(props: IProps) {
  const { status } = props;
  return (
    <div className=" flex items-center justify-start">
      <span className="ml-[4px] text-[16px] font-medium">
        {status === "unFinished" ? "Unfinished" : "Finished"}
      </span>
    </div>
  );
}
