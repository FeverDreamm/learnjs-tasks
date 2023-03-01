function checkSpam(str) {
    let newStr = str.toLowerCase();
    if (newStr.indexOf('viagra') != -1 || str.indexOf('xxx') != -1) {
        return true;
    }
    return false;
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );