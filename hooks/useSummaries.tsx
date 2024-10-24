'use client'
import {useEffect, useState} from "react";
import {Summaries} from "@/app/page";

export const useSummaries = () => {
    const [summaries, setSummaries] = useState<Summaries>()

    useEffect(() => {
        fetch('/api/summarize')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setSummaries(data)
            })
    }, [])

    return summaries
};
