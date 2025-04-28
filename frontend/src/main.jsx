import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to the console or send to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Optionally, send to an error reporting service (e.g., Sentry)
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] text-[#1f2937] p-6">
          <h1 className="text-3xl font-bold text-[#ea0eac] mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg mb-6 text-center">
            An unexpected error occurred. Please try refreshing the page or contact
            support if the issue persists.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#ff6200] text-white py-3 px-6 rounded-lg hover:bg-[#ea0eac] transition-colors text-base font-semibold"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);