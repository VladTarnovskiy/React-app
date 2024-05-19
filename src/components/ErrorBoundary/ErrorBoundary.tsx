import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorFallBack } from './ErrorFallBack';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  reload: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    reload: false,
  };

  public static getDerivedStateFromError = (): State => {
    return { hasError: true, reload: false };
  };

  public componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
    console.error('Uncaught error:', error, errorInfo);
  };

  onReload = () => {
    this.setState({ reload: true });
  };

  public render() {
    if (this.state.reload) {
      return this.props.children;
    }
    if (this.state.hasError) {
      return <ErrorFallBack onReload={this.onReload} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
