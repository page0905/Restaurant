import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeTab, setActiveTab] = useState("sushi");
  const [loading, setLoading] = useState(true);

  const categories = [
    "sushi",
    "sashimi",
    "ramen",
    "tempura",
    "desserts",
    "beverages",
  ];

  useEffect(() => {
    fetchMenuItems(activeTab);
  }, [activeTab]);

  const fetchMenuItems = async (category) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3001/menuItems?category=${category}`
      );
      const data = await response.json();
      setMenuItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      setLoading(false);
    }
  };

  return (
    <section id="menu" className={styles.menu}>
      <div className="container" data-aos="fade-up">
        <div className={styles.sectionTitle}>
          <h3>Menu</h3>
          <p>
            Check our tasty <span>Menu</span>
          </p>
        </div>
      </div>

      <div className={`container mt-5 ${styles.menuContainer}`}>
        {/* Tabs */}
        <div className={styles.customTabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.tabButton} ${
                activeTab === category ? styles.tabButtonActive : ""
              }`}
              onClick={() => setActiveTab(category)}
            >
              <span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="row mt-4">
          {loading ? (
            <p>Loading...</p>
          ) : menuItems.length === 0 ? (
            <p>No items found.</p>
          ) : (
            menuItems.map((item) => (
              <div
                key={item.id}
                className={`col-6 col-md-6 col-lg-6 ${styles.menuItem}`}
                data-aos="fade-up"
              >
                <div className={styles.menuCard}>
                  {item.image && (
                    <div className={styles.menuImage}>
                      <img src={item.image} alt={item.name} />
                    </div>
                  )}
                  <div className={styles.menuContent}>
                    <div className={styles.menuTitle}>
                      <a href="#">{item.name}</a>
                      <span>{item.price}</span>
                    </div>
                    <div className={styles.menuIngredients}>{item.desc}</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
