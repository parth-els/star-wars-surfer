import React, { useEffect, useRef, useState } from 'react'
import TableComp from '../components/TableComp'
import { PaginationComp } from '../components/PaginationComp'
import SkeletonComp from '../components/SkeletonComp';
import { Search } from "@elsevier/graphene";


export default function Hero() {

    const URL = "https://swapi.py4e.com/api/people/?page=";
    const [pageNumber, setpageNumber] = useState<number>(1)

    const [data, setData] = useState<any[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    // track mounted state to avoid setting state after unmount
    const mountedRef = useRef(true)

    useEffect(() => {
        mountedRef.current = true
        fetchTableData()

        return () => {
            // do not abort the fetch — avoid AbortError logs from Strict Mode.
            // just mark unmounted so we don't call setState afterwards.
            mountedRef.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function fetchTableData() {
        // bail early if component unmounted (very unlikely immediately)
        if (!mountedRef.current) return

        setLoading(true)
        setError(null)
        try {
            const res = await fetch(URL+pageNumber)
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`)
            }
            const jsonData = await res.json()

            // only update state if still mounted
            if (!mountedRef.current) return

            setData(jsonData?.results ?? null)
            console.log('fetched data', jsonData?.results)
        } catch (err: any) {
            // do not log or treat aborts specially here because we no longer abort fetches.
            // still handle real network errors:
            const message = err?.message ?? String(err)
            if (mountedRef.current) {
                setError(message)
                console.error('Fetch error:', err)
            }
        } finally {
            if (mountedRef.current) setLoading(false)
        }
    }

    return (
        <>
            <h1 style={{ color: 'black', marginBottom: '4rem' }}>
                Star Wars people
            </h1>            
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4rem' }}>
                {/* <div>Your item here</div> */}
                <Search
                    variant={'hero'}
                    label="Search"
                    onSearchChange={(value: string) => { }}
                    onSearch={(value: string) => { }}
                    onOptionSelected={(option: SearchOption) => { }}
                    value=""
                    placeholder="Search people"
                // onAdvancedSearchClick={() => { }}
                />
            </div>



            {loading && <SkeletonComp />}

            {!loading && error && <div style={{ color: 'salmon' }}>Error: {error}</div>}

            {!loading && !error && data && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <TableComp data={data} />
                </div>
            )}

            {!loading && !error && !data && <div>No data available.</div>}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                <PaginationComp />
            </div>
        </>
    )
}
