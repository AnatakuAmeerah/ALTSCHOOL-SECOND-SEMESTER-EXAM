import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div id="sorry">
          <h2>Sorry! </h2>
          <h2>There was an error loading this page.</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
