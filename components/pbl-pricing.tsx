export default function PBLPricing() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-playfair-display text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-500">
              Choose the perfect plan for your fitness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-start">
            {/* Basic Plan */}
            <div className="relative flex flex-col h-full p-6 bg-white shadow-lg rounded-2xl">
              <div className="mb-4 pb-4 border-b border-slate-200">
                <div className="text-lg font-semibold text-slate-800 mb-1">Basic</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-slate-800">$</span>
                  <span className="text-4xl font-bold text-slate-800">29</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                <div className="text-slate-500">Perfect for getting started</div>
              </div>
              <ul className="text-slate-500 space-y-3 grow mb-6">
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Access to all basic workouts</span>
                </li>
                {/* Add more features */}
              </ul>
              <button className="btn-sm w-full text-white bg-purple-500 hover:bg-purple-600">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative flex flex-col h-full p-6 bg-white shadow-lg rounded-2xl scale-105 z-10">
              <div className="absolute top-0 right-0 mr-6 -mt-4 inline-flex px-3 py-1 text-sm font-semibold text-emerald-600 bg-emerald-200 rounded-full">Most Popular</div>
              <div className="mb-4 pb-4 border-b border-slate-200">
                <div className="text-lg font-semibold text-slate-800 mb-1">Pro</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-slate-800">$</span>
                  <span className="text-4xl font-bold text-slate-800">49</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                <div className="text-slate-500">For serious practitioners</div>
              </div>
              <ul className="text-slate-500 space-y-3 grow mb-6">
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Everything in Basic</span>
                </li>
                {/* Add more features */}
              </ul>
              <button className="btn-sm w-full text-white bg-purple-500 hover:bg-purple-600">
                Get Started
              </button>
            </div>

            {/* Elite Plan */}
            <div className="relative flex flex-col h-full p-6 bg-white shadow-lg rounded-2xl">
              <div className="mb-4 pb-4 border-b border-slate-200">
                <div className="text-lg font-semibold text-slate-800 mb-1">Elite</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-slate-800">$</span>
                  <span className="text-4xl font-bold text-slate-800">79</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                <div className="text-slate-500">For the dedicated enthusiast</div>
              </div>
              <ul className="text-slate-500 space-y-3 grow mb-6">
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                {/* Add more features */}
              </ul>
              <button className="btn-sm w-full text-white bg-purple-500 hover:bg-purple-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}