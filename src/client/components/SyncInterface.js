/**
 * SyncInterface.js
 * Client side
 */
'use strict';

var UPDATE_QUEUE_LIMIT = 8;

module.exports = {
    init: function () {
        var self = this;
        self.extant = {};
        this.events.on('sync', function (data) {
            //console.log('sync', data);
            var realTime = data.r;
            for (var i = 0, l = data.b.length; i < l; i++) {
                var update = data.b[i];
                var id = update.id;
                var sprite;
                update.timestamp = realTime;
                if (sprite = self.extant[id]) {
                    // Existing sprite - process update
                    sprite.updateQueue.push(update);
                    if (update.properties) {
                        sprite.config(update.properties);
                    }
                    if (sprite.updateQueue.length > UPDATE_QUEUE_LIMIT) {
                        sprite.updateQueue.shift();
                    }
                } else {
                    // New sprite - create and configure
                    sprite = self.addBody(update.t, update);
                    if (sprite) {
                        //console.log('New sprite**', id, update.t);
                        sprite.serverId = id;
                        self.extant[id] = sprite;
                        sprite.updateQueue = [update];
                    }
                }
            }
            for (i = 0, l = data.rm.length; i < l; i++) {
                id = data.rm[i];
                if (self.extant[id]) {
                    self.removeBody(self.extant[id]);
                    delete self.extant[id];
                }
            }
        });

    }
};