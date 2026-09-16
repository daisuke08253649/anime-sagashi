export const moods = [
  '癒やされたい',
  '笑いたい',
  '泣きたい',
  '熱くなりたい',
  '考察したい',
] as const;
export type Mood = (typeof moods)[number];
export type Anime = {
  id: string;
  title: string;
  aliases: string;
  year: number;
  genre: string;
  mood: Mood;
  format: 'TV' | '映画';
  description: string;
  popularity: number;
  buzz: number;
  image?: string;
  source?: string;
  color: string;
};
// Editorial demo catalog. Popularity/buzz are deliberately synthetic, never live metrics.
const rows: [string, string, number, string, number, ('TV' | '映画')?][] = [
  ['葬送のフリーレン', 'frieren sousou no frieren', 2023, 'ファンタジー', 0],
  ['SPY×FAMILY', 'spy family スパイファミリー', 2022, 'コメディ', 1],
  ['ぼっち・ざ・ろっく！', 'bocchi the rock ぼざろ', 2022, '音楽', 1],
  ['STEINS;GATE', 'steins gate シュタインズゲート シュタゲ', 2011, 'SF', 4],
  ['ヴァイオレット・エヴァーガーデン', 'violet evergarden', 2018, 'ドラマ', 2],
  ['ハイキュー!!', 'haikyu', 2014, 'スポーツ', 3],
  ['君の名は。', 'your name kimi no na wa', 2016, '恋愛', 2, '映画'],
  ['蟲師', 'mushishi', 2005, 'ファンタジー', 0],
  ['宇宙よりも遠い場所', 'よりもい a place further than the universe', 2018, '青春', 2],
  ['ゆるキャン△', 'yuru camp', 2018, '日常', 0],
  ['進撃の巨人', 'attack on titan', 2013, 'アクション', 4],
  ['鋼の錬金術師 FULLMETAL ALCHEMIST', 'fullmetal alchemist ハガレン', 2009, 'ファンタジー', 3],
  ['夏目友人帳', 'natsume', 2008, 'ファンタジー', 0],
  ['氷菓', 'hyouka', 2012, 'ミステリー', 4],
  ['四月は君の嘘', 'your lie in april', 2014, '音楽', 2],
  ['けいおん！', 'k on', 2009, '音楽', 0],
  ['響け！ユーフォニアム', 'sound euphonium', 2015, '音楽', 3],
  ['モブサイコ100', 'mob psycho', 2016, 'アクション', 3],
  ['ワンパンマン', 'one punch man', 2015, 'アクション', 1],
  ['かぐや様は告らせたい', 'kaguya sama', 2019, '恋愛', 1],
  ['ダンジョン飯', 'delicious in dungeon', 2024, 'ファンタジー', 1],
  ['オッドタクシー', 'odd taxi', 2021, 'ミステリー', 4],
  ['PSYCHO-PASS サイコパス', 'psycho pass', 2012, 'SF', 4],
  ['カウボーイビバップ', 'cowboy bebop', 1998, 'SF', 4],
  ['プラネテス', 'planetes', 2003, 'SF', 3],
  ['天元突破グレンラガン', 'gurren lagann', 2007, 'SF', 3],
  ['あの日見た花の名前を僕達はまだ知らない。', 'あの花 anohana', 2011, '青春', 2],
  ['CLANNAD', 'クラナド', 2007, 'ドラマ', 2],
  ['聲の形', 'a silent voice こえのかたち', 2016, 'ドラマ', 2, '映画'],
  ['千と千尋の神隠し', 'spirited away', 2001, 'ファンタジー', 4, '映画'],
  ['となりのトトロ', 'my neighbor totoro', 1988, 'ファンタジー', 0, '映画'],
  ['魔女の宅急便', 'kikis delivery service', 1989, 'ファンタジー', 0, '映画'],
  ['時をかける少女', 'the girl who leapt through time', 2006, '青春', 2, '映画'],
  ['サマーウォーズ', 'summer wars', 2009, 'SF', 3, '映画'],
  ['リズと青い鳥', 'liz and the blue bird', 2018, '音楽', 2, '映画'],
  ['映像研には手を出すな！', 'eizouken', 2020, '青春', 3],
  ['日常', 'nichijou', 2011, 'コメディ', 1],
  ['斉木楠雄のΨ難', 'saiki kusuo', 2016, 'コメディ', 1],
  ['銀魂', 'gintama', 2006, 'コメディ', 1],
  ['ばらかもん', 'barakamon', 2014, '日常', 0],
  ['のんのんびより', 'non non biyori', 2013, '日常', 0],
  ['スキップとローファー', 'skip and loafer', 2023, '青春', 0],
  ['僕の心のヤバイやつ', 'boku yaba', 2023, '恋愛', 2],
  ['ちはやふる', 'chihayafuru', 2011, 'スポーツ', 3],
  ['ピンポン THE ANIMATION', 'ping pong', 2014, 'スポーツ', 3],
  ['風が強く吹いている', 'run with the wind', 2018, 'スポーツ', 3],
  ['約束のネバーランド', 'the promised neverland', 2019, 'ミステリー', 4],
  ['魔法少女まどか☆マギカ', 'madoka magica', 2011, 'ファンタジー', 4],
  ['電脳コイル', 'dennou coil', 2007, 'SF', 4],
  ['リトルウィッチアカデミア', 'little witch academia', 2017, 'ファンタジー', 3],
];
const descriptions = [
  '勇者一行の冒険が終わった後。長い時を生きるエルフの魔法使いが、人を知るための旅に出る。',
  '任務のために家族を作ったスパイ。その妻は殺し屋、娘は心を読める超能力者。秘密を抱えた家族の日常。',
  '人付き合いが苦手なギタリストの少女がバンドに加入。音楽を通じて、少しずつ自分の世界を広げていく。',
  '秋葉原の小さな研究所で生まれた発見が、日常を揺るがしていく。時間をめぐるSFサスペンス。',
  '手紙の代筆を仕事にする少女が、さまざまな依頼人と出会い、言葉に込められた想いを知っていく。',
  '高校バレーに情熱を注ぐ少年たち。それぞれの個性がぶつかり合い、ひとつのチームになっていく。',
  '田舎町の少女と東京の少年。夢の中で入れ替わるふたりの日常から始まる物語。',
  '人とも動物とも異なる存在「蟲」。その営みと人々の暮らしを、蟲師ギンコの旅を通して描く。',
];
const artwork = [
  [
    'https://contents.oricon.co.jp/upimg/news/2271000/2270708/20230307_211050_p_o_50249317.jpg',
    'https://www.oricon.co.jp/news/2270708/full/',
  ],
  [
    'https://www.crank-in.net/img/db/227085298113527_1200.jpg',
    'https://www.crank-in.net/gallery/news/113323/2',
  ],
  [
    'https://image.tmdb.org/t/p/original/zDu2Ey1nYwe4EdMP26P7XbbwnBI.jpg',
    'https://www.themoviedb.org/tv/119100/images/posters',
  ],
  [
    'https://image.tmdb.org/t/p/original/96R4bV7dB8ramaWceNKsxvJgCUd.jpg',
    'https://www.themoviedb.org/tv/42509-steins-gate/images/posters',
  ],
  [
    'https://pics.filmaffinity.com/Violet_Evergarden_Serie_de_TV-640290819-large.jpg',
    'https://www.filmaffinity.com/es/filmimages.php?movie_id=602911',
  ],
  [
    'https://images.justwatch.com/poster/199385886/s718/season-1.jpg',
    'https://www.justwatch.com/ph/tv-show/haikyu/season-1',
  ],
  [
    'https://cdn.posteritati.com/posters/000/000/049/033/your-name-md-web.jpg',
    'https://posteritati.com/film/17800/your-name',
  ],
  [
    'https://serializd-tmdb-images.b-cdn.net/t/p/w500/1EdA21TRBXJU5aBP4EHkOMF2tNx.jpg',
    'https://www.serializd.com/show/Mushi-Shi-26867',
  ],
];
export const anime: Anime[] = rows.map((r, i) => ({
  id: `anime-${i + 1}`,
  title: r[0],
  aliases: r[1],
  year: r[2],
  genre: r[3],
  mood: moods[r[4]],
  format: r[5] ?? 'TV',
  description:
    descriptions[i] ??
    `${r[3]}の作品を探している方へ。「${moods[r[4]]}」気分から出会える一作です。作品紹介の詳細は実データ連携時に追加します。`,
  popularity: 100 - i,
  buzz: (i * 17 + 37) % 101,
  image: artwork[i]?.[0],
  source: artwork[i]?.[1],
  color: ['#528d83', '#bc655c', '#a074b2', '#5b7b9e', '#797fc0', '#ba8d42'][i % 6],
}));
export const genres = [...new Set(anime.map((a) => a.genre))];
export function normalize(value: string) {
  return value
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\s・!！×△;:☆Ψ。～〜-]/g, '');
}
export type Filters = {
  query?: string;
  genre?: string;
  mood?: string;
  format?: string;
  sort?: string;
  similar?: string;
};
export function similarity(a: Anime, b: Anime) {
  return (
    (a.genre === b.genre ? 5 : 0) + (a.mood === b.mood ? 3 : 0) + (a.format === b.format ? 1 : 0)
  );
}
export function findAnime(filters: Filters = {}) {
  const seed = anime.find((a) => a.id === filters.similar);
  const q = normalize(filters.query ?? '');
  return anime
    .filter(
      (a) =>
        a.id !== seed?.id &&
        (!q || normalize(a.title + a.aliases).includes(q)) &&
        (!filters.genre || a.genre === filters.genre) &&
        (!filters.mood || a.mood === filters.mood) &&
        (!filters.format || a.format === filters.format),
    )
    .sort((a, b) =>
      seed
        ? similarity(seed, b) - similarity(seed, a) || b.popularity - a.popularity
        : filters.sort === 'buzz'
          ? b.buzz - a.buzz
          : filters.sort === 'year'
            ? b.year - a.year
            : b.popularity - a.popularity,
    );
}
export function recommendationReason(seed: Anime, item: Anime) {
  const common = [];
  if (seed.genre === item.genre) common.push(seed.genre);
  if (seed.mood === item.mood) common.push(`「${seed.mood}」気分`);
  return common.length ? `${common.join('・')}が共通` : '別のジャンルも楽しみたいときに';
}
