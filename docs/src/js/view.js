window.view = {};

window.view.firstScreen = () => {
  let divFScreen = document.getElementById('countainer');
  divFScreen.innerHTML =
    `<div id="imgLogo" class="text-center">
      <img src="src/img/LogoFoodMap.png" class="img-fluid imgLoadin" alt="Responsive image">
    </div>`;
};


window.view.searchScreen = () => {
  let divSScreen = document.getElementById('countainer');
  divSScreen.innerHTML =
    `<div class="row mx-0 text-center">
        <div class="imgLogosearch col-6 offset-3">
          <img src="src/img/LogoFoodMap.png" class="img-fluid logoSearch" alt="Responsive image">
        </div>
      </div>
      <div class="row mx-0">
        <div id="map" class="col-10 offset-1 viewMap"></div>
      </div>
      <div class="row mx-0 text-center">
        <div id="statement" class="col-12">
          <p class="text-center textInput">Comida cerca de ti</p>
        </div>
      </div>
      <div class="row mx-0 mt-3">
        <div class="col-10 offset-1 col-md-8 offset-md-2 input-group mb-3">
          <input id="inputSearch" type="text" class="form-control" placeholder="Filtrar restaurantes" aria-label="Filtrar " aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn-search" type="button" id="btnSearch" onclick="window.controller.getInfoPlace()">
              <img src="src/img/iconFoodSearch.png" alt="iconFoodSearch" width="32" height="32">
            </button>
          </div>
        </div>
      </div>
      <div class="row mx-0">
        <div id="mapList" class="col-10 offset-1 col-md-8 offset-md-2"></div>
      </div>
      <div class="row mx-0 pt-4 col-12">
        <div class="col-6 col-md-3 m-0 p-2">
          <img src="src/img/ran1.jpeg" class="img-fluid img-thumbnail imgRan" alt="Responsive image">
        </div>
        <div class="col-6 col-md-3 m-0 p-2">
          <img src="src/img/ran2.jpeg" class="img-fluid img-thumbnail imgRan" alt="Responsive image">
        </div>
        <div class="col-6 col-md-3 m-0 p-2">
          <img src="src/img/ran3.jpeg" class="img-fluid img-thumbnail imgRan" alt="Responsive image">
        </div>
        <div class="col-6 col-md-3 m-0 p-2">
          <img src="src/img/ran4.jpeg" class="img-fluid img-thumbnail imgRan" alt="Responsive image">
        </div>
      </div>`;

  document.getElementById('inputSearch').value = ' ';
};


window.view.listFood = (results) => {
  let screenListHTML = '';

  for (let i = 0; i < results.length; i++) {
    screenListHTML = screenListHTML +
      `<div class="row my-2 py-1 fondImg">
        <div class="col-8 col-md-9 offset-md-1">
          <p class="text-left textList pt-2 m-0">${results[i].name}</p>
        </div>
        <div class="col-4 col-md-2">
          <button class="btn btn-outline-secondary btn-border" type="button" data-toggle="modal" data-target="#exampleModal" id="${'a' + results[i].id}" onclick="window.view.btnDataMaps('${results[i].id}','${results[i].name}','${results[i].formatted_address}','${results[i].rating}','${results[i].photos[0].getUrl({ 'maxWidth': 250, 'maxHeight': 135 })}')">
            <img src="src/img/iconService.png" alt="iconFoodSearch" width="32" height="32">
          </button>
        </div>
        <div class="h-0 " id="alert"></div>
      </div>`;
  }

  let divScreenList = document.getElementById('mapList');
  divScreenList.innerHTML = screenListHTML;
};


window.view.btnDataMaps = (id, name, address, rating, photo) => {
  let divDelete = document.getElementById('alert');
  divDelete.innerHTML =
    `<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header px-0">
            <div class="container-fluid px-0">
              <div class="row mx-0">
                <div class="col text-center px-0">
                  <h5 class="modal-title modal-title" id="exampleModalLabel">${name}</h5>
                </div>
                <div class="col-auto pl-0">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>     
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body px-0">
            <div class="container-fluid">
              <div class="row mx-0">
                <div class="col-3 px-0"><p class="text-left modal-text">Dirección:</p></div>
                <div class="col-9 px-0"><p class="text-left modal-text">${address}</p></div>
              </div>
              <div class="row mx-0">
                <div class="col-3 px-0"><p class="text-left modal-text">Rating:</p></div>
                <div class="col-9 px-0"><p class="text-left modal-text">${rating}</p></div>
              </div>
              <div class="row mx-0">
                <div class="col-12 text-center py-3"><img src="${photo}" class="img-fluid img-thumbnail" alt="Responsive image"></div>
              </div>
            </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary modal-btn" data-dismiss="modal" onclick="window.controller.searchScreen()">Pedir</button>
          </div>
        </div>
      </div>
    </div>`;
};