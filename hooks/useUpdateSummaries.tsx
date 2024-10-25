import {useEffect, useState} from "react";
import {Summary} from "@/types/summaries";

export const useUpdateSummaries = () => {
    const [summaries, setSummaries] = useState<Summary[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const updateSummaries = async () => {
        setLoading(true);
        setError(null);
        try {
            fetch('/api/summary/update',
                {method: "POST"}
            )
                .then((res) => res.json())
                .then((data) => {
                    setSummaries(data)
                })
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };


    return {summaries, loading, error, updateSummaries};
};