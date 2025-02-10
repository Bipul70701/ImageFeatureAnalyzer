import { glowUpTips } from '../constants/glowUpTips';

export default function DemoResults({ handlePayment }) {
  return (
    <div className="mt-8 card overflow-hidden">
      {/* Demo results content */}

      <div className="p-8 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Your Analysis Preview
                  </h2>
                  <p className="text-gray-500 mt-1">
                    Basic insights · Premium features locked
                  </p>
                </div>
                <div className="p-8 space-y-6">
                  {Object.entries({ skin: 8.2, lips: 8.4, hair: 7.9 }).map(
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
                        <details className="group border border-gray-100 rounded-lg bg-white">
                          <summary className="flex justify-between items-center cursor-pointer p-3 list-none hover:bg-gray-50">
                            <span className="text-sm font-medium text-gray-700">
                              Care Tips
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
                            {glowUpTips[feature].slice(0, 2).map((tip, index) => (
                              <li
                                key={index}
                                className="text-gray-600 flex items-start text-sm"
                              >
                                <span className="text-primary mr-2">•</span>
                                {tip}
                              </li>
                            ))}
                            <li className="text-gray-500 text-sm italic">
                              Unlock all {glowUpTips[feature].length} tips...
                            </li>
                          </ul>
                        </details>
                      </div>
                    )
                  )}
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]" />
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                      Premium Analysis
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Unlock detailed facial insights
                    </p>
                  </div>
                  {Object.entries({
                    eyebrows: 7.3,
                    eyes: 7.8,
                    jawline: 7.7
                  }).map(([feature]) => (
                    <div
                      key={feature}
                      className="group relative blur-sm hover:blur-none transition-all space-y-3 mb-4"
                    >
                      <div className="flex justify-between items-center text-gray-300">
                        <span className="capitalize">{feature}</span>
                        <span className="font-bold">XX/X</span>
                      </div>
                      <div className="h-px bg-gray-700"></div>
                    </div>
                  ))}
      <button
        onClick={handlePayment}
        className="btn-primary mt-6 w-full bg-white text-gray-900 hover:bg-gray-100"
      >
        Unlock Full Report - ₹299
      </button>
    </div>
    </div>
  );
}