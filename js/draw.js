/**
 * DrawPage — 抽卡页逻辑
 * 依赖：scientists_all.js 提供的 allScientistsData
 */
(function (global) {
  'use strict';

  // ========== 工具函数 ==========

  function escapeHtml(t) {
    return (t || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' }[c];
    });
  }

  // 影响指数：5 星为传奇巨匠
  var IMPACT_LEGENDS = {
    einstein: 1, curie: 1, tesla: 1, turing: 1, hawking: 1, hubble: 1,
    qianxuesen: 1, yuanlongping: 1, tuyouyou: 1, dengjiaxian: 1, yangzhenning: 1,
    hilbert: 1, godel: 1, chern: 1, planck: 1, bohr: 1, schrodinger: 1,
    heisenberg: 1, dirac: 1, feynman: 1, rutherford: 1, fermi: 1, oppenheimer: 1,
    pauli: 1, pauling: 1, maxwell: 1, watson: 1, crick: 1, fleming: 1, hahn: 1,
    wegener: 1, shannon: 1, bernerslee: 1, vonneumann: 1, hinton: 1, nanrendong: 1
  };

  function getImpactLevel(key) {
    return IMPACT_LEGENDS[key] ? 5 : 4;
  }

  function buildImpactStars(level) {
    var html = '';
    for (var i = 1; i <= 5; i++) {
      html += i <= level ? '★' : '<span class="dim">★</span>';
    }
    return html;
  }

  // 从 contrib / desc 中提炼关键贡献摘要（1~2 句，≤70 字）
  function buildContrib(s) {
    var contrib = s.contrib || '';
    var desc = s.desc || '';
    var isStructuredList = /^\s*\d+\s*[.、）\)]/.test(contrib) && /\d\s*[.、）\)]\s*[^\d]{2,10}\d{4}/.test(contrib);
    var raw = (!isStructuredList && contrib) ? contrib : (desc || contrib);
    if (!raw) return '这位科学家在人类探索之路上留下了独特的印记。';
    var clean = raw.replace(/\s+/g, ' ').replace(/(?:^|\s)(?:\d+[\.、）\)]|[一二三四五六七八九十]+[、）\)]|[①②③④⑤⑥⑦⑧⑨⑩])/g, ' ');
    if (isStructuredList) {
      clean = clean.replace(/^[^（]{2,12}（[^）]*）[，,]?\s*/, '');
    }
    var sentences = clean.split(/[。；]/).map(function (t) { return t.trim(); }).filter(function (t) { return t.length > 4; });
    var GENERIC_RE = /(?:贡献|影响|成就).{0,6}(?:横跨|深远|卓越|重大|广泛|深远)|开创.{0,4}时代|奠定.{0,4}基础/;
    var pickIdx = 0;
    if (sentences.length > 1 && GENERIC_RE.test(sentences[0]) && !/\d{4}/.test(sentences[0])) {
      pickIdx = 1;
    }
    var summary = sentences[pickIdx] || raw;
    if (summary.length < 28 && sentences.length > pickIdx + 1) {
      var next = sentences[pickIdx + 1];
      if (next && (summary.length + next.length) <= 64) {
        summary = summary + '，' + next;
      }
    }
    if (summary.length > 70) summary = summary.slice(0, 68) + '……';
    if (!/[。！？…]$/.test(summary)) summary += '。';
    return summary;
  }

  function getRandomScientist(data) {
    if (!data || !data.length) return null;
    return data[Math.floor(Math.random() * data.length)];
  }

  // ========== 抽卡页面逻辑 ==========

  function DrawPage(opts) {
    this.data = opts.data || [];
    this.cardStage = document.getElementById('cardStage');
    this.drawBtn = document.getElementById('drawBtn');
    this.titleArea = document.getElementById('titleArea');
    this.swipeHint = document.getElementById('swipeHint');
    this.currentCard = null;
    this._bindEvents();
  }

  DrawPage.prototype._bindEvents = function () {
    var self = this;
    this.drawBtn.addEventListener('click', function () { self.draw(); });
  };

  DrawPage.prototype.draw = function () {
    var s = getRandomScientist(this.data);
    if (!s) { alert('暂无科学家数据'); return; }
    this.drawBtn.classList.add('hidden');
    this.titleArea.classList.add('faded');
    this.swipeHint.classList.remove('hidden');
    this._createCard(s);
  };

  DrawPage.prototype._createCard = function (s) {
    var old = this.cardStage.querySelector('.scientist-card');
    if (old) old.remove();

    var card = document.createElement('div');
    card.className = 'scientist-card';
    card.dataset.key = s.key;
    var imgPath = 'images/' + s.key + '.jpg';
    var title = s.field || s.title || '科学巨匠';
    var years = s.years || '';
    var contrib = buildContrib(s);
    var impactLevel = getImpactLevel(s.key);
    var impactStars = buildImpactStars(impactLevel);

    card.innerHTML =
      '<img class="card-avatar" src="' + escapeHtml(imgPath) + '" alt="' + escapeHtml(s.name) + '" onerror="this.style.display=\'none\'">' +
      '<div class="card-name">' + escapeHtml(s.name) + '</div>' +
      '<div class="card-title">' + escapeHtml(title) + '</div>' +
      (years ? '<div class="card-years">' + escapeHtml(years) + '</div>' : '') +
      '<div class="card-divider"></div>' +
      '<div class="card-contrib">' + escapeHtml(contrib) + '</div>' +
      '<div class="card-impact">' +
      '<span class="impact-label">⭐ 影响指数</span>' +
      '<span class="impact-stars">' + impactStars + '</span>' +
      '</div>' +
      '<div class="card-actions">' +
      '<button class="card-btn" onclick="window.drawPage.erase()">擦掉换一位</button>' +
      '<a class="card-btn primary" href="index.html?draw=' + encodeURIComponent(s.key) + '" onclick="sessionStorage.setItem(\'sm_return\',\'1\');sessionStorage.setItem(\'sm_skip_detail_transition\',\'1\')">探索人生 <span class="arrow">→</span></a>' +
      '</div>';

    this.cardStage.appendChild(card);
    this.currentCard = card;
    this._initDrag(card);

    // 入场动画
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.95)';
    var self = this;
    requestAnimationFrame(function () {
      card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translate(0,0) rotate(0deg)';
      setTimeout(function () { card.style.transition = 'transform 0.1s linear, opacity 0.2s ease'; }, 520);
    });
  };

  DrawPage.prototype.erase = function () {
    if (!this.currentCard) return;
    var rect = this.currentCard.getBoundingClientRect();
    var dir = rect.left + rect.width / 2 < window.innerWidth / 2 ? -1 : 1;
    this.currentCard.classList.add(dir < 0 ? 'swipe-left' : 'swipe-right');
    this.currentCard.style.transform = 'translate(' + (dir * window.innerWidth) + 'px, 0) rotate(' + (dir * 25) + 'deg)';
    this.currentCard.style.opacity = '0';
    var self = this;
    setTimeout(function () {
      if (self.currentCard) self.currentCard.remove();
      self.currentCard = null;
      self.draw();
    }, 380);
  };

  DrawPage.prototype._initDrag = function (el) {
    var startX = 0, startY = 0, currentX = 0, currentY = 0, dragging = false;
    var self = this;

    function onDown(e) {
      if (e.target.closest('.card-btn')) return;
      dragging = true;
      var p = e.touches ? e.touches[0] : e;
      startX = p.clientX;
      startY = p.clientY;
      el.style.transition = 'none';
    }

    function onMove(e) {
      if (!dragging) return;
      var p = e.touches ? e.touches[0] : e;
      var dx = p.clientX - startX;
      var dy = p.clientY - startY;
      currentX = dx;
      currentY = dy;
      var rot = dx * 0.04;
      el.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) rotate(' + rot + 'deg)';
    }

    function onUp() {
      if (!dragging) return;
      dragging = false;
      el.style.transition = 'transform 0.35s ease, opacity 0.3s ease';
      var threshold = window.innerWidth * 0.28;
      if (Math.abs(currentX) > threshold) {
        var dir = currentX > 0 ? 1 : -1;
        el.style.transform = 'translate(' + (dir * window.innerWidth) + 'px, ' + currentY + 'px) rotate(' + (dir * 25) + 'deg)';
        el.style.opacity = '0';
        setTimeout(function () {
          el.remove();
          self.currentCard = null;
          self.draw();
        }, 330);
      } else {
        el.style.transform = 'translate(0,0) rotate(0deg)';
      }
      currentX = 0; currentY = 0;
    }

    el.addEventListener('mousedown', onDown);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    el.addEventListener('touchstart', onDown, { passive: false });
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  };

  global.DrawPage = DrawPage;
})(window);
