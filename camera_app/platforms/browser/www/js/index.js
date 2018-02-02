/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.


 function aaa()
   {
       document.getElementById("shoot").addEventListener("click",camAccess);
       function camSuccess(imgData)
       {
         var imgElmt = document.getElementById("pic_holder");
         imgElmt.src = imgData;
       };
       function camError(error)
       {
         alert(error);
       };
       function camAccess()
       {
           var options = {
             destinationType: Camera.destinationType.FILE_URI,
             sourceType: Camera.PictureSourceType.CAMERA
           };
           navigator.camera.getPicture(camSuccess, camError, options);
       };
   }
*/

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
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.



    onDeviceReady: function() {
        document.getElementById("shoot").addEventListener('click',shooting);
        document.getElementById("view").addEventListener('click',viewing);
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
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
