/**
 * config.js
 *
 * server side config
 */

module.exports = {
    syncInterval: 50,
    netInterval: 50,
    physicsInterval: 20,
    physicsSubsteps: 10,
    mongoUri: 'mongodb://8f430f6d1c664352bc7a03fd25a4eeeb:a0bc1ff6774045ceae6b8b37a9292910@ds061200.mongolab.com:61200/starcoder',
    sessionSecret: 'thisisabadsecret',
    interpreterStatusThresholds: {
        warn: 1,
        critical: 5,
        kill: 10
    },
    initialBodies: [
        {type: 'Asteroid', number: 25, config: {
            position: {random: 'world'},
            velocity: {random: 'vector', lo: -15, hi: 15},
            angularVelocity: {random: 'float', lo: -5, hi: 5},
            vectorScale: {random: 'float', lo: 0.6, hi: 1.4},
            mass: 10
        }},
        //{type: 'Hydra', number: 1, config: {
        //    position: {random: 'world', pad: 50}
        //}},
        {type: 'Planetoid', number: 6, config: {
            position: {random: 'world', pad: 30},
            angularVelocity: {random: 'float', lo: -2, hi: 2},
            vectorScale: 2.5,
            mass: 100
        }},
        //{type: 'Alien', number: 2, config: {
        //    position: {random: 'world', pad: 30},
        //    vectorScale: 1,
        //    mass: 5
        //}},
        // vvvvv Testing vvvvv
        //{type: 'CodeCapsule', number: 10, config: {
        //    position: {random: 'world', pad: 30},
        //    vectorScale: 0.5
        //}}
    ]
};