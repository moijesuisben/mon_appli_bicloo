var monUl = document.querySelector('ul');

fetch('https://api.citybik.es/v2/networks/bicloo').then(function(res) {
  return res.json().then(function(data) {
      var stations = data.network.stations;

      for (var i = 0; i < stations.length; i++) {
        if (stations[i].empty_slots !== 0) {
          var maListe2 = document.createElement('li')

          maListe2.textContent = (stations[i].name + ' ( ' + stations[i].extra.address + ' ) : places disponibles : ' +
          stations[i].empty_slots + ' // vélo disponibles : ' + stations[i].free_bikes);

          monUl.appendChild(maListe2);
        }
    }

  })
})
