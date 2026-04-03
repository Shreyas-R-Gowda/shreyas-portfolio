import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in 3D Canvas:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{ 
          width: '100%', 
          height: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#0b080c',
          color: '#eae5ec',
          border: '1px dashed #c2a4ff50',
          borderRadius: '12px',
          margin: '20px 0'
        }}>
          <p>Unable to load 3D content. Try refreshing.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
