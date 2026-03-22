import { motion } from 'motion/react';

const images = [
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop', alt: 'Coffee beans' },
  { src: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1965&auto=format&fit=crop', alt: 'Latte art' },
  { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop', alt: 'Barista pouring' },
  { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop', alt: 'Pastries' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-coffee-500 font-medium tracking-widest uppercase text-sm">The Vibe</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-coffee-900">
            Aesthetic & Ambience
          </h2>
          <p className="mt-4 text-coffee-600 max-w-2xl mx-auto">
            A glimpse into the Drip & Drop experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="aspect-[4/3] w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-coffee-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
