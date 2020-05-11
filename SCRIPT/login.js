
function onClickDangNhap() {
    if (formDangNhapHopLe() == true) {
    }
}
function formDangNhapHopLe() {
    var hopLe = true;
    var nodeUserName = document.getElementById('userName');
    var nodePassWord = document.getElementById('passWord');
    var userName = nodeUserName.value;
    var passWord = nodePassWord.value;

    var nodeHienThiLoiUserName = document.getElementById('hienThiLoiUserName');
    var nodeHienThiLoiPassWord = document.getElementById('hienThiLoiPassWord');
    nodeHienThiLoiUserName.innerHTML = '';
    nodeHienThiLoiPassWord.innerHTML = '';


    console.log('Họ tên là: ' + userName);
    console.log('Số điện thoại: ' + passWord);

    if (userName == null || userName.length <= 0) {
        nodeHienThiLoiUserName.innerHTML = 'Tên đăng nhập không được để trống';
        hopLe = false;
    }

    if (passWord == null || passWord.length <= 0) {
        nodeHienThiLoiPassWord.innerHTML = 'Mật khẩu không được bỏ trống';
        hopLe = false;
    }

    return hopLe;

}