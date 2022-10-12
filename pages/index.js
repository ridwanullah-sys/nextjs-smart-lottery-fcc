import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import LotteryEntrance from "../components/lotteryEntrance"
import Header from "../components/Header"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart contract lottery</title>
                <meta name="description" content="Our smart contract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<ManualHeader />*/}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
