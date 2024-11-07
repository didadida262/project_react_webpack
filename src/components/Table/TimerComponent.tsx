/* eslint-disable @typescript-eslint/restrict-plus-operands */
function timestampToDateTime(timestamp: number) {
  const date = new Date(timestamp); // 转换为Date对象
  const year = date.getFullYear(); // 获取年份
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // 获取月份，转为两位数
  const day = ('0' + date.getDate()).slice(-2); // 获取日，转为两位数
  const hours = ('0' + date.getHours()).slice(-2); // 获取小时，转为两位数
  const minutes = ('0' + date.getMinutes()).slice(-2); // 获取分钟，转为两位数
  const seconds = ('0' + date.getSeconds()).slice(-2); // 获取秒，转为两位数

  // 拼接字符串
  return `${hours}:${minutes}:${seconds}   ${year}/${month}/${day}`;
}
interface IProps {
  time: number;
}
export default function TimerComponent(props: IProps) {
  const { time } = props;
  return (
    <div className="text-[14px] text-[#FFFFFF]">
      {time ? timestampToDateTime(time) : '-'}
    </div>
  );
}
