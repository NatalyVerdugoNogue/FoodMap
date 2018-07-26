window.onload = () => {
  firstScreen();
  setTimeout(() => searchScreen(), 3000);
};

// const callApiFood = () => {
//   return fetch('https://developers.zomato.com/api/v2.1/search', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'user-key': 'a005902f79e2b87d3fcca1e2716cde73'
//     }
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('La llamada a la API falló');
//     }
//   }).then((respuestaJson) => {
//     console.log(respuestaJson);

//     return respuestaJson;
//   }).catch((err) => {
//     console.error(err);
//   });
// };
// callApiFood();

const callDataMaps = () => {
  let inputSearch = document.getElementById('inputSearch').value;
  let map;
  let infowindow;

  const initMap = () => {
    const pyrmont = {
      lat: -33.419046,
      lng: -70.64176
    };

    map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 13
    });

    infowindow = new google.maps.InfoWindow();

    let service = new google.maps.places.PlacesService(map);
    service.textSearch({
      location: pyrmont,
      radius: 500,
      query: inputSearch,
    }, callback);
  };


  const callback = (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  };

  const createMarker = (place) => {
    const placeLoc = place.geometry.location;

    let marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      animation: google.maps.Animation.DROP,
    });

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.setContent(place.name, place.formatted_address);
      infowindow.open(map, marker);
    });
  };

  initMap();
  document.getElementById('inputSearch').value = '';
};


const firstScreen = () => {
  let divFScreen = document.getElementById('countainer');
  divFScreen.innerHTML =
    `<div id="imgLogo" class="text-center">
      <img src="img/LogoFoodMap.png" class="img-fluid imgLoadin" alt="Responsive image">
    </div>`;
};

const searchScreen = () => {
  let divSScreen = document.getElementById('countainer');
  divSScreen.innerHTML =
    `<div class="text-center imgLogosearch">
      <img src="img/LogoFoodMap.png" class="img-fluid logoSearch" alt="Responsive image">
    </div>
    <div id="map" class="col-10 offset-1 viewMap"></div>
    <div id="statement">
      <p class="text-center textInput">Comida cerca de ti</p>
    </div>
    <div class="col-10 offset-1 col-md-8 offset-md-2 input-group mb-3">
      <input id="inputSearch" type="text" class="form-control" placeholder="Filtrar restaurantes" aria-label="Filtrar " aria-describedby="button-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="callDataMaps()">
          <img src="img/iconFoodSearch.png" alt="iconFoodSearch" width="32" height="32">
        </button>
      </div>
    </div>`;
  document.getElementById('inputSearch').value = 'laboratoria';
  callDataMaps();
};

const listName = (placeName) => {
  let screenHTML = '';
  screenHTML = screenHTML + `<div>
  <p class="text-left">${ placeName} </p>
  <button class="btn btn-outline-secondary" type="button" onclick="infoMaps()">
    <img src="img/iconService.png" alt="iconService" width="32" height="32">
  </button>
</div>`
  let divSScreen = document.getElementById('countainer');
  divSScreen.innerHTML = screenHTML;
};


{/* <div class="row positionImg col-10 offset-1">
<div class="text-center col-6 col-md-3">
  <img class="rounded-circle imgScreenSearch p-1" src="img/food.jpg" alt="Circle image">
</div>
<div class="text-center col-6 col-md-3">
  <img class="rounded-circle imgScreenSearch p-1" src="img/food.jpg" alt="Circle image">
</div>
<div class="text-center col-6 col-md-3">
  <img class="rounded-circle imgScreenSearch p-1" src="img/food.jpg" alt="Circle image">
</div>
<div class="text-center col-6 col-md-3">
  <img class="rounded-circle imgScreenSearch p-1" src="img/food.jpg" alt="Circle image">
</div>
</div> */}