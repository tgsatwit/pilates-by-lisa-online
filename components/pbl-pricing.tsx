export default function PBLPricing() {
  return (
    <section className="bg-gradient-to-b from-pink-600 to-pink-400">
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-900 pointer-events-none -z-10" aria-hidden="true" />
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-gradient-to-t from-white pointer-events-none -z-10" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2 className="h2 bg-clip-text text-center text-transparent bg-gradient-to-r from-slate-200/80 via-slate-200 to-slate-200/60 pb-4">I can't wait to workout with you!</h2>
                <p className="text-lg text-center text-slate-100 mb-8">Save time, money and create your perfect, lean body with Pilates Online. Join me on the mat right now, your next workout is only a click away. Choose a Membership Plan that suits you and you'll receive full access to the PBL Studio and app.</p>
              </div>

              {/* Pricing tables */}
              <div
                className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto grid gap-8 sm:grid-cols-1 xl:grid-cols-3 xl:gap-6 items-start"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Monthly Plan */}
                <div className="relative flex flex-col h-full bg-gradient-to-b from-pink-200 to-pink-100 py-10 px-6 rounded-[40px] shadow-xl">
                  <div className="mb-4">
                    <div className="text-xl font-bold text-center mb-3">Monthly Membership</div>
                  </div>
                  <div className="mb-5">
                    <div className="text-2xl text-slate-800 font-bold text-center mb-4">$29.99 <span className="text-base font-normal">AUD / month</span></div>
                    <div className="text-center mb-4 font-bold text-pink-600">50% off 1st Month for New Members!</div>

                  </div>
                  <ul className="text-slate-500 text-left space-y-2 mb-10">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>800+ Pilates Workouts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Free Programs & Challenges</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>800+ Delicious Recipes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Apple Mobile App</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Download to Workout Anywhere</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Weekly Workout Schedule</span>
                    </li>
                  </ul>
                  <div className="flex justify-center">
                      <a className="btn-sm inline-flex items-center px-8 py-1 text-pink-50 bg-pink-500 hover:bg-pink-600 group shadow-sm" href="https://online.pilatesbylisa.com.au/checkout/subscribe/purchase">
                        SIGN UP
                        <span className="tracking-normal text-pink-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                          <svg className="fill-current" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  <div className="text-sm text-slate-500 text-center mt-4">No commitments. Cancel online anytime.</div>
                </div>

                {/* Annual Plan */}
                <div className="relative flex flex-col h-full bg-gradient-to-b from-pink-200 to-pink-100 py-10 px-6 rounded-[40px] shadow-xl">
                  <div className="absolute top-0 right-0 -translate-y-1/2 mr-6 inline-flex text-sm text-white bg-pink-500 font-[550] rounded-full px-3 py-px">
                    Best Value
                  </div>
                  <div className="mb-4">
                    <div className="text-xl font-bold text-center mb-3">Annual Membership</div>
                  </div>
                  <div className="mb-5">
                    <div className="text-2xl text-slate-800 font-bold text-center mb-4">$299.99 <span className="text-base font-normal">AUD / year</span></div>
                    <div className="text-center mb-4 font-bold text-pink-600">Save with 2 months FREE!</div>
                  </div>
                  <ul className="text-slate-500 text-left space-y-2 mb-10">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>800+ Pilates Workouts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Free Programs & Challenges</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>800+ Delicious Recipes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Apple Mobile App</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Download to Workout Anywhere</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Weekly Workout Schedule</span>
                    </li>
                  </ul>
                  <div className="flex justify-center">
                      <a className="btn-sm inline-flex items-center px-8 py-1 text-pink-50 bg-pink-500 hover:bg-pink-600 group shadow-sm" href="https://online.pilatesbylisa.com.au/checkout/subscribe/purchase">
                        SIGN UP
                        <span className="tracking-normal text-pink-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                          <svg className="fill-current" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  <div className="text-sm text-slate-500 text-center mt-4">No commitments. Cancel online anytime.</div>
                </div>

                {/* Gift Plan */}
                <div className="relative flex flex-col bg-gradient-to-b from-pink-100 to-pink-50 py-10 px-6 rounded-[40px] shadow-xl">
                  <div className="mb-4">
                    <div className="text-xl font-bold text-center mb-3">Gift a Membership</div>
                  </div>
                  <div className="mb-5">
                    <div className="text-2xl text-slate-800 font-bold text-center mb-4">From $29.99</div>
                    <div className="text-center mb-4 font-bold text-pink-600">The perfect gift for your loved ones!</div>

                  </div>
                  <ul className="text-slate-500 text-left space-y-2 mb-10">
                  <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Choose 1-10 Months or Annual Plan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-pink-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Full access to all features</span>
                    </li>
                  </ul>
                  <div className="flex justify-center">
                      <a className="btn-sm inline-flex items-center px-8 py-1 text-pink-50 bg-pink-500 hover:bg-pink-600 group shadow-sm" href="https://online.pilatesbylisa.com.au/checkout/pbl-subscription/gift">
                        GIFT NOW
                        <span className="tracking-normal text-pink-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                          <svg className="fill-current" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}