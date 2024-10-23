import {useEffect, useState} from "react";
import {Summaries} from "../app/page";

export const useSummaries = () => {
    const [summaries, setSummaries] = useState<Summaries>()

    useEffect(() => {
        console.log("Fetching")
        console.log(summaries)
        fetch('/api/summarize')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setSummaries(data)
            })
    }, [])

    return summaries
};
