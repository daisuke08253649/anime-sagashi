import { describe, it, expect } from 'vitest';
import { anime, findAnime, similarity } from '../lib/catalog';
describe('作品探し', () => {
  it('50作品を重複のないIDで用意する', () => {
    expect(anime).toHaveLength(50);
    expect(new Set(anime.map((a) => a.id)).size).toBe(50);
  });
  it('日本語の別名と英語タイトルでも検索する', () => {
    expect(findAnime({ query: 'シュタゲ' })[0].title).toBe('STEINS;GATE');
    expect(findAnime({ query: 'ＳＰＹ family' })[0].id).toBe('anime-2');
  });
  it('ジャンル、気分、形式をAND条件で絞り込む', () => {
    const r = findAnime({ genre: 'ファンタジー', mood: '癒やされたい', format: '映画' });
    expect(r.map((a) => a.title)).toEqual(['となりのトトロ', '魔女の宅急便']);
  });
  it('候補がないときは空にする', () => {
    expect(findAnime({ query: '存在しない作品abcd' })).toEqual([]);
  });
  it('推薦元を除外し、共通点の多い順に推薦する', () => {
    const seed = anime[0],
      r = findAnime({ similar: seed.id });
    expect(r.some((a) => a.id === seed.id)).toBe(false);
    expect(r[0].genre).toBe(seed.genre);
    expect(r[0].mood).toBe(seed.mood);
    expect(r.every((a, i) => i === 0 || similarity(seed, r[i - 1]) >= similarity(seed, a))).toBe(
      true,
    );
  });
  it('話題順を人気順と分ける', () => {
    expect(findAnime({ sort: 'buzz' }).map((a) => a.id)).not.toEqual(findAnime().map((a) => a.id));
  });
});
