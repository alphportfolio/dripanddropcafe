import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

const menuData = {
  Coffee: [
    { name: 'Classic Espresso', description: 'Double shot of our house blend', price: '₹150', bestseller: false },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and thick foam', price: '₹220', bestseller: true },
    { name: 'Vanilla Latte', description: 'Espresso, steamed milk, house-made vanilla syrup', price: '₹250', bestseller: true },
    { name: 'Pour Over', description: 'Single origin beans brewed manually', price: '₹280', bestseller: false },
    { name: 'Mocha', description: 'Espresso, dark chocolate, steamed milk', price: '₹260', bestseller: false },
  ],
  'Cold Drinks': [
    { name: 'Iced Americano', description: 'Chilled espresso over water and ice', price: '₹180', bestseller: false },
    { name: 'Cold Brew', description: 'Steeped for 18 hours, served over ice', price: '₹240', bestseller: true },
    { name: 'Iced Caramel Macchiato', description: 'Vanilla, milk, espresso, caramel drizzle', price: '₹280', bestseller: true },
    { name: 'Matcha Lemonade', description: 'Ceremonial matcha with fresh lemonade', price: '₹260', bestseller: false },
  ],
  Snacks: [
    { name: 'Avocado Toast', description: 'Sourdough, smashed avocado, cherry tomatoes, chili flakes', price: '₹320', bestseller: true },
    { name: 'Truffle Fries', description: 'Crispy fries tossed in truffle oil and parmesan', price: '₹250', bestseller: false },
    { name: 'Grilled Cheese Sandwich', description: 'Blend of three cheeses on artisanal sourdough', price: '₹280', bestseller: true },
    { name: 'Croissant', description: 'Flaky, buttery, baked fresh daily', price: '₹180', bestseller: false },
  ],
  Desserts: [
    { name: 'Tiramisu', description: 'Classic Italian dessert with espresso-soaked ladyfingers', price: '₹350', bestseller: true },
    { name: 'Walnut Banana Cake', description: 'Warm, moist banana cake loaded with toasted walnuts', price: '₹280', bestseller: false },
    { name: 'Dark Chocolate Brownie', description: 'Fudgy brownie served warm with vanilla ice cream', price: '₹280', bestseller: true },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>('Coffee');
  const categories = Object.keys(menuData) as Array<keyof typeof menuData>;

  return (
    <section id="menu" className="py-24 bg-cream-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-coffee-500 font-medium tracking-widest uppercase text-sm">Our Offerings</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-coffee-900">
            The Menu
          </h2>
          <p className="mt-4 text-coffee-600 max-w-2xl mx-auto">
            Carefully curated to satisfy your cravings, from the first sip of morning coffee to the last bite of dessert.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-coffee-800 text-cream-100 shadow-md'
                  : 'bg-cream-100 text-coffee-700 hover:bg-coffee-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-cream-100 rounded-3xl p-8 md:p-12 shadow-sm border border-coffee-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {menuData[activeCategory].map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-baseline mb-2 border-b border-coffee-200/50 pb-2">
                    <h3 className="text-xl font-serif text-coffee-900 flex items-center gap-2">
                      {item.name}
                      {item.bestseller && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-sans font-medium">
                          <Star className="w-3 h-3 fill-current" /> Bestseller
                        </span>
                      )}
                    </h3>
                    <span className="text-lg font-medium text-coffee-700">{item.price}</span>
                  </div>
                  <p className="text-coffee-600 text-sm font-light">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-coffee-500 text-sm italic">
            * All prices are exclusive of applicable taxes. Please inform us of any allergies.
          </p>
        </div>
      </div>
    </section>
  );
}
