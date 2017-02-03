"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _nodeBebop = require("node-bebop");

var _nodeBebop2 = _interopRequireDefault(_nodeBebop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DroneHttpServer = function () {
   function DroneHttpServer(drone) {
      _classCallCheck(this, DroneHttpServer);

      this.drone = drone;
      console.log("DroneHttpServer object created");
   }

   _createClass(DroneHttpServer, [{
      key: "start",
      value: function start() {
         require(__dirname + "/" + this.drone);
      }
   }]);

   return DroneHttpServer;
}();

exports.default = DroneHttpServer;