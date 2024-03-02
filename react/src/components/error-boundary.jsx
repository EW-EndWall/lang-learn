import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <div className="bg-red-50 p-4 rounded border border-red-600">
            <h3 className="text-lg font-semibold text-red-700">Error!</h3>
            <p className="text-base font-medium text-zinc-800"></p>
            <button
              onClick={() => {
                this.setState({
                  error: false,
                });
              }}
              className="h-10 px-4 rounded bg-red-600 text-white font-medium mt-3"
            >
              Refresh
            </button>
            <details className="mt-4">
              <summary>Error Details</summary>
              <pre className="bg-black/10 text-sm p-3 mt-3 rounded-md overflow-auto">
                {this.state.error.stack}
              </pre>
            </details>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}
