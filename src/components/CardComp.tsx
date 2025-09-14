import React from 'react';
import { Card, Inline, Button } from '@elsevier/graphene';

type AnyData = { [key: string]: any };

export function CardComp({
  data,
  onClose,
  inline = false,
}: {
  data?: AnyData | null;
  onClose?: () => void;
  inline?: boolean;
}) {
  if (!data) return null;

  const isPerson = Boolean(data.name);
  const isFilm = Boolean(data.title);

  const heading = data.name ?? data.title ?? 'Details';
  const subheading =
    isPerson ? `Born: ${data.birth_year ?? '—'}` : isFilm ? `Released: ${data.release_date ?? '—'}` : '';

  const cardInner = (
    <Card
      expanded
      heading={heading}
      headingAs={'h1'}
      subheading={subheading || undefined}
      subheadingAs={'h2'}
      size="medium"
      // style={{
      //   background: 'transparent',
      //   boxShadow: 'none',
      //   borderRadius: 0,
      //   padding: 0,
      // }}
    >
      <div
        style={{
          display: 'grid',
          gap: 12,
          fontSize: 15,
          color: '#23272f',
          padding: inline ? '16px' : '24px',
          background: 'transparent',
        }}
      >
        {isPerson && (
          <>
            <div><strong>Gender:</strong> {data.gender ?? '—'}</div>
            <div><strong>Height:</strong> {data.height ?? '—'}</div>
            <div><strong>Mass:</strong> {data.mass ?? '—'}</div>
            <div><strong>Hair:</strong> {data.hair_color ?? '—'}</div>
            <div><strong>Eyes:</strong> {data.eye_color ?? '—'}</div>
          </>
        )}

        {isFilm && (
          <>
            <div><strong>Episode:</strong> {data.episode_id ?? '—'}</div>
            <div
              style={{
                maxHeight: 96,
                overflow: 'auto',
                whiteSpace: 'pre-wrap',
                background: '#f7f9fc',
                borderRadius: 8,
                padding: '8px 12px',
                border: '1px solid #e3e8f0',
              }}
            >
              <strong>Opening crawl:</strong>
              <div style={{ marginTop: 6, color: '#4a5568' }}>{String(data.opening_crawl ?? '—')}</div>
            </div>
            <div><strong>Director:</strong> {data.director ?? '—'}</div>
            <div><strong>Producer:</strong> {data.producer ?? '—'}</div>
            <div><strong>Release date:</strong> {data.release_date ?? '—'}</div>
          </>
        )}

        {!isPerson && !isFilm && (
          <>
            {Object.keys(data)
              .slice(0, 8)
              .map((k) => (
                <div key={k}>
                  <strong>{k}:</strong> {String(data[k] ?? '—')}
                </div>
              ))}
          </>
        )}

        {/* {data.url && (
          <div>
            <a href={String(data.url)} target="_blank" rel="noreferrer" style={{ color: '#0b69ff' }}>
              Open reference
            </a>
          </div>
        )} */}

        {onClose && (
          <Inline spacing="8dp" >
            <Button onClick={onClose} variant="secondary" label="Close" />
          </Inline>
        )}
      </div>
    </Card>
  );

  
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${heading} details`}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(20, 24, 31, 0.65)',
        backdropFilter: 'blur(2px)',
        padding: 32,
        transition: 'background 0.3s',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(480px, 96%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          borderRadius: 16,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #fff 80%, #f3f6fa 100%)',
          border: '1px solid #e3e8f0',
          transition: 'box-shadow 0.2s',
        }}
      >
        {cardInner}
      </div>
    </div>
  );
}