import Link from 'next/link';
import styles from './Cards.module.css';
import { CiHeart } from 'react-icons/ci';
import Image from 'next/image';
import image1 from '../(assets)/2.png';
import image2 from '../(assets)/3.png';
import image3 from '../(assets)/4.png';

function Cards() {
  return (
    <div className={styles.section}>
      <div className={styles.headline}>Explore the recent products</div>
      <div className={styles.subHeadline}>
        Our delectable drink options, including classic espresso choices, house
        specialties, fruit smoothies and frozen treats
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src={image2}
            alt="a coffee package"
            className={styles.package}
            priority
            sizes="100vw"
            style={{
              width: '90%',
              height: 'auto',
            }}
          />
          <div className={styles.label}>Blend</div>
          <div className={styles.productName}>Hair Blender</div>
          <div className={styles.price}>$12</div>
          <div className={styles.options}>
            <div className={styles.cartOption}>Add to cart</div>
            <CiHeart className={styles.like} />
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={image2}
            alt="a coffee package"
            className={styles.package}
            priority
            sizes="100vw"
            style={{
              width: '90%',
              height: 'auto',
            }}
          />
          <div className={styles.label}>Blend</div>
          <div className={styles.productName}>Hair Blender</div>
          <div className={styles.price}>$12</div>
          <div className={styles.options}>
            <div className={styles.cartOption}>Add to cart</div>
            <CiHeart className={styles.like} />
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={image2}
            alt="a coffee package"
            className={styles.package}
            priority
            sizes="100vw"
            style={{
              width: '90%',
              height: 'auto',
            }}
          />
          <div className={styles.label}>Blend</div>
          <div className={styles.productName}>Hair Blender</div>
          <div className={styles.price}>$12</div>
          <div className={styles.options}>
            <div className={styles.cartOption}>Add to cart</div>
            <CiHeart className={styles.like} />
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={image2}
            alt="a coffee package"
            className={styles.package}
            priority
            sizes="100vw"
            style={{
              width: '90%',
              height: 'auto',
            }}
          />
          <div className={styles.label}>Blend</div>
          <div className={styles.productName}>Hair Blender</div>
          <div className={styles.price}>$12</div>
          <div className={styles.options}>
            <div className={styles.cartOption}>Add to cart</div>
            <CiHeart className={styles.like} />
          </div>
        </div>
      </div>
      <div className={styles.footerCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardText}>
            Check out our
            <br />
            best coffee beans
          </div>
          <Link href="/" className={styles.btn}>
            Explore our products &rarr;
          </Link>
        </div>
        <Image
          src={image3}
          alt="a coffee bag"
          className={styles.bag}
          priority
          sizes="100vw"
          style={{
            width: '40%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default Cards;
