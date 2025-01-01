(function () {
  const selectedText = window.getSelection().toString().trim(); // 選択されたテキストを取得
  let textToCopy;

  // 選択されたテキストに応じた処理
  switch (selectedText) {
    case "1":
      textToCopy = "スペシャルウィーク";
      break;
    case "2":
      textToCopy = "サイレンススズカ";
      break;
    case "3":
      textToCopy = "トウカイテイオー";
      break;
    case "4":
      textToCopy = "マルゼンスキー";
      break;
    case "5":
      textToCopy = "フジキセキ";
      break;
    case "6":
      textToCopy = "オグリキャップ";
      break;
    case "7":
      textToCopy = "ゴールドシップ";
      break;
    case "8":
      textToCopy = "ウオッカ";
      break;
    case "9":
      textToCopy = "ダイワスカーレット";
      break;
    case "10":
      textToCopy = "タイキシャトル";
      break;
    case "11":
      textToCopy = "グラスワンダー";
      break;
    case "12":
      textToCopy = "ヒシアマゾン";
      break;
    case "13":
      textToCopy = "メジロマックイーン";
      break;
    case "14":
      textToCopy = "エルコンドルパサー";
      break;
    case "15":
      textToCopy = "テイエムオペラオー";
      break;
    case "16":
      textToCopy = "ナリタブライアン";
      break;
    case "17":
      textToCopy = "シンボリルドルフ";
      break;
    case "18":
      textToCopy = "エアグルーヴ";
      break;
    case "19":
      textToCopy = "アグネスデジタル";
      break;
    case "20":
      textToCopy = "セイウンスカイ";
      break;
    case "21":
      textToCopy = "タマモクロス";
      break;
    case "22":
      textToCopy = "ファインモーション";
      break;
    case "23":
      textToCopy = "ビワハヤヒデ";
      break;
    case "24":
      textToCopy = "マヤノトップガン";
      break;
    case "25":
      textToCopy = "マンハッタンカフェ";
      break;
    case "26":
      textToCopy = "ミホノブルボン";
      break;
    case "27":
      textToCopy = "メジロライアン";
      break;
    case "28":
      textToCopy = "ヒシアケボノ";
      break;
    case "29":
      textToCopy = "ユキノビジン";
      break;
    case "30":
      textToCopy = "ライスシャワー";
      break;
    case "31":
      textToCopy = "アイネスフウジン";
      break;
    case "32":
      textToCopy = "アグネスタキオン";
      break;
    case "33":
      textToCopy = "アドマイヤベガ";
      break;
    case "34":
      textToCopy = "イナリワン";
      break;
    case "35":
      textToCopy = "ウイニングチケット";
      break;
    case "36":
      textToCopy = "エアシャカール";
      break;
    case "37":
      textToCopy = "エイシンフラッシュ";
      break;
    case "38":
      textToCopy = "カレンチャン";
      break;
    case "39":
      textToCopy = "カワカミプリンセス";
      break;
    case "40":
      textToCopy = "ゴールドシチー";
      break;
    case "41":
      textToCopy = "サクラバクシンオー";
      break;
    case "42":
      textToCopy = "シーキングザパール";
      break;
    case "43":
      textToCopy = "シンコウウインディ";
      break;
    case "44":
      textToCopy = "スイープトウショウ";
      break;
    case "45":
      textToCopy = "スーパークリーク";
      break;
    case "46":
      textToCopy = "スマートファルコン";
      break;
    case "47":
      textToCopy = "ゼンノロブロイ";
      break;
    case "48":
      textToCopy = "トーセンジョーダン";
      break;
    case "49":
      textToCopy = "ナカヤマフェスタ";
      break;
    case "50":
      textToCopy = "ナリタタイシン";
      break;
    case "51":
      textToCopy = "ニシノフラワー";
      break;
    case "52":
      textToCopy = "ハルウララ";
      break;
    case "53":
      textToCopy = "バンブーメモリー";
      break;
    case "54":
      textToCopy = "ビコーペガサス";
      break;
    case "55":
      textToCopy = "マーベラスサンデー";
      break;
    case "56":
      textToCopy = "マチカネフクキタル";
      break;
    case "57":
      textToCopy = "ミスターシービー";
      break;
    case "58":
      textToCopy = "メイショウドトウ";
      break;
    case "59":
      textToCopy = "メジロドーベル";
      break;
    case "60":
      textToCopy = "ナイスネイチャ";
      break;
    case "61":
      textToCopy = "キングヘイロー";
      break;
    case "62":
      textToCopy = "マチカネタンホイザ";
      break;
    case "63":
      textToCopy = "イクノディクタス";
      break;
    case "64":
      textToCopy = "メジロパーマー";
      break;
    case "65":
      textToCopy = "ダイタクヘリオス";
      break;
    case "66":
      textToCopy = "ツインターボ";
      break;
    case "67":
      textToCopy = "サトノダイヤモンド";
      break;
    case "68":
      textToCopy = "キタサンブラック";
      break;
    case "69":
      textToCopy = "サクラチヨノオー";
      break;
    case "70":
      textToCopy = "シリウスシンボリ";
      break;
    case "71":
      textToCopy = "メジロアルダン";
      break;
    case "72":
      textToCopy = "ヤエノムテキ";
      break;
    case "73":
      textToCopy = "ツルマルツヨシ";
      break;
    case "74":
      textToCopy = "メジロブライト";
      break;
    case "75":
      textToCopy = "デアリングタクト";
      break;
    case "76":
      textToCopy = "サクラローレル";
      break;
    case "77":
      textToCopy = "ナリタトップロード";
      break;
    case "78":
      textToCopy = "ヤマニンゼファー";
      break;
    case "79":
      textToCopy = "フリオーソ";
      break;
    case "80":
      textToCopy = "トランセンド";
      break;
    case "81":
      textToCopy = "エスポワールシチー";
      break;
    case "82":
      textToCopy = "ノースフライト";
      break;
    case "83":
      textToCopy = "シンボリクリスエス";
      break;
    case "84":
      textToCopy = "タニノギムレット";
      break;
    case "85":
      textToCopy = "ダイイチルビー";
      break;
    case "86":
      textToCopy = "メジロラモーヌ";
      break;
    case "87":
      textToCopy = "アストンマーチャン";
      break;
    case "88":
      textToCopy = "サトノクラウン";
      break;
    case "89":
      textToCopy = "シュヴァルグラン";
      break;
    case "90":
      textToCopy = "ヴィルシーナ";
      break;
    case "91":
      textToCopy = "ヴィブロス";
      break;
    case "92":
      textToCopy = "ダンツフレーム";
      break;
    case "93":
      textToCopy = "ケイエスミラクル";
      break;
    case "94":
      textToCopy = "ジャングルポケット";
      break;
    case "95":
      textToCopy = "ビリーヴ";
      break;
    case "96":
      textToCopy = "ノーリーズン";
      break;
    case "97":
      textToCopy = "スティルインラブ";
      break;
    case "98":
      textToCopy = "コパノリッキー";
      break;
    case "99":
      textToCopy = "ホッコータルマエ";
      break;
    case "100":
      textToCopy = "ワンダーアキュート";
      break;
    case "101":
      textToCopy = "サムソンビッグ";
      break;
    case "102":
      textToCopy = "サウンズオブアース";
      break;
    case "103":
      textToCopy = "ロイスアンドロイス";
      break;
    case "104":
      textToCopy = "カツラギエース";
      break;
    case "105":
      textToCopy = "ネオユニヴァース";
      break;
    case "106":
      textToCopy = "ヒシミラクル";
      break;
    case "107":
      textToCopy = "タップダンスシチー";
      break;
    case "108":
      textToCopy = "ドゥラメンテ";
      break;
    case "109":
      textToCopy = "ラインクラフト";
      break;
    case "110":
      textToCopy = "シーザリオ";
      break;
    case "111":
      textToCopy = "エアメサイア";
      break;
    case "112":
      textToCopy = "デアリングハート";
      break;
    case "113":
      textToCopy = "フサイチパンドラ";
      break;
    case "114":
      textToCopy = "ブエナビスタ";
      break;
    case "115":
      textToCopy = "オルフェーヴル";
      break;
    case "116":
      textToCopy = "ジェンティルドンナ";
      break;
    case "117":
      textToCopy = "ウインバリアシオン";
      break;
    case "118":
      textToCopy = "ドリームジャーニー";
      break;
    case "119":
      textToCopy = "カルストンライトオ";
      break;
    case "120":
      textToCopy = "デュランダル";
      break;
    case "121":
      textToCopy = "バブルガムフェロー";
      break;
    case "122":
      textToCopy = "サクラチトセオー";
      break;
    case "123":
      textToCopy = "ブラストワンピース";
      break;

    default:
      textToCopy = "トレーナー";
      break;
  }

  // クリップボードにコピー
  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      alert(`クリップボードに『${textToCopy}』をコピーしました！`);
    })
    .catch(function (err) {
      alert("クリップボードの操作に失敗しました: " + err);
    });
})();
