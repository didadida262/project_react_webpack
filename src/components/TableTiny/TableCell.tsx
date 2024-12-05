import rewards_USDC_logo from '@/assets/lootbox/rewardslog_USDC.png'
import rewardslog_LUMENS from '@/assets/lootbox/rewardslog_LUMENS.png'
import rewardslog_USTD from '@/assets/lootbox/rewardslog_USTD.png'

export const RewardsCell = (props: any) => {
  const { data } = props;
  console.log("props>>>", props);
  console.log("data>>>", data);
  return (
    <div className='flex items-center'>
      <img src={ data.type === 'LUMENS'? rewardslog_LUMENS: data.type === 'USTD'?rewardslog_USTD: rewards_USDC_logo} alt="" className='w-[48px] aspect-[1]' />
      <span className='ml-[16px] text-[14px] text-[#FFFFFF]'>{data.reward} {data.type} </span>
    </div>
  );
};
export const StatusCell = (props: any) => {
  const { data } = props;
  return (
    <div>
      {data.status? (<span className="text-[#6F40DF] text-[14px] hover:cursor-pointer select-none">Withdraw</span>): <></>}
    </div>
  );
};
