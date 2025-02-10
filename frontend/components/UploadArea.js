
import { useCallback } from 'react';

export default function UploadArea({ getRootProps, getInputProps, file, processing, onClose}) {
  const renderUploadContent = useCallback(() => {
    if (file) {
      return (
        <div className="relative group">
          <img
            src={URL.createObjectURL(file)}
            alt="Upload"
            className="mx-auto h-72 max-w-full object-cover rounded-xl shadow-2xl border-4 border-white ring-2 ring-purple-500/20 transition-all duration-300 group-hover:ring-purple-500/40"
          />
          <div className="absolute inset-0 bg-black/25 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm">
            <div className="text-white text-center p-4">
              <p className="font-medium mb-1">Change Photo</p>
              <p className="text-sm opacity-80">Click to upload new image</p>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="mx-auto w-28 h-28 bg-gradient-to-br from-purple-100 to-blue-50 rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-purple-200 animate-pulse-slow" />
          <svg 
            className="w-14 h-14 text-purple-600/80" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-800">Drag & drop your photo</p>
          <p className="text-sm text-gray-500">JPEG or PNG, max 5MB</p>
        </div>
      </div>
    );
  }, [file]);

  return (
    <div className="relative">
      {/* Close button */}
      {!processing && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

    <div
      {...getRootProps()}
      className="group relative border-2 border-dashed border-gray-200 hover:border-purple-400 p-10 text-center rounded-[2rem] cursor-pointer transition-all duration-300 bg-white/30 backdrop-blur-sm shadow-2xl hover:shadow-2xl/50 overflow-hidden"
    >

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[radial-gradient(circle_at_center,#7c3aed_0%,transparent_70%)] animate-pulse-slow" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Sparkle effects */}
      <div className="sparkle animate-sparkle" style={{ top: '20%', left: '30%', animationDelay: '0.2s' }} />
      <div className="sparkle animate-sparkle" style={{ top: '60%', left: '70%', animationDelay: '0.7s' }} />
      <div className="sparkle animate-sparkle" style={{ top: '40%', left: '50%', animationDelay: '1.1s' }} />
      
      <input {...getInputProps()} />
      
      <div className="relative z-10">
        {renderUploadContent()}
        
        {!file && (
          <div className="mt-8">
            <button
              type="button"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-br from-purple-600 to-blue-500 text-white font-medium rounded-full transition-all 
                         hover:from-purple-700 hover:to-blue-600 hover:shadow-lg hover:-translate-y-0.5
                         active:scale-95 active:shadow-none"
            >
              Select File
              <svg 
                className="w-5 h-5 ml-2 -mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </button>
          </div>
        )}

      </div>
    </div>
    </div>
  );
}