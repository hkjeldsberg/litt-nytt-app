'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {useSummaries} from "@/hooks/useSummaries";

export type Summary = {
    title: string;
    summary: string;
    url: string;
    date: string;
}

export type Summaries = {
    summaries: Summary[]
}

export default function Home() {
    const summaries = useSummaries()

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>LITT NYTT</h1>
                <h3>Nyheter, kort fortalt</h3>
                <ul className={styles.list}>
                    {summaries && summaries.summaries?.length != 0 &&
                        summaries.summaries.map(summary =>
                            (
                                <a
                                    href={summary.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={summary.title}
                                >
                                    <li className={styles.listitem} key={summary.title}>
                                        <h1>{summary.title}</h1>
                                        <p>{summary.summary}</p>
                                    </li>
                                </a>
                            )
                        )}
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
