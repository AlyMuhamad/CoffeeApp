import styles from './HeroSection.module.css';
import Header from '../(ui)/Header';
import Link from 'next/link';
import Image from 'next/image';
import image1 from '../(assets)/1.png';

function HeroSection() {
  return (
    <div>
      <Header />
      <div className={styles.section}>
        <div className={styles.contentSide}>
          <div className={styles.headline}>Coffee</div>
          <div className={styles.subHeadline}>An online coffee store</div>
          <div className={styles.description}>
            Straight to your doorstep. We do not roast our beans until we have
            your order. Every order is roasted and shipped the same day
          </div>
          <div className={styles.btns}>
            <Link href="/" className={`${styles.btn} ${styles.exploreBtn}`}>
              Explore our products &rarr;
            </Link>
            <Link href="/" className={`${styles.btn} ${styles.authBtn}`}>
              Log in / Sign up
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.row}>
              <div className={styles.title}>Our products</div>
              <div className={styles.info}>+1000</div>
            </div>
            <div className={styles.row}>
              <div className={styles.title}>Total sales</div>
              <div className={styles.info}>+340k</div>
            </div>
            <div className={styles.row}>
              <div className={styles.title}>Flavors</div>
              <div className={styles.info}>+50</div>
            </div>
          </div>
        </div>
        <Image
          src={image1}
          alt="a coffee cup"
          className={styles.coffee}
          priority
          sizes="100vw"
          style={{
            width: '60%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
