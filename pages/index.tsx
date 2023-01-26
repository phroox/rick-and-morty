import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session ? (
        <>
          <br />
          <button onClick={() => signIn()}>Ir para a tela de Login</button>
        </>
      ) : (
        <main className={styles.main}>
          <div className={styles.header}>
            <h4>Signed in as {session.user.name}</h4>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
          <h1 className={styles.title}>Teste</h1>
          <div className={styles.row}>
            <div className={styles.blogCard}>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}