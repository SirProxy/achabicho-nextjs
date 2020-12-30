import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AchaBicho - Somos a maior comunidade de animais da internet!</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={styles.logoprincipal}>
        <Image
          src="/images/favicon.png"
          alt="AchaBicho Logomarca"
          width={200}
          height={200}
        />

        <h1 className={styles.title}>
          AchaBicho
        </h1>

        <p className={styles.description}>
          Estamos preparando uma grande atualização em nossa plataforma!
        </p>

        <p className={styles.description}>
          Prepare-se para a nova comunidade voltada para os animais.
        </p>
      </main>

      <footer className={styles.footer}>
          Desenvolvido por&nbsp;<b>AchaBicho Ltda.</b>
      </footer>
    </div>
  )
}
