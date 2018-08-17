window.controller = {};


window.onload = () => {
  window.view.firstScreen();
  setTimeout(() => window.controller.searchScreen(), 3000);
};


window.controller.searchScreen = () => {
  window.view.searchScreen();
  window.model.callDataMaps();
  window.model.inputSearch();
};


window.controller.getInfoPlace = () => {
  window.model.callDataMaps().then((results) => {
    window.view.listFood(results);
  });
};


// const callApiFood = () => {
//   return fetch('https://developers.zomato.com/api/v2.1/geocode?lat=-33.4190451&lon=-70.64170990000002', {
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