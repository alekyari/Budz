import { useEffect, useState } from "react";
import MainLayout from "@/components/layouts/mainLayout/MainLayout";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Hero from "@/components/hero";
import Home_Page_TrackItem from "../components/home_page_trackItem";
import Home_Page_ArtistItem from "../components/home_page_artistItem";
import Home_Page_AlbumItem from "../components/home_page_albumItem";
import Home_Page_GenreItem from "../components/home_page_genreItem";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ artistData, trackData, albumData, genreData }) {
  const [logged, setLogged] = useState(false);
  const [login, setLogin] = useState(false);
  const router = useRouter();
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("logged") != null) {
      setLogged(true);
    }
  }, [login]);

  const goToLoginPage = () => {
    router.push(`/login_page`);
  };

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="author"
          content="Luisa Zizzo, Alessio Perez, Fabio Massi, Adriana Origlio, Ilenia"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      {logged ? (
          <MainLayout>
            <div className={styles.mainContainer}>
              <Navbar title={"Budz"} />
              <div className={styles.container}>
                <div className={styles.leftSide}>
                  <Hero genreData={genreData} />
                  <section className={styles.artistListMobile}>
                    <h3 className={styles.titleTopArtist}>Top Artist</h3>
                    <div className={styles.listTopArtist}>
                      {artistData?.data.map((data, i) => (
                        <Home_Page_ArtistItem key={i} data={data} />
                      ))}
                    </div>
                  </section>
                {/* <section className={styles.mainListGenre}>
            <Home_Page_GenreItem data={{name:"Choose your Category"}} />
              <div className={styles.listGenre}>
              {genreData?.data.map((data, i) => (
                <Home_Page_GenreItem key={i} data={data} />
              ))}
            </div>
            </section> */}
                  <section>
                    <div className={styles.title}>
                      <h3 className={styles.titleTrending}>
                        Trending right now
                      </h3>
                    </div>
                    {!artistData ? (
                      <p>ciao</p>
                    ) : (
                      <div className={styles.listTrack}>
                        {trackData?.tracks.data.map((data, i) => (
                          <Home_Page_TrackItem key={i} data={data} isHome={isHome} />
                        ))}
                      </div>
                    )}
                  </section>
                </div>
                <div className={styles.rightSide}>
                  <section>
                    <div className={styles.title}>
                      <h3 className={styles.titleTopArtist}>Top Artist</h3>
                    </div>
                    <div className={styles.listTopArtist}>
                      {artistData?.data.map((data, i) => (
                        <Home_Page_ArtistItem key={i} data={data} />
                      ))}
                    </div>
                  </section>
                  <section>
                    <div className={styles.title}>
                      <h3 className={styles.titleTopAlbum}>Top Albums</h3>
                    </div>
                    <div className={styles.listTopArtist}>
                      {albumData?.data.map((data, i) => (
                        <Home_Page_AlbumItem key={i} data={data} isHome={isHome} />
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </MainLayout>
        ) : (
          <MainLayout>
            <div className={styles.login_container}>
            <div className={styles.login_overlay}></div>
              <div className={styles.login_box}>
                <h1>Welcome To Budz</h1>
                <p>The coolest audio streaming app on the planet</p>
                <button className={styles.login_button} onClick={goToLoginPage}>login now!</button>
                </div>
            </div>
            <div className={styles.mainContainer}>
              <Navbar title={"Budz"} />
              <div className={styles.container}>
                <div className={styles.leftSide}>
                  <Hero genreData={genreData} />
                  <section className={styles.artistListMobile}>
                    <h3 className={styles.titleTopArtist}>Top Artist</h3>
                    <div className={styles.listTopArtist}>
                      {artistData?.data.map((data, i) => (
                        <Home_Page_ArtistItem key={i} data={data} />
                      ))}
                    </div>
                  </section>
                  {/* <section className={styles.mainListGenre}>
            <Home_Page_GenreItem data={{name:"Choose your Category"}} />
              <div className={styles.listGenre}>
              {genreData?.data.map((data, i) => (
                <Home_Page_GenreItem key={i} data={data} />
              ))}
            </div>
            </section> */}
                  <section>
                    <div className={styles.title}>
                      <h3 className={styles.titleTrending}>
                        Trending right now
                      </h3>
                    </div>
                    {!artistData ? (
                      <p>ciao</p>
                    ) : (
                      <div className={styles.listTrack}>
                        {trackData?.tracks.data.map((data, i) => (
                          <Home_Page_TrackItem key={i} data={data} />
                        ))}
                      </div>
                    )}
                  </section>
                </div>
                <div className={styles.rightSide}>
                  <section>
                    <div className={styles.title}>
                      <h3 className={styles.titleTopArtist}>Top Artist</h3>
                    </div>
                    <div className={styles.listTopArtist}>
                      {artistData?.data.map((data, i) => (
                        <Home_Page_ArtistItem key={i} data={data} />
                      ))}
                    </div>
                  </section>
                  <section>
                    <div className={styles.title}>
                      <h3 className={styles.titleTopAlbum}>Top Albums</h3>
                    </div>
                    <div className={styles.listTopArtist}>
                      {albumData?.data.map((data, i) => (
                        <Home_Page_AlbumItem key={i} data={data} />
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </MainLayout>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const resArtist = await fetch("https://api.deezer.com/chart/0/artists");
  const resTracks = await fetch("https://api.deezer.com/chart");
  const resAlbum = await fetch("https://api.deezer.com/chart/0/albums");
  const resGenre = await fetch("https://api.deezer.com/genre/");

  const artistData = await resArtist.json();
  const trackData = await resTracks.json();
  const albumData = await resAlbum.json();
  const genreData = await resGenre.json();

  return { props: { artistData, trackData, albumData, genreData } };
}
