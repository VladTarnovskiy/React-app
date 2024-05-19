import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
};
