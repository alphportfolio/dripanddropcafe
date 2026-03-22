import { motion } from 'motion/react';
import { Coffee, Leaf, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Coffee className="w-8 h-8 text-coffee-500" />,
      title: "Artisanal Beans",
      description: "Sourced directly from local Indian estates, roasted to perfection for that perfect cup."
    },
    {
      icon: <Leaf className="w-8 h-8 text-coffee-500" />,
      title: "Aesthetic Ambience",
      description: "Minimalist design, earthy tones, and a calming atmosphere perfect for work or dates."
    },
    {
      icon: <Users className="w-8 h-8 text-coffee-500" />,
      title: "Community First",
      description: "A space for students, freelancers, and coffee lovers to connect and create."
    }
  ];

  return (
    <section id="about" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop"
              alt="Barista pouring latte art"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-cream-100 font-serif italic text-2xl">
                "Brewing stories, one cup at a time."
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <span className="text-coffee-500 font-medium tracking-widest uppercase text-sm">Our Story</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-coffee-900 leading-tight">
                More than just a café in Bengaluru.
              </h2>
            </div>
            
            <p className="text-lg text-coffee-700 leading-relaxed font-light">
              Born from a passion for specialty coffee and beautiful spaces, Drip & Drop Café is your sanctuary in the bustling city. We believe that every drop of coffee holds a story—from the farmer who grew the beans to the barista who crafted your drink.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-coffee-200">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-coffee-900 font-semibold mb-2">{feature.title}</h3>
                    <p className="text-coffee-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
