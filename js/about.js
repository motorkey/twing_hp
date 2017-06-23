function initialize() {
  var latlng = new google.maps.LatLng(35.690288, 139.707227); // 緯度・経度
  var myOptions = {
   zoom: 18, // 拡大倍率
   center: latlng,
   mapTypeId: google.maps.MapTypeId.ROADMAP // 地図の種類
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); // 地図を表示
  var marker = new google.maps.Marker({
   position : latlng, // 緯度・経度
   map : map // 表示する地図
 });
};
