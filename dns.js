<<<<<<< HEAD
let namelist2 = [];
let conflist = [];
let pricelist2 = [];
let imglist = [];
let hreflist1 = [];
let give_items = () => {
    //дадим название
    let namelist = document.querySelectorAll(".catalog-product__name");
    for (let i = 0; i < namelist.length; i++) {
        namelist2[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[0].split('//')[0];
        conflist[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[1].split(']')[0];
    }
    console.log(namelist2)
    console.log(conflist)
    //дадим цену
    let pricelist = document.querySelectorAll(".product-buy__price");
     for (let i = 0; i < pricelist.length; i++) {
        pricelist2[i] = pricelist[i].innerHTML.split('<')[0];
    }
    console.log(pricelist2)
    let hreflist = document.querySelectorAll(".catalog-product ");
    for (let i = 0; i < hreflist.length; i++) {
        hreflist1[i] = 'https://www.dns-shop.ru' + hreflist[i].innerHTML.split('href="')[1].split('"')[0];
    }
    console.log(hreflist1);
}
give_items();

let upload_items = () => {
    let x = '<img src="https://lh5.googleusercontent.com/proxy/QMX2iqKV1SirONswydVKnjzlBw172xb2ruX1NpBUUOhy61_wShSfkm0nYuq0ZXHZH1-6I87DTCQJY8U4ThdPxudlV2o14mzF3w=w1200-h630-p-k-no-nu" style="margin: 5px; width: 25%; border-radius: 10px;">';
    let item = '<div style="display: flex; flex-wrap: wrap; flex-direction: row; padding: 10px; margin-bottom: 20px">';
    for (let i = 0; i < namelist2.length; i++) {
        item += '<div style="width: 31%; height: auto; border: 2px; padding: 15px">'
        item += '<img src="https://lh5.googleusercontent.com/proxy/QMX2iqKV1SirONswydVKnjzlBw172xb2ruX1NpBUUOhy61_wShSfkm0nYuq0ZXHZH1-6I87DTCQJY8U4ThdPxudlV2o14mzF3w=w1200-h630-p-k-no-nu" style="margin: 5px; width: 31%; border-radius: 5px;"></img>';
        item += '<br>' + '<b>' + namelist2[i] + '</b>';
        item += '<br>' + pricelist2[i];
        item += '<div class="row button"><a href="'+ hreflist1[i] + '"Выбрать"</a></div>';
        item += '</div>';
    }
    document.querySelector(".products-page ").innerHTML = item;
}
=======
let namelist2 = [];
let conflist = [];
let pricelist2 = [];
let imglist = [];
let hreflist1 = [];
let give_items = () => {
    //дадим название
    let namelist = document.querySelectorAll(".catalog-product__name");
    for (let i = 0; i < namelist.length; i++) {
        namelist2[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[0].split('//')[0];
        conflist[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[1].split(']')[0];
    }
    console.log(namelist2)
    console.log(conflist)
    //дадим цену
    let pricelist = document.querySelectorAll(".product-buy__price");
     for (let i = 0; i < pricelist.length; i++) {
        pricelist2[i] = pricelist[i].innerHTML.split('<')[0];
    }
    console.log(pricelist2)
    let hreflist = document.querySelectorAll(".catalog-product ");
    for (let i = 0; i < hreflist.length; i++) {
        hreflist1[i] = 'https://www.dns-shop.ru' + hreflist[i].innerHTML.split('href="')[1].split('"')[0];
    }
    console.log(hreflist1);
}
give_items();

let upload_items = () => {
    let x = '<img src="https://lh5.googleusercontent.com/proxy/QMX2iqKV1SirONswydVKnjzlBw172xb2ruX1NpBUUOhy61_wShSfkm0nYuq0ZXHZH1-6I87DTCQJY8U4ThdPxudlV2o14mzF3w=w1200-h630-p-k-no-nu" style="margin: 5px; width: 25%; border-radius: 10px;">';
    let item = '<div style="display: flex; flex-wrap: wrap; flex-direction: row; padding: 10px; margin-bottom: 20px">';
    for (let i = 0; i < namelist2.length; i++) {
        item += '<div style="width: 31%; height: auto; border: 2px; padding: 15px">'
        item += '<img src="https://lh5.googleusercontent.com/proxy/QMX2iqKV1SirONswydVKnjzlBw172xb2ruX1NpBUUOhy61_wShSfkm0nYuq0ZXHZH1-6I87DTCQJY8U4ThdPxudlV2o14mzF3w=w1200-h630-p-k-no-nu" style="margin: 5px; width: 31%; border-radius: 5px;"></img>';
        item += '<br>' + '<b>' + namelist2[i] + '</b>';
        item += '<br>' + pricelist2[i];
        item += '<div class="row button"><a href="'+ hreflist1[i] + '"Выбрать"</a></div>';
        item += '</div>';
    }
    document.querySelector(".products-page ").innerHTML = item;
}
>>>>>>> 578a50238f5149a476ada46d7bb8fbd22b9a2a1b
upload_items();