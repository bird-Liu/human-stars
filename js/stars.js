/**
 * StarField — 可复用的星空 Canvas 背景
 * 用法：new StarField(document.getElementById('starCanvas'))
 */
(function (global) {
  'use strict';

  function StarField(canvas, opts) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.opts = Object.assign({
      density: 9000,    // 密度分母（越小星星越多）
      minRadius: 0.4,
      maxRadius: 1.2,
      minAlpha: 0.35,
      maxAlpha: 0.55,
      minSpeed: 0.003,
      maxSpeed: 0.008
    }, opts || {});

    this._boundResize = this._resize.bind(this);
    this._boundRender = this._render.bind(this);

    this._resize();
    window.addEventListener('resize', this._boundResize);
  }

  StarField.prototype._resize = function () {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this._initStars();
  };

  StarField.prototype._initStars = function () {
    var w = this.canvas.width;
    var h = this.canvas.height;
    var count = Math.floor((w * h) / this.opts.density);
    this.stars = [];

    for (var i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: this.opts.minRadius + Math.random() * (this.opts.maxRadius - this.opts.minRadius),
        alpha: this.opts.minAlpha + Math.random() * (this.opts.maxAlpha - this.opts.minAlpha),
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: this.opts.minSpeed + Math.random() * (this.opts.maxSpeed - this.opts.minSpeed)
      });
    }
  };

  StarField.prototype._render = function (now) {
    var ctx = this.ctx;
    var w = this.canvas.width;
    var h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);
    var stars = this.stars;

    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var t = now * s.twinkleSpeed + s.twinkleOffset;
      var a = s.alpha * (0.65 + 0.35 * Math.sin(t));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + a + ')';
      ctx.fill();
    }

    this._rafId = requestAnimationFrame(this._boundRender);
  };

  StarField.prototype.start = function () {
    this._rafId = requestAnimationFrame(this._boundRender);
  };

  StarField.prototype.stop = function () {
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  };

  StarField.prototype.destroy = function () {
    this.stop();
    window.removeEventListener('resize', this._boundResize);
    this.stars = [];
  };

  global.StarField = StarField;
})(window);
