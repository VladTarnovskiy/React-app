import {
  getCharactersInfo,
  getRunningQueriesThunk,
} from '../store/slices/ApiSlice';
import { wrapper } from '../store/store';
import { checkRouterQuery } from '../utils/routerQuery';
import { CharacterInfo } from '../types/types';
import Layout from '../components/Layout/Layout';

interface IPageProps {
  pageProps: { cardsInfo: { data: CharacterInfo } };
}

export default function MainPage({ pageProps }: IPageProps) {
  const cardsData = pageProps.cardsInfo.data;
  return <Layout cardsInfo={cardsData}></Layout>;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { page, search } = context.query;
    const data = await store.dispatch(
      getCharactersInfo.initiate({
        page: Number(checkRouterQuery(page)) || 1,
        searchValue: checkRouterQuery(search) || '',
      })
    );

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {
        cardsInfo: data,
      },
    };
  }
);
