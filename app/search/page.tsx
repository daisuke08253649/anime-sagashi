import { Suspense } from 'react';
import SearchClient from './search-client';
export const metadata = { title: '作品を探す' };
export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main id="main" className="main">
          <p>作品を読み込んでいます…</p>
        </main>
      }
    >
      <SearchClient />
    </Suspense>
  );
}
