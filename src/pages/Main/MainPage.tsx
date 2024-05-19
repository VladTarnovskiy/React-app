import { FC, useEffect } from 'react';
import { SearchBar } from '../../components/Search/SearchBar';
import { Character } from '../../types/types';
import { Card } from '@/components/Card/Card';
import './mainPage.scss';
import { Loader } from '@/components/Loader/Loader';
import { Pagination } from '@/components/Pagination/Pagination';
import { Outlet } from 'react-router-dom';
import { useGetCharactersInfoQuery } from '@/store/slices/ApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPage,
  selectSearchValue,
  setAmountPage,
} from '@/store/slices/MainPageSlice';

export const MainPage: FC = () => {
  const page = useSelector(selectPage);
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();
  const {
    data: charactersInfo,
    isSuccess,
    isError,
  } = useGetCharactersInfoQuery({ searchValue, page });

  useEffect(() => {
    dispatch(setAmountPage(charactersInfo?.info.pages));
  });

  let content: JSX.Element | JSX.Element[];
  if (isSuccess) {
    content = charactersInfo.results.map((character: Character) => (
      <Card character={character} key={character.id} />
    ));
  } else if (isError) {
    content = <div className="text-white mt-[300px]">Nothing Found.</div>;
  } else {
    content = <Loader />;
  }
  return (
    <div>
      <SearchBar />
      <div
        className="content flex justify-around w-full"
        data-testid="main-page-element"
      >
        <div className="content__list flex-grow">
          <div className="cards__container p-5">{content}</div>
          {isSuccess && <Pagination />}
        </div>
        <div className="content__details mt-5 pr-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
