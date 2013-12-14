/**
 * slice.
 */

var slice = Array.prototype.slice;

/**
 * Event Emitter.
 *
 * @constructor
 */

function EventEmitter() {
  this.events = {};
}

/**
 * Subscribe to event.
 *
 * @param {String} event
 * @param {Function} handler
 * @api public
 */

EventEmitter.prototype.on = function(evt, fn) {
  this.events[evt] = this.events[evt] || [];
  this.events[evt].push(fn);
};

/**
 * Subscribe to event once.
 *
 * @param {String} event
 * @param {Function} handler
 * @api public
 */

EventEmitter.prototype.once = function(evt, fn) {
  fn.once = true;
  this.on(evt, fn);
};

/**
 * Removes an event handler.
 *
 * @param {String} event
 * @param {Function} handler
 * @api public
 */

 EventEmitter.prototype.off = function(evt, fn) {
  var listeners = this.events[evt] || [];
  var index = listeners.indexOf(fn);
  if (~index) listeners.splice(index, 1);
};

/**
 * Emit `evt` with `arg1`, `args2`.. and call `fn` when done.
 *
 * @param {String} event name
 * @param {Mixed} arg1 (optional)
 * @param {Mixed} arg2 (optional)
 * @param {Mixed} ...
 * @param {Function} fn
 * @api public
 */

EventEmitter.prototype.emit = function(evt, /* arg1, arg2 */ fn) {
  var listeners = this.events[evt];
  var i = 0;
  var args = slice.call(arguments, 1);
  var done = args.pop();
  if (!listeners) return done();

  (function next(err) {
    if (err) return done(err);
    var handler = listeners[i];
    if (!handler) return done();
    if (handler.once) listeners.splice(i, 1);
    else i++;
    if (handler.length > args.length) return handler.apply(null, args.concat(next));
    try {
      handler.apply(null, args);
    } catch(e) {
      return next(e);
    }
    next();
  })();
};

/**
 * Primary export.
 */

module.exports = EventEmitter;
