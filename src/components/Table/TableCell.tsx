/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-11-04 10:58:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-11-08 01:22:46
 */

export const RankingCell = (props: any) => {
  console.log("props>>>>RankingCell", props);
  const { ranking } = props;
  return (
    <div>
      <h1 className="text-2xl italic text-[#B3B3C0]">
        {ranking && ranking.toString().padStart(2, "0")}
      </h1>
    </div>
  );
};
