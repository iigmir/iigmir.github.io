<?php
    /*
    session_start();
    $link = mysqli_connect("127.0.0.1", "menber", "menber", "menber");
    if ( !$link )
    {
        echo "Error: Unable to connect to MySQL. " . PHP_EOL;
        echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
        echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
        exit;
    }
    else
    {
        if( $_SESSION['seidof'] != null )
        {
            echo '歡迎！ ' .$_POST['account']. '<br /> <a href="logout.php"> 登出 </a>';
        }
        else
        {
            $send_account  = $_POST['account']; $send_password = $_POST['password'];
            $send_command  = " SELECT * FROM `menberlist` WHERE `account`=" .$send_account. " AND `password`=" .$send_password;
            $send_result = mysqli_query( $link,$send_result );
            $row = mysqli_fetch_array( $send_result,MYSQLI_ASSOC );
            $active = $row['active'];
            if  ( $send_command== 1 ) // $send_account  != null && $send_password != null &&
            {
                $_SESSION['seidof'] = $send_account;
                // header("location: welcome.php");
            }
            else
            {
                echo
                '
                <legend> 會員登錄 / Menber login </legend>
                <input type="text" placeholder="帳號" name="account">
                <input type="text" placeholder="密碼" name="password">
                <input type="submit" value="登錄"> <br />
                <a href="#"> ．我要註冊 </a> <a href="#"> ．忘記密碼 </a>
                ';
            }
        }
        
        if ( isset($_POST['account'])&&isset($_POST['password']) )
        {
            if( $_SESSION['seidof'] != null )
            {
                echo '歡迎！ ' .$_POST['account'];
                echo '<br /> <a href="logout.php"> 登出 </a>'
            }
            else
            {
                $send_account  = $_POST['account']; $send_password = $_POST['password'];
                $send_command  = " SELECT * FROM `menberlist` WHERE `account`=" .$send_account. " AND `password`=" .$send_password;
                
            }
            // if($id != null && $pw != null && $row[1] == $id && $row[2] == $pw)
            // if($id != null && $pw != null && $row[1] == $id && $row[2] == $pw)
            // $send_account  = $_POST['account']; $send_password = $_POST['password'];
            // $send_command  = " SELECT * FROM `menberlist` WHERE `account`=" .$send_account. " AND `password`=" .$send_password;
            // SELECT * FROM `menberlist` WHERE `account`='asd' AND `password`='a'
        }
        
        else
        {
            echo
            '
            <legend> 會員登錄 / Menber login </legend>
            <input type="text" placeholder="帳號" name="account">
            <input type="text" placeholder="密碼" name="password">
            <input type="submit" value="登錄"> <br />
            <a href="#"> ．我要註冊 </a> <a href="#"> ．忘記密碼 </a>
            ';
        }
        
    }
    session_start();
    $link = mysqli_connect("127.0.0.1", "menber", "menber", "menber");
    $myusername = mysqli_real_escape_string($link,$_POST['account']);
    $mypassword = mysqli_real_escape_string($link,$_POST['password']); 
    if ( !$link )
    {
        echo "Error: Unable to connect to MySQL. " . PHP_EOL;
        echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
        echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
        exit;
    }
    else
    {
        $send_account = $_POST['account']; $send_password = $_POST['password'];
        $send_command = " SELECT * FROM `webpage` WHERE `member_name`='" .$send_account.  "' AND  `member_password`='" .$send_password. "' " ;
        
        $send_tmquery = mysqli_query( $link, $send_command );
        $send_results = mysqli_fetch_row($send_tmquery);
        if  ( $send_results[1]==$send_account && $send_results[2]==$send_password )
        {
            $_SESSION['seidof'] = $send_account;
            header('Location: index.php');
            
        }
        else
        { header('Location: index.php'); }
    }
    
    session_start();
    if( $_SESSION['seidof'] != null )
    {
            echo '歡迎 ' .$_SESSION['seidof']. '！ <br /> <a href="logout.php"> 登出 </a>';
    }
    else
    {
        echo
        '
        <legend> 會員登錄 / Menber login </legend>
        <input type="text" placeholder="帳號" name="account" >
        <input type="text" placeholder="密碼" name="password" type="password">
        <input type="submit" value="登錄"> <br />
        <a href="#"> ．我要註冊 </a> <a href="#"> ．忘記密碼 </a>
        ';
    }
    
    */
?>
