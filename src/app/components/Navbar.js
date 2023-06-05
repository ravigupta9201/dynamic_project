import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faInstagram, faTwitter );

import Link from "next/link";
import styles from "@/app/styles/main_nav.module.css";
import navbarStyles from "@/app/styles/navbar.module.css";


const Navbar = () => {
  return (
    <>
      

      <nav>
        <ul className={navbarStyles.main_header}>

          <li className={navbarStyles.listItem}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={navbarStyles.fontIcon} />
            <address>Birgunj, Panitanki-08, Nepal</address>
          </li>

          <li className={navbarStyles.listItem}>
            <FontAwesomeIcon icon={faEnvelope} className={navbarStyles.fontIcon} />
            <Link href="mailto:ravigupta9201@gmail.com">info@creativeskills.com.np</Link>
          </li>

          <li className={navbarStyles.listItem}>
            <FontAwesomeIcon icon={faPhone} className={navbarStyles.fontIcon} />
            <Link href="tel:+977 9840092472">00977-51-530225 / 527821</Link>
          </li>

          <div style={{ display: "flex", alignItems: "center" }}>
            <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>

              <li>
                <FontAwesomeIcon icon={faFacebook} className={navbarStyles.fontIcon} />                                  
              </li>

              <li>
                <FontAwesomeIcon icon={faInstagram} className={navbarStyles.fontIcon} /> 
              </li>

              <li>
                <FontAwesomeIcon icon={faTwitter} className={navbarStyles.fontIcon} /> 
              </li>

            </ul>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
