import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.link}>
        Coffee
      </Link>
      <Link href="/" className={styles.link}>
        Product
      </Link>
      <Link href="/" className={styles.link}>
        Special offers
      </Link>
      <Link href="/" className={styles.link}>
        The process
      </Link>
      <Link href="/" className={styles.link}>
        Packing
      </Link>
      <Link href="/" className={styles.link}>
        About
      </Link>
      <Link href="/" className={styles.link}>
        Log in/Sign up
      </Link>
    </div>
  );
}

export default Header;
