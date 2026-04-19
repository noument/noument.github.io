/* Constellation — interactive sister graph for nouments.com homepage */
(function() {
  var canvas = document.getElementById('constellation-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W, H, nodes = [], mouse = { x: -999, y: -999 }, hovered = null;

  /* Read sisters from data attribute or use defaults */
  var sistersData = canvas.dataset.sisters;
  var sisters;
  try { sisters = JSON.parse(sistersData); } catch(e) {
    sisters = [
      { name: 'noument',   color: '#7b68ee', domain: 'identity' },
      { name: 'nemoent',   color: '#7b68ee', domain: 'memory' },
      { name: 'channent',  color: '#4ecdc4', domain: 'channels' },
      { name: 'sysent',    color: '#4ecdc4', domain: 'infra' },
      { name: 'doment',    color: '#4ecdc4', domain: 'domes' },
      { name: 'gwent',     color: '#ff6b6b', domain: 'runtime' },
      { name: 'grazient',  color: '#f7dc6f', domain: 'production' },
      { name: 'knowent',   color: '#7b68ee', domain: 'search' },
      { name: 'dalent',    color: '#ff6b6b', domain: 'visual' },
      { name: 'solarient', color: '#ffa500', domain: 'graph' },
      { name: 'animent',   color: '#ff6b6b', domain: 'animation' },
      { name: 'raeschent', color: '#f7dc6f', domain: 'research' }
    ];
  }

  var edges = [
    [0,1],[0,2],[0,3],[0,4],[0,7],[0,9],
    [1,7],
    [2,3],[2,5],
    [3,4],[3,5],
    [7,8],[7,10],
    [8,10],
    [9,0],[9,7],[9,1],
    [6,3],[6,5],
    [11,7]
  ];

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    canvas.width = W * devicePixelRatio;
    canvas.height = H * devicePixelRatio;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  function init() {
    resize();
    var cx = W / 2, cy = H / 2;
    nodes = sisters.map(function(s, i) {
      var angle = (i / sisters.length) * Math.PI * 2 - Math.PI / 2;
      var rx = Math.min(W, H) * 0.30;
      var ry = Math.min(W, H) * 0.28;
      return {
        x: cx + Math.cos(angle) * rx + (Math.random() - 0.5) * 60,
        y: cy + Math.sin(angle) * ry + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 0.015,
        vy: (Math.random() - 0.5) * 0.015,
        name: s.name,
        color: s.color,
        domain: s.domain,
        r: 6
      };
    });
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    hovered = null;
    for (var k = 0; k < nodes.length; k++) {
      var dm = Math.hypot(nodes[k].x - mouse.x, nodes[k].y - mouse.y);
      if (dm < 40) { hovered = nodes[k]; break; }
    }

    for (var k = 0; k < nodes.length; k++) {
      var n = nodes[k];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 100) n.vx += 0.003;
      if (n.x > W - 100) n.vx -= 0.003;
      if (n.y < 100) n.vy += 0.003;
      if (n.y > H - 100) n.vy -= 0.003;
      n.vx *= 0.992;
      n.vy *= 0.992;
      n.vx += (Math.random() - 0.5) * 0.003;
      n.vy += (Math.random() - 0.5) * 0.003;
    }

    /* Repulsion */
    for (var i = 0; i < nodes.length; i++) {
      for (var j = i + 1; j < nodes.length; j++) {
        var dx = nodes[j].x - nodes[i].x;
        var dy = nodes[j].y - nodes[i].y;
        var dist = Math.hypot(dx, dy);
        if (dist < 100) {
          var force = (100 - dist) * 0.00005;
          nodes[i].vx -= dx * force;
          nodes[i].vy -= dy * force;
          nodes[j].vx += dx * force;
          nodes[j].vy += dy * force;
        }
      }
    }

    /* Edge attraction */
    for (var e = 0; e < edges.length; e++) {
      var a = nodes[edges[e][0]], b = nodes[edges[e][1]];
      var dx = b.x - a.x, dy = b.y - a.y;
      var dist = Math.hypot(dx, dy);
      if (dist > 200) {
        var force = (dist - 200) * 0.000008;
        a.vx += dx * force;
        a.vy += dy * force;
        b.vx -= dx * force;
        b.vy -= dy * force;
      }
    }

    /* Draw edges */
    for (var e = 0; e < edges.length; e++) {
      var a = nodes[edges[e][0]], b = nodes[edges[e][1]];
      var isHighlighted = hovered && (a === hovered || b === hovered);
      var alpha = isHighlighted ? 0.35 : 0.08;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = isHighlighted ? hovered.color : 'rgba(123, 104, 238, ' + alpha + ')';
      ctx.globalAlpha = alpha;
      ctx.lineWidth = isHighlighted ? 1.5 : 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    /* Draw nodes */
    for (var k = 0; k < nodes.length; k++) {
      var n = nodes[k];
      var isHov = n === hovered;
      var nodeR = isHov ? 10 : 6;

      var grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, isHov ? 50 : 30);
      grad.addColorStop(0, n.color + (isHov ? '25' : '12'));
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(n.x, n.y, isHov ? 50 : 30, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(n.x, n.y, nodeR, 0, Math.PI * 2);
      ctx.fillStyle = isHov ? n.color : n.color + 'aa';
      ctx.fill();

      ctx.font = isHov ? '13px "JetBrains Mono", monospace' : '11px "JetBrains Mono", monospace';
      ctx.fillStyle = isHov ? '#ddd' : 'rgba(150, 150, 160, 0.4)';
      ctx.textAlign = 'center';
      ctx.fillText(n.name, n.x, n.y + nodeR + 18);

      if (isHov) {
        ctx.font = '10px "Inter", sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(n.domain, n.x, n.y + nodeR + 32);
      }
    }

    requestAnimationFrame(tick);
  }

  canvas.addEventListener('mousemove', function(e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    canvas.style.cursor = hovered ? 'pointer' : 'default';
  });

  canvas.addEventListener('mouseleave', function() {
    mouse.x = -999;
    mouse.y = -999;
  });

  window.addEventListener('resize', function() {
    resize();
    var cx = W / 2, cy = H / 2;
    for (var i = 0; i < nodes.length; i++) {
      var angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
      var rx = Math.min(W, H) * 0.30;
      var ry = Math.min(W, H) * 0.28;
      nodes[i].x = cx + Math.cos(angle) * rx + (Math.random() - 0.5) * 60;
      nodes[i].y = cy + Math.sin(angle) * ry + (Math.random() - 0.5) * 60;
    }
  });

  init();
  tick();
})();
