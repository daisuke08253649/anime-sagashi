'use client';
import { useState } from 'react';
import { EyeOff, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
export default function Reviews() {
  const [show, setShow] = useState(false);
  return (
    <section className="reviews">
      <div className="section-heading">
        <div>
          <span className="eyebrow">VOICES & IMPRESSIONS</span>
          <h2>
            観た人の声 <span className="sample">架空の口コミ</span>
          </h2>
        </div>
        <span className="spoiler-label">
          <EyeOff size={16} />
          ネタバレ非表示
        </span>
      </div>
      <p className="review-notice">
        以下は画面確認用の架空の内容です。Xの投稿やGrokの分析結果ではありません。
      </p>
      <div className="review-summary">
        <div>
          <span className="summary-label">好評な点</span>
          <p>世界観や映像の雰囲気が心に残る。登場人物のやりとりをじっくり楽しめる。</p>
        </div>
        <div>
          <span className="summary-label neutral">好みが分かれる点</span>
          <p>落ち着いた展開のため、テンポの速い物語を求めると印象が異なることも。</p>
        </div>
      </div>
      <div className="sample-post">
        <MessageCircle size={22} />
        <div>
          <strong>
            口コミの表示例 <span className="sample">架空</span>
          </strong>
          <p>雰囲気がとても好き。余韻を楽しみながら、少しずつ観たくなる作品でした。</p>
          <small>実データ連携後は、出典を確認できるX投稿を表示します。</small>
        </div>
      </div>
      <div className="spoiler-box">
        <Button
          variant="ghost"
          aria-expanded={show}
          aria-controls="spoiler-content"
          onClick={() => setShow(!show)}
        >
          <EyeOff size={17} />
          {show ? 'ネタバレを含む感想を隠す' : 'ネタバレを含む感想を開く'}
          <ChevronDown size={17} />
        </Button>
        {show && (
          <div id="spoiler-content">
            <span className="sample">表示切り替えのデモ</span>
            <p>
              ここに展開や結末に触れる投稿が表示されます。このデモには実際のネタバレは含まれていません。
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
