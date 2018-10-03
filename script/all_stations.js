var monUl = document.querySelector('ul');

fetch('http://api.citybik.es/v2/networks/bicloo').then(function(res) {
  return res.json().then(function(data) {
    var stations = data.network.stations;

		for (var i = 0; i < stations.length; i++) {

      var maListe = document.createElement('li')
      maListe.textContent =
        (
          stations[i].name +
          ' ( ' +
          stations[i].extra.address +
          ' ) : places disponibles : ' +
          stations[i].empty_slots +
          ' // vélo disponibles : ' +
          stations[i].free_bikes
        );

      monUl.appendChild(maListe);
    };

  });
});
