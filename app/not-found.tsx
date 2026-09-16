import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="main empty-state">
      <h1>作品が見つかりません</h1>
      <p>URLが変わったか、まだ登録されていない作品です。</p>
      <Link className="button button-primary" href="/search/">
        作品一覧へ
      </Link>
    </main>
  );
}
