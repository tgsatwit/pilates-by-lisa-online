export default function PBLPricing() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-playfair-display text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-center text-slate-700 mb-8">
              Choose the perfect plan for your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-start">
            {/* Basic Plan */}
            <div className="relative flex flex-col h-full p-6 bg-white shadow-lg rounded-2xl">
              <div className="mb-4 pb-6 border-b border-slate-200">
                <div className="text-lg font-semibold text-slate-800 mb-1">
                  Monthly Plan
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-slate-800">$</span>
                  <span className="text-4xl font-bold text-slate-800">
                    29.99
                  </span>
                  <span className="text-slate-500 ml-2">AUD/month</span>
                </div>
                <div className="text-slate-500">
                  Perfect for getting started
                </div>
              </div>
              <ul className="text-slate-500 space-y-3 grow mb-10 mt-2">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>800+ Pilates Workouts</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Weekly Workout Schedules</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Free Programs & Challenges</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Apple Mobile App</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Download to Workout Offline</span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Access PBL Community</span>
                </li>
              </ul>
              <button className="btn-sm w-full text-white py-2 bg-purple-700 hover:bg-purple-800">
                Get Started
              </button>
            </div>
            {/* Pro Plan */}
            <div className="relative flex flex-col h-full p-6 bg-white shadow-lg rounded-2xl scale-105 z-10">
              <div className="absolute top-0 right-0 mr-6 -mt-4 inline-flex px-3 py-1 text-sm font-semibold text-emerald-600 bg-emerald-200 rounded-full">
                Most Popular
              </div>
              <div className="mb-4 pb-6 border-b border-slate-200">
                <div className="text-lg font-semibold text-slate-800 mb-1">
                  Annual Plan
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-slate-800">$</span>
                  <span className="text-4xl font-bold text-slate-800">
                    299.99
                  </span>
                  <span className="text-slate-500 ml-2">AUD/year</span>
                </div>
                <div className="text-slate-500">Save 20% on annual plan</div>
              </div>
              <ul className="text-slate-500 space-y-3 grow mb-10 mt-2">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>800+ Pilates Workouts</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Weekly Workout Schedules</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Free Programs & Challenges</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Apple Mobile App</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Download to Workout Offline</span>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Access PBL Community</span>
                </li>
                {/* Add more features */}
              </ul>
              <button className="btn-sm w-full text-white py-2 bg-purple-700 hover:bg-purple-800">
                Get Started
              </button>
            </div>

            {/* Elite Plan */}
            <div className="relative flex flex-col h-full p-6 bg-white shadow-lg rounded-2xl">
              <div className="mb-4 pb-6 border-b border-slate-200">
                <div className="text-lg font-semibold text-slate-800 mb-1">
                  Gift Subscription
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-slate-800">$</span>
                  <span className="text-4xl font-bold text-slate-800">
                    29.99
                  </span>
                  <span className="text-slate-500 ml-2">AUD/month</span>
                </div>
                <div className="text-slate-500">The perfect gift!</div>
              </div>
              <ul className="text-slate-500 space-y-3 grow mb-10 mt-2">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Everything in Personal Memberships</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Choose from 1-12 months pre-paid</span>
                </li>
                {/* Add more features */}
              </ul>
              <button className="btn-sm w-full text-white py-2 bg-purple-700 hover:bg-purple-800">
                Gift Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
