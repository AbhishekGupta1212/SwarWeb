import React, { useState } from 'react';
import styles from './NavigationMenu.module.css';
import About from './About';
// import BlogPage from './BlogComponents/BlogPage';
import BlogHeader from './BlogComponents/BlogHeader';
import ForumComponent from './ForumComponent/ForumComponent';
import AIComponents from './AiComponent/AIComponent';
import ECommerceLayout from './eCommerceComponent/ECommerceLayout';

const menuItems = [
  { label: 'About', isActive: true, key: 'about' },
  { label: 'Blog Article Project', isActive: false, key: 'blogArticleProject' },
  { label: 'Forum', isActive: false, key: 'forum' },
  { label: 'Personalize Bot', isActive: false, key: 'personalizeBot' },
  { label: 'E-Commerce', isActive: false, key: 'eCommerce' },
];

function NavigationMenu() {
  const [activeItem, setActiveItem] = useState('about'); // Initialize with the first item

  const handleItemClick = (key) => {
    setActiveItem(key);
  };

  return (
    <>
    <h2 className={styles.header}>Build more than a project.</h2>
      <nav className={styles.navigationMenu}>
        
        {menuItems.map((item) => (
          <a
            key={item.key}
            href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            className={`${styles.menuItem} ${activeItem === item.key ? styles.activeMenuItem : ''}`}
            tabIndex="0"
            onClick={() => handleItemClick(item.key)}
          >
            <span className={activeItem === item.key ? '' : styles.visuallyHidden}>
              {activeItem === item.key ? '' : ' '}
            </span>
            {item.label}
          </a>
        ))}
      </nav>
      {activeItem === 'about' && <div data-aos="fade-up-left"><About /></div>}
      {activeItem === 'blogArticleProject' && (
        <>
          <BlogHeader />
        </>
      )}
      {activeItem === 'forum' && <div data-aos="fade-up-left"><ForumComponent/></div>
       }
      {activeItem === 'personalizeBot' && <div data-aos="fade-up-left"><AIComponents/></div>
       }
      {activeItem === 'eCommerce' && <div data-aos="fade-up-left"> <ECommerceLayout/></div>
     }
    </>
  );
}

export default NavigationMenu;