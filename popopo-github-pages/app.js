const topics = [
  { label: "HOT", title: "今日の配信テーマは何が盛り上がりそう？", text: "雑談、音楽、恋バナ、週末の予定など。", meta1: "参加中 132人", meta2: "#雑談" },
  { label: "NEW", title: "みんなのおすすめ曲を教えて", text: "最近ハマっている曲や配信BGM向けの楽曲を共有。", meta1: "参加中 98人", meta2: "#音楽" },
  { label: "TALK", title: "昨日の配信どうだった？感想シェア会", text: "印象に残ったトーク、良かった場面を気軽に投稿。", meta1: "参加中 76人", meta2: "#感想" },
  { label: "FIRST", title: "はじめましてトーク", text: "初参加の方の自己紹介や、好きなジャンルの共有に。", meta1: "参加中 54人", meta2: "#自己紹介" },
  { label: "PICK UP", title: "リスナー参加型の企画アイデア募集", text: "みんなで楽しめるコミュニティ企画を集めています。", meta1: "参加中 215人", meta2: "#企画" }
];

const spots = [
  { title: "名曲喫茶ライオン", text: "落ち着いた空間でゆっくり過ごせる、会話の余韻にも合う喫茶スポット。", area: "東京都・渋谷", visits: "12人が訪問" },
  { title: "喫茶パーラランド", text: "プリンやレトロ喫茶好きに人気。写真映えするメニューが多いお店。", area: "東京都・下北沢", visits: "8人が訪問" },
  { title: "代々木公園", text: "散歩やピクニックにぴったり。配信で話した休日スポットの定番。", area: "東京都・渋谷区", visits: "15人が訪問" },
  { title: "小江戸・川越エリア", text: "レトロな街並みが魅力。写真も動画も映える、定番のお出かけ候補。", area: "埼玉県・川越市", visits: "11人が訪問" }
];

const posts = [
  { emoji: "🌸", name: "みく", role: "常連さん ・ 2時間前", body: "昨日の配信めっちゃ楽しかった〜！ みんなの恋バナ聞いててキュンキュンした🥹💕", actions: ["❤️ 23", "💬 5", "🔖 保存"] },
  { emoji: "☕", name: "ゆうた", role: "配信リスナー ・ 4時間前", body: "おすすめのカフェ見つけた！ 雰囲気が良くて、ひとりでも入りやすかったです。", actions: ["❤️ 18", "💬 3", "📍 スポット追加"] },
  { emoji: "🎵", name: "はる", role: "音楽好き ・ 6時間前", body: "今日のトークに合いそうな1曲を置いておきます。夜に合う雰囲気でおすすめ！", actions: ["❤️ 15", "💬 7", "▶ 再生"] }
];

const members = [
  { rank: 1, name: "はる", title: "いつも元気をありがとう！", likes: "1,230" },
  { rank: 2, name: "misaki", title: "みんなの居場所を作ってる✨", likes: "987" },
  { rank: 3, name: "しんや", title: "音楽トークなら任せて！", likes: "876" },
  { rank: 4, name: "あやか", title: "イベント企画も大歓迎です！", likes: "745" },
  { rank: 5, name: "れん", title: "初見さん歓迎の雰囲気づくり担当", likes: "612" }
];

function render() {
  document.getElementById("topics-grid").innerHTML = topics.map(item => `
    <article class="topic-card">
      <span class="mini-label">${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="topic-meta"><span>${item.meta1}</span><span>${item.meta2}</span></div>
    </article>
  `).join("");

  document.getElementById("spots-grid").innerHTML = spots.map(item => `
    <article class="spot-card">
      <div class="spot-image"></div>
      <div class="spot-content">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="spot-footer"><span>${item.area}</span><span>${item.visits}</span></div>
      </div>
    </article>
  `).join("");

  document.getElementById("posts-list").innerHTML = posts.map(item => `
    <article class="post">
      <div class="post-head">
        <div class="post-avatar">${item.emoji}</div>
        <div>
          <div class="post-name">${item.name}</div>
          <div class="post-role">${item.role}</div>
        </div>
      </div>
      <div class="post-body">${item.body}</div>
      <div class="post-actions">${item.actions.map(a => `<span>${a}</span>`).join("")}</div>
    </article>
  `).join("");

  document.getElementById("members-list").innerHTML = members.map(item => `
    <div class="member-item">
      <div class="member-rank">${item.rank}</div>
      <div>
        <div class="post-name">${item.name}</div>
        <div class="member-title">${item.title}</div>
      </div>
      <div class="member-likes">${item.likes}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  render();

  const form = document.getElementById("join-form");
  const note = document.getElementById("form-note");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.getElementById("message").value.trim();
    if (!message) {
      note.textContent = "メッセージを入力してください。";
      return;
    }
    note.textContent = "GitHub Pages版では送信は保存されません。Netlify版でNotionに保存できるように差し替えます。";
    form.reset();
  });
});
