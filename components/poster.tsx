'use client';
import { useState } from 'react';
import type { Anime } from '@/lib/catalog';
export default function Poster({ item, hero = false }: { item: Anime; hero?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`poster ${hero ? 'poster-hero' : ''}`}
      style={{ '--poster-color': item.color } as React.CSSProperties}
    >
      {item.image && !failed ? (
        <img
          src={item.image}
          alt={`${item.title}の作品画像`}
          loading={hero ? 'eager' : 'lazy'}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="type-cover">
          <small>
            {item.year} / {item.genre}
          </small>
          <strong>{item.title}</strong>
          <span>
            ANIME SAGASHI
            <br />
            SAMPLE COVER
          </span>
        </div>
      )}
    </div>
  );
}
