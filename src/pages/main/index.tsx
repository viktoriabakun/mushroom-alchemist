import { useEffect } from 'react';

import styles from './styles.module.scss';

const MainPage = () => {

  useEffect(() => {
    window.addEventListener('scroll', function () {
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

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h2 className={styles.title}>This is the place where dreams intertwine with reality.</h2>
        </div>
      </main>

      <footer className={styles.footer}>© viktoriabakun</footer>
    </>
  );
};

export default MainPage;