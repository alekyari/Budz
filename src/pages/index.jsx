import { useState } from "react";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Hero from "@/components/hero";
import TrackItem from "../components/trackItem";
import Modal_login from "@/components/modal_login/Modal_Login";
import ArtistItem from "../components/trackItem";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ artistData, trackData }) {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  

  const onHandleUsername = (e) => {
    setUserName(e.target.value);
  };

  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };

  const [modalIsVisibile, setModalIsVisibility] = useState(false);



  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainLayout
        setModalIsVisibility={setModalIsVisibility}>
          <div className={styles.mainContainer}>
            <Navbar title={"Home"} />
            <div className={styles.topArtist}>
              <Hero />
              {/* <div className={styles.list}>
            <h3 className={styles.titletopArtist}>Top Artist</h3>
              {artistData?.data.map((data, i) => (
                <ArtistItem key={i} singer={data} />
                ))}
          </div> */}
            </div>

            <h3 className={styles.titleTrending}>Trending right now</h3>
            <div className={styles.listTrack}>
              {trackData?.tracks.data.map((data, i) => (
                <TrackItem key={i} song={data} />
              ))}
            </div>
          </div>
        </MainLayout>

        {modalIsVisibile && (
              <Modal_login 
              setModalIsVisibility={setModalIsVisibility}
              onHandleUsername={onHandleUsername}
              onHandlePassword={onHandlePassword}
              userName={userName}
              password={password}
              />)}
      </main>
    </>
  );
}
export async function getStaticProps() {
  const resArtist = await fetch("https://api.deezer.com/chart/0/artists");
  const resTracks = await fetch("https://api.deezer.com/chart");

  const artistData = await resArtist.json();
  const trackData = await resTracks.json();

  return { props: { artistData, trackData } };
}
