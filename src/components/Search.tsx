import cn from 'classnames';
import { useCallback, useMemo, useState } from 'react';
import { useDebounce } from 'react-use';

import { SearchParams } from '@/utils/const';
import { useRouterChange } from '@/utils/hooks/useRouterChange';
import { useSearchUpdate } from '@/utils/hooks/useSearchUpdate';

interface SearchProps {
  className?: string;
}

const hotSearchKeyWords = ['Ethereum', 'Solidity'];

export function Search(props: SearchProps) {
  const { className } = props;
  const [value, setValue] = useState('');
  const { putRouterParams } = useSearchUpdate();

  useRouterChange(() => {
    const query = new URLSearchParams(window.location.search);
    const queryValue = query.get(SearchParams.QUERY);

    setValue(queryValue || '');
  });

  // useEffectOnlyOnce(() => {
  //   const query = new URLSearchParams(window.location.search);
  //   const queryValue = query.get(SearchParams.QUERY);
  //   if (!queryValue) {
  //     setValue('');
  //   }
  //   if (queryValue) {
  //     setValue(queryValue);
  //   }
  // });

  const onSearch = useCallback(
    (newValue: string) => {
      putRouterParams({ [SearchParams.QUERY]: newValue });
    },
    [putRouterParams],
  );

  useDebounce(
    () => {
      onSearch(value);
    },
    200,
    [value],
  );

  return (
    <div
      className={
        (cn(className),
        ` h-[36px] w-full rounded-common border-[1px] border-solid border-[#262B33]`)
      }>
      {/* search input  */}
      <div
        className={cn(
          className,
          'sm:placeholder:text-base flex w-full items-center justify-between gap-x-[10px] bg-bgInputColor px-[14px]  focus:outline-none sm:h-full',
        )}>
        {/* <SearchIcon /> */}
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder={'Input...'}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch(value);
            }
          }}
          className='flex h-10 min-w-0 flex-1 border-0 bg-transparent  text-textFifthSize outline-none placeholder:text-[#959DA5]'
        />
        {value && (
          <svg
            width='20'
            height='20'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect width='26' height='26' rx='4' fill='text-transparent' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18.3636 18.3655C18.0956 18.6336 17.6611 18.6336 17.3931 18.3655L8.19547 9.16794C7.92746 8.89993 7.92745 8.46539 8.19547 8.19737C8.46349 7.92935 8.89803 7.92935 9.16604 8.19737L18.3636 17.395C18.6317 17.663 18.6317 18.0975 18.3636 18.3655Z'
              fill='currentColor'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18.3647 8.19709C18.6327 8.4651 18.6327 8.89964 18.3647 9.16766L9.16709 18.3653C8.89907 18.6333 8.46453 18.6333 8.19652 18.3653C7.9285 18.0972 7.9285 17.6627 8.19652 17.3947L17.3941 8.19709C17.6621 7.92907 18.0967 7.92907 18.3647 8.19709Z'
              fill='currentColor'
            />
          </svg>
        )}
      </div>
      {/* hot search select */}

      {/* <div className="mt-[10px] flex flex-wrap items-center gap-x-4 gap-y-2 text-textSecondaryColor">
        <div className="flex items-center gap-x-2">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.71162 0C10.0747 1.59776 12.9142 4.54738 13.2284 7.92063C14.188 7.27289 15.0289 6.36378 15.0289 5.31421C17.8778 7.64381 17.9766 10.5471 17.9975 11.3889L18 11.5398C18 12.0144 17.9606 12.4962 17.8778 12.9812C17.3367 16.0281 15.0474 18.5204 12.0079 19.5241L11.971 19.5359C11.4832 19.6832 10.9536 19.8027 10.3775 19.8855C9.89044 19.9563 9.39834 19.9946 8.90516 20C4.9141 19.9523 0.799851 17.569 0.164933 14.0744C-0.348788 10.8989 0.164933 7.27289 4.20736 3.74418L4.30113 4.28737C4.4732 5.26557 4.68118 6.28242 4.99291 6.8747L5.29814 6.36105L5.44827 6.10196L5.59989 5.83377C6.47272 4.26101 7.14305 2.53233 6.71162 0Z"
              fill="url(#paint0_linear_280_3919)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_280_3919"
                x1="1.07288e-06"
                y1="10"
                x2="11.5247"
                y2="18.6386"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2E8AFF" />
                <stop offset="1" stopColor="#7F43FF" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-base text-textTertiaryColor">
            {t('hot_search')}:
          </span>
        </div>
        {hotSearchKeyWords.map((item) => (
          <button
            key={item}
            onClick={() => {
              setValue(item);
              onSearch(item);
            }}
            className={cn(
              'flex items-center justify-center rounded-[2px] bg-bgInputColor px-4 py-1 text-textSixSize hover:text-[#4C97FC]',
              value === item ? 'text-[#4C97FC]' : 'text-textTertiaryColor'
            )}
          >
            {item}
          </button>
        ))}
      </div> */}
    </div>
  );
}
