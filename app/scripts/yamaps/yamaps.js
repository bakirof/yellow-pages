
  ymaps.ready(init);
  var myMap,
    myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [56.27782935, 43.81891473],
      zoom: 12
    });

    myPlacemark = new ymaps.Placemark([56.32483935, 43.94891473], {
      hintContent: 'Нижний Новгород'

    });

    myMap.geoObjects.add(myPlacemark);


    var placeMap,
      myPlace;

    placeMap = new ymaps.Map("place-map", {
      center: [56.32483935, 43.94891473],
      zoom: 15
    });

    myPlace = new ymaps.Placemark([56.32483935, 43.94891473], {
      hintContent: 'Нижний Новгород'

    });

    placeMap.geoObjects.add(myPlace);


  }








