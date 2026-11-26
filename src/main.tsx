import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Restore clean URL after GitHub Pages 404.html (?/route) redirect once module scripts have loaded.
(function restoreSpaUrl() {
  const l = window.location;
  if (l.search[1] === '/') {
    const decoded = l.search
      .slice(1)
      .split('&')
      .map((s) => s.replace(/~and~/g, '&'))
      .join('?');
    const basePath = l.pathname.endsWith('/') ? l.pathname.slice(0, -1) : l.pathname;
    window.history.replaceState(null, '', basePath + decoded + l.hash);
  }
})();

interface ErrorBoundaryState {
  hasError: boolean;
}

class AppErrorBoundary extends React.Component<{children: React.ReactNode}, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white text-[#151515] px-6 text-center">
          <div className="max-w-md space-y-4">
            <h1 className="text-2xl font-bold font-['Montserrat',sans-serif]">
              Onix Data Centres
            </h1>
            <p className="text-sm text-slate-600">
              Something went wrong while loading this page. Reload or return to the homepage.
            </p>
            <button
              type="button"
              onClick={() => {
                window.location.href = import.meta.env.BASE_URL || './';
              }}
              className="px-6 py-2.5 bg-[#B12D24] text-white font-semibold rounded-full text-sm cursor-pointer"
            >
              Return to homepage
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);
