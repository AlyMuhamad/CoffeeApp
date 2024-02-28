import Link from 'next/link';
import styles from './CTA.module.css';

function CTA() {
  return (
    <div className={styles.section}>
      <div className={styles.headline}>Join in and get %25 OFF!</div>
      <div className={styles.subHeadline}>
        Subscribe to our newsletter and get %25 OFF discount code
      </div>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="Email address"
          className={styles.email}
        />
        <button className={styles.btn}>Subscribe</button>
      </div>
    </div>
  );
}

export default CTA;
