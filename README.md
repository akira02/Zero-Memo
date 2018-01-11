# 零ノメモ Zero Memo: The Plurk custom CSS

Work in progress

The high-resolution display friendly CSS. Using flat design. 

## 介紹

我之前是在寫 CSS 的，而我寫 CSS 的原則是：「X你娘操爆」

沒錯，就是X你娘操爆，老子才不管甚麼記憶體資源三小的，每次載的圖片就是XX一大張。有文字陰影就加三層，高解析度圖片載三張，超多過場動畫，跟把整台電腦的記憶體跟運算資源全吃掉沒兩樣。

我還記得，我一開始 CSS 寫 900 多行，朋友跑來跟我說，你的河道我都滑不動，你有頭緒嗎？
 
我他X的怎麼會知道。

2/18新增：Lite版本 只使用半透明沒有玻璃磨砂效果
可是我怎麼覺得沒差多少QwQ

6/5新增：因應噗幣擴展表符上限，可以爽爽用組合表情符號，加上了組合表符無縫功能

## 特色
+ 支援大螢幕（原生的河道那樣小）
+ 當然小螢幕也支援
+ 扁平化設計！（不
+ 玻璃磨砂效果！
+ 動畫！（煞氣滑動dashboard！）
+ 看起來很舒服
+ 軟萌感！

## 安裝

### 方法一：使用噗浪安裝連結

https://www.plurk.com/installDesign/7550387-cbbc8027d6


### 方法二：自己貼CSS！

將 CSS 文件內容複製至您的噗浪，右上角點選自己的帳號，選「自訂佈景風格」，在該欄位中貼上此CSS，並按「儲存並更新」
複製CSS：https://github.com/akira02/Zero-Memo/blob/master/plurk.css

想要更換背景圖片可以使用模糊背景自動產生器：
http://akira.eu.org/Zero-Memo/ 使用您的圖片生成 CSS 後複製至您的噗浪「自訂佈景風格」欄位。

## 使用例

### 一般玻璃磨砂版
#### 一般狀態
![image](https://i.imgur.com/m5I1ogH.jpg)
#### 展開資訊面板
![image](https://i.imgur.com/FPREnny.jpg)
#### 回應欄
![image](https://i.imgur.com/t3Bgana.png)


## 替換背景
如果您不想替換，那真是太棒了（？

### 自動替換
http://akira.eu.org/Zero-Memo/
### 手動替換
手動替換，您總共需要一張原背景圖（建議1920*1080以上），接著進行加亮模糊與加暗模糊，總共三張。

總共需要替換五處位置，分別是一張原圖及兩張加亮模糊，兩張加暗模糊。

在CSS中有註解，△未模糊背景圖片，☆白色模糊背景圖片，以及★黑色模糊背景圖片，共六處。
/*# BACKGROUND timeline #*/是給CSS產生器使用的信標。


## 製作
設計、CSS編寫：千秋きつね☆稻荷台灣分社

技術支援、CSS編寫：ray851107
