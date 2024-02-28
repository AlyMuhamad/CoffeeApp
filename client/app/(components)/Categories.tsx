import styles from './Categories.module.css';
import Image from 'next/image';
import image1 from '../(assets)/5.png';
import image2 from '../(assets)/6.png';
import image3 from '../(assets)/7.png';

function Categories() {
  return (
    <div className={styles.section}>
      <div className={styles.headline}>Weekend Special Products</div>
      <div className={styles.subHeadline}>
        Check out our special product that you can get with +%20 OFF!
      </div>
      <div className={styles.categories}>
        <div>Accessories</div>
        <div>Coffee beans</div>
        <div>Apparel</div>
        <div>Instant Coffee</div>
        <div>Boundle</div>
      </div>
      <div className={styles.products}>
        <div className={styles.product}>
          <Image
            src={image1}
            alt="a girl"
            className={styles.productPic}
            priority
            sizes="100vw"
            style={{
              width: '80%',
              height: 'auto',
            }}
          />
          <div className={styles.productName}>Miele CM6 Thermal Carafe</div>
          <div className={styles.price}>$12</div>
          <div>Add to cart</div>
        </div>
        <div className={styles.product}>
          <Image
            src={image2}
            alt="a girl"
            className={styles.productPic}
            priority
            sizes="100vw"
            style={{
              width: '80%',
              height: 'auto',
            }}
          />
          <div className={styles.productName}>Emper Cup</div>
          <div className={styles.price}>$6.48</div>
          <div>Add to cart</div>
        </div>
        <div className={styles.product}>
          <Image
            src={image3}
            alt="a girl"
            className={styles.productPic}
            priority
            sizes="100vw"
            style={{
              width: '80%',
              height: 'auto',
            }}
          />
          <div className={styles.productName}>Espress P3 French Press</div>
          <div className={styles.price}>$5.22</div>
          <div>Add to cart</div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
