import {mnemonicToKey,verify,isMnemonic,isKey} from "./checkKey";

let avater = document.querySelector(".avater"),
    usname = document.querySelector(".usname"),
    line1 = document.getElementsByClassName("line")[0],
    line2 = document.getElementsByClassName("line")[1],
    guest = document.querySelector(".guest");

let loginLink = document.querySelector(".login"),
    logoutLink = document.querySelector(".logout");

function show(elems) {
    elems.forEach(elem=>{
        elem.style = "display:block;"
    })
}
function hide(elems) {
    elems.forEach(elem=>{
        elem.style = "display:none"
    })
}

function loginLoad() {
    if (localStorage.getItem('userAddr')) {
        show([avater, usname, line1, logoutLink]);
        hide([guest, line2, loginLink]);
    } else {
        hide([avater, usname, line1, logoutLink]);
        show([guest, line2, loginLink]);
    }
}
loginLoad();

//部署测试链版
/*if (window.ethereum) {
    var web3 = new Web3(window.ethereum);
    console.log('我用的是metamaskweb3',web3);
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/33a947db47094090b8331ea2f6f4bbd3"));
}*/

//rinkeby测试链
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/33a947db47094090b8331ea2f6f4bbd3"));

console.log(web3);
console.log('+++++++++++');

let popModal = document.querySelector(".popModal");

loginLink.onclick = function () {
    popModal.classList.add('shown');
}

let addrInput = document.querySelector(".addrInput"),
    keyInput = document.querySelector(".keyInput");
let ensureBtn = document.querySelector(".ensureModal"),
    unsureBtn = document.querySelector(".unsureModal");

let accountAddr = '0x0';
let keyAddr = "";

unsureBtn.onclick = function () {
    popModal.classList.remove("shown");
};

function formatCheck(keyAddr){

    if (web3.utils.isAddress(accountAddr)){
        console.log('账户地址对了');
    }else {
        Toast('账户地址输入格式有误!');
        addrInput.value = '';
        return false;
    }

    if (isMnemonic(keyAddr)||isKey(keyAddr)){
        console.log('助记词',isMnemonic(keyAddr));
        console.log('私钥',isKey(keyAddr));
        console.log('可以下一步');
        return true;
    }else {
        Toast('私钥或助记词输入格式有误!私钥需以0x开头!');
        keyInput.value = '';
        return false;
    }
}


ensureBtn.onclick = function () {
    accountAddr = addrInput.value;
    keyAddr = keyInput.value;
    console.log(`获取的地址${accountAddr}`);
    console.log(web3.utils.isAddress(accountAddr));

    if (formatCheck(keyAddr)) {
        console.log('初步格式验证通过');
        if(verify(keyAddr,accountAddr)){
            console.log('核对通过');
            Toast('登入成功!');
            popModal.classList.remove("shown");
            localStorage.setItem('userAddr',accountAddr);
            if (isMnemonic(keyAddr)) {
                //是助记词才可以调用此方法
                localStorage.setItem('keyAddr',mnemonicToKey(keyAddr));
            }else {
                localStorage.setItem('keyAddr',keyAddr);
            }

            //loginLoad();
            setTimeout(()=>{
                location.reload();
            },1000);
        }else {
            Toast('私钥与账户地址不匹配,请重新确认',1500);
        }

    }else {
        console.log('初步格式验证不通过');
    }

    /*if (web3.utils.isAddress(accountAddr)) {
        Toast('登入成功!');
        popModal.classList.remove("shown");
        localStorage.setItem('userAddr',accountAddr);
        //loginLoad();
        location.reload();
    }else{
        Toast('请重新输入地址!')
    }*/
};

logoutLink.onclick = ()=>{
    if (localStorage.getItem('userAddr')) {
        localStorage.clear();
        //账户，私钥都清除
        //loginLoad();
        Toast('登出成功!');
        setTimeout(()=>{
            location.reload();
        },1000)
    }
}
