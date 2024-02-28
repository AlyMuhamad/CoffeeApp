import styles from './Testimonial.module.css';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { MdDesignServices, MdOutlineWorkspacePremium } from 'react-icons/md';
import { TbTopologyRing } from 'react-icons/tb';
import Image from 'next/image';
import image1 from '../(assets)/11.jpg';
import image2 from '../(assets)/12.jpg';
import image3 from '../(assets)/13.jpg';

function Testimonial() {
  return (
    <div className={styles.section}>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <div className={styles.pictureWrapper}>
            <Image
              src={image1}
              alt="a user"
              className={styles.profilePic}
              priority
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div>
            <div className={styles.profileName}>Frances Fitzpatrick</div>
            <div>This is the best coffee I ever tasted.</div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.pictureWrapper}>
            <Image
              src={image2}
              alt="a user"
              className={styles.profilePic}
              priority
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div>
            <div className={styles.profileName}>Frederic Tyler</div>
            <div>This is the best coffee I ever tasted</div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.pictureWrapper}>
            <Image
              src={image3}
              alt="a user"
              className={styles.profilePic}
              priority
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div>
            <div className={styles.profileName}>Gwen Melton</div>
            <div>This is the best coffee I ever tasted</div>
          </div>
        </div>
      </div>
      <div className={styles.contentSide}>
        <div className={styles.headline}>
          We care about the quality of our
          <span style={{ fontWeight: '700' }}> products</span>
        </div>
        <div>
          Drinking coffee is one of the most global things you do each day where
          you can spend long and comfortable time with this passion
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <IoChatbubblesOutline className={styles.featureIcon} />
            <div>
              <div className={styles.title}>Active Community</div>
              <div>You can reach out whenever you want</div>
            </div>
          </div>
          <div className={styles.feature}>
            <MdDesignServices className={styles.featureIcon} />
            <div>
              <div className={styles.title}>Best Product Design</div>
              <div>we work a lot to make a great experience</div>
            </div>
          </div>
          <div className={styles.feature}>
            <MdOutlineWorkspacePremium className={styles.featureIconSpec} />
            <div>
              <div className={styles.title}>Premium Quality</div>
              <div>A premium quality coffee is what our customer deserve</div>
            </div>
          </div>
          <div className={styles.feature}>
            <TbTopologyRing className={styles.featureIcon} />
            <div>
              <div className={styles.title}>The Best Material</div>
              <div>Our product is made by premium materials</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
