## 初期設定

- 管理者が Todo アプリ系のリアクションを登録しておく
  - tunnel-todo でイベント発火対象の絵文字エイリアスで登録してもらう
    - e.g. :kakunin_simasu:, :todo:, :atode-miru:, ...etc.
    - リアクションのエイリアスは env で管理

## 使用例

- Todo に追加したい[メッセージ]にリアクションをつける
  - e.g. :kakunin_simasu:
- リアクションが追加されたときは [reaction:add](https://api.slack.com/methods/reactions.add) で取得可能

### 事前登録あり

- Ephemeral なモーダルがでてどの [ToDo サービス]、どのリストに追加するか出る
  - e.g. google todo, trello, todist, wunderlist, ...etc.
  - 活性化されてないサービスをクリックすると、そのサービスのログイン画面に遷移
  - 活性化されているサービスをクリックすると、[メッセージ]が連携先の[Todo サービス]の一覧に追加される
    - モーダルでアイコン表示などの表現ができればボタンを非活性・活性で制御するのはあり
        - 画像の埋め込みいける？
        - 絵文字は各ワークスペースで異なる
    - できないならプルダウンでも良い気もする

### 事前登録なし

- Ephemeral なモーダルがでて、「ToDo リストと連携しないっすか？」メッセージが出る
- [初期登録する]ボタンが出て押した場合、Web ページに遷移し Slack Account で Login
  - Slack AccountのIDをDBに登録
  - FYI:
    - [SlackのOAuth認証を使ってユーザ情報を取得してみた](https://qiita.com/dbgso/items/a95a3364d9a8c67f3387)
    - [Colla の Web 版ログインページ(Slack SSO)](https://colla.jp/login)
- 連携対象の [Todo サービス] が一覧表示
- 任意のサービスを選択し、ログイン
  - 任意のサービスのTokenをDBに登録
- [Todo サービス] 一覧が表示、ログイン後のサービスが活性化されてる

## How

## Wishlist

- ウェブページが欲しい
  - リアクションつけたメッセージを、一旦本サービスの専用モダールの Todo 一覧に Push
    - Bot との DM 欄でもそれ
    - 後ほど、ユーザー自身が好みの Todo サービス(GoogleTasks, Todoist, etc...)と連携させて登録できる
