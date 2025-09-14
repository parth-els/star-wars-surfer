import React, { useState } from 'react';
import { Table, THeaderCell, TCell, TRow } from '@elsevier/graphene';
import { CardComp } from './CardComp';

type Person = {
  name?: string;
  birth_year?: string;
  gender?: string;
  height?: string;
  mass?: number;
  hair_color?: string;
  eye_color?: string;
  url?: string;
  title?: string; // films
  episode_id?: number;
  opening_crawl?: string;
  director?: string;
  producer?: string;
  release_date?: string;
  [key: string]: string | number | undefined;
};

export default function TableComp({
  data,
  tableHeadersTitles,
  dataKeysTitles,
}: {
  data?: Person[] | null;
  tableHeadersTitles?: string[];
  dataKeysTitles?: string[];
}) {
  const [selected, setSelected] = useState<Person | null>(null);
  const rows = data ?? [];
  const tableHeaders = tableHeadersTitles ?? [];
  const dataKeys = dataKeysTitles ?? [];

  return (
    <>
      <Table dividers="horizontal" layout="spacious">
        <thead>
          <tr>
            {/* details toggle column */}
            <THeaderCell />
            {tableHeaders.map((header) => (
              <THeaderCell key={header}>{header}</THeaderCell>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <TCell colSpan={Math.max(1, tableHeaders.length + 1)}>
                No data available.
              </TCell>
            </tr>
          ) : (
            rows.map((item, index) => {
              const key = item.url ?? (item.name ?? item.title ?? `item-${index}`);
              return (
                <TRow key={key}>
                  <TCell>
                    <button
                      onClick={() => setSelected(item)}
                      aria-label={`View details for ${String(item.name ?? item.title ?? 'item')}`}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#0b69ff',
                        cursor: 'pointer',
                        padding: 4,
                        fontSize: 13,
                      }}
                    >
                      {">"}
                    </button>
                  </TCell>

                  {dataKeys.map((k) => {
                    const value = item[k];
                    return (
                      <TCell key={k} >
                        {value ?? '—'}
                      </TCell>
                    );
                  })}
                </TRow>
              );
            })
          )}
        </tbody>
      </Table>

      {/* modal card for selected item*/}
      <CardComp data={selected} onClose={() => setSelected(null)} />
    </>
  );
}