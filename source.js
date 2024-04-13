(function () {
    var container = getContainer();
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    var divs = container.children;
    setupInitialWidths(divs);
    hideAllDivsExceptLast(divs);
    var lastDiv = getLastDiv(divs);
    lastDiv.style.flexGrow = '1';
    var firstChild = getFirstChild(lastDiv);
    setDisplayStyle(firstChild, 'none');
    var arr = ["Prompt", "Skills"]

    // 新增開關按鈕
    for (var i = 0; i < 2; i++) { // 前兩個 div
        (function (i) {
            var button = document.createElement("button");
            button.innerHTML = arr[i];
            button.className = "toggle-button";
            button.style.position = "absolute";
            button.style.top = "0";
            button.style.left = (i * 60) + "px";
            button.style.zIndex = "1000";
            button.addEventListener('click', function () {
                toggleDiv(i);
            });
            container.appendChild(button);
        })(i);
    }

    function toggleDiv(index) {
        var div = divs[index];
        var isVisible = div.style.display !== 'none';
        setDisplayStyle(div, isVisible ? 'none' : 'flex');
        div.style.width = isVisible ? '0' : '';
    }

    function setupInitialWidths(divs) {
        for (var i = 0; i < divs.length - 1; i++) {
            divs[i].style.flexBasis = '33%'; // 設定 flex 基礎值讓每個 div 佔據 1/3 的空間
            divs[i].style.flexShrink = '0'; // 確保 div 不會縮小
            divs[i].style.flexGrow = '1'; // 確保 div 可以根據空間伸展
        }
    }

    function getContainer() {
        return document.getElementsByClassName('sidesheet-container')[0];
    }
    function setDisplayStyle(element, value) {
        element.style.display = value;
    }
    function hideAllDivsExceptLast(divs) {
        for (var i = 0; i < divs.length - 1; i++) {
            setDisplayStyle(divs[i], 'none');
        }
    }
    function getLastDiv(divs) {
        return divs[divs.length - 1];
    }
    function getFirstChild(element) {
        return element.children[0];
    }
})()