/**
 * World.js
 *
 * Server side P2 physics world
 */
'use strict';

var p2 = require('p2');

var Ship = require('./Ship.js');

var World = function () {
    p2.World.call(this, {
        broadphase: new p2.SAPBroadphase(),
        gravity: [0, 0]
    });
    //Debug hack
    this.on('addBody', function () {
        console.log('add body');
    });
    //this.on('postStep', function () {
    //    console.log('step', this.time);
    //});
};

World.prototype = Object.create(p2.World.prototype);
World.prototype.constructor = World;

// Stub implementation for testing
World.prototype.addShip = function () {
    var s = new Ship();
    this.addBody(s)
    return s;
};

World.prototype.start = function (rate, substeps) {
    var self = this;
    substeps = substeps || 10;
    this._lastTime = this.time;
    var interval = setInterval(function () {
        self.step(rate, self.time - self._lastTime, substeps);
        self._lastTime = self.time;
    }, rate*1000);
    return interval;
};

//World.prototype.getSnapshot = function () {
//    var snap = {wtime: this.time, rtime: Date.now()};
//    var bodies = [];
//    for (var i = 0, l = this.bodies.length; i < l; i++) {
//        var b = this.bodies[i];
//        bodies.push({
//            id: b.id,
//            x: b.position[0],
//            y: b.position[1],
//            vx: b.position[0],
//            vy: b.position[1],
//            a: b.angle,
//            av: b.angularVelocity
//        });
//    }
//    snap.bodies = bodies;
//    return snap;
//};

module.exports = World;