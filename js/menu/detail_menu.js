var x = new URLSearchParams(window.location.search);
var id=x.get('key');
console.log(id);
const url = 'http://localhost:3737/api/menu';
const url_pesanan = 'http://localhost:3737/api/order';
var total=1;


document.getElementById('number').innerHTML=total;

var nomer_nota=x.get('not');
var nomer_meja=x.get('nom');
console.log("detail",nomer_meja,nomer_nota);
document.getElementById("keranjangButon").innerHTML='<a style="color: white;" href="keranjang.html?not='+nomer_nota+'&nom='+nomer_meja+'"><i class="fa fa-shopping-cart" aria-hidden="true" style="font-size:20px"></i></a>'
document.getElementById("side-menu").innerHTML='<a style="color: white;" href="menu_all.html?not='+nomer_nota+'&nom='+nomer_meja+'">Menu</a>'
document.getElementById("menu-minbar").innerHTML='<a href="menu_all.html?not='+nomer_nota+'&nom='+nomer_meja+'" class="txt19">Menu</a>'


fetch(url+'?key='+id)
.then(
  res => {
    res.json().then(
      data => {
        console.log(data.data);
        console.log(data.data[0].name);
        document.getElementById('namaMenu').innerHTML='<p  id="namCss" class="tit-mainmenu tit10 p-b-5">'+data.data[0].name+'</p>';
        document.getElementById('deskripsi').innerHTML='<p id="descCss">'+data.data[0].description+'<p>';
        document.getElementById('price').innerHTML='<p id="priceCss"> Harga : '+data.data[0].price+'</p>';
        document.getElementById('imageMenu').src='http://localhost:3838/'+data.data[0].pic;
      }
    )
  }
)

function countUp(){
    var value=total;
    var hasil = value + 1;
    total = hasil;
    // console.log(total)
    document.getElementById('number').innerHTML=total;
}

function countDown(){
    var value=total;
    var hasil = value - 1;
    if (hasil<1){
        total=1
    }else{
        total = hasil;
        // console.log(total)
        document.getElementById('number').innerHTML=total;
    };
}


function postPesanan(){
  var quant = document.getElementById('number').innerHTML
  var quantity =parseInt(quant)
  var catatan = document.getElementById('cttn').value
  console.log(quant,catatan)
  if( catatan == ""){
    // console.log("sini")
    catatan = "Tidak Ada Catatan"
  }
  postData({
    quantity:quantity,
    catatan:catatan,
    id_menu:id,
    no_nota:nomer_nota
  })
  .then(data=>{
    if(data.status=="True"){
      console.log("data sukses");
      // alert("sukses")
      window.location.replace('http://localhost:3737/feuser/menu_all.html?not='+nomer_nota+'&nom='+nomer_meja);
    }else{
      console.log("data error "+data.status);
      alert("Data Error");
    }
  });

}

async function postData(data={}){
  console.log(data['catatan'])
  const response = await fetch(url_pesanan+"/pilih/post",{
    method:'POST',
    withCredentials: true,
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  });
  return response.json();
}
