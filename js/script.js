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
