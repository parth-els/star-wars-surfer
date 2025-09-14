import React, { useEffect, useRef, useState } from 'react'
import TableComp from '../components/TableComp'
import { PaginationComp } from '../components/PaginationComp'
import SkeletonComp from '../components/SkeletonComp';
import { Search } from "@elsevier/graphene";
// import LoadingComp from '../components/LoadingComp';
// import SideSheetComp from '../components/SideSheetComp';
// import TableFilmsComp from '../components/TableFilmsComp';

export default function Films() {

    const URL = "https://swapi.py4e.com/api/films/?page=";
    const [pageNumber, setpageNumber] = useState<number>(1)
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [data, setData] = useState<any[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    // track mounted state to avoid setting state after unmount
    const mountedRef = useRef(true)

    useEffect(() => {
        mountedRef.current = true
        fetchTableData()

        return () => {
            mountedRef.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // WHEN THE PAGINATION CHANGES THEN THIS SIDE CODE SHOULD RUN.
    useEffect(() => {
        mountedRef.current = true
        fetchTableData()

        return () => {
            mountedRef.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber])

    async function fetchTableData() {
        if (!mountedRef.current) return

        setLoading(true)
        setError(null)
        try {
            const res = await fetch(URL + pageNumber)
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`)
            }
            const jsonData = await res.json()

            if (!mountedRef.current) return

            setData(jsonData?.results ?? null)
            console.log('fetched data', jsonData?.results)
        } catch (err: any) {
            const message = err?.message ?? String(err)
            if (mountedRef.current) {
                setError(message)
                console.error('Fetch error:', err)
            }
        } finally {
            if (mountedRef.current) setLoading(false)
        }
    }

    async function fetchSearchTermData(value: string) {
        if (!value.trim()) {
            setpageNumber(1);
            fetchTableData();
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`https://swapi.py4e.com/api/films/?search=${value}`);
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
            }
            const jsonData = await res.json();
            setData(jsonData?.results ?? []);
        } catch (err) {
            setError(err ?? String(err));
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <h1 style={{ color: 'black', marginBottom: '4rem' }}>
                Star Wars Films
            </h1>

            
                {/* <SideSheetContainer>

                </SideSheetContainer> */}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4rem',  marginRight: '4rem' }}>
                <Search
                    variant={'hero'}
                    label="Search"
                    value={searchTerm}
                    placeholder="Search films"
                    onSearchChange={(value: string) => {
                        setSearchTerm(value);
                    }}
                    onSearch={(value: string) => fetchSearchTermData(value)}
                    onOptionSelected={() => { }}
                />
            </div>

            {loading && <SkeletonComp />}

            {!loading && error && <div style={{ color: 'salmon' }}>Error: {error}</div>}

            {!loading && !error && data && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <TableComp 
                    data={data} 
                    tableHeadersTitles={['Ep. Id','Title', 'Opening Crawl Year', 'Director', 'Producer','Release Date' ]} 
                    dataKeysTitles={['episode_id','title', 'opening_crawl', 'director', 'producer', 'release_date']} />
                </div>
            )}

            {!loading && !error && !data && <div>No data available from SWAPI.</div>}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                <PaginationComp
                    onPageChange={(newPage) => setpageNumber(newPage)}
                     totalNumberOfItemsInTheData={10}
                />
            </div>

           

            

        
        </>
    )
}
