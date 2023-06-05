import styles from "@/app/styles/herosection.module.css";

import Image from "next/image";
import Link from "next/link";

const HeroSection = ({title, imageUrl, text}) => {
  return (
    <>
      <main className={styles.main_section}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div>
              <p style={{color:"#f48020"}}>A trusted digital agency</p>
              <h2>{title}</h2>
              <p>{text}</p>
              <Link href="/about" ><button className={styles.paragraph_button}>read more</button></Link>
            </div>


          </div>
        </div>
        {/* <div className="styles.img">
          <Image src={imageUrl} alt="my pic" width={"1600"} height={"400"}  />
        </div> */}
      </main>
    </>
  );
};

export default HeroSection;
