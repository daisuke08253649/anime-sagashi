import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { anime, findAnime, recommendationReason } from '@/lib/catalog';
import Poster from '@/components/poster';
import AnimeCard from '@/components/anime-card';
import Reviews from '@/components/reviews';
import { Button } from '@/components/ui/button';
export function generateStaticParams() {
  return anime.map((a) => ({ id: a.id }));
}
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const a = anime.find((a) => a.id === id);
  return { title: a?.title ?? '作品が見つかりません' };
}
export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = anime.find((a) => a.id === id);
  if (!item) notFound();
  const recommendations = findAnime({ similar: item.id }).slice(0, 4);
  return (
    <main id="main" className="main detail-main">
      <Link className="back-link" href="/search/">
        <ArrowLeft size={16} />
        作品一覧へ
      </Link>
      <section className="detail-intro">
        <div className="detail-poster">
          <Poster item={item} />
        </div>
        <div className="detail-copy">
          <span className="eyebrow">
            {item.format === 'TV' ? 'TV ANIMATION' : 'ANIMATION FILM'} / {item.year}
          </span>
          <h1>{item.title}</h1>
          <div className="detail-tags">
            <Link href={`/search/?genre=${encodeURIComponent(item.genre)}`}>{item.genre}</Link>
            <Link href={`/search/?mood=${encodeURIComponent(item.mood)}`}>{item.mood}</Link>
          </div>
          <p className="synopsis">{item.description}</p>
          <Button asChild>
            <Link href={`/search/?mode=similar&similar=${item.id}`}>
              <Sparkles size={18} />
              この作品に似たアニメを探す
              <ArrowRight size={18} />
            </Link>
          </Button>
          <p className="detail-note">
            作品紹介はプロトタイプ用の編集データです。配信先は実データ連携後に追加します。
          </p>
          {item.source && (
            <a className="source-link" href={item.source} target="_blank" rel="noreferrer">
              画像の掲載元
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </section>
      <Reviews />
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OFFICIAL UPDATES</span>
            <h2>この作品の最新情報</h2>
          </div>
        </div>
        <div className="updates-empty">
          <span className="sample">連携前</span>
          <p>公式発表・PV・放送や配信の情報は、出典の確認後に掲載します。</p>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">YOUR NEXT WATCH</span>
            <h2>この作品が気になるなら</h2>
          </div>
          <Link href={`/search/?similar=${item.id}`}>
            もっと見る
            <ArrowRight size={17} />
          </Link>
        </div>
        <div className="poster-grid four">
          {recommendations.map((a) => (
            <AnimeCard item={a} key={a.id} reason={recommendationReason(item, a)} />
          ))}
        </div>
      </section>
    </main>
  );
}
