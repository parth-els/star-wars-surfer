import React from 'react';
import { Table, THeaderCell, TCell } from '@elsevier/graphene';
// import SideSheetComp from './SideSheetComp';

type Person = {
  name?: string;
  birth_year?: string;
  gender?: string;
  height?: string;
  mass?: number;
  hair_color?: string;
  eye_color?: string;
  url?: string;
  [key: string]: string | number | undefined; 
};

export default function TableComp({ data, tableHeadersTitles, dataKeysTitles }: { data?: Person[] | null, 
    tableHeadersTitles: string[],
    dataKeysTitles: string[]
  }) {
    
  const rows = data || [];
  const tableHeaders: string[] | undefined = tableHeadersTitles;
  const dataKeys: string[] | undefined  = dataKeysTitles;

  return (
    <Table layout="spacious">
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <THeaderCell key={header}>{header}</THeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <TCell colSpan={tableHeaders.length}>No data available.</TCell>
          </tr>
        ) : (
          rows.map((person, index) => (
            <>
             <tr key={person.url || `${person.name || 'person'}-${index}`}>
              {dataKeys.map((key) => (
                <TCell key={key}>{person[key] || '—'}</TCell>
              ))}
            </tr>
           
            </>
           
          ))
        )}
      </tbody>
    </Table>
  );
}