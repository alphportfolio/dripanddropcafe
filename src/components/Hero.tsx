import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="Coffee shop interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-coffee-900/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-cream-200 text-sm md:text-base tracking-[0.2em] uppercase mb-4 font-medium">
            Welcome to Bengaluru's Finest
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream-100 mb-6 leading-tight">
            Where Every <br className="hidden md:block" />
            <span className="italic text-coffee-200">Drop Matters</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-cream-200 max-w-2xl mx-auto font-light mb-6">
            Experience artisanal coffee, crafted with passion and served in an aesthetic space designed for connection, work, and relaxation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-3.5 bg-coffee-200 text-coffee-900 rounded-full font-medium hover:bg-cream-100 transition-colors flex items-center justify-center gap-2 group"
            >
              Explore Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-cream-200 text-cream-100 rounded-full font-medium hover:bg-cream-200/10 transition-colors"
            >
              Find Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
