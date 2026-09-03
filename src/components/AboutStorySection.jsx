import { products } from '../data/products';

const AboutStorySection = () => {
  // Collect all images from thumbs array dynamically
  const galleryImages = products.reduce((acc, product) => {
    if (product.thumbs && Array.isArray(product.thumbs)) {
      acc.push(...product.thumbs);
    } else if (product.image) {
      acc.push(product.image);
    }
    return acc;
  }, []);

  return (
    <section id="story" data-aos="fade-up" className="mb-16 bg-black text-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <div className="flex flex-col justify-center space-y-6">
          <span className="text-amber-600 tracking-widest text-xs font-semibold uppercase">
            OUR STORY
          </span>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight font-medium">
            We don't sell watches. <br />
            <span className="text-gray-200">We keep time.</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
            Watch Keeping was born from obsession — obsession for weight, for
            tick, for light catching the chamfer. Every piece in our catalog is hand-selected, authenticated, and photographed in-house. No generic templates. No dropshipping illusion.
          </p>

          <div className="w-full border-t border-zinc-800 my-4" />

          {/* Stats Counter */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-600">1200+</h3>
              <p className="text-xs text-gray-400 tracking-wider font-medium uppercase mt-1">
                COLLECTORS
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-600">100%</h3>
              <p className="text-xs text-gray-400 tracking-wider font-medium uppercase mt-1">
                AUTHENTIC
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-600">10-12d</h3>
              <p className="text-xs text-gray-400 tracking-wider font-medium uppercase mt-1">
                PRE-ORDER
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Masonry / Asymmetric Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[160px]">
          {/* Top Left - Omega Side */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50">
            <img
              src={galleryImages[4] || galleryImages[0]}
              alt="Watch Detail"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Center Column Span 2 - Omega Back */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50">
            <img
              src={galleryImages[5] || galleryImages[1]}
              alt="Watch Back Case"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Top Right - Skeleton */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50">
            <img
              src={galleryImages[3] || galleryImages[2]}
              alt="Skeleton Watch"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom Left - Fossil Front */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50">
            <img
              src={galleryImages[2] || galleryImages[3]}
              alt="Leather Strap Watch"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom Center - Belt Close-up */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50">
            <img
              src={galleryImages[1] || galleryImages[4]}
              alt="Strap Clasp Detail"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom Right - Armani Exchange */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50">
            <img
              src={galleryImages[0] || galleryImages[5]}
              alt="Chronograph Watch"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStorySection;