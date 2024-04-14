# Coze-Fullscreen-Preview

<img src="https://i.imgur.com/hD6vl2D.png" /> 
Use buttons to switch freely
<p float="left">
  <img src="https://i.imgur.com/PQjCQXv.png" width="45%" />
  <img src="https://i.imgur.com/6qN4GaC.png" width="45%" /> 
</p>

## Coze Fullscreen Preview 書籤小工具使用指南

這個書籤小工具可以將 Coze 的開發介面中原本只佔1/3的 Preview 窗口放大到全螢幕，讓開發者在使用 Preview 進行 Chat 時更為舒適。

## 如何安裝

1. 開啟你的瀏覽器，並進入書籤管理頁面。
2. 創建一個新的書籤，並將以下代碼粘貼到 URL 或位置欄位：

```javascript
javascript:(function(){var c=document.getElementsByClassName('sidesheet-container')[0];c.style.display='flex';c.style.flexDirection='row';var d=c.children;function setupInitialWidths(d){for(var i=0;i<d.length-1;i++){d[i].style.flexBasis='33%';d[i].style.flexShrink='0';d[i].style.flexGrow='1';}}function hideAllDivsExceptLast(d){for(var i=0;i<d.length-1;i++){d[i].style.display='none';}}function getLastDiv(d){return d[d.length-1];}function getFirstChild(e){return e.children[0];}setupInitialWidths(d);hideAllDivsExceptLast(d);var lastDiv=getLastDiv(d);lastDiv.style.flexGrow='1';var firstChild=getFirstChild(lastDiv);firstChild.style.display='none';var arr=['Prompt','Skills'];for(var i=0;i<2;i++){!function(i){var b=document.createElement('button');b.innerHTML=arr[i];b.className='toggle-button';b.style.position='absolute';b.style.top='0px';b.style.left=(i*60)+'px';b.style.zIndex='1000';b.onclick=function(){var div=d[i];var isVisible=div.style.display!=='none';div.style.display=isVisible?'none':'flex';div.style.width=isVisible?'0':'';};c.appendChild(b);}(i);}})();
```

3. 給書籤取名為 "Coze Fullscreen Preview"。

## 如何使用

1. 開啟 Coze 的開發介面。
2. 點擊你的書籤欄中的 "Coze Fullscreen Preview" 書籤。
3. 現在，你的 Preview 窗口應該已經擴大到全螢幕，你可以更舒適地使用它來進行 Chat。
4. 左上角兩個按鈕可以開關Prompt與Skills介面

請注意，這個改變只會在你當前的標籤頁中生效，並不會永久改變 Coze 的介面設定。也就是說，當你刷新頁面或者在新的標籤頁打開 Coze 時，你需要再次點擊 "Coze Fullscreen Preview" 書籤來擴大 Preview 窗口。


---
舊版不包含切換按鈕請使用以下javascript
```javascript
javascript:(function(){var container=getContainer();setDisplayStyle(container,'flex');var divs=container.children;hideAllDivsExceptLast(divs);var lastDiv=getLastDiv(divs);setDisplayStyle(lastDiv,'block');setFlexGrow(lastDiv,'1');var firstChild=getFirstChild(lastDiv);setDisplayStyle(firstChild,'none');function getContainer(){return document.getElementsByClassName('sidesheet-container')[0];}function setDisplayStyle(element,value){if(element){element.style.display=value;}}function setFlexGrow(element,value){if(element){element.style.flexGrow=value;}}function hideAllDivsExceptLast(divs){for(var i=0;i<divs.length-1;i++){setDisplayStyle(divs[i],'none');}}function getLastDiv(divs){return divs[divs.length-1];}function getFirstChild(element){if(element){return element.children[0];}}})()
```
![image](https://i.imgur.com/TYI5JMe.png)

---
未使用時介面如下圖
![image](https://i.imgur.com/fMRA3ro.png)
