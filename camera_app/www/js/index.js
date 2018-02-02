
function shooting()
  {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
    var image = document.getElementById('pic_holder');
    image.src = imageURI;
      }

    function onFail(message) {
    alert('Failed because: ' + message);
      }
  }

function viewing()
  {
    navigator.camera.getPicture(onSuccess, onFail, {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
    var image = document.getElementById('pic_holder');
    image.src = imageURI;
      }

    function onFail(message) {
    alert('Failed because: ' + message);
      }
  }

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        document.getElementById("shoot").addEventListener('click',shooting);
        document.getElementById("view").addEventListener('click',viewing);
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



app.initialize();
