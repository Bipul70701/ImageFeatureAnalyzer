import { glowUpTips } from '../constants/glowUpTips';

export default function RealResults({ realResults }) {
  return (
    <div className="mt-8 card">
      {/* Real results content */}

      <div className="p-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900">
        Complete Analysis
      </h2>
      <p className="text-gray-500 mt-1">
        Full facial assessment with professional insights
      </p>
    </div>
    <div className="p-8 space-y-8">
      {/* Overall Score */}
      <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
        <div className="text-4xl font-bold mb-2">
          {realResults.overall}
        </div>
        <div className="text-gray-300">Global Average Score</div>
      </div>
      {/* Feature Breakdown */}
      <div className="space-y-6">
        {Object.entries(realResults.features).map(
          ([feature, score]) => (
            <div key={feature} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="capitalize text-gray-700 font-medium">
                  {feature}
                </span>
                <span className="font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">
                  {score}/10
                </span>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 feature-bar"
                  style={{ width: `${(score / 10) * 100}%` }}
                ></div>
              </div>
              {/* GlowUp Tips */}
              <details className="group border border-gray-100 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-3 list-none hover:bg-gray-50">
                  <span className="text-sm font-medium text-gray-700">
                    Improvement Guide
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 transform group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <ul className="p-3 pt-0 space-y-2 border-t border-gray-100">
                  {(glowUpTips[feature] || []).map((tip, index) => (
                    <li
                      key={index}
                      className="text-gray-600 flex items-start text-sm"
                    >
                      <span className="text-gray-900 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          )
        )}
      </div>
    </div>
    </div>
  );
}