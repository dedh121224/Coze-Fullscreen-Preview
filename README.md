# Coze-Fullscreen-Preview

<img src="https://i.imgur.com/hD6vl2D.png" /> 
Use buttons to switch freely

## Coze Fullscreen Preview 書籤小工具使用指南
Coze Fullscreen Preview Bookmark Widget User Guide

這個書籤小工具可以將 Coze 的開發介面中原本只佔1/3的 Preview 窗口放大到全螢幕，讓開發者在使用 Preview 進行 Chat 時更為舒適。  
This bookmark gadget can enlarge the Preview window, which originally occupied only 1/3 of Coze's development interface, to full screen, making developers more comfortable when using Preview for Chat.

## 如何安裝 how to install

1. 開啟你的瀏覽器，並進入書籤管理頁面。  
2. 創建一個新的書籤，並將以下代碼粘貼到 URL 或位置欄位：  

1. Open your browser and enter the bookmark management page.  
2. Create a new bookmark and paste the following code into the URL or location field:  


```javascript
javascript:(function(){var container = document.querySelector('.sidesheet-container');Object.assign(container.style, {display: 'flex',flexDirection: 'row',});var firstChild = container.children[0];var secondChild = container.children[1];var nestedFirstChild = secondChild.children[0].children[0];firstChild.style.display = 'none';secondChild.style.flexGrow = '1';nestedFirstChild.style.display = 'none';var button = document.createElement("button");button.textContent = "Switch";button.style.position = "absolute";button.style.top = "0";button.style.left = "0px";button.style.zIndex = "1000";button.onclick = function() {firstChild.style.display = firstChild.style.display === 'none' ? 'block' : 'none';};container.appendChild(button);})()
```

3. 給書籤取名為 "Coze Fullscreen Preview"。  
3. Name the bookmark "Coze Fullscreen Preview".  


## 如何使用 how to use

1. 開啟 Coze 的開發介面。
2. 點擊你的書籤欄中的 "Coze Fullscreen Preview" 書籤。
3. 現在，你的 Preview 窗口應該已經擴大到全螢幕，你可以更舒適地使用它來進行 Chat。
4. 左上角Switch按鈕可以開關Prompt與Skills介面

請注意，這個改變只會在你當前的標籤頁中生效，並不會永久改變 Coze 的介面設定。也就是說，當你刷新頁面或者在新的標籤頁打開 Coze 時，你需要再次點擊 "Coze Fullscreen Preview" 書籤來擴大 Preview 窗口。

1. Open Coze’s development interface.
2. Click the "Coze Fullscreen Preview" bookmark in your bookmarks bar.
3. Your Preview window should now be expanded to full screen and you can use it for chat more comfortably.
4. The Switch buttons in the upper left corner can switch the Prompt and Skills interfaces.
Please note that this change will only take effect in your current tab and will not permanently change Coze's interface settings. That is, when you refresh the page or open Coze in a new tab, you need to click the "Coze Fullscreen Preview" bookmark again to expand the Preview window.

---
未使用時介面如下圖
![image](https://i.imgur.com/fMRA3ro.png)
