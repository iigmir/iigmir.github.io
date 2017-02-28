<!DOCTYPE html>
<html lang="zh-hant">
<head>
    <title> Webpage template </title>
    <meta charset="UTF-8">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href=" https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css " />
    <link rel="stylesheet" type="text/css" href=" https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css " />
    <link rel="stylesheet" type="text/css" href=" build.css " />
    <link rel="stylesheet" type="text/css" href=" index.css " />
    <!-- JS -->
    <script src=" https://code.jquery.com/jquery-3.1.0.min.js "></script>
    <script src=" nav.js "></script>
</head>
<body>
    <header>
        <a href="http://www.seidof.com.tw"> <img src="images/T01_01.jpg" /> </a>
        <ul>
            <li> <a href="http://www.seidof.com.tw"> <i class="fa fa-home" aria-hidden="true"></i> HOME </a> : </li>
            <li> <a href="http://www.seidof.com.tw"> <i class="fa fa-sitemap" aria-hidden="true"></i> SITE MAP </a> : </li>
            <li> <a href="http://www.seidof.com.tw"> <i class="fa fa-envelope" aria-hidden="true"></i> CONTRACT US </a> </li>
        </ul>
    </header>
    
    <div class="left">
        <nav>
        <ul>
            <li>關於我們
                <ul>
                    <li>簡介</li>
                    <li>理念</li>
                    <li>營業項目</li>
                    <li>訊息</li>
                    <li>經銷商</li>
                </ul>
            </li>
            <li>鋼琴價格表
                <ul>
                    <li>型號</li>
                    <li>中古</li>
                    <li>分期</li>
                </ul>
            </li>
            <li>報名活動
                <ul>
                    <li>音樂賽</li>
                    <li>簡章</li>
                    <li>調音</li>
                    <li>研習</li>
                </ul>
            </li>
            <li>演奏鋼琴展示
                <ul>
                    <li>結緣</li>
                    <li>進階</li>
                    <li>聯絡</li>
                </ul>
            </li>
            <li>購物專區
                <ul>
                    <li>總覽</li>
                    <li>購物車</li>
                    <li>買單</li>
                    <li>型錄</li>
                </ul>
            </li>
        </ul>
        </nav>
        <form action="#" method="post" class="menber-login">
            <legend> 會員登錄 / Menber login </legend>
            <input type="text" placeholder="帳號" name="account" >
            <input type="text" placeholder="密碼" name="password" type="password">
            <input type="submit" value="登錄"> <br />
            <a href="#"> ．我要註冊 </a> <a href="#"> ．忘記密碼 </a>
        </form>
        <div class="shopping-guide">
            <a href="#"> <img src="images/left_03.jpg" /></a><br>
            <a href="#"> <img src="images/left_04.jpg" /></a><br>
            <a href="#" /> </a>
        </div>
    </div>
    
    <div class="right">
        <div id="piano"></div>
        <div id="index-news">
            <img src="http://www.seidof.com.tw/images/news.jpg" />
            <table>
                <thead><tr>
                    <td> 主題 </td>
                    <td> 瀏覽人數 </td>
                    <td> 加入日期 </td>
                </tr></thead>
                <tbody><tr>
                    <td>
                        <a onclick="window.open('index.php?id=229&win=y','msg','status=yes,width=700,height=500,resizable=yes,scrollbars=yes')" target="_self" href="#">
                        2016JVC勝利盃全國音樂大賽 ~~大台北地區~~【時間表】 </a>
                    </td>
                    <td>538</td>
                    <td>2016.07.27 10:12 AM</td>
                </tr> <tr>
                    <td>
                        <a onclick="window.open('index.php?id=228&win=y','msg','status=yes,width=700,height=500,resizable=yes,scrollbars=yes')" target="_self" href="#">
                        2016JVC勝利盃全國音樂大賽 ~~大高雄地區~~【時間表】 </a>
                    </td>
                    <td>242</td>
                    <td>2016.07.14 05:04 PM</td>
                </tr> <tr>
                    <td>
                        <a onclick="window.open('index.php?id=227&win=y','msg','status=yes,width=700,height=500,resizable=yes,scrollbars=yes')" target="_self" href="#">
                        2016JVC勝利盃全國音樂大賽 ~~桃竹苗地區~~【時間表】 </a>
                    </td>
                    <td>403</td>
                    <td>2016.07.06 02:04 PM</td>
                </tr> <tr>
                    <td>
                        <a onclick="window.open('index.php?id=226&win=y','msg','status=yes,width=700,height=500,resizable=yes,scrollbars=yes')" target="_self" href="#">
                        2016JVC勝利盃全國音樂大賽 ~~雲  嘉地區~~【時間表】 </a>
                    </td>
                    <td>266</td>
                    <td>2016.07.06 02:04 PM</td>
                </tr> <tr>
                    <td>
                        <a onclick="window.open('index.php?id=214&win=y','msg','status=yes,width=700,height=500,resizable=yes,scrollbars=yes')" target="_self" href="#">
                        ★2016JVC勝利盃全國音樂大賽★~~~~開始報名~~~~~ </a>
                    </td>
                    <td>11527</td>
                    <td>2016.05.23 10:11 AM</td>
                </tr></tbody>
                <tfoot>
                    <tr> <td colspan="3">[1]</td> </tr>
                </tfoot>
            </table>
        </div>
        <div id="hot-goods">
            <img src="images/run_01.jpg" />
            <div>
                <p>距離現在差不多一年了，所以算是週年重建。</p>
                <p>掌握許多基本概念後，速度快得很多、也更貼近原本的作品。</p>
            </div>
        </div>
    </div>
    <footer>
        <img class="footer-logo" src="images/foot_01.jpg"/>
        <ul>
            <li>
                <ul class="login_g">
                    <li> <a href="#">回首頁</a> / </li>
                    <li> <a href="#">會員專區</a> / </li>
                    <li> <a href="#">購物專區</a> / </li>
                    <li> <a href="#">最新訊息</a> </li>
                </ul>
            </li>
            <li> 服務專線:04-23015463 傳真:04-23028174 地址:台中市民權路215號4樓 </li>
            <li> Copyright ©2008 SEIDOF web company. All rights reserved. MAIL TO: <a href="#"> seidof@ms62.hinet.net <img src="http://seidof.94imy.com.tw/images/mail.jpg" /> </a>
            </li>
            <li class="footer-link">
                <a href="#"> <img alt="" src="images/download-2(2).jpg" /> </a>
                <a href="#"> <img alt="" src="images/FB.jpg" /> </a>
            </li>
        </ul>
    </footer>
</body>
</html>
