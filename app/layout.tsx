import type { Metadata } from 'next';
import Link from 'next/link';
import { Aperture, Search } from 'lucide-react';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'アニメさがし | 次に観たい一作へ', template: '%s | アニメさがし' },
  description:
    'ジャンルや気分、好きな作品から次に観たいアニメを探せるプロトタイプ。口コミ・ランキングはサンプルです。',
  icons: { icon: '/icon.svg' },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          本文へスキップ
        </a>
        <header className="header">
          <div className="header-inner">
            <Link href="/" className="brand">
              <Aperture aria-hidden="true" />
              <span>
                アニメ<span className="brand-light">さがし</span>
                <small>ANIME SAGASHI</small>
              </span>
            </Link>
            <nav aria-label="メインナビゲーション">
              <Link href="/">見つける</Link>
              <Link href="/search/">作品を探す</Link>
              <Link href="/search/?sort=buzz">ランキング</Link>
            </nav>
            <Link href="/search/" className="header-search" aria-label="作品を検索">
              <Search size={20} />
            </Link>
          </div>
        </header>
        <div className="demo-strip">
          <span className="demo-tag">PROTOTYPE</span>{' '}
          口コミ・順位・ニュースはサンプルです。実データ連携前の体験版。
        </div>
        {children}
        <footer>
          <Link href="/" className="footer-brand">
            アニメさがし
          </Link>
          <p>まだ知らない、好きな作品に出会おう。</p>
          <span>作品情報の一部・画像・口コミはデモ用です。有料APIは使用していません。</span>
        </footer>
      </body>
    </html>
  );
}
