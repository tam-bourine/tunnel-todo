# これはなに？

Slack で :todo:, :kakunin_simasu: などの絵文字をつけたら ToDo リストに追加される SlackApp.

# Usecase

## 初期設定

- 管理者が Todo アプリ系のリアクションを登録しておく
  - tunnel-todo でイベント発火対象の絵文字エイリアスで登録してもらう
    - e.g. :kakunin_simasu:, :todo:, :atode-miru:, ...etc.

## 使用例

- Todo に追加したい[メッセージ]にリアクションをつける
  - e.g. :kakunin_simasu:

### 事前登録あり

- Ephemeral なモーダルがでてどの [ToDo サービス]、どのリストに追加するか出る
  - e.g. google todo, trello, todist, wunderlist, ...etc.
- [メッセージ]が連携先の[Todo サービス]の一覧に追加される

### 事前登録なし

- Ephemeral なモーダルがでて、「ToDo リストと連携しないっすか？」メッセージが出る
- [初期登録する]ボタンが出て押した場合、Web ページに遷移し Slack Account で Login
- 連携対象の [Todo サービス] が一覧表示
- 任意のサービスを選択し、ログイン
- [Todo サービス] 一覧が表示、ログイン後のサービスが活性化されてる
