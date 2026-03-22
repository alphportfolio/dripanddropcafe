import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-coffee-900 text-cream-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-coffee-300 font-medium tracking-widest uppercase text-sm">Visit Us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-cream-100">
            Let's get together.
          </h2>
          <p className="mt-4 text-coffee-200 text-lg font-light max-w-2xl mx-auto">
            Whether you're looking for a quiet corner to work or a vibrant space to catch up with friends, we've got a table waiting for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-coffee-800 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-coffee-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-coffee-200 font-light leading-relaxed">
                289, 15th Cross Rd, 5th Phase, J P Nagar Phase 5<br />
                Bengaluru, Karnataka 560078
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-coffee-800 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-coffee-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Hours</h3>
              <p className="text-coffee-200 font-light leading-relaxed">
                Mon - Fri: 8:00 AM - 10:00 PM<br />
                Sat - Sun: 9:00 AM - 11:00 PM
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-coffee-800 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-coffee-300" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Contact</h3>
              <p className="text-coffee-200 font-light leading-relaxed">
                +91 95382 38355<br />
                hello@dripanddrop.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
