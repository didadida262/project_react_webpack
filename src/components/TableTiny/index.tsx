import {
  ColumnDef,
  flexRender,
  functionalUpdate,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { isNumber } from 'lodash';

import closed_btn from '@/assets/lootbox/closed_btn.png'
import rewards_USDC_logo from '@/assets/lootbox/rewardslog_USDC.png'
import rewardslog_LUMENS from '@/assets/lootbox/rewardslog_LUMENS.png'
import rewardslog_USTD from '@/assets/lootbox/rewardslog_USTD.png'

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { MdOutlineInfo } from 'react-icons/md';
import { cn } from '@/utils/cn';
import { getTablePagination } from '@/utils/common_weapons';

import { Spinner } from './Spinner';
import { ToolTip } from './Tooltip';
import { RewardsCell,StatusCell } from './TableCell';
import { Empty } from './Empty';



const getColumns = () => {
  const BasicColumns = [
    {
      header: 'Rewards',
      cell: (props: any) => <RewardsCell data={props.row.original} />,
    },
    {
      header: 'Status',
      cell: (props: any) => <StatusCell data={props.row.original} />
    }

  ];
      return BasicColumns;
};

interface ITableProps {
  data: any;
  isLoading: boolean;
  headerRowClassName?: string;
  bodyRowClassName?: string;
  className?: string;
}

export default function TableTiny(props: ITableProps) {
  const {
    data: { dataList, total },
    isLoading,
    headerRowClassName,
    bodyRowClassName,
    className,
  } = props;
  console.log('表格接收到的数据', dataList);
  const [itemInfoFlag, setItemInfoFlag] = useState(false)
  const [itemInfo, setItemInfo] = useState() as any


  const table = useReactTable({
    data: dataList || [],
    columns: getColumns(),
    getCoreRowModel: getCoreRowModel(),
    state: {
    },
    manualPagination: true
  });
  const handleClick = (item: any) => {
    console.log('item>>>>>', item)
    if (!item.status) return
    setItemInfoFlag(true)
    setItemInfo(item)
  }


  return (
    <div className={cn('w-full h-full', className)}>
      {isLoading ? (
        <Spinner className="" />
      ) : !dataList?.length ? (
        <Empty className="mb-10 mt-6 sm:mt-20"></Empty>
      ) : (
        <div className="flex w-full h-full justify-between">
          {/* table */}
          <div className={cn("transform duration-200 h-full overflow-y-scroll", itemInfoFlag? 'w-[370px]':'w-full')}>
            <div
              className={`w-max min-w-full 
              `}
            >
              <div className=''>
                {table.getHeaderGroups().map((headerGroup) => (
                  <div key={headerGroup.id} className={'flex justify-between items-center px-[20px] h-[40px]'}>
                    {headerGroup.headers.map((header) => (
                      <div
                        key={header.id}
                        className={` text-left font-light leading-normal text-[#B3B3C0]`}
                        style={{
                          width: 
                          header.column.getSize()
                        }}
                      >
                        <div className="flex items-center gap-2">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="w-full ">
                {table.getRowModel().rows.map((row) => (
                  <div
                    key={row.id}
                    className={cn(
                      '!bg-[#111423] !rounded-[8px] flex justify-between items-center mb-[16px] py-[11px] px-[20px]',
                      'hover:cursor-pointer hover:!bg-[#6F40DF60] ',

                      // 'shadow-[#2A2E49B2_0px_1px_0px_0px]',
                      bodyRowClassName
                    )}
                    onClick={() => {
                      handleClick(row.original)
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <div
                          key={cell.id}
                          className={cn(
                          )}
                          style={{
                            width: 
                                cell.column.getSize()
                          }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
              {itemInfoFlag && (
                <div className='transform duration-200 relative w-[370px] h-full markBorderR bg-[#111423] rounded-[8px] py-[20px] px-[40px] flex flex-col '>
                  <img src={closed_btn} alt="" className='hover:cursor-pointer w-[28px] aspect-[1] right-0 top-0 absolute' onClick={() => setItemInfoFlag(false)}/>
                  <img src={ itemInfo.type === 'LUMENS'? rewardslog_LUMENS: itemInfo.type === 'USTD'?rewardslog_USTD: rewards_USDC_logo} alt="" className='w-[56px] aspect-[1] mb-[25px]' />
                  <div className='flex justify-between items-center text-[15px] mb-[16px]'>
                    <span className=''>Total USDC</span>
                    <span>50</span>
                  </div>
     <div className="flex-grow border-t border-dashed border-gray-400 mb-[16px]"></div>
                  <div className='flex justify-between items-center text-[15px] mb-[16px]'>
                    <span className=''>Claimed USDC</span>
                    <span className='text-[#6F40DF]'>50</span>
                  </div>
     <div className="flex-grow border-t border-dashed border-gray-400 mb-[16px]"></div>

                  <div className='flex justify-between items-center text-[15px]  mb-[16px]'>
                    <span className=''>Claimable USDC</span>
                    <span className='text-[#6F40DF]'>50</span>
                  </div>
                  <div className='hover:cursor-pointer absolute right-0 bottom-[20px] w-[116px] h-[44px] py-[10px] px-[35px] bg-[#FF7900] rounded-[8px] flex justify-center items-center' onClick={() => {
                    console.log('claim!!!')
                  }}>Claim</div>
                </div>
            )}
        </div>
      )}
    </div>
  );
}
