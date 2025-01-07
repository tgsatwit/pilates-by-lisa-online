"use client";

import { Play, Calendar, Heart, Download, Salad, Trophy } from "lucide-react";

export default function PBLAppFeatures() {
  return (
    <section className="relative bg-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 pointer-events-none bg-slate-50 -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left md:grid md:grid-cols-3 md:gap-8">
              {/* Video - Left 1/3 */}
              <div className="order-2 md:order-1">
                <div className="relative mx-4 md:mx-0">
                  <video
                    src="/videos/pbl-app-video-1080.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-xl hover:opacity-95 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Content - Right 2/3 */}
              <div className="order-1 md:order-2 md:col-span-2 text-center">
                {/* Copy */}
                <h2
                  className="h2 font-playfair-display text-center text-slate-900 mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="100"
                >
                  Pilates On-Demand: Your Way.
                </h2>
                <p
                  className="text-lg text-slate-600 text-center mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="200"
                >
                  Transform your body and mind with flexible workouts, curated
                  programs, and delicious recipes, all in one place.
                </p>

                {/* Button */}
                <div
                  className="max-w-xs mx-auto sm:max-w-none mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto text-center text-md py-3 px-6"
                      href="https://online.pilatesbylisa.com.au/browse"
                    >
                      Start Your Journey{" "}
                      <span className="tracking-normal text-purple-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </a>
                  </div>
                </div>

                {/* Feature Grid */}
                <div
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-12 md:pb-0"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  {/* Explore */}
                  <div className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-slate-200/30 to-slate-200/70 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Play className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="text-slate-900 font-semibold mb-2">
                      Explore
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Discover diverse workouts for every level
                    </p>
                  </div>

                  {/* Programs */}
                  <div className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-slate-200/30 to-slate-200/70 rounded-2xl  shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Trophy className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="text-slate-900 font-semibold mb-2">
                      Programs
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Follow exclusive, structured programs
                    </p>
                  </div>

                  {/* Schedules */}
                  <div className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-slate-200/30 to-slate-200/70 rounded-2xl  shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Calendar className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="text-slate-900 font-semibold mb-2">
                      Schedules
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Plan your weekly fitness routine
                    </p>
                  </div>

                  {/* Favorites */}
                  <div className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-slate-200/30 to-slate-200/70 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Heart className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="text-slate-900 font-semibold mb-2">
                      Favorites
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Save workouts for quick access
                    </p>
                  </div>

                  {/* Download */}
                  <div className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-slate-200/30 to-slate-200/70 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Download className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="text-slate-900 font-semibold mb-2">
                      Download
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Workout offline on any device
                    </p>
                  </div>

                  {/* Nourish */}
                  <div className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-slate-200/30 to-slate-200/70 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Salad className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="text-slate-900 font-semibold mb-2">
                      Nourish
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Access healthy recipes and tips
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
