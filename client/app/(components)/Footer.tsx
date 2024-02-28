import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.footerRow}>
          <div className={styles.head}>Privacy</div>
          <div>Term of use</div>
          <div>Privacy policy</div>
          <div>Cookies</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Services</div>
          <div>Shop</div>
          <div>Order ahead</div>
          <div>Menu</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>About us</div>
          <div>Find a location</div>
          <div>About us</div>
          <div>Our story</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Information</div>
          <div>Plans & Pricing</div>
          <div>Jobs</div>
          <div>Sell your product</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Social Media</div>
          <div className={styles.socialMedia}>
            <FaFacebook className={styles.socialIcon} />
            <FaInstagram className={styles.socialIcon} />
            <FaTwitter className={styles.socialIcon} />
            <FaYoutube className={styles.socialIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
