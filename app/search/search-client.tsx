'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, SlidersHorizontal, X, Sparkles } from 'lucide-react';
import { anime, findAnime, genres, moods, recommendationReason } from '@/lib/catalog';
import AnimeCard from '@/components/anime-card';
import { Button } from '@/components/ui/button';
export default function SearchClient() {
  const params = useSearchParams();
  const router = useRouter();
  const query = params.get('q') ?? '';
  const genre = params.get('genre') ?? '';
  const mood = params.get('mood') ?? '';
  const format = params.get('format') ?? '';
  const sort = params.get('sort') ?? 'popular';
  const similar = params.get('similar') ?? '';
  const isSimilar = params.get('mode') === 'similar' || !!similar;
  const seed = anime.find((a) => a.id === similar);
  const results = findAnime({ query, genre, mood, format, sort, similar });
  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    value ? next.set(key, value) : next.delete(key);
    router.replace(`/search/?${next.toString()}`, { scroll: false });
  }
  return (
    <main id="main" className="main search-main">
      <div className="eyebrow">EXPLORE THE COLLECTION</div>
      <h1>あなたの次の一作を。</h1>
      <div className="search-tabs">
        <button
          className={!isSimilar ? 'active' : ''}
          onClick={() => {
            const p = new URLSearchParams(params.toString());
            p.delete('mode');
            p.delete('similar');
            router.replace(`/search/?${p}`, { scroll: false });
          }}
        >
          <Search size={17} />
          作品を探す
        </button>
        <button className={isSimilar ? 'active' : ''} onClick={() => update('mode', 'similar')}>
          <Sparkles size={17} />
          好きな作品から探す
        </button>
      </div>
      {isSimilar && (
        <div className="seed-panel">
          <label htmlFor="seed">好きな作品を選んでください</label>
          <select id="seed" value={similar} onChange={(e) => update('similar', e.target.value)}>
            <option value="">作品を選択…</option>
            {anime.map((a) => (
              <option key={a.id} value={a.id}>
                {a.title}
              </option>
            ))}
          </select>
          <p>
            {seed
              ? `「${seed.title}」とジャンルや気分が近い順に並べています。`
              : '共通するジャンルや気分から、おすすめを見つけます。'}
          </p>
        </div>
      )}
      <div className="search-layout">
        <aside className="filters">
          <h2>
            <SlidersHorizontal size={18} />
            絞り込み
          </h2>
          <label htmlFor="query">作品名</label>
          <div className="search-box compact">
            <Search size={18} />
            <input
              id="query"
              value={query}
              placeholder="タイトル・読み方"
              onChange={(e) => update('q', e.target.value)}
            />
            {query && (
              <button onClick={() => update('q', '')} aria-label="検索語を消す">
                <X size={16} />
              </button>
            )}
          </div>
          <label htmlFor="genre">ジャンル</label>
          <select id="genre" value={genre} onChange={(e) => update('genre', e.target.value)}>
            <option value="">すべてのジャンル</option>
            {genres.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
          <fieldset>
            <legend>いまの気分</legend>
            <div className="filter-moods">
              {moods.map((m) => (
                <button
                  key={m}
                  aria-pressed={mood === m}
                  className={mood === m ? 'selected' : ''}
                  onClick={() => update('mood', mood === m ? '' : m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </fieldset>
          <label htmlFor="format">作品の種類</label>
          <select id="format" value={format} onChange={(e) => update('format', e.target.value)}>
            <option value="">すべて</option>
            <option value="TV">TVアニメ</option>
            <option value="映画">映画</option>
          </select>
          <Button
            variant="ghost"
            onClick={() =>
              router.replace(
                isSimilar
                  ? `/search/?mode=similar${similar ? `&similar=${similar}` : ''}`
                  : '/search/',
                { scroll: false },
              )
            }
          >
            絞り込みをリセット
          </Button>
        </aside>
        <section className="results" aria-label="検索結果">
          <div className="results-heading">
            <p aria-live="polite">
              <strong>{results.length}</strong> 作品<span className="sample">サンプルデータ</span>
            </p>
            {!seed && (
              <label className="sort-label">
                並び順
                <select value={sort} onChange={(e) => update('sort', e.target.value)}>
                  <option value="popular">人気順（サンプル）</option>
                  <option value="buzz">話題順（サンプル）</option>
                  <option value="year">公開年の新しい順</option>
                </select>
              </label>
            )}
          </div>
          {results.length ? (
            <div className="results-grid">
              {results.map((a) => (
                <AnimeCard
                  item={a}
                  key={a.id}
                  reason={seed ? recommendationReason(seed, a) : undefined}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={36} />
              <h2>条件に合う作品がありません</h2>
              <p>キーワードを短くするか、絞り込みを減らしてみてください。</p>
              <Button variant="outline" onClick={() => router.replace('/search/')}>
                すべての作品を見る
              </Button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
