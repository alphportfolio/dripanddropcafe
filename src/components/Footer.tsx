import { Instagram, Facebook, Twitter, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-cream-200 py-12 border-t border-coffee-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2 group">
              <Coffee className="w-6 h-6 text-coffee-300" />
              <span className="font-serif text-xl font-bold tracking-tight text-cream-100">
                Drip & Drop
              </span>
            </a>
            <p className="text-coffee-300 text-sm max-w-xs font-light leading-relaxed">
              Where Every Drop Matters. Artisanal coffee and aesthetic vibes in the heart of Bengaluru.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-cream-100 uppercase tracking-wider text-sm">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-coffee-300 hover:text-cream-100 transition-colors text-sm">Home</a>
              <a href="#about" className="text-coffee-300 hover:text-cream-100 transition-colors text-sm">About Us</a>
              <a href="#menu" className="text-coffee-300 hover:text-cream-100 transition-colors text-sm">Menu</a>
              <a href="#gallery" className="text-coffee-300 hover:text-cream-100 transition-colors text-sm">Gallery</a>
              <a href="#contact" className="text-coffee-300 hover:text-cream-100 transition-colors text-sm">Contact</a>
            </nav>
          </div>

          {/* Social & Order */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-cream-100 uppercase tracking-wider text-sm">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-300 hover:text-cream-100 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-coffee-300 hover:text-cream-100 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-coffee-300 hover:text-cream-100 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-4 space-y-2 w-full max-w-[200px]">
              <a href="#" className="block w-full text-center py-2 border border-coffee-700 rounded-lg text-sm text-coffee-200 hover:bg-coffee-800 transition-colors">
                Order on Zomato
              </a>
              <a href="#" className="block w-full text-center py-2 border border-coffee-700 rounded-lg text-sm text-coffee-200 hover:bg-coffee-800 transition-colors">
                Order on Swiggy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-coffee-800 text-center text-coffee-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Drip and Drop Café. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-cream-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
