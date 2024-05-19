import {
  getCharacterInfo,
  getCharactersInfo,
  getRunningQueriesThunk,
} from '../../store/slices/ApiSlice';
import { wrapper } from '../../store/store';
import { checkRouterQuery } from '../../utils/routerQuery';
import Layout from '../../components/Layout/Layout';
import { Character, CharacterInfo } from '../../types/types';
import { Details } from '../../components/Details/Details';

interface IPageProps {
  pageProps: {
    cardsInfo: { data: CharacterInfo };
    cardDetails: { data: Character };
  };
}

export default function MainPage({ pageProps }: IPageProps) {
  const cardsData = pageProps.cardsInfo.data;
  const detailsInfo = pageProps.cardDetails.data;

  return (
    <Layout cardsInfo={cardsData}>
      <Details characterInfo={detailsInfo} />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { page, search, id } = context.query;
    const data = await store.dispatch(
      getCharactersInfo.initiate({
        page: Number(checkRouterQuery(page)) || 1,
        searchValue: checkRouterQuery(search) || '',
      })
    );

    const detailsInfo = await store.dispatch(
      getCharacterInfo.initiate(checkRouterQuery(id)!)
    );

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {
        cardsInfo: data,
        cardDetails: detailsInfo,
      },
    };
  }
);
