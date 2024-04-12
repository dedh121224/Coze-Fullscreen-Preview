# Coze-Fullscreen-Preview

## Coze Fullscreen Preview 書籤小工具使用指南

這個書籤小工具可以將 Coze 的開發介面中原本只佔1/3的 Preview 窗口放大到全螢幕，讓開發者在使用 Preview 進行 Chat 時更為舒適。

## 如何安裝

1. 開啟你的瀏覽器，並進入書籤管理頁面。
2. 創建一個新的書籤，並將以下代碼粘貼到 URL 或位置欄位：

```javascript
javascript:(function(){var container=getContainer();setDisplayStyle(container,'flex');var divs=container.children;hideAllDivsExceptLast(divs);var lastDiv=getLastDiv(divs);setDisplayStyle(lastDiv,'block');setFlexGrow(lastDiv,'1');var firstChild=getFirstChild(lastDiv);setDisplayStyle(firstChild,'none');function getContainer(){return document.getElementsByClassName('sidesheet-container')[0];}function setDisplayStyle(element,value){if(element){element.style.display=value;}}function setFlexGrow(element,value){if(element){element.style.flexGrow=value;}}function hideAllDivsExceptLast(divs){for(var i=0;i<divs.length-1;i++){setDisplayStyle(divs[i],'none');}}function getLastDiv(divs){return divs[divs.length-1];}function getFirstChild(element){if(element){return element.children[0];}}})()
```

3. 給書籤取名為 "Coze Fullscreen Preview"。

## 如何使用

1. 開啟 Coze 的開發介面。
2. 點擊你的書籤欄中的 "Coze Fullscreen Preview" 書籤。
3. 現在，你的 Preview 窗口應該已經擴大到全螢幕，你可以更舒適地使用它來進行 Chat。

請注意，這個改變只會在你當前的標籤頁中生效，並不會永久改變 Coze 的介面設定。也就是說，當你刷新頁面或者在新的標籤頁打開 Coze 時，你需要再次點擊 "Coze Fullscreen Preview" 書籤來擴大 Preview 窗口。
