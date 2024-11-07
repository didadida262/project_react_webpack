
import {
  ColumnDef,
  flexRender,
  functionalUpdate,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { isNumber } from 'lodash';

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdOutlineInfo } from 'react-icons/md';

import { cn } from '@/utils/cn';
import { getTablePagination } from '@/utils/common_weapons';

import { Spinner } from './Spinner';
import { ToolTip } from './Tooltip';
import RewardComponent from './RewardComponent';
import StatusComponent from './StatusComponent';
import { RankingCell } from './TableCell';
import TimerComponent from './TimerComponent';
import { Empty } from './Empty';



const getColumns = (type: string) => {
  const BasicColumns = [
    {
      accessorKey: 'col1',
      header: 'col1',
      cell: (props: any) => <RankingCell ranking={props.getValue('col1')} />,
      size: 80
    },
    {
      accessorKey: 'col2',
      header: 'col2',
      cell: (props: any) => <RankingCell ranking={props.getValue('col2')} />
    },
    {
      accessorKey: 'col3',
      header: 'col3',
      cell: (props: any) => <RankingCell ranking={props.getValue('col3')} />
    }
  ];
      return BasicColumns;
};

interface ITableProps {
  type: string;
  data: any;
  isLoading: boolean;
  currPage: number;
  itemsPerPage: number;
  setCurrPage: Dispatch<SetStateAction<number>>;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  headerRowClassName?: string;
  bodyRowClassName?: string;
  className?: string;
  isInModal?: boolean;
  rewardHint?: React.ReactNode;
}

export default function Table(props: ITableProps) {
  const {
    type,
    data: { dataList, total },
    isLoading,
    currPage,
    itemsPerPage,
    setCurrPage,
    setItemsPerPage,
    headerRowClassName,
    bodyRowClassName,
    className,
    isInModal,
    rewardHint
  } = props;
  console.log('表格接收到的数据', dataList);
  const [inputPage, setInputPage] = useState<string>(String(currPage));
  const pageNumInputRef = useRef<HTMLInputElement | null>(null);

  const pageCount = useMemo(() => {
    if (isNumber(total)) {
      if (total % itemsPerPage > 0) {
        return Math.floor(total / itemsPerPage) + 1;
      } else {
        return total / itemsPerPage;
      }
    }
    return 1;
  }, [total, itemsPerPage]);

  const table = useReactTable({
    data: dataList || [],
    columns: getColumns(type),
    pageCount,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: getTablePagination(currPage, itemsPerPage)
    },
    onPaginationChange: (updaterOrValue) => {
      const { pageIndex, pageSize } = functionalUpdate(
        updaterOrValue,
        getTablePagination(currPage, itemsPerPage)
      );
      setCurrPage(pageIndex + 1);
      setItemsPerPage(pageSize);
      setInputPage(String(pageIndex + 1)); // 同步输入框的值
    },
    manualPagination: true
  });

  useEffect(() => {
    setInputPage(String(currPage));
  }, [currPage]);

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = e.target.value;
    setInputPage(newPage);
  };

  const handlePageInputBlur = () => {
    const newPage = Math.max(
      1,
      Math.min(Number(inputPage), table.getPageCount())
    );
    setCurrPage(newPage);
    table.setPageIndex(newPage - 1);
  };

  return (
    <div className={cn('w-[calc(100%_-_344px)] max-md:w-full', className)}>
      {isLoading ? (
        <Spinner className="md:mt-10" />
      ) : !dataList?.length ? (
        <Empty className="mb-10 mt-6 sm:mt-20"></Empty>
      ) : (
        <div className="flex w-full flex-col">
          {/* table */}
          <div className="overflow-x-auto scrollbar-none">
            <table
              className={`w-max min-w-full table-auto border-separate divide-y ${
                isInModal ? 'border-spacing-y-1' : 'border-spacing-4'
              }`}
            >
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className={headerRowClassName}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className={`text-left font-light leading-normal text-[#B3B3C0] ${
                          header.id === 'rank'
                            ? cn(
                                'sticky left-0 z-10 bg-[#111423]',
                                headerRowClassName
                              )
                            : ''
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.id === 'rewardSum' && rewardHint ? (
                            <ToolTip
                              tipContent={rewardHint}
                              tipPosition={
                                isInModal 
                                  ? 'bottom'
                                  : 'right'
                              }
                              align={
                                isInModal ? 'end' : 'start'
                              }
                              arrow={true}
                              color="#57398d"
                            >
                              <MdOutlineInfo
                                className="ml-auto self-center"
                                color="#57398d"
                              />
                            </ToolTip>
                          ) : (
                            <></>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="w-full">
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className={cn(
                      isInModal ? '' : 'shadow-[#2A2E49B2_0px_1px_0px_0px]',
                      bodyRowClassName
                    )}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className={cn(
                            'py-2',
                            cell.id.includes('rank') &&
                              'sticky left-0 z-10 bg-[#222533] pl-2',
                            cell.id.includes('rank') && !isInModal
                              ? bodyRowClassName
                              : ''
                          )}
                          style={{
                            width:
                              cell.column.getSize() ===
                                Number.MAX_SAFE_INTEGER || isInModal
                                ? 'auto'
                                : cell.column.getSize()
                          }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* pagination */}
          <div className="mr-4 mt-4 flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-[#B3B3C0]">
              Page
              <input
                ref={pageNumInputRef}
                type="number"
                min="1"
                max={table.getPageCount()}
                value={inputPage}
                onChange={handlePageInputChange}
                onBlur={handlePageInputBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    pageNumInputRef.current?.blur();
                  }
                }}
                className="w-fit rounded border border-[#353B4E] bg-[#111423] p-1 text-center"
              />
              of {table.getPageCount()}
            </div>
            <button
              className="text-[#7F5BD7] disabled:cursor-not-allowed disabled:text-[#353B4E]"
              onClick={table.previousPage}
              disabled={!table.getCanPreviousPage()}
            >
              <FaChevronLeft />
            </button>
            <button
              className="text-[#7F5BD7] disabled:cursor-not-allowed disabled:text-[#353B4E]"
              onClick={table.nextPage}
              disabled={!table.getCanNextPage()}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
