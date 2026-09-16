import Link from 'next/link';
import { ArrowRight, Search, Sparkles, Play, Leaf, Smile, Heart, Flame, Orbit } from 'lucide-react';
import { anime, moods } from '@/lib/catalog';
import AnimeCard from '@/components/anime-card';
import Poster from '@/components/poster';
import { Button } from '@/components/ui/button';
const icons = [Leaf, Smile, Heart, Flame, Orbit];
export default function Home() {
  const featured = anime[0];
  return (
    <main id="main" className="main">
      <section className="discovery-heading">
        <div>
          <div className="eyebrow">FIND YOUR NEXT STORY</div>
          <h1>次は、どんな世界へ？</h1>
        </div>
        <form action="/search/" className="search-box">
          <Search size={20} />
          <input name="q" aria-label="作品名を検索" placeholder="作品名・キーワードで探す" />
          <button aria-label="検索する">
            <ArrowRight size={19} />
          </button>
        </form>
      </section>
      <section className="feature-layout">
        <div className="feature">
          <Poster item={featured} hero />
          <div className="feature-shade" />
          <div className="feature-content">
            <span className="eyebrow">
              PICK UP <span className="eyebrow-line" /> 心に残る旅へ
            </span>
            <h2>
              葬送の
              <br />
              フリーレン
            </h2>
            <p>
              冒険の終わりから、はじまる物語。
              <br />
              静かな余韻に浸りたい、そんな夜に。
            </p>
            <div className="feature-tags">
              <span>ファンタジー</span>
              <span>癒やされたい</span>
              <span>2023</span>
            </div>
            <Button asChild>
              <Link href={`/anime/${featured.id}/`}>
                <Play size={16} fill="currentColor" />
                作品を見てみる
                <ArrowRight size={17} />
              </Link>
            </Button>
          </div>
          <div className="feature-number">
            01 <span>/ 50 TITLES</span>
          </div>
        </div>
        <aside className="mood-panel">
          <span className="eyebrow">MATCH YOUR MOOD</span>
          <h2>いまの気分から。</h2>
          <p>観たい気持ちが、見つかる入口。</p>
          <div className="mood-list">
            {moods.map((m, i) => {
              const Icon = icons[i];
              return (
                <Link href={`/search/?mood=${encodeURIComponent(m)}`} key={m}>
                  <span className={`mood-icon mood-${i}`}>
                    <Icon size={20} />
                  </span>
                  <span>{m}</span>
                  <ArrowUpRightIcon />
                </Link>
              );
            })}
          </div>
        </aside>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">POPULAR PICKS</span>
            <h2>
              まず出会いたい、人気の作品 <span className="sample">サンプル順位</span>
            </h2>
          </div>
          <Link href="/search/">
            すべて見る
            <ArrowRight size={17} />
          </Link>
        </div>
        <div className="poster-grid">
          {anime.slice(0, 6).map((a, i) => (
            <AnimeCard key={a.id} item={a} rank={i + 1} />
          ))}
        </div>
      </section>
      <section className="similar-banner">
        <div className="similar-symbol">
          <Sparkles size={32} />
        </div>
        <div>
          <span className="eyebrow">MORE LIKE YOUR FAVORITES</span>
          <h2>あの作品が好きなら、次はこれ。</h2>
          <p>好きな作品を選んで、あなたに近い一作を。</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/search/?mode=similar">
            似た作品を探す
            <ArrowRight size={18} />
          </Link>
        </Button>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">TIMELESS STORIES</span>
            <h2>何度でも出会いたい名作</h2>
          </div>
          <Link href="/search/?sort=popular">
            作品一覧へ
            <ArrowRight size={17} />
          </Link>
        </div>
        <div className="poster-grid four">
          {[anime[7], anime[3], anime[6], anime[4]].map((a) => (
            <AnimeCard key={a.id} item={a} />
          ))}
        </div>
      </section>
      <section className="section news-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ANIME UPDATES</span>
            <h2>
              作品の最新情報 <span className="sample">表示サンプル</span>
            </h2>
          </div>
        </div>
        <div className="news-grid">
          {[
            {
              type: 'PV',
              title: '新しい映像との出会い',
              body: '公式PVへのリンクと発表日を、ここから確認できるようになります。',
              item: anime[0],
            },
            {
              type: '放送・配信',
              title: '観たい作品を、見逃さない',
              body: '放送・配信の予定を作品ごとに整理する予定です。',
              item: anime[1],
            },
            {
              type: '新作・続編',
              title: '好きな物語の、その先へ',
              body: '公式の新作・続編発表を、出典付きで掲載する予定です。',
              item: anime[2],
            },
          ].map((n) => (
            <Link href={`/anime/${n.item.id}/`} className="news-card" key={n.type}>
              <span className="news-type">{n.type}</span>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
              <span className="news-bottom">
                {n.item.title}
                <ArrowRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
function ArrowUpRightIcon() {
  return <ArrowRight size={16} className="mood-arrow" />;
}
