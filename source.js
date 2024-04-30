(function () {
    // 獲取class為'sidesheet-container'的元素
var container = document.querySelector('.sidesheet-container');

// 將多個style設置合併為一個
Object.assign(container.style, {
  display: 'flex',
  flexDirection: 'row',
});

// 將查詢的結果存儲在變量中以避免重複查詢
var firstChild = container.children[0];
var secondChild = container.children[1];
var nestedFirstChild = secondChild.children[0].children[0];

// 對獲取的元素進行操作
firstChild.style.display = 'none';
secondChild.style.flexGrow = '1';
nestedFirstChild.style.display = 'none';

// 為container添加一個開關按鈕
var button = document.createElement("button");
button.textContent = "Switch";
button.style.position = "absolute";
button.style.top = "0";
button.style.left = "0px";
button.style.zIndex = "1000";

// 當按鈕被點擊時，切換firstChild的顯示狀態
button.onclick = function() {
  firstChild.style.display = firstChild.style.display === 'none' ? 'block' : 'none';
};

// 添加按鈕到container
container.appendChild(button);
})()
