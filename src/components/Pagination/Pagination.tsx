import { FC } from 'react';
import { Button } from '../../components/Button/Button';
import ArrowImgLeft from '../../assets/arrow-sm-left.svg';
import ArrowImgRight from '../../assets/arrow-sm-right.svg';
import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  changePage,
  selectAmountPages,
  selectPage,
} from '@/store/slices/MainPageSlice';

export const Pagination: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const amountPages = useSelector(selectAmountPages);

  const setPageParams = (page: number) => {
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  };

  return (
    <div className="flex justify-center text-2xl mb-5 text-teal-500">
      <Button
        onClick={() => {
          const locPage = page > 1 ? page - 1 : page;
          dispatch(changePage(locPage));
          setPageParams(locPage);
        }}
      >
        <img
          src={ArrowImgLeft}
          alt="Turn left"
          className={clsx('w-7 h-7 mt-[-2px]', {
            'opacity-20': page === 1 ? true : false,
          })}
        />
      </Button>
      <div className="mx-2 pt-[2px]" data-testid="page-counter">
        {page}
      </div>
      <Button
        onClick={() => {
          const locPage = page < amountPages! ? page + 1 : page;
          dispatch(changePage(locPage));
          setPageParams(locPage);
        }}
      >
        <img
          src={ArrowImgRight}
          alt="Turn right"
          className={clsx('w-7 h-7 mt-[-2px]', {
            'opacity-20': page === amountPages ? true : false,
          })}
        />
      </Button>
    </div>
  );
};
