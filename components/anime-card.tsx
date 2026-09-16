import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Anime } from '@/lib/catalog';
import Poster from './poster';
export default function AnimeCard({
  item,
  rank,
  reason,
}: {
  item: Anime;
  rank?: number;
  reason?: string;
}) {
  return (
    <Link className="anime-card" href={`/anime/${item.id}/`}>
      <div className="card-image">
        <Poster item={item} />
        {rank && <span className="rank">{String(rank).padStart(2, '0')}</span>}
        <span className="card-open">
          <ArrowUpRight size={20} />
        </span>
        <span className="format-tag">{item.format === '映画' ? '映画' : 'TVアニメ'}</span>
      </div>
      <div className="card-meta">
        {item.year}
        <span>·</span>
        {item.genre}
      </div>
      <h3>{item.title}</h3>
      {reason ? <p className="reason">{reason}</p> : <p className="card-mood">{item.mood}</p>}
    </Link>
  );
}
