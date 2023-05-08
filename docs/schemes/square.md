# `square` LINE オープンチャット系
ここでは、Square schemes および、 Square apiについて解説します。

## `square/report?emid={emid: string}`
指定したオープンチャットを報告するメニューを表示します
### Options:
#### emid: string
オープンチャットの[emid](/docs/words/emid)を指定します。

## `square/join?emid={emid: string}`
emid先のOCに参加します。
### Options:
#### emid: string
オープンチャットの[emid](/docs/words/emid)を指定します。

## `square/home?encryptedSquareMid={emid: string}`
webviewで表示(参加前の画面)
### Options:
#### emid: string
オープンチャットの[emid](/docs/words/emid)を指定します。

## `square/main#~`
オープンチャットメイン画面を表示します。

## `https://square-api.line.me/smw/v2/static/sm/html/`
オープンチャットメイン画面を表示します。

## `https://square-api.line.me/smw/v2/static/sm/html/#/squareCover/{emid: string}`
指定したOCのオープンチャットプロフィール画面を表示します。
### Options:
#### emid: string
オープンチャットの[emid](/docs/words/emid)を指定します。

## `square/createSquare`
新規のオープンチャットを作成します。

## `https://square-recently-left.landpress.line.me/?squareEmid={emid: string}`
指定したOCの最近退会したメンバーを表示します。
### Options:
#### emid: string
オープンチャットの[emid](/docs/words/emid)を指定します。
#### Other
他にも chatIdやcid,tid等のクエリが存在します。
