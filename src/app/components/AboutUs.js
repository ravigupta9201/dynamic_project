import styles from "@/app/styles/herosection.module.css";

import Image from "next/image"

const AboutUs = () => {
  return (
    <>
      <div className={styles.about_header}>
      <div className={styles.container}>
      <div className={styles.grid_two_section}>
        <div>
            <h2>Welcome to Dynamic Skills</h2>
            <p>Lorem ipsum dolor sit amt consectetur adipisicing elit. Dolores quia rerum natus voluptate voluptates odit ducimus consectetur voluptatem obcaecati, eligendi itaque quasi delectus at officiis quas porro unde aperiam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia rerum natus voluptate voluptates odit ducimus consectetur voluptatem obcaecati, eligendi itaque quasi delectus at officiis quas porro unde aperiam ipsa.</p>
            <button className={styles.paragraph_button}>read more</button>
        </div>
        <div className={styles.grid_container}>
            <Image src="/img (1).png" alt="about section image" width={620} height={150} />
            <div className={styles.grid_item}>
            <Image src="/img (2).png" alt="about section image2" width={300} height={150} />
            <Image src="/web-designing.jpg" alt="about section image3" width={300} height={150} />
            </div>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default AboutUs
