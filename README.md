- scssのルール
-- BEMにしたがう
--- ブロックは独立しているのでブロックの一番外のエレメントにはmarginを使わない 
-- Airbnb CSS Style Guideにしたがう
-- フォントサイズはvwで可変にし、幅が大きいときだけ文字が大きくなりすぎないように固定値を使う
-- npmでcssにコンパイルしている


wordpressローカル環境構築手順(Mac)
* MAMP 4.1.1 を入れる
* MAMPのphp, mysqlをそれぞれ本番のhetemlと同じ7.0, 5.6にする
* cyberduckなどでhetemlからソースコードをダウンロードし、htdocsの中に入れ、MAMPを起動してlocalhostに接続してみる
* db接続エラーが出ることを確認し、myphpadminからローカルのdb, userなどを作成する
* sqlはhetemlのものを流し込む(1. hetemlのmyphpadminでsqlをローカルにエクスポート。2. エディタで開いてhttp://twing.tokyo/wpをhttp://localhost/{以下のディレクトリは各開発者による}にずべて置換。3. mampのmyphpadminでsqlをインポートする)

