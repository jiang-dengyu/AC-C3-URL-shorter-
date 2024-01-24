# URL-Shortener :hear_no_evil:
## 目的
**輸入網址後，會顯示一個短網址，點擊後可以再次導向原網址**

## 目前已有的CMV架構
+ 首先設置三個routes，首先導向根目錄，並選染index.hbs。
+ 輸入網址後，觸發index.hbs中的format來導向第二個route，並渲染newurl.hbs。
+ 點擊新短網址連結後，會導向第三個route：/new-url，並利用res.redirect()來導向原先輸入的網站。
+ 新短網址連結在newurl.hbs中產生，後段的隨機亂數是先在app.js利用函數產生，再{{urls}}來引入。無使用任何靜態資料或modeL區塊

# 給ac助教訊息如下
+ 完成狀態 ： 未完成，先專注在route的邏輯問題，css等畫面呈現還沒引入
+ 目前疑問 ： 「點擊新連結，導向原先輸入之網址」這部分有些卡關。不知道如何將index.hbs接收到的submit網址'存取起來'並使用。
