import React, { useState } from 'react';
import styles from './Gallery.module.css';

// Food Images
import sushi from '../../assets/image/Food/sushi.jpg';
import tempura from '../../assets/image/Food/tempura.jpg';
import ramen from '../../assets/image/Food/ramen.jpg';
import takoyaki from '../../assets/image/Food/takoyaki.jpg';
import unagi from '../../assets/image/Food/unagi.jpg';
import salmon from '../../assets/image/Food/salmon.jpg';

// Drink Images
import capuccino from '../../assets/image/Drink/capuccino.jpg';
import junmaiSake from '../../assets/image/Drink/junmai_sake.jpg';
import sakuraCocktail from '../../assets/image/Drink/sakura_cocktail.jpg';
import coldDrink from '../../assets/image/Drink/cold_drink.jpg';
import sakeMojito from '../../assets/image/Drink/sake_mojito.jpg';
import matcha from '../../assets/image/Drink/matcha.jpg';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('food');

  const galleryData = {
    food: [sushi, tempura, ramen, takoyaki, unagi, salmon],
  drink: [capuccino, junmaiSake, sakuraCocktail, coldDrink, sakeMojito, matcha]
  };

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container" data-aos="fade-up">
        <div className={styles.sectionTitle}>
          <h3>Gallery</h3>
          <p>Some photos from Our Restaurant</p>
        </div>
      </div>

      <div className={`container mt-5 ${styles.galleryContainer}`}>
        {/* Gallery Tabs */}
        <div className={styles.tabsContainer}>
  <button
    className={`${styles.tabButton} ${activeTab === 'food' ? styles.tabButtonActive : ''}`}
    onClick={() => setActiveTab('food')}
  >
    Food
  </button>
  <button
    className={`${styles.tabButton} ${activeTab === 'drink' ? styles.tabButtonActive : ''}`}
    onClick={() => setActiveTab('drink')}
  >
    Drink
  </button>
</div>


        {/* Gallery Content */}
        <div className="tab-content mt-3" id="galleryTabContent">
          <div className={`tab-pane ${activeTab === 'food' ? 'active show' : 'fade'}`}>
            <div className="row">
              {galleryData.food.map((img, index) => (
                <div key={`food-${index}`} className="col-md-4 mb-4">
                  <img 
                    src={img} 
                    className={`img-fluid ${styles.galleryImage}`} 
                    alt={`Food ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={`tab-pane ${activeTab === 'drink' ? 'active show' : 'fade'}`}>
            <div className="row">
              {galleryData.drink.map((img, index) => (
                <div key={`drink-${index}`} className="col-md-4 mb-4">
                  <img 
                    src={img} 
                    className={`img-fluid ${styles.galleryImage}`} 
                    alt={`Drink ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;