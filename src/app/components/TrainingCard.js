import Image from "next/image"
import Link from "next/link"

import styles from "../../app/styles/trainingCard.module.css" 

const TrainingCard = ({imageUrl}) => {
  return (
    <div className={styles.card_section}>
      <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={imageUrl} width={320} height={320} />
        </div>
        <div className={styles.card_data}>
            <p>Mobile Reparing</p>
            <h3>Basic Mobile Reparing</h3>

            <div>
                <p>Duration: 3 Months</p>
                <Link href="/training">Learn More <Image src="/dbarrow.svg" width={10} height={10} /> </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingCard
