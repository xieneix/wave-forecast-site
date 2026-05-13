const seas = {
  bohai: {
    name: "渤海",
    region: "Bohai Sea · 近岸封闭海域",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bohai_sea_sunset.jpg?width=900",
    description: "半封闭浅海，受季风、冷空气和近岸地形共同影响，短周期波动明显，适合作为近岸精细预报展示入口。",
    tag: "浅海 · 风浪响应快",
    coord: [39.0, 120.0],
    decomp: "EMD 分解",
    model: "GRU 最优权重",
    window: "输入窗 24h",
    base: 0.62,
    amp: 0.34,
    risk: "低-中",
    peakBias: 17
  },
  yellow: {
    name: "黄海",
    region: "Yellow Sea · 陆架海域",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Qingdao_Beach_No._2.jpg?width=900",
    description: "水深变化平缓，天气系统过境时波高抬升较清晰，适合展示中短期趋势和峰值到达时间。",
    tag: "陆架 · 天气系统敏感",
    coord: [36.5, 123.0],
    decomp: "VMD K=10",
    model: "LSTM 最优权重",
    window: "输入窗 36h",
    base: 0.76,
    amp: 0.46,
    risk: "中",
    peakBias: 23
  },
  east: {
    name: "东海",
    region: "East China Sea · 外海过渡区",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Sunrise_on_Xiyang_Island%2C_East_China_Sea.jpg?width=900",
    description: "连接陆架与外海，受季风、涌浪和台风外围影响，预测结果更强调峰值、持续时长和预警边界。",
    tag: "外海过渡 · 涌浪显著",
    coord: [30.0, 125.0],
    decomp: "VMD K=10",
    model: "Transformer 最优权重",
    window: "输入窗 48h",
    base: 1.08,
    amp: 0.64,
    risk: "中-高",
    peakBias: 31
  },
  south: {
    name: "南海",
    region: "South China Sea · 深水海盆",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fiery_Cross_Reef_2020.jpg?width=900",
    description: "海域开阔，季风浪与远距离涌浪共同作用，未来 96 小时时效展示可以突出长时段演变。",
    tag: "深水 · 长时效关注",
    coord: [16.0, 114.0],
    decomp: "VMD K=6",
    model: "LSTM 最优权重",
    window: "输入窗 72h",
    base: 1.22,
    amp: 0.74,
    risk: "中",
    peakBias: 39
  }
};

Object.assign(seas.bohai, {
  name: "渤海",
  region: "Bohai Sea · 近岸封闭海域",
  description:
    "渤海是中国最内侧的半封闭浅海，由辽东湾、渤海湾和莱州湾等海湾共同组成，整体水深较浅。海域受大陆性季风、冷空气过程和近岸地形影响明显，风浪响应快、衰减也快。冬季大风和海冰过程会改变近岸海况，是港口运行、近岸航运和养殖活动需要重点关注的海域。",
  tag: "浅海 · 封闭海湾 · 风浪响应快",
  decomp: "EMD 分解",
  model: "GRU 最优权重",
  window: "输入窗 24h",
  risk: "低-中"
});

Object.assign(seas.yellow, {
  name: "黄海",
  region: "Yellow Sea · 陆架海域",
  description:
    "黄海位于中国大陆与朝鲜半岛之间，是典型的陆架浅海，海底坡度较缓，潮汐和沿岸流特征突出。受东亚季风、温带气旋和冷空气南下影响，海面风浪变化较频繁。沿岸港口、渔业和海上交通密集，使黄海的波浪变化具有很强的实际应用价值。",
  tag: "陆架浅海 · 潮汐显著 · 港口密集",
  decomp: "VMD K=10",
  model: "LSTM 最优权重",
  window: "输入窗 36h",
  risk: "中"
});

Object.assign(seas.east, {
  name: "东海",
  region: "East China Sea · 外海过渡区",
  description:
    "东海连接黄海、台湾海峡和西北太平洋，是从陆架浅海过渡到外海的重要区域。这里既受季风风浪控制，也容易受到远距离涌浪和台风外围环流影响，海况变化层次更复杂。东海岛屿众多、航线密集，波高峰值和持续时间对海上作业安全十分关键。",
  tag: "陆架外缘 · 涌浪显著 · 岛屿众多",
  decomp: "VMD K=10",
  model: "Transformer 最优权重",
  window: "输入窗 48h",
  risk: "中-高"
});

Object.assign(seas.south, {
  name: "南海",
  region: "South China Sea · 深水海盆",
  description:
    "南海是中国近海中最开阔、最深的海域之一，包含广阔深水海盆、陆架边缘和大量岛礁。季风浪、热带气旋和远距离涌浪在这里共同作用，海况具有明显的季节性和空间差异。岛礁周边水深突变，波浪传播和局地增幅更复杂，是长时段海况监测的重要区域。",
  tag: "深水海盆 · 岛礁密集 · 季风涌浪",
  decomp: "VMD K=6",
  model: "LSTM 最优权重",
  window: "输入窗 72h",
  risk: "中"
});

let selectedSea = null;
let selectedHorizon = 72;
const forecastAgeHours = 8;
let map;
let streetLayer;
let satelliteLayer;
let activeLayer = "street";
let mapTransitionToken = 0;
let mapResizeObserver;
const mapMarkers = {};
const mapLayoutTransitionMs = 760;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const runtimeData = window.WAVE_RUNTIME_DATA || {};
const observedDisplayHours = 48;

function modelInfoFor(seaKey, horizon = selectedHorizon) {
  return runtimeData.registry?.models?.[seaKey]?.[String(horizon)] || null;
}

function forecastInfoFor(seaKey, horizon = selectedHorizon) {
  return runtimeData.forecasts?.[seaKey]?.[String(horizon)] || null;
}

function readableModelName(modelType) {
  if (!modelType) return "";
  return modelType.toUpperCase() === "TRANSFORMER" ? "Transformer" : modelType.toUpperCase();
}

function decompLabel(modelInfo) {
  if (!modelInfo) return "";
  if (modelInfo.method === "VMD") {
    const k = modelInfo.vmd_hparams?.K || modelInfo.mode_count;
    return `VMD K=${k}`;
  }
  return `${modelInfo.method} 分解`;
}

function modelLabel(modelInfo) {
  return modelInfo ? `${readableModelName(modelInfo.model_type)} 最优权重` : "";
}

function windowLabel(modelInfo) {
  return modelInfo ? `输入窗 ${modelInfo.window_size}h` : "";
}

function scoreLabel(modelInfo) {
  if (!modelInfo || typeof modelInfo.mape_test !== "number") return "Online";
  return `MAPE ${(modelInfo.mape_test * 100).toFixed(1)}%`;
}

function seaStateRisk(swh) {
  if (swh <= 1.25) return "\u4f4e";
  if (swh <= 2.5) return "\u4e2d";
  if (swh <= 4.0) return "\u8f83\u9ad8";
  return "\u9ad8";
}

function applyRuntimeModelToSea(seaKey, horizon = selectedHorizon) {
  const sea = seas[seaKey];
  const modelInfo = modelInfoFor(seaKey, horizon);
  if (!modelInfo) return sea;
  sea.decomp = decompLabel(modelInfo);
  sea.model = modelLabel(modelInfo);
  sea.window = windowLabel(modelInfo);
  return sea;
}

function runtimeChartData(seaKey, horizon) {
  const forecast = forecastInfoFor(seaKey, horizon);
  if (!forecast) return null;

  const observedPoints = (forecast.observed || [])
    .map((point) => ({ hour: Number(point.lead_hour), value: Number(point.swh), time: point.time }))
    .filter((point) => Number.isFinite(point.hour) && Number.isFinite(point.value))
    .filter((point) => point.hour >= -observedDisplayHours && point.hour <= 0);

  const nowPoint = observedPoints.find((point) => point.hour === 0);
  const forecastPoints = (forecast.forecast || [])
    .map((point) => ({ hour: Number(point.lead_hour), value: Number(point.swh), time: point.time }))
    .filter((point) => Number.isFinite(point.hour) && Number.isFinite(point.value));

  if (nowPoint) {
    forecastPoints.unshift({ ...nowPoint });
  }

  if (!observedPoints.length || !forecastPoints.length) return null;
  return {
    observedPoints,
    forecastPoints,
    issuedAt: forecast.issued_at,
    isRuntime: true
  };
}

function getChartData(seaKey, horizon) {
  const live = runtimeChartData(seaKey, horizon);
  if (live) return live;

  const issuedForecastPoints = forecastSeries(seaKey, horizon);
  return {
    observedPoints: observedSeries(seaKey, issuedForecastPoints),
    forecastPoints: rebaseForecast(issuedForecastPoints),
    issuedAt: null,
    isRuntime: false
  };
}

function updateSyncPill() {
  const pill = $(".sync-pill");
  if (!pill || !runtimeData.forecasts) return;
  const updatedAt = runtimeData.generatedAt ? new Date(runtimeData.generatedAt) : null;
  const updateText = updatedAt && !Number.isNaN(updatedAt.getTime())
    ? `${String(updatedAt.getMonth() + 1).padStart(2, "0")}-${String(updatedAt.getDate()).padStart(2, "0")} ${String(updatedAt.getHours()).padStart(2, "0")}:${String(updatedAt.getMinutes()).padStart(2, "0")}`
    : "--";
  pill.innerHTML = `<span></span> \u66f4\u65b0\u65f6\u95f4 ${updateText}`;
}

function forecastSeries(seaKey, horizon) {
  const sea = seas[seaKey];
  const points = [];
  for (let hour = 0; hour <= horizon; hour += 1) {
    const broad = Math.sin((hour + sea.peakBias) / 9.5) * sea.amp;
    const swell = Math.sin((hour * 0.38 + sea.peakBias) / 2.9) * sea.amp * 0.16;
    const trend = horizon === 96 ? hour * 0.004 : hour * 0.002;
    const value = Math.max(0.18, sea.base + broad + swell + trend);
    points.push({ hour, value: Number(value.toFixed(2)) });
  }
  return points;
}

function observedSeries(seaKey, issuedForecastPoints) {
  const sea = seas[seaKey];
  const points = [];
  for (let relativeHour = -forecastAgeHours; relativeHour <= 0; relativeHour += 1) {
    const issuedHour = relativeHour + forecastAgeHours;
    const forecastPoint = issuedForecastPoints.find((point) => point.hour === issuedHour) || issuedForecastPoints[0];
    const deviation = Math.sin((issuedHour + sea.peakBias) / 3.7) * sea.amp * 0.12;
    const nearshoreNoise = Math.cos((issuedHour + sea.peakBias) / 5.4) * sea.amp * 0.06;
    const value = forecastPoint.value + deviation + nearshoreNoise;
    points.push({ hour: relativeHour, value: Number(Math.max(0.16, value).toFixed(2)) });
  }
  return points;
}

function rebaseForecast(points) {
  return points.map((point) => ({
    hour: point.hour - forecastAgeHours,
    value: point.value
  }));
}

function sparseChartPoints(points) {
  return points.filter((point) => {
    return point.hour % 3 === 0 || point.hour === -forecastAgeHours || point.hour === 0 || point === points[points.length - 1];
  });
}

function chartTicks(xMin, xMax) {
  const remaining = xMax;
  const firstFuture = Math.max(12, Math.round(remaining / 3 / 6) * 6);
  const candidates = [xMin, 0, firstFuture, firstFuture * 2, xMax];
  return candidates.filter((tick, index) => tick >= xMin && tick <= xMax && candidates.indexOf(tick) === index);
}

function formatTick(tick) {
  if (tick === 0) return "0h 现在";
  return `${tick > 0 ? "+" : ""}${tick}h`;
}

function formatForecastRange(horizon) {
  const remaining = horizon - forecastAgeHours;
  return `${forecastAgeHours} 小时前起报 · 未来剩余 ${remaining}h`;
}

function forecastAccuracy(observedPoints, forecastPoints) {
  const overlap = observedPoints
    .map((observed) => {
      const forecast = forecastPoints.find((point) => point.hour === observed.hour);
      return forecast ? Math.abs(forecast.value - observed.value) : null;
    })
    .filter((value) => value !== null);
  if (!overlap.length) return 0;
  return overlap.reduce((sum, value) => sum + value, 0) / overlap.length;
}

function pathFromDomain(points, width, height, padding, maxY, xMin, xMax) {
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;
  return points
    .map((point, index) => {
      const x = padding.left + ((point.hour - xMin) / (xMax - xMin)) * innerW;
      const y = padding.top + (1 - point.value / maxY) * innerH;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function renderChart(seaKey, horizon) {
  const chartData = getChartData(seaKey, horizon);
  const forecastPoints = chartData.forecastPoints;
  const observedPoints = chartData.observedPoints;
  const drawnForecastPoints = sparseChartPoints(forecastPoints);
  const drawnObservedPoints = sparseChartPoints(observedPoints);
  const svg = $("#forecastChart");
  const width = 760;
  const height = 320;
  const padding = { top: 34, right: 30, bottom: 44, left: 54 };
  const xMin = Math.min(...observedPoints.map((point) => point.hour));
  const xMax = Math.max(horizon, ...forecastPoints.map((point) => point.hour));
  const maxY = Math.max(
    2.4,
    Math.ceil(Math.max(...forecastPoints.map((p) => p.value), ...observedPoints.map((p) => p.value)) * 1.3 * 10) / 10
  );
  const forecastPath = pathFromDomain(drawnForecastPoints, width, height, padding, maxY, xMin, xMax);
  const observedPath = pathFromDomain(drawnObservedPoints, width, height, padding, maxY, xMin, xMax);
  const futureAreaPoints = drawnForecastPoints.filter((point) => point.hour >= 0);
  const futureAreaPath = pathFromDomain(futureAreaPoints, width, height, padding, maxY, xMin, xMax);
  const baselineY = height - padding.bottom;
  const forecastStartX = padding.left + ((0 - xMin) / (xMax - xMin)) * (width - padding.left - padding.right);
  const areaPath = `${futureAreaPath} L ${width - padding.right} ${baselineY} L ${forecastStartX.toFixed(1)} ${baselineY} Z`;
  const ticks = chartTicks(xMin, xMax);

  const tickLabels = ticks
    .map((tick) => {
      const x = padding.left + ((tick - xMin) / (xMax - xMin)) * (width - padding.left - padding.right);
      return `<text class="chart-label" x="${x}" y="${height - 16}" text-anchor="middle">${formatTick(tick)}</text>`;
    })
    .join("");

  const yLabels = [0, maxY / 2, maxY]
    .map((tick) => {
      const y = padding.top + (1 - tick / maxY) * (height - padding.top - padding.bottom);
      return `<text class="chart-label" x="20" y="${y + 4}">${tick.toFixed(1)}</text>`;
    })
    .join("");

  const futureForecastPoints = forecastPoints.filter((point) => point.hour > 0);
  const peak = futureForecastPoints.reduce((a, b) => (b.value > a.value ? b : a), futureForecastPoints[0]);
  const peakX = padding.left + ((peak.hour - xMin) / (xMax - xMin)) * (width - padding.left - padding.right);
  const peakY = padding.top + (1 - peak.value / maxY) * (height - padding.top - padding.bottom);
  const nowX = padding.left + ((0 - xMin) / (xMax - xMin)) * (width - padding.left - padding.right);
  const overlapMae = forecastAccuracy(observedPoints, forecastPoints);
  const rangeLabel = chartData.isRuntime ? "" : formatForecastRange(horizon);
  const qualityLabel = chartData.isRuntime ? "" : `\u8fc7\u53bb ${forecastAgeHours}h \u5e73\u5747\u8bef\u5dee ${overlapMae.toFixed(2)} m`;

  svg.innerHTML = `
    <line class="axis" x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" />
    <line class="axis" x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" />
    <line class="now-line" x1="${nowX.toFixed(1)}" y1="${padding.top}" x2="${nowX.toFixed(1)}" y2="${height - padding.bottom}" />
    ${tickLabels}
    ${yLabels}
    <path class="area-fill" d="${areaPath}" />
    <path class="observed-line" d="${observedPath}" />
    <path class="forecast-line" d="${forecastPath}" />
    <circle class="chart-dot" cx="${peakX.toFixed(1)}" cy="${peakY.toFixed(1)}" r="6" />
    <text class="chart-label" x="${Math.min(peakX + 10, width - 130).toFixed(1)}" y="${Math.max(peakY - 12, 22).toFixed(1)}">峰值 ${peak.value.toFixed(2)} m</text>
    <text class="chart-label" x="${width - 172}" y="30">预测波高</text>
    <line x1="${width - 92}" y1="25" x2="${width - 42}" y2="25" stroke="#0f7896" stroke-width="4" stroke-linecap="round" />
    <text class="chart-label" x="${width - 172}" y="54">近期观测</text>
    <line x1="${width - 92}" y1="49" x2="${width - 42}" y2="49" stroke="#f26b5b" stroke-width="3" stroke-linecap="round" />
    ${rangeLabel ? `<text class="chart-label" x="${padding.left}" y="30">${rangeLabel}</text>` : ""}
    ${qualityLabel ? `<text class="chart-label" x="${padding.left}" y="54">${qualityLabel}</text>` : ""}
  `;

  $("#peakValue").textContent = `${peak.value.toFixed(2)} m`;
  $("#peakTime").textContent = `+${peak.hour}h`;
  $("#riskValue").textContent = seaStateRisk(peak.value);
}

function setHoverCard(seaKey) {
  const sea = seas[seaKey];
  const card = $(".hover-card");
  card.classList.add("is-changing");
  window.setTimeout(() => {
    $("#hoverImage").src = sea.image;
    $("#hoverImage").alt = `${sea.name}代表性海域景观`;
    $("#hoverTag").textContent = sea.tag;
    $("#hoverTitle").textContent = sea.name;
    $("#hoverText").textContent = sea.description;
    card.classList.remove("is-changing");
  }, 110);
}

function renderSea(seaKey, options = {}) {
  const shouldFly = options.fly !== false;
  selectedSea = seaKey;
  const sea = applyRuntimeModelToSea(seaKey, selectedHorizon);
  const experience = $("#mapExperience");
  const wasSelected = experience.classList.contains("is-selected");
  const token = ++mapTransitionToken;

  experience.classList.add("is-selected");
  $("#profileImage").src = sea.image;
  $("#profileImage").alt = `${sea.name}代表性海域景观`;
  $("#seaRegion").textContent = sea.region;
  $("#seaTitle").textContent = `${sea.name}${selectedHorizon} 小时预报`;
  $("#seaDescription").textContent = sea.description;
  $("#seaDecomp").textContent = sea.decomp;
  $("#seaModel").textContent = sea.model;
  $("#seaWindow").textContent = sea.window;
  $("#forecastTitle").textContent = `${sea.name}有义波高 SWH`;
  $("#seaTitle").classList.remove("fade-swap");
  $("#forecastChart").classList.remove("fade-swap");
  void $("#seaTitle").offsetWidth;
  $("#seaTitle").classList.add("fade-swap");
  $("#forecastChart").classList.add("fade-swap");
  setHoverCard(seaKey);
  renderChart(seaKey, selectedHorizon);
  syncMapSelection(seaKey, {
    fly: shouldFly,
    deferFly: !wasSelected,
    token
  });
}

function renderModels() {
  const modelList = $("#modelList");
  modelList.innerHTML = Object.entries(seas)
    .map(([seaKey, sea]) => {
      const horizons = [48, 72, 96]
        .map((horizon) => {
          const info = modelInfoFor(seaKey, horizon);
          if (!info) return null;
          return `<div><dt>${horizon}h</dt><dd>${decompLabel(info)} / ${readableModelName(info.model_type)} / ${info.window_size}h</dd></div>`;
        })
        .filter(Boolean)
        .join("");
      const scoreInfo = modelInfoFor(seaKey, 72) || modelInfoFor(seaKey, 96) || modelInfoFor(seaKey, 48);
      return `
        <article class="model-card">
          <header>
            <h3>${sea.name}</h3>
            <span class="status">${scoreLabel(scoreInfo)}</span>
          </header>
          <dl>
            ${horizons || `
              <div><dt>Decomp</dt><dd>${sea.decomp}</dd></div>
              <div><dt>Model</dt><dd>${sea.model}</dd></div>
              <div><dt>Window</dt><dd>${sea.window}</dd></div>
              <div><dt>Horizon</dt><dd>48h / 72h / 96h</dd></div>
            `}
          </dl>
        </article>
      `;
    })
    .join("");
}

function markerIcon(seaKey, active = false) {
  return L.divIcon({
    className: "",
    html: `<span class="sea-marker ${active ? "active" : ""}">${seas[seaKey].name.slice(0, 1)}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18]
  });
}

function targetZoomForSea(seaKey) {
  return seaKey === "south" ? 5 : 6;
}

function refreshMapDuringLayout(durationMs = mapLayoutTransitionMs) {
  if (!map) return;
  const startedAt = performance.now();

  function refreshFrame(now) {
    if (!map) return;
    map.invalidateSize({ animate: false, pan: false });
    if (now - startedAt < durationMs) {
      requestAnimationFrame(refreshFrame);
    }
  }

  requestAnimationFrame(refreshFrame);
}

function updateSelectedMarker(seaKey) {
  Object.entries(mapMarkers).forEach(([key, marker]) => {
    marker.setIcon(markerIcon(key, key === seaKey));
  });
}

function flyToSelectedSea(seaKey, token, delayMs = 0) {
  if (!map || !window.L) return;
  const marker = mapMarkers[seaKey];
  if (!marker) return;

  window.setTimeout(() => {
    if (token !== mapTransitionToken) return;
    map.stop();
    map.closePopup();
    map.invalidateSize({ animate: false, pan: false });
    map.flyTo(seas[seaKey].coord, targetZoomForSea(seaKey), {
      animate: true,
      duration: 1.05,
      easeLinearity: 0.18
    });

    window.setTimeout(() => {
      if (token !== mapTransitionToken) return;
      marker.openPopup();
    }, 1120);
  }, delayMs);
}

function syncMapSelection(seaKey, options = {}) {
  if (!map || !window.L) return;
  const token = options.token || ++mapTransitionToken;
  updateSelectedMarker(seaKey);
  map.stop();
  map.closePopup();

  if (options.fly !== false) {
    refreshMapDuringLayout(options.deferFly ? mapLayoutTransitionMs + 240 : 220);
    flyToSelectedSea(seaKey, token, options.deferFly ? 80 : 0);
  } else {
    map.invalidateSize({ animate: false, pan: false });
  }
}

function initMap() {
  const mapEl = $("#realMap");
  if (!mapEl || !window.L) {
    if (mapEl) {
      mapEl.innerHTML = '<div class="map-fallback">地图资源需要联网加载。联网后刷新即可查看可缩放真实底图。</div>';
    }
    return;
  }

  map = L.map("realMap", {
    center: [28.8, 119.4],
    zoom: 5,
    minZoom: 4,
    maxZoom: 10,
    zoomControl: true,
    scrollWheelZoom: false
  });

  if ("ResizeObserver" in window) {
    mapResizeObserver = new ResizeObserver(() => {
      if (map) map.invalidateSize({ animate: false, pan: false });
    });
    mapResizeObserver.observe(mapEl);
  }

  const oceanBaseLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 10,
      attribution: "Tiles &copy; Esri"
    }
  );
  const oceanReferenceLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 10,
      attribution: "Tiles &copy; Esri"
    }
  );
  streetLayer = L.layerGroup([oceanBaseLayer, oceanReferenceLayer]);

  satelliteLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 10,
      attribution: "Tiles &copy; Esri"
    }
  );

  streetLayer.addTo(map);

  Object.entries(seas).forEach(([seaKey, sea]) => {
    const marker = L.marker(sea.coord, {
      icon: markerIcon(seaKey, false),
      title: sea.name,
      keyboard: true
    }).addTo(map);

    marker.bindPopup(
      `<strong>${sea.name}</strong><span>${sea.region}</span><span>${sea.coord[0].toFixed(2)}°N, ${sea.coord[1].toFixed(2)}°E</span>`,
      { className: "sea-popup", autoPan: false }
    );
    marker.bindTooltip(sea.name, {
      permanent: true,
      direction: "right",
      offset: [18, 0],
      className: "sea-tooltip"
    });
    marker.on("mouseover", () => setHoverCard(seaKey));
    marker.on("focus", () => setHoverCard(seaKey));
    marker.on("click", () => renderSea(seaKey, { fly: true }));
    mapMarkers[seaKey] = marker;
  });

  map.fitBounds(Object.values(seas).map((sea) => sea.coord), {
    padding: [42, 42]
  });
  setHoverCard("bohai");
}

function initReveal() {
  const sections = $$(".reveal-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.28 }
  );
  sections.forEach((section) => observer.observe(section));
}

function updateActiveNav() {
  const sections = ["overview", "map", "pipeline", "models"];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        $$(".nav-tabs a").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { threshold: 0.55 }
  );
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

$$(".map-toolbar button").forEach((button) => {
  button.addEventListener("click", () => {
    if (!map || !streetLayer || !satelliteLayer || activeLayer === button.dataset.layer) return;
    activeLayer = button.dataset.layer;
    $$(".map-toolbar button").forEach((item) => item.classList.toggle("active", item === button));
    if (activeLayer === "satellite") {
      map.removeLayer(streetLayer);
      satelliteLayer.addTo(map);
    } else {
      map.removeLayer(satelliteLayer);
      streetLayer.addTo(map);
    }
  });
});

$$(".horizon-toggle button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedHorizon = Number(button.dataset.horizon);
    $$(".horizon-toggle button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    renderSea(selectedSea || "bohai", { fly: false });
  });
});

updateSyncPill();
renderModels();
initMap();
initReveal();
updateActiveNav();
