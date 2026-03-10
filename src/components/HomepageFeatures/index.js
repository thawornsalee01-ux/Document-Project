import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ใช้งานง่าย',
    Svg: require('@site/static/img/file-search-svgrepo-com.svg').default,
    description: (
      <>
        เพียงแค่คุณอัปโหลดเอกสารเวอร์ชั่นเก่าและเวอร์ชั่นใหม่ของคุณ แล้วระบบจะทำการเปรียบเทียบและแสดงความแตกต่างให้คุณเห็นอย่างชัดเจน
      </>
    ),
  },
  {
    title: 'AI วิเคราะห์ความเสี่ยงของการเปลี่ยนแปลง',
    Svg: require('@site/static/img/reddit-svgrepo-com.svg').default,
    description: (
      <>
        ระบบจะใช้ AI เพื่อวิเคราะห์ความเสี่ยงของการเปลี่ยนแปลงในเอกสาร เช่น ความสำคัญของส่วนที่เปลี่ยนแปลง ความเสี่ยงต่อการใช้งาน และผลกระทบต่อผู้ใช้งาน
      </>
    ),
  },
  {
    title: 'สอบถาม AI เพิ่มเติม',
    Svg: require('@site/static/img/comment-svgrepo-com.svg').default,
    description: (
      <>
        คุณสามารถสอบถามข้อมูลเพิ่มเติมเกี่ยวกับเอกสารที่ถูกเปรียบเทียบได้ผ่านระบบ AI Chatbot ซึ่งจะช่วยให้คุณเข้าใจรายละเอียดและเนื้อหาที่เปลี่ยนแปลงได้อย่างลึกซึ้ง
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureText}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
