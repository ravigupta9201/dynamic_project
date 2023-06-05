import Image from "next/image";
import Link from "next/link";

import Main_Nav from "./Main_Nav";
import Navbar from "./Navbar";

import styles from "@/app/styles/main_nav.module.css"

const Header = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <header className={styles.main_header} >
        <div>
          <Link href="/">
          <Image
              src="/logo.svg"
              alt="my logo image"
              width={150}
              height={40}
            />
          </Link>
        </div>

        <Main_Nav />
      </header>
    </>
  );
};

export default Header;
