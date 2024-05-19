import './globals.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { store } from '../store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function MyApp({ Component, ...pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  );
}
