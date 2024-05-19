import { SearchBar } from '../Search/SearchBar';
import { Character, CharacterInfo } from '../../types/types';
import { Card } from '../Card/Card';
import { Pagination } from '../Pagination/Pagination';
import { ReactNode } from 'react';
import Head from 'next/head';

type MainProps = {
  children?: ReactNode;
  cardsInfo: CharacterInfo;
};

export default function Layout({ cardsInfo, children }: MainProps) {
  let content: JSX.Element | JSX.Element[];
  if (cardsInfo) {
    content = cardsInfo.results.map((character: Character) => (
      <Card character={character} key={character.id} />
    ));
  } else {
    content = <div className="text-white mt-[300px]">Nothing Found.</div>;
  }

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <SearchBar />
        <div
          className="content flex justify-around w-full"
          data-testid="main-page-element"
        >
          <div className="content__list flex-grow">
            <div className="cards__container p-5">{content}</div>
            {cardsInfo && <Pagination amountPages={cardsInfo.info.pages} />}
          </div>
          <div className="content__details mt-5 pr-5">{children}</div>
        </div>
      </div>
    </>
  );
}
