import React from 'react';

interface PreloaderProps {
  message?: string;
}

export const Preloader: React.FC<PreloaderProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          {/* Animated logo/icon */}
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Loading spinner */}
          <div className="w-8 h-8 mx-auto mb-4 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          
          {/* Text */}
          <h2 className="text-2xl font-bold text-white mb-2">Coral Gardens</h2>
          <p className="text-blue-200">{message}</p>
        </div>
      </div>
    </div>
  );
}; 