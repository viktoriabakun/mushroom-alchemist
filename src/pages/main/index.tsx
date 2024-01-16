import { useEffect } from 'react';

import styles from './styles.module.scss';

const MainPage = () => {
    
  useEffect(() => {
    window.addEventListener('scroll', function() {
      document.documentElement.style.setProperty('--scroll-y', `${this.scrollY}px`);
    });
  }, []);
    
  return (
    <>
      <header>
        <div className={styles.layers}>
          <div className={styles.layersHeader}>
            <h2 className={styles.mainText}>Welcome to enchanted</h2>
            <h1 className={styles.title}>Mushroom Forest</h1>
          </div>

          <div className={`${styles.layer} ${styles.layerBase}`}></div>
          <div className={`${styles.layer} ${styles.layerMiddle}`}></div>
          <div className={`${styles.layer} ${styles.layerFront}`}></div>
        </div>
      </header>

      <div className={styles.main}>
        <div className={styles.mainContent}>
          <h2 className={styles.title}>This is the place</h2>
          <p className={`${styles.mainText} ${styles.mainContentParagraph}`}>where you can try your luck by
            mixing various types of magic mushrooms. <br/>
            Choose two — and you will see the future...</p>
        </div>
      </div>

      <footer className={styles.footer}>© viktoriabakun</footer>
    </>
  );
};

export default MainPage;