'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {useSummaries} from "@/hooks/useSummaries";
import {useUpdateSummaries} from "@/hooks/useUpdateSummaries";


export default function Home() {
    const summaries = useSummaries()
    const {updateSummaries} = useUpdateSummaries();

    const bulletPointList = (summary: string) => {
        const lines = summary.match(/[^.!?]+[.!?]+/g);
        return (
            <ul className={styles.bulletpoints}>
                {lines && lines.map((line, i) => <li key={`${i}`}>{line}</li>)}
            </ul>
        )
    }

    return (
        <div className={styles.page}>

            <main className={styles.main}>
                <h1>LITT NYTT</h1>
                <h3>Nyheter, kort fortalt</h3>
                <div className={styles.sync}>
                    <button
                        type="button"
                        onClick={updateSummaries}
                        className={styles.syncbutton}
                    >
                        <p> Hent artikler</p>
                    </button>
                </div>
                <ul className={styles.list}>
                    {summaries && summaries.map((summary =>
                            (
                                <a
                                    href={summary.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={summary.id}
                                >
                                    <li className={styles.listitem} key={summary.title}>
                                        <h1>{summary.title}</h1>
                                        {bulletPointList(summary.summary)}
                                    </li>
                                </a>
                            )
                    ))
                    }
                </ul>
            </main>
            <footer className={styles.footer}>
                <div>
                    <div>Laget av Henrik Aasen Kjeldsberg</div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/hkjeldsberg/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-hidden
                                src="/linkedin.svg"
                                alt="Linkedin icon"
                                width={32}
                                height={32}
                            />
                        </a>
                        <a
                            href="https://github.com/HKjeldsberg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-hidden
                                src="/github.svg"
                                alt="GitHub icon"
                                width={32}
                                height={32}
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
