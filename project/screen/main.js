// 正規表現
var PassPattern = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,16}$/i; //パスワード 大小英数字8以上16以内
var IdPattern = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{1,255}$/i; //ユーザid 大小英数字1以上255以内
var MailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/; //メールアドレス

// 新規登録処理
function signUp() {
    var userId = document.getElementsByName("userId").Value;
    var userName = document.getElementsByName("userName").Value;
    var userMail = document.getElementsByName("userMail").Value;
    var pass1 = document.getElementsByName("pass1");
    var pass2 = document.getElementsByName("pass2");

    // 入力チェック
    var idResult = userId.match(IdPattern);
    var MailResult = userMail.match(MailPattern);
    var Pass1Result = pass1.match(PassPattern);

    if(1 <= userName.length && userName.length >= 255){
        var NameResult = userName;
    } else{
        NameResult = null;
    }
    if(pass1 == pass2){
        var Pass2Result = true;
    } else{
        Pass2Result = false;
    }
    if(idResult == null || MailResult == null || Pass1Result == null || NameResult == null || Pass2Result == false){
        alert("正しく入力してください");
        return false;
    } else{
        return true;
    }
}
