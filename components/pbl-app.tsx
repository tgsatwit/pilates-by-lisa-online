"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CardsIllustration from "@/public/images/cards-illustration.svg";
import Workouts from "@/public/images/app-view-800-workouts.webp";
import AllLevels from "@/public/images/app-view-all-levels.webp";
import Schedule from "@/public/images/app-view-schedule.webp";

export default function PBLApp() {
  // State for managing current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to cycle through
  const images = [Workouts, AllLevels, Schedule];

  // Effect for image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      data-aos-id-2=""
      className="bg-gradient-to-b from-purple-500 to-purple-600"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 mb-24 md:mb-0 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Image Carousel - Moved up */}
              <div className="md:absolute md:right-0 md:top-[-80px] mb-8 mt-8 md:mt-0 md:mb-0">
                <div className="relative mx-4 md:mx-0">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-8 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={CardsIllustration}
                    alt="Cards illustration"
                    aria-hidden="true"
                  />
                  <div
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-2]"
                    className="p-6 md:p-0"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      className="w-full mb-16 md:mb-4 md:w-[450px] transition-all duration-500 md:rotate-[5deg]"
                      width={775}
                      height={500}
                      priority
                      alt={`Feature image ${currentImageIndex + 1}`}
                      style={{
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:max-w-lg">
                {/* Copy */}
                <h2
                  className="h2 h2 font-playfair-display text-white mb-4"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="100"
                >
                  Anytime, Anywhere. Stream through any
                </h2>
                <p
                  className="text-lg text-slate-100 mb-8"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-2]"
                  data-aos-delay="200"
                >
                  Stream, purchase or gift workouts on-demand and workout on any
                  device, through the web or our iOS app.
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
                      className="btn text-purple-900 bg-white hover:bg-slate-100 w-full sm:w-auto text-center text-md py-3 px-6 mb-12"
                      href="https://online.pilatesbylisa.com.au/browse"
                    >
                      Get Started{" "}
                      <span className="tracking-normal text-pink-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </a>
                  </div>
                </div>

                {/* Quote */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
