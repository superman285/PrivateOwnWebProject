

// console.log("可以用",a,b);

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

unsureBtn.onclick = function () {
    popModal.classList.remove("shown");
}
ensureBtn.onclick = function () {
    accountAddr = addrInput.value;
    console.log(`获取的地址${accountAddr}`);
    console.log(web3.utils.isAddress(accountAddr));

    if (web3.utils.isAddress(accountAddr)) {
        Toast('登入成功!');
        popModal.classList.remove("shown");
        localStorage.setItem('userAddr',accountAddr);
        //loginLoad();
        location.reload();
    }else{
        Toast('请重新输入地址!')
    }
    addrInput.value = '';
};

logoutLink.onclick = ()=>{
    if (localStorage.getItem('userAddr')) {
        localStorage.removeItem('userAddr');
        //loginLoad();
        location.reload();
        Toast('登出成功!');
    }
}
