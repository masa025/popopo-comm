# POPOPO リスナーコミュニティ（GitHub Pages版）

GitHub Pagesでそのまま試せる静的サイトです。

## ファイル構成

- `index.html`
- `styles.css`
- `app.js`

## GitHub Pagesで公開する手順

### 方法1: ブラウザだけで公開
1. GitHubで新しいリポジトリを作成
2. この3ファイルをアップロード
3. `Settings` → `Pages`
4. `Deploy from a branch` を選択
5. Branch を `main`、Folder を `/ (root)` に設定
6. 保存すると公開URLが発行されます

## できること
- デザイン確認
- スマホ表示確認
- テキストや導線の修正
- GitHubで差分管理

## まだ入れていないもの
- Notion保存
- Supabase読み込み
- 会員ログイン

## 次の段階
GitHub Pagesで見た目を確認した後、Netlifyに移すと以下を追加しやすいです。

- Netlify Functions経由でNotion保存
- Supabaseから投稿・スポットを取得
- 環境変数で秘密鍵を安全に管理

## Notion連携の考え方
GitHub Pagesは静的公開向けなので、Notionトークンをブラウザに置くのは危険です。
そのため本番では、Netlify FunctionsやVercel Functions経由でNotionに保存します。

## Supabase連携の考え方
公開データの読み込みならフロントから接続可能です。
ただし、書き込みはRLSやAPI経由の設計が必要です。
