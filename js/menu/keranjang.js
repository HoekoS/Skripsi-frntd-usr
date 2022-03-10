
var x = new URLSearchParams(window.location.search);
var nomer_nota=x.get('not');
var nomer_meja=x.get('nom');
console.log("keranjang",nomer_meja,nomer_nota);

document.getElementById("keranjangButon").innerHTML='<a href="keranjang.html?not='+nomer_nota+'&nom='+nomer_meja+'"><i class="fa fa-shopping-cart" aria-hidden="true" style="font-size:20px"></i></a>'
document.getElementById("side-menu").innerHTML='<a href="menu_all.html?not='+nomer_nota+'&nom='+nomer_meja+'">Menu</a>'
document.getElementById("menu-minbar").innerHTML='<a href="menu_all.html?not='+nomer_nota+'&nom='+nomer_meja+'" class="txt19">Menu</a>'
document.getElementById("no-nota").innerHTML=nomer_nota
document.getElementById("no-meja").innerHTML=nomer_meja

const url_harga="http://cafesako.store/api/order/get/harga?not="+nomer_nota
const url_detail="http://cafesako.store/api/order/pilih?not="+nomer_nota
const url_pesanan = 'http://cafesako.store/api/order';

var total=[];
var output="";

getapi(url_detail);
getHarga(url_harga);
getPesanan(url_pesanan+"/nota");


async function getPesanan(urls) {
  // Storing response
  output='';
  const response2 = await fetch(urls+"?key="+nomer_nota);

  // Storing data in form of JSON
  var data2 = await response2.json();
  console.log(data2.data[0]['State'])
  if(data2.data[0]['State']=="Cetak QR"){
    document.getElementById('btl-but').innerHTML=`
    <button onclick="submitState()" type="button" class="btn btn-primary">
						Submit
					</button>
					<button onclick="batalState()" type="button" class="btn btn-primary">
						Batal
					</button>`;
  }else if(data2.data[0]['State']=="PESANAN DISUBMIT"){
    document.getElementById('btl-but').innerHTML=`
					<button onclick="batalState()" type="button" class="btn btn-primary">
						Batal
					</button>`;  
  }else{
    document.getElementById('btl-but').innerHTML=``;
  }
}

async function getapi(urls) {
  // Storing response
  output='';
  const response2 = await fetch(urls);

  // Storing data in form of JSON
  var data2 = await response2.json();
  console.log(data2.data)
  jmlh_data2=data2.data.length
  for (let i= 0; i < jmlh_data2 ; i++) {
      total[i] = data2.data[i]['quantity'] 
      showPsn(i,data2.data[i]['id'] ,data2.data[i]['nama_pelanggan'],data2.data[i]['price'],data2.data[i]['url'],data2.data[i]['catatan'])
    }
  document.getElementById('row-pesanan').innerHTML=output;
}

function showPsn(id,id_psn,name,price,url,desc){
    // console.log(total[id])
    quant=total[id]
    output +=
          `<div class="row p-b-70">
          <div class="col-md-auto flex-col-l-m m-l-r-auto">
              <button onclick="deletePsn(`+id_psn+`)" type="button" class="btn btn-primary rounded-circle">
                  <i style="color: white;" class="fa fas fa-trash"></i>
              </button>
          </div>
          <div class="col-6 m-l-r-auto">
              <div class="blo3 flex-w flex-col-l-sm m-b-30">
                  <div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
                      <a><img src="`+'http://file.cafesako.store/'+url+`" alt="IMG-MENU"></a>
                  </div>

                  <div class="text-blo3 size21 flex-col-l-m">
                      <a class="txt21 m-b-3">
                          `+name+`
                      </a>

                      <span class="txt22">
                          `+price+`
                      </span>

                      <label class="m-t-20">Description</label>
                      <div class="row ">
                        <div class="col-md-auto">                  
                          <input type="text" class="form-control" id="name`+id+`" value="`+desc+`">
                        </div>
                        <div class="col-md-auto">                  
                            <button onclick="editPesanan(`+id+`,`+id_psn+`)" type="button" class="btn btn-secondary">
                                Simpan
                            </button>
                        </div>
                          
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-md-auto flex-col-l-m m-l-r-auto">
              <button onclick="countDown(`+id+`,`+id_psn+`)" type="button" class="btn btn-primary rounded-circle">
                  <i style="color: white;" class="fa fas fa-minus"></i>
              </button>
          </div>
          <div class="col-md-auto m-l-r-auto">
              <div class="text-blo3 size21 flex-col-l-m">
                  <span class="txt21 m-b-3">Jumlah</span>

                  <span id="number`+id+`" class="txt22 m-t-20">`+quant+`</span>
              </div>
          </div>
          <div class="col-md-auto flex-col-l-m m-l-33">
              <button onclick="countUp(`+id+`,`+id_psn+`)" type="button" class="btn btn-primary rounded-circle">
                  <i style="color: white;" class="fa fas fa-plus"></i>
              </button>
          </div>
      </div>`;
  return output
}

function countUp(ids,idp){
    var value=total[ids];
    var hasil = value + 1;
    total[ids] = hasil;
    // console.log(total)
    document.getElementById(`number`+ids+``).innerHTML=total[ids];
    editPesanan(ids,idp)
}

function countDown(ids,idp){
    var value=total[ids];
    var hasil = value - 1;
    if (hasil<1){
        total[ids]=1
    }else{
        total[ids] = hasil;
        // console.log(total)
        document.getElementById(`number`+ids+``).innerHTML=total[ids];
    };
    editPesanan(ids,idp)
}

async function getHarga(urls) {
    // Storing response
    output='';
    const response2 = await fetch(urls);
  
    // Storing data in form of JSON
    var data2 = await response2.json();
    console.log(data2.data)
    document.getElementById('get-harga').innerHTML=data2.data[0]['total_harga'];
  }
  
async function deletePsn(ids){
    await fetch(url_pesanan+"/pilih/delete?key="+ids,{
      method:'DELETE',
      withCredentials: true,
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(data=>{
      if(data.status=="True"){
        console.log("data sukses");
        // alert("sukses")
        location.reload();
      }else{
        console.log("data error "+data.status);
        alert("Data Error");
      }
    });
  }


  function editPesanan(ids,idp){
    // console.log("sini")
    var editCatatan
    var id_psn = idp
    var editjmlhPesanan = document.getElementById(`number`+ids+``).innerHTML
    var editjmlhPesananInt =parseInt(editjmlhPesanan)
    editCatatan = document.getElementById(`name`+ids+``).value
    console.log(editCatatan,id_psn,editjmlhPesanan,ids)
    if( editCatatan == ""){
      // console.log("sini")
      editCatatan = "Tidak Ada Catatan"
    }
    updateData({
        quantity:editjmlhPesananInt,
        catatan:editCatatan,
      },id_psn)
      .then(data=>{
        if(data.status=="True"){
          console.log("data sukses");
          // alert("sukses")
          location.reload();
        }else{
          console.log("data error "+data.status);
          alert("Data Error");
        }
      });
  }
  
  async function updateData(data={},id){
    console.log(data['catatan'])
    const response4 = await fetch(url_pesanan+"/pilih/update?key="+id,{
      method:'PUT',
      withCredentials: true,
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    });
    return response4.json();
  }

  function batalState(){
    updateBatal({
      state:"BATAL PESAN",
    })
    .then(data=>{
      if(data.status=="True"){
        console.log("data sukses");
        // alert("sukses")
        window.location.replace("http://cafesako.store/menu.html");
      }else{
        console.log("data error "+data.status);
        alert("Data Error");
      }
    });
  }

  function submitState(){
    updateBatal({
      state:"PESANAN DISUBMIT",
    })
    .then(data=>{
      if(data.status=="True"){
        console.log("PESANAN DISUBMIT");
        // alert("sukses")
        window.location.replace("http://cafesako.store/menu.html");
      }else{
        console.log("data error "+data.status);
        alert("Data Error");
      }
    });
  }
async function updateBatal(data={}){
  const response6 = await fetch(url_pesanan+"/pilih/state/nota?key="+nomer_nota,{
    method:'PUT',
    withCredentials: true,
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  });
  return response6.json();
}
