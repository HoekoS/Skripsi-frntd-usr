const url = 'http://34.101.186.227:3737/api/menu';
let output = '';
let output2 = '';
// var temp="";


getapi(url);

async function getapi(urls) {
  // Storing response
  output='';
  const response2 = await fetch(urls);

  // Storing data in form of JSON
  var data2 = await response2.json();
  console.log(data2.data)
  jmlh_data2=data2.data.length
  data2.data.filter(item=>item.sub_kategori=='Aneka Nasi').forEach((itemData) => {
    showPsn(itemData.id,itemData.name,itemData.price,itemData.description)
  });
  document.getElementById('data-makanan').innerHTML=output;
  getapiMie(data2);
  getapiLondo(data2);
  getapisayur(data2)
  getapitelur(data2)
  getapiayam(data2)
  getapisoup(data2)
  getapiseafood(data2)
  getapiminuman(data2)

}

function showPsn(id,name,price,desc){
  output +=
          `<div class="flex-w flex-b m-b-3">
            <a class="name-item-mainmenu txt21">`+name+`</a>
            <div class="line-item-mainmenu bg3-pattern"></div>
            <div class="price-item-mainmenu txt22">`+price+`</div>
          </div>
          <span classhowPsnMie
          <span class="info-item-mainmenu txt23">`+desc+`</span>`;
  return output
}

async function getapiMie(data2) {
  // Storing response
  output='';
  data2.data.filter(item=>item.sub_kategori=='Aneka Mie').forEach((itemData) => {
    showPsnMie(itemData.id,itemData.name,itemData.price,itemData.description)
  });
  document.getElementById('data-minuman').innerHTML=output;

}

function showPsnMie(id,name,price,desc){
  output +=
          `<div class="flex-w flex-b m-b-3">
            <a class="name-item-mainmenu txt21">`+name+`</a>
            <div class="line-item-mainmenu bg3-pattern"></div>
            <div class="price-item-mainmenu txt22">`+price+`</div>
          </div>
          <span class="info-item-mainmenu txt23">`+desc+`</span>`;
  return output
}

async function getapiLondo(data2) {
  // Storing response
  output='';
  data2.data.filter(item=>item.sub_kategori=='Menu Londo').forEach((itemData) => {
    showPsnLondo(itemData.name,itemData.price,itemData.description,'http://34.101.186.227:3838/'+itemData.pic)
  });
  document.getElementById('row-londo').innerHTML=output;

}

function showPsnLondo(name,price,desc,url){
  output +=
          `<div class="col-md-8 col-lg-6 m-l-r-auto">
					<div class="blo3 flex-w flex-col-l-sm m-b-30">
						<div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
							<a href="#"><img src="`+url+`" alt="IMG-MENU"></a>
						</div>

						<div class="text-blo3 size21 flex-col-l-m">
							<a href="#" class="txt21 m-b-3">
              `+name+`
							</a>

							<span class="txt23">
              `+desc+`
							</span>

							<span class="txt22 m-t-20">
              `+price+`
							</span>
						</div>
					</div>
				</div>`;
  return output
}

async function getapisayur(data2) {
  // Storing response
  output='';
  data2.data.filter(item=>item.sub_kategori=='Aneka Sayur').forEach((itemData) => {
    showPsnsayur(itemData.name,itemData.price,itemData.description,'http://34.101.186.227:3838/'+itemData.pic)
  });
  document.getElementById('row-sayur').innerHTML=output;

}

function showPsnsayur(name,price,desc,url){
  output +=
          `<div class="col-md-8 col-lg-6 m-l-r-auto">
					<div class="blo3 flex-w flex-col-l-sm m-b-30">
						<div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
							<a href="#"><img src="`+url+`" alt="IMG-MENU"></a>
						</div>

						<div class="text-blo3 size21 flex-col-l-m">
							<a href="#" class="txt21 m-b-3">
              `+name+`
							</a>

							<span class="txt23">
              `+desc+`
							</span>

							<span class="txt22 m-t-20">
              `+price+`
							</span>
						</div>
					</div>
				</div>`;
  return output
}

async function getapitelur(data2) {
  // Storing response
  output='';
  data2.data.filter(item=>item.sub_kategori=='Aneka Masakan Telur').forEach((itemData) => {
    showPsntelur(itemData.name,itemData.price,itemData.description,'http://34.101.186.227:3838/'+itemData.pic)
  });
  document.getElementById('row-telur').innerHTML=output;

}

function showPsntelur(name,price,desc,url){
  output +=
          `<div class="col-md-8 col-lg-6 m-l-r-auto">
					<div class="blo3 flex-w flex-col-l-sm m-b-30">
						<div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
							<a href="#"><img src="`+url+`" alt="IMG-MENU"></a>
						</div>

						<div class="text-blo3 size21 flex-col-l-m">
							<a href="#" class="txt21 m-b-3">
              `+name+`
							</a>

							<span class="txt23">
              `+desc+`
							</span>

							<span class="txt22 m-t-20">
              `+price+`
							</span>
						</div>
					</div>
				</div>`;
  return output
}

async function getapiayam(data2) {
  // Storing response
  output='';
  data2.data.filter(item=>item.sub_kategori=='Aneka Masakan Ayam').forEach((itemData) => {
    showPsnayam(itemData.name,itemData.price,itemData.description,'http://34.101.186.227:3838/'+itemData.pic)
  });
  document.getElementById('row-ayam').innerHTML=output;

}

function showPsnayam(name,price,desc,url){
  output +=
          `<div class="col-md-8 col-lg-6 m-l-r-auto">
					<div class="blo3 flex-w flex-col-l-sm m-b-30">
						<div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
							<a href="#"><img src="`+url+`" alt="IMG-MENU"></a>
						</div>

						<div class="text-blo3 size21 flex-col-l-m">
							<a href="#" class="txt21 m-b-3">
              `+name+`
							</a>

							<span class="txt23">
              `+desc+`
							</span>

							<span class="txt22 m-t-20">
              `+price+`
							</span>
						</div>
					</div>
				</div>`;
  return output
}

async function getapisoup(data2) {
  // Storing response
  output='';
  data2.data.filter(item=>item.sub_kategori=='Aneka Soup').forEach((itemData) => {
    showPsnsoup(itemData.name,itemData.price,itemData.description,'http://34.101.186.227:3838/'+itemData.pic)
  });
  document.getElementById('row-soup').innerHTML=output;

}

function showPsnsoup(name,price,desc,url){
  output +=
          `<div class="col-md-8 col-lg-6 m-l-r-auto">
					<div class="blo3 flex-w flex-col-l-sm m-b-30">
						<div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
							<a href="#"><img src="`+url+`" alt="IMG-MENU"></a>
						</div>

						<div class="text-blo3 size21 flex-col-l-m">
							<a href="#" class="txt21 m-b-3">
              `+name+`
							</a>

							<span class="txt23">
              `+desc+`
							</span>

							<span class="txt22 m-t-20">
              `+price+`
							</span>
						</div>
					</div>
				</div>`;
  return output
}

async function getapiseafood(data2) {
  // Storing response
  output='';
  data2.data.filter(item=>item.sub_kategori=='Seafood').forEach((itemData) => {
    showPsnseafood(itemData.name,itemData.price,itemData.description,'http://34.101.186.227:3838/'+itemData.pic)
  });
  document.getElementById('row-seafood').innerHTML=output;

}

function showPsnseafood(name,price,desc,url){
  output +=
          `<div class="col-md-8 col-lg-6 m-l-r-auto">
					<div class="blo3 flex-w flex-col-l-sm m-b-30">
						<div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
							<a href="#"><img src="`+url+`" alt="IMG-MENU"></a>
						</div>

						<div class="text-blo3 size21 flex-col-l-m">
							<a href="#" class="txt21 m-b-3">
              `+name+`
							</a>

							<span class="txt23">
              `+desc+`
							</span>

							<span class="txt22 m-t-20">
              `+price+`
							</span>
						</div>
					</div>
				</div>`;
  return output
}

async function getapiminuman(data2) {
  // Storing response
  output='';
  data2.data.filter(item=>item.kategori=='Minuman').forEach((itemData) => {
    showPsnminuman(itemData.name,itemData.price,itemData.description,'http://34.101.186.227:3838/'+itemData.pic)
  });
  document.getElementById('row-minuman').innerHTML=output;

}

function showPsnminuman(name,price,desc,url){
  output +=
          `<div class="col-md-8 col-lg-6 m-l-r-auto">
					<div class="blo3 flex-w flex-col-l-sm m-b-30">
						<div class="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
							<a href="#"><img src="`+url+`" alt="IMG-MENU"></a>
						</div>

						<div class="text-blo3 size21 flex-col-l-m">
							<a href="#" class="txt21 m-b-3">
              `+name+`
							</a>

							<span class="txt23">
              `+desc+`
							</span>

							<span class="txt22 m-t-20">
              `+price+`
							</span>
						</div>
					</div>
				</div>`;
  return output
}