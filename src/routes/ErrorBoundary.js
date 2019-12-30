import React from 'react';

class ErrorBoundries extends React.Component{
    state = {
        error: null,
        errorInfo: null
    }
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error,
          errorInfo,
        });
      }
      
    render() {
        const { error, errorInfo } = this.state;
        const { children } = this.props;
    
        if (errorInfo) {
          // TBC!!
          return (
            <div>
              <h2>Something went wrong.</h2>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
              </details>
            </div>
          );
        }
    
        return children;
      }
}

export default ErrorBoundries;