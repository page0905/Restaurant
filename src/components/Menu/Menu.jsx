import React, { useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('sushi');

  const menuData = {
    sushi: [
      { name: 'Salmon Nigiri', price: '$5/ 2pcs', desc: 'Hand-pressed vinegared rice topped with fresh salmon' },
      { name: 'Spicy Tuna Roll', price: '$12/ 6pcs', desc: 'Seaweed-wrapped roll with tuna, spicy mayo, and cucumber' },
      { name: 'California Roll', price: '$10/ 6pcs', desc: 'Crab, avocado, and cucumber with sesame seeds' }
    ],
    sashimi: [
      { name: 'Salmon Sashimi', price: '$15/ 5 slices', desc: 'Fresh raw salmon served with wasabi and soy sauce' },
      { name: 'Tuna Sashimi', price: '$18/ 5 slices', desc: 'Premium fatty tuna (toro) sliced thinly' }
    ],
    ramen: [
      { name: 'Tonkotsu Ramen', price: '$12', desc: 'Rich pork bone broth with chashu pork, soft-boiled egg, and noodles' },
      { name: 'Miso Ramen', price: '$11', desc: 'Savory miso broth with corn, bamboo shoots, and bean sprouts' }
    ],
    tempura: [
      { name: 'Prawn Tempura', price: '$9/ 3pcs', desc: 'Lightly battered and deep-fried jumbo shrimp' },
      { name: 'Vegetable Tempura', price: '$7', desc: 'Assorted seasonal vegetables fried in crispy batter' }
    ],
    desserts: [
      { name: 'Matcha Ice Cream', price: '$5', desc: 'Premium green tea ice cream with red bean paste' },
      { name: 'Mochi Platter', price: '$8/ 4pcs', desc: 'Soft rice cakes with fillings (green tea, strawberry, mango)' }
    ],
    beverages: [
      { name: 'Matcha Latte', price: '$4.5', desc: 'Traditional green tea powder with steamed milk' },
      { name: 'Junmai Sake', price: '$8/ glass', desc: 'Premium rice wine (served warm or cold)' }
    ]
  };

  return (
    <section id="menu" className={styles.menu}>
      <div className="container" data-aos="fade-up">
        <div className={styles.sectionTitle}>
          <h3>Menu</h3>
          <p>Check our tasty <span>Menu</span></p>
        </div>
      </div>

      <div className={`container mt-5 ${styles.menuContainer}`}>
        {/* Menu Tabs */}
        <div className={styles.customTabs}>
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              className={`${styles.tabButton} ${activeTab === category ? styles.tabButtonActive : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="row mt-4">
          {menuData[activeTab].map((item, index) => (
            <div key={index} className={`col-lg-6 ${styles.menuItem}`}>
              <div className={styles.menuContent}>
                <a href="#">{item.name}</a>
                <span>{item.price}</span>
              </div>
              <div className={styles.menuIngredients}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
