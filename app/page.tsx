import Image from "next/image";
import styles from "./page.module.css";

export type Summary = {
    title: string;
    summary: string;
}

export type Summaries = {
    summaries: Summary[]
}

export default function Home() {
    const summaries: Summaries = {
        "summaries": [
            {
                "title": "Tyrkias regjering: Terrorangrep mot flybase like utenfor Ankara",
                "summary": "Tyrkiske innenriksministeren Ali Yerlikaya kaller det et terrorangrep på X. Han sier at flere er skadd eller døde."
            },
            {
                "title": "Roma venter turistrekord",
                "summary": "Roma skal gjøres i stand til den katolske kirkens store jubelår i 2025. Julaften må det meste være klart, for da skal pave Frans åpne den hellige døren inn til Peterskirken. Kritikerne mener det trengs et mirakel for å rekke det."
            }
        ]
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div>
                    Summaries:
                    {summaries && summaries.summaries?.length != 0 &&
                        summaries.summaries.map(summary =>
                            (
                                <div key={summary.title}>
                                    <h1>{summary.title}</h1>
                                    <p>{summary.summary}</p>
                                    <br></br>
                                </div>
                            )
                        )}
                </div>

                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <ol>
                    <li>
                        Get started by editing <code>app/page.tsx</code>.
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>

                <div className={styles.ctas}>
                    <a
                        className={styles.primary}
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className={styles.logo}
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Deploy now
                    </a>
                    <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondary}
                    >
                        Read our docs
                    </a>
                </div>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
