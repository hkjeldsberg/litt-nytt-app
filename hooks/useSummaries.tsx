'use client'
import {useEffect, useState} from "react";
import {Summary} from "@/types/summaries";

export const useSummaries = () => {
    const [summaries, setSummaries] = useState<Summary[]>([])

    useEffect(() => {
        fetch('/api/summary/summaries')
            .then((res) => res.json())
            .then((data) => {
                setSummaries(data)
            })
    }, [])

    return summaries
};
