var EventEmitter = require('..');

describe('evts', function() {
  it('handles sync events', function() {
    var evts = new EventEmitter;
    var actual = [];
    var expected = [1, 2, 3];

    evts.on('test', function() {
      actual.push(1);
    });
    evts.on('test', function() {
      actual.push(2);
    });
    evts.on('test', function() {
      actual.push(3);
    });

    evts.emit('test', function() {
      actual.should.eql(expected);
    });
  });

  it('handles async events', function(done) {
    var evts = new EventEmitter;
    var actual = [];
    var expected = [1, 2, 3, 4];

    evts.on('test', function(done) {
      setTimeout(function() {
        actual.push(1);
        done();
      }, 10);
    });
    evts.on('test', function(done) {
      setTimeout(function() {
        actual.push(2);
        done();
      }, 10);
    });

    evts.on('test', function() {
      actual.push(3);
    });

    evts.on('test', function(done) {
      setTimeout(function() {
        actual.push(4);
        done();
      }, 10);
    });

    evts.emit('test', function() {
      actual.should.eql(expected);
      done();
    });
  });

  it('supports args', function(done) {
    var evts = new EventEmitter;
    var actual = [];
    var expected = [1, 1];

    evts.on('test', function(arg) {
      actual.push(arg);
    });

    evts.on('test', function(arg) {
      actual.push(arg);
    });

    evts.emit('test', 1, function() {
      actual.should.eql(expected);
      done();
    });
  });

  it('handle async errors', function(done) {
    var evts = new EventEmitter;
    var actual = [];
    var expected = [1, 1];

    evts.on('test', function(arg) {
      actual.push(arg);
    });

    evts.on('test', function(arg, done) {
      actual.push(arg);
      done(new Error());
    });

    evts.on('test', function(arg) {
      actual.push(arg);
    });

    evts.on('test', function(arg, done) {
      actual.push(arg);
      done();
    });

    evts.emit('test', 1, function(err) {
      err.should.be.instanceof(Error);
      actual.should.eql(expected);
      done();
    });
  });

  it('handle sync errors', function(done) {
    var evts = new EventEmitter;
    var actual = [];
    var expected = [1, 1];

    evts.on('test', function(arg, done) {
      actual.push(arg);
      done();
    });

    evts.on('test', function(arg) {
      actual.push(arg);
      throw new Error();
    });

    evts.on('test', function(arg, done) {
      actual.push(arg);
      done();
    });

    evts.on('test', function(arg) {
      actual.push(arg);
    });

    evts.emit('test', 1, function(err) {
      err.should.be.instanceof(Error);
      actual.should.eql(expected);
      done();
    });
  });

  it('works as expected when there are no listeners', function(done) {
    var evts = new EventEmitter;

    evts.emit('test', function() {
      done();
    });
  });
});
