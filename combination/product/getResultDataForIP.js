
module.exports = {

  mapIP: function() {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: SERVER_URL + ip,

      success: function(data) {
        mapIP(data, ip);
      },
      error: function(err) {
        alert(SERVER_ERROR + SERVER_URL);
      }
    });
  }
}
