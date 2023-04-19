import {
  BiHomeAlt,
  BiSearch,
  BiMusic,
  BiUser,
  BiFolder,
  BiHeart,
  BiShuffle,
  BiStar,
} from "react-icons/bi";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo/cuffie.png";

const Sidebar = () => {
  const searchClick = () => {
    const searchInput = document.querySelector("#ancor");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    searchInput.focus();
  };
  return (
    <div className={styles.Sidebar}>
      <div className={styles.icons_sidebar}>
        <div className={styles.containerLogo}>
          <div className={styles.logo}>
            <Image src={logo} height={40} width={45} alt={"logo"} />
          </div>
        </div>
        <Link href="/">
          <BiHomeAlt className={styles.icon} />
        </Link>
        <Link className={styles.icon_desktop} href="/shuffle_page">
          <BiShuffle />
        </Link>

        <BiSearch onClick={searchClick} className={styles.icon_search} />

        <BiMusic className={styles.icon} />
        <Link className={styles.icon} href="/about_page">
          <BiUser />
        </Link>
        <hr className={styles.hr} />
        <Link className={styles.icon_desktop} href="/favorites_page">
          <BiHeart />
        </Link>

        <Link className={styles.icon_desktop} href="/favoriteAlbum_page">
        <BiFolder className={styles.icon_desktop} />
        </Link>
       

        <BiStar className={styles.icon_desktop} />
      </div>
    </div>
  );
};

export default Sidebar;
