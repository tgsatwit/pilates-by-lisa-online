export function PBLCTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_50%_-50%,#7e22ce,#581c87)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="h2 font-playfair-display text-white mb-4">
            Ready to transform your body and life with Pilates?
        </h2>
        <p className="text-lg text-center text-slate-300 mb-8">
            Join us today and get 50% off your first months' membership with code <span className="font-semibold text-white">NEWMEMBER</span>
          </p>
          <a 
              className="btn text-purple-900 bg-white hover:bg-slate-100 w-full sm:w-auto text-center text-lg py-3 px-6"
              href="https://online.pilatesbylisa.com.au/browse"
            >
              Get Started <span className="tracking-normal text-pink-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
      </div>
    </section>
  )
}