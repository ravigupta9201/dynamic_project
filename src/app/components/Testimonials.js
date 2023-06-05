import Image from "next/image";

import styles from "../styles/testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.testimonials_box}>
          <div className={styles.profile_box}>
            <Image src="/men.jpg" alt="testimonial-image" width={100} height={100} className={styles.logo} />
            <h3>Ram Acharya</h3>
            <p>CEO, Sikka Management</p>
          </div>

          <p className={styles.description}>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            perferendis eum consequuntur minis inventore perspiciatis, odit
            maiores? Dignissimos odio aut incidunt perspiciatis aliquid quidem
            amet illum, et accusamus fugit eius rerum ipsam modi nam vitae
            dolore iusto excepturi reprehenderit libero, labore dolor quisquam
            veniam pariatur explicabo. Est, cupiditate? Nemo reprehenderit natus
            autem laborum! Illo, cumque?"
          </p>
        </div>
    </div>
  );
};

export default Testimonials;
