/**
 * detail-extra.js — 详情面板增强：成就雷达图、学术谱系树、时间轴交互升级
 * 依赖：scientists_all.js, scientists_relations.js, scientists_meta.js
 */
(function (global) {
  'use strict';

  // ========== 1. 成就雷达图 ==========

  var RADAR_DIMS = ['影响力', '论文', '传承', '寿命', '荣誉'];
  var RADAR_COLOR = 'rgba(255,212,121,0.7)';
  var RADAR_FILL = 'rgba(255,212,121,0.12)';

  function getRadarScores(key) {
    var scores = {};
    var rels = (global.__scientistsRelations && global.__scientistsRelations[key]) || [];
    scores['影响力'] = Math.min(rels.length, 30);
    scores['传承'] = rels.filter(function (r) { return r.type === 'student'; }).length;

    var detailData = (global.__scientistsDetail && global.__scientistsDetail[key]) || {};
    var papers = detailData.papers || [];
    scores['论文'] = Math.min(papers.length, 20);

    var honors = detailData.honors || '';
    scores['荣誉'] = Math.min(honors.split(/[；;]/).length, 15);

    // 寿命从 years 字段推算
    var years = '';
    var allData = global.allScientistsData;
    if (allData) {
      for (var i = 0; i < allData.length; i++) {
        if (allData[i].key === key) { years = allData[i].years || ''; break; }
      }
    }
    var lifespan = 60;
    var ym = years.match(/(\d{4})\s*[—\-–]\s*(\d{4})/);
    if (ym) { lifespan = parseInt(ym[2]) - parseInt(ym[1]); }
    scores['寿命'] = Math.min(Math.round(lifespan / 5), 20);

    // 归一化到 0-1
    var maxVals = { '影响力': 30, '论文': 20, '传承': 15, '寿命': 20, '荣誉': 15 };
    ['影响力', '论文', '传承', '寿命', '荣誉'].forEach(function (d) {
      scores[d] = Math.max(0.05, scores[d] / maxVals[d]);
    });

    return scores;
  }

  function injectRadarChart(detailInner, key) {
    var existing = detailInner.querySelector('.detail-radar-section');
    if (existing) existing.remove();

    var scores = getRadarScores(key);
    var dims = RADAR_DIMS;

    var section = document.createElement('div');
    section.className = 'detail-section detail-radar-section';
    section.innerHTML =
      '<div class="detail-section-label">' +
        '<span class="detail-section-num">05</span>' +
        '<span class="detail-section-line"></span>' +
        '<span class="detail-section-num">成就雷达</span>' +
      '</div>' +
      '<div style="display:flex;justify-content:center;padding:16px 0;">' +
        '<canvas id="radarCanvas" width="280" height="280" style="max-width:100%;"></canvas>' +
      '</div>';

    // 插入到时间线之前
    var timeline = detailInner.querySelector('.detail-timeline');
    if (timeline && timeline.parentNode) {
      timeline.parentNode.insertBefore(section, timeline);
    } else {
      detailInner.appendChild(section);
    }

    var canvas = section.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var cx = canvas.width / 2, cy = canvas.height / 2;
    var maxR = 105;
    var n = dims.length;

    // 背景网格
    for (var lvl = 1; lvl <= 5; lvl++) {
      ctx.beginPath();
      for (var i = 0; i < n; i++) {
        var angle = (Math.PI * 2 / n) * i - Math.PI / 2;
        var r = maxR * (lvl / 5);
        var x = cx + Math.cos(angle) * r;
        var y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // 轴线
    for (var i2 = 0; i2 < n; i2++) {
      var a2 = (Math.PI * 2 / n) * i2 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a2) * maxR, cy + Math.sin(a2) * maxR);
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.stroke();
    }

    // 数据填充
    ctx.beginPath();
    for (var i3 = 0; i3 < n; i3++) {
      var a3 = (Math.PI * 2 / n) * i3 - Math.PI / 2;
      var val = scores[dims[i3]] || 0;
      var rx = cx + Math.cos(a3) * maxR * val;
      var ry = cy + Math.sin(a3) * maxR * val;
      if (i3 === 0) ctx.moveTo(rx, ry);
      else ctx.lineTo(rx, ry);
    }
    ctx.closePath();
    ctx.fillStyle = RADAR_FILL;
    ctx.fill();
    ctx.strokeStyle = RADAR_COLOR;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 数据点
    for (var i4 = 0; i4 < n; i4++) {
      var a4 = (Math.PI * 2 / n) * i4 - Math.PI / 2;
      var val4 = scores[dims[i4]] || 0;
      var dx4 = cx + Math.cos(a4) * maxR * val4;
      var dy4 = cy + Math.sin(a4) * maxR * val4;
      ctx.beginPath();
      ctx.arc(dx4, dy4, 3, 0, Math.PI * 2);
      ctx.fillStyle = RADAR_COLOR;
      ctx.fill();
    }

    // 标签
    ctx.fillStyle = '#b8a888';
    ctx.font = '12px "Noto Serif SC","PingFang SC",sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var i5 = 0; i5 < n; i5++) {
      var a5 = (Math.PI * 2 / n) * i5 - Math.PI / 2;
      var lr = maxR + 18;
      ctx.fillText(dims[i5], cx + Math.cos(a5) * lr, cy + Math.sin(a5) * lr);
    }
  }

  // ========== 2. 学术谱系树 ==========

  function injectLineageTree(detailInner, key) {
    var existing = detailInner.querySelector('.detail-lineage-section');
    if (existing) existing.remove();

    var rels = (global.__scientistsRelations && global.__scientistsRelations[key]) || [];
    var mentors = rels.filter(function (r) { return r.type === 'mentor'; });
    var students = rels.filter(function (r) { return r.type === 'student'; });
    var collaborators = rels.filter(function (r) { return r.type === 'collaborator'; });
    var peers = rels.filter(function (r) { return r.type === 'peer'; });
    var influences = rels.filter(function (r) { return r.type === 'influence'; });

    if (mentors.length === 0 && students.length === 0 && collaborators.length === 0) return;

    var section = document.createElement('div');
    section.className = 'detail-section detail-lineage-section';

    var html = '<div class="detail-section-label">' +
      '<span class="detail-section-num">06</span>' +
      '<span class="detail-section-line"></span>' +
      '<span class="detail-section-num">学术谱系</span>' +
      '</div>' +
      '<div class="lineage-tree">';

    // 导师
    if (mentors.length > 0) {
      html += '<div class="lineage-group lineage-up">' +
        '<div class="lineage-group-label">↑ 导师 / 先驱</div>' +
        '<div class="lineage-nodes">';
      mentors.forEach(function (r) {
        html += '<a class="lineage-node mentor" href="index.html?p=' + encodeURIComponent(r.to) + '" onclick="sessionStorage.setItem(\'sm_return\',\'1\');sessionStorage.setItem(\'sm_skip_detail_transition\',\'1\')">' +
          '<img src="images/' + r.to + '.jpg" onerror="this.style.display=\'none\'" />' +
          '<span class="lineage-node-name">' + escapeHtml(r.desc.split(/[，,]/)[0]) + '</span>' +
          '<span class="lineage-node-desc">' + escapeHtml(r.desc) + '</span></a>';
      });
      html += '</div></div>';
    }

    // 合作者
    if (collaborators.length > 0) {
      html += '<div class="lineage-group lineage-side">' +
        '<div class="lineage-group-label">⇌ 合作者</div>' +
        '<div class="lineage-nodes">';
      collaborators.forEach(function (r) {
        html += '<a class="lineage-node collaborator" href="index.html?p=' + encodeURIComponent(r.to) + '" onclick="sessionStorage.setItem(\'sm_return\',\'1\');sessionStorage.setItem(\'sm_skip_detail_transition\',\'1\')">' +
          '<img src="images/' + r.to + '.jpg" onerror="this.style.display=\'none\'" />' +
          '<span class="lineage-node-name">' + escapeHtml(r.desc.split(/[，,]/)[0]) + '</span>' +
          '<span class="lineage-node-desc">' + escapeHtml(r.desc) + '</span></a>';
      });
      html += '</div></div>';
    }

    // 同代
    if (peers.length > 0 || influences.length > 0) {
      var combined = peers.concat(influences);
      html += '<div class="lineage-group lineage-side">' +
        '<div class="lineage-group-label">↔ 同代影响</div>' +
        '<div class="lineage-nodes">';
      combined.forEach(function (r) {
        html += '<a class="lineage-node peer" href="index.html?p=' + encodeURIComponent(r.to) + '" onclick="sessionStorage.setItem(\'sm_return\',\'1\');sessionStorage.setItem(\'sm_skip_detail_transition\',\'1\')">' +
          '<img src="images/' + r.to + '.jpg" onerror="this.style.display=\'none\'" />' +
          '<span class="lineage-node-name">' + escapeHtml(r.desc.split(/[，,]/)[0]) + '</span>' +
          '<span class="lineage-node-desc">' + escapeHtml(r.desc) + '</span></a>';
      });
      html += '</div></div>';
    }

    // 学生
    if (students.length > 0) {
      html += '<div class="lineage-group lineage-down">' +
        '<div class="lineage-group-label">↓ 学生 / 后继</div>' +
        '<div class="lineage-nodes">';
      students.forEach(function (r) {
        html += '<a class="lineage-node student" href="index.html?p=' + encodeURIComponent(r.to) + '" onclick="sessionStorage.setItem(\'sm_return\',\'1\');sessionStorage.setItem(\'sm_skip_detail_transition\',\'1\')">' +
          '<img src="images/' + r.to + '.jpg" onerror="this.style.display=\'none\'" />' +
          '<span class="lineage-node-name">' + escapeHtml(r.desc.split(/[，,]/)[0]) + '</span>' +
          '<span class="lineage-node-desc">' + escapeHtml(r.desc) + '</span></a>';
      });
      html += '</div></div>';
    }

    html += '</div>';
    section.innerHTML = html;

    var timeline2 = detailInner.querySelector('.detail-timeline');
    if (timeline2 && timeline2.parentNode) {
      timeline2.parentNode.insertBefore(section, timeline2);
    } else {
      detailInner.appendChild(section);
    }
  }

  // ========== 3. 时间轴交互升级 ==========

  function enhanceTimeline(detailInner) {
    var timeline = detailInner.querySelector('.detail-timeline');
    if (!timeline) return;
    timeline.classList.add('enhanced-timeline');

    // 已处理的跳过
    if (timeline.dataset.enhanced === '1') return;
    timeline.dataset.enhanced = '1';

    // 为每个 timeline-item 添加年份标记
    var items = timeline.querySelectorAll('.timeline-item');
    if (items.length === 0) return;

    // 找到最早和最晚年份
    var firstItem = items[0];
    var firstDot = firstItem.querySelector('.timeline-dot');
    var firstYearEl = firstItem.querySelector('.timeline-year');
    if (firstDot && firstYearEl) {
      firstDot.textContent = firstYearEl.textContent.trim().replace(/[^0-9]/g, '');
      firstDot.style.cssText = 'width:auto;height:auto;padding:2px 8px;border-radius:10px;font-size:10px;font-family:"Cinzel",serif;letter-spacing:1px;background:rgba(255,212,121,0.15);color:#ffd479;text-align:center;min-width:32px;';
      firstYearEl.style.display = 'none';
    }

    for (var i = 1; i < items.length; i++) {
      var item = items[i];
      var dot = item.querySelector('.timeline-dot');
      var yearEl = item.querySelector('.timeline-year');
      if (dot && yearEl) {
        dot.textContent = yearEl.textContent.trim().replace(/[^0-9]/g, '');
        dot.style.cssText = 'width:auto;height:auto;padding:2px 8px;border-radius:10px;font-size:10px;font-family:"Cinzel",serif;letter-spacing:1px;background:rgba(255,255,255,0.05);color:#b8a888;text-align:center;min-width:32px;';
        yearEl.style.display = 'none';
      }
    }
  }

  function escapeHtml(t) {
    return (t || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' }[c];
    });
  }

  // ========== 统一入口 ==========

  function enhanceDetailPanel(detailInner, key) {
    injectRadarChart(detailInner, key);
    injectLineageTree(detailInner, key);
    enhanceTimeline(detailInner);
  }

  global.enhanceDetailPanel = enhanceDetailPanel;
  global.injectRadarChart = injectRadarChart;
  global.injectLineageTree = injectLineageTree;
  global.enhanceTimeline = enhanceTimeline;
})(window);
