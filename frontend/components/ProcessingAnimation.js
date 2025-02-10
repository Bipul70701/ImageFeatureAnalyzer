export default function ProcessingAnimation() {
    return (
      <div className="mt-8 p-8 bg-gray-100 rounded-2xl border border-gray-200 shadow-inner">
        <div className="text-center mb-4">
          <p className="animate-pulse text-gray-700 text-xl font-medium">
            Analyzing facial features...
          </p>
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200">
            <div className="animate-progress-bar feature-bar"></div>
          </div>
        </div>
      </div>
    );
  }