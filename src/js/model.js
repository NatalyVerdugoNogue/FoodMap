window.model = {};

window.model.callDataMaps = () => {
  return new Promise((resolve) => {
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
          resolve(results);
        }
      };
    };

    const createMarker = (place) => {
      const placeLoc = place.geometry.location;

      let marker = new google.maps.Marker({
        map: map,
        position: placeLoc,
        animation: google.maps.Animation.DROP,
      });

      google.maps.event.addListener(marker, 'click', () => {
        infowindow.setContent(place.name);
        infowindow.open(map, marker);
      });
    };

    initMap();
    document.getElementById('inputSearch').value = '';
  });
};


window.model.inputSearch = () => {
  var input = document.getElementById('inputSearch');
  input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById('btnSearch').click();
    };
  });
};

