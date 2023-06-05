import Link from 'next/link'

import styles from "@/app/styles/main_nav.module.css"

const Main_Nav = () => {
  return (
    <>
      <div>
        <ul className={styles.navbarList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/training">Training</Link></li>
            <li><Link href="/placement">Placement</Link></li>
            <li>
                <Link href="/media">
                    <details>
                        <summary>Media</summary>
                        <p>News</p>
                        <p>Gallary</p>
                    </details>
                </Link>
            </li>

            <li><Link href="contact">Contact Us</Link></li>

            <li><Link href="addmission"><button className={styles.navbar_button}>Online Admission</button></Link></li>
        </ul>
      </div>
    </>
  )
}

export default Main_Nav
