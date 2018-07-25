window.onload = () => {
  firstScreen();
  setTimeout(() => searchScreen(), 3000);
};

const callApiFood = () => {

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
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcFOl6LaSQ7Vq5BtQl1DFvbMn2oEzDtUY&callback=initMap" async
    defer></script>
    <div id="statement">
      <p class="text-center textInput">Comida cerca de ti</p>
    </div>
    <div class="col-10 offset-1 col-md-8 offset-md-2 input-group mb-3">
      <input type="text" class="form-control" placeholder="Filtrar restaurantes" aria-label="Filtrar " aria-describedby="button-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">
          <img src="img/iconFoodSearch.png" alt="iconFoodSearch" width="32" height="32">
        </button>
      </div>
    </div>
    <div class="row positionImg col-10 offset-1">
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
    </div>`;
};