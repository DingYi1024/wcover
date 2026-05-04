const COVER_SIZES = {
  main: {
    width: 2500,
    height: 1064,
    exportWidth: 900,
    exportHeight: 383,
    exportLabel: "900×383",
    className: "",
    name: "首图",
    defaultTitleSize: 160,
    minTitleSize: 112,
    maxTitleWidth: 2250,
    maxTitleHeight: 390,
  },
  thumb: {
    width: 1000,
    height: 1000,
    exportWidth: 200,
    exportHeight: 200,
    exportLabel: "200×200",
    className: "thumb",
    name: "小图",
    defaultTitleSize: 170,
    minTitleSize: 110,
    maxTitleWidth: 820,
    maxTitleHeight: 410,
  },
};

const PALETTES = [
  {id:'ink-green', name:'墨绿经典', bg:'#1C1C1C', bg2:'#252525', text:'#EDE6D8', hl:'#2D5F4A', sub:'#8A8A8A', sign:'#4A6B60', tag:'#8A8A8A', watermark:'#FFFFFF', pattern:'diagonal', patternOpacity:35},
  {id:'burgundy', name:'勃艮第酒红', bg:'#141414', bg2:'#1F1515', text:'#F0E8DA', hl:'#8B2635', sub:'#9A9A9A', sign:'#6B4A4E', tag:'#9A9A9A', watermark:'#FFFFFF', pattern:'noise', patternOpacity:40},
  {id:'midnight-navy', name:'极夜藏青', bg:'#0F1A2E', bg2:'#162138', text:'#F5F5F0', hl:'#E8833A', sub:'#7A8599', sign:'#9FAAB8', tag:'#7A8599', watermark:'#FFFFFF', pattern:'grid', patternOpacity:38},
  {id:'cream', name:'奶油米白', bg:'#E8E2D4', bg2:'#DED6C4', text:'#2B2416', hl:'#B8611D', sub:'#6B6358', sign:'#8B7F70', tag:'#6B6358', watermark:'#2B2416', pattern:'diagonal', patternOpacity:35},
  {id:'midnight-purple', name:'午夜深紫', bg:'#1A1425', bg2:'#221B30', text:'#EDE4E0', hl:'#C9A27A', sub:'#7A6F85', sign:'#9A8FA5', tag:'#7A6F85', watermark:'#FFFFFF', pattern:'dots', patternOpacity:40},
  {id:'forest', name:'森林墨绿', bg:'#1F2B24', bg2:'#28362E', text:'#EDE4CF', hl:'#C4A442', sub:'#7A8A7E', sign:'#9AAA9E', tag:'#7A8A7E', watermark:'#FFFFFF', pattern:'crosshatch', patternOpacity:32},
  {id:'black-gold', name:'纯黑烫金', bg:'#0A0A0A', bg2:'#131313', text:'#F2EDE3', hl:'#B8924A', sub:'#6B6258', sign:'#8A7F70', tag:'#8B7F70', watermark:'#FFFFFF', pattern:'corners', patternOpacity:50},
  {id:'mini-white', name:'极简素白', bg:'#F5F3EE', bg2:'#EBE8E0', text:'#1A1A1A', hl:'#C8292E', sub:'#888888', sign:'#AAAAAA', tag:'#888888', watermark:'#1A1A1A', pattern:'corners', patternOpacity:55},
  {id:'morandi', name:'莫兰迪灰蓝', bg:'#2A3441', bg2:'#323D4C', text:'#E8DFD0', hl:'#D4A574', sub:'#8A92A0', sign:'#A8B0BC', tag:'#8A92A0', watermark:'#FFFFFF', pattern:'diagonal', patternOpacity:32},
  {id:'terracotta', name:'陶土赤陶', bg:'#2B1D18', bg2:'#332521', text:'#F0E4D2', hl:'#D96F3C', sub:'#9A8578', sign:'#B89E8C', tag:'#9A8578', watermark:'#FFFFFF', pattern:'noise', patternOpacity:42},
  {id:'ocean-deep', name:'深海靛蓝', bg:'#0A1F2E', bg2:'#112838', text:'#E6EDF2', hl:'#5FB3D4', sub:'#6B8598', sign:'#8FA5B8', tag:'#6B8598', watermark:'#FFFFFF', pattern:'dots', patternOpacity:38},
  {id:'plum-rose', name:'梅子玫瑰', bg:'#2A1A2A', bg2:'#352235', text:'#F0E0E4', hl:'#D87A95', sub:'#907585', sign:'#A890A0', tag:'#907585', watermark:'#FFFFFF', pattern:'diagonal', patternOpacity:30},
  {id:'olive', name:'橄榄军绿', bg:'#2B2F1F', bg2:'#343828', text:'#EDE6CE', hl:'#B8A248', sub:'#8A8A6E', sign:'#A8A88A', tag:'#8A8A6E', watermark:'#FFFFFF', pattern:'crosshatch', patternOpacity:30},
  {id:'copper', name:'紫铜暖灰', bg:'#1E1A17', bg2:'#2A241F', text:'#F0E6D6', hl:'#C67B5C', sub:'#8A7C70', sign:'#A8998A', tag:'#8A7C70', watermark:'#FFFFFF', pattern:'noise', patternOpacity:38},
  {id:'ice-mint', name:'薄荷冰川', bg:'#E8EEE9', bg2:'#DEE5E0', text:'#1F2A24', hl:'#2E8B6F', sub:'#6B7A72', sign:'#8A9A92', tag:'#6B7A72', watermark:'#1F2A24', pattern:'grid', patternOpacity:38},
  {id:'sand-linen', name:'沙麻浅棕', bg:'#E6DDCF', bg2:'#DCD2C2', text:'#2B2519', hl:'#8B4513', sub:'#776F5E', sign:'#9A907E', tag:'#776F5E', watermark:'#2B2519', pattern:'noise', patternOpacity:36},
  {id:'newspaper', name:'老报纸灰', bg:'#D9D2C3', bg2:'#CFC7B6', text:'#1A1A1A', hl:'#9B2D20', sub:'#5F5A4D', sign:'#7E7868', tag:'#5F5A4D', watermark:'#1A1A1A', pattern:'noise', patternOpacity:38},
  {id:'cyberpunk', name:'暗夜青蓝', bg:'#0E1419', bg2:'#161D24', text:'#EAEFF2', hl:'#00C2A8', sub:'#6B7A85', sign:'#8A99A5', tag:'#6B7A85', watermark:'#FFFFFF', pattern:'grid', patternOpacity:35},
  {id:'black-orange-logo', name:'Pornhub 黑橙标识', bg:'#060606', bg2:'#181818', text:'#F1ECE3', hl:'#F5A21A', sub:'#87827A', sign:'#B6A27D', tag:'#F5A21A', watermark:'#FFFFFF', pattern:'none', patternOpacity:0, highlightBg:'#F5A21A', highlightText:'#050505', highlightRadius:'0.12em', highlightPadding:'0.02em 0.15em 0.06em', highlightShadow:'0 0.025em 0 rgba(255,255,255,0.22) inset'},
  {id:'claude-ui', name:'Claude 暖白 UI', bg:'#F4EFE7', bg2:'#FBF7EF', text:'#2B241D', hl:'#C15F3F', sub:'#7C7066', sign:'#8E8175', tag:'#A86146', watermark:'#2B241D', pattern:'grid', patternOpacity:20}
];

// 高亮字体库（衬线 / 黑体 / 装饰）
const FONTS = [
  { id: "auto", name: "跟随主标题", stack: "inherit", weight: "inherit" },
  { id: "serif-sc", name: "思源宋体·重体", stack: '"Noto Serif SC","Source Han Serif SC","Songti SC",serif', weight: 900 },
  { id: "songti", name: "宋体·粗", stack: '"Songti SC","STSong","SimSun",serif', weight: 900 },
  { id: "fangsong", name: "仿宋", stack: '"STFangsong","FangSong",serif', weight: 700 },
  { id: "kaiti", name: "楷体", stack: '"STKaiti","Kaiti SC","KaiTi",serif', weight: 700 },
  { id: "yuanti", name: "圆体·粗", stack: '"PingFang SC","Yuanti SC","Hiragino Sans GB",sans-serif', weight: 900 },
  { id: "pingfang", name: "苹方·极粗", stack: '"PingFang SC","Helvetica Neue",sans-serif', weight: 900 },
  { id: "heiti", name: "黑体·粗", stack: '"Heiti SC","STHeiti","SimHei",sans-serif', weight: 900 },
  { id: "lishu", name: "隶书", stack: '"STLiti","LiSu",serif', weight: 700 },
  { id: "xingkai", name: "行楷·手写", stack: '"STXingkai","HanziPen SC",cursive', weight: 700 },
  { id: "serif-italic", name: "衬线斜体", stack: '"Noto Serif SC","Songti SC",serif', weight: 900, italic: true },
];

let currentPalette = PALETTES[0];
let currentRatio = "main";
const paletteSelect = document.getElementById("f-palette");
const fontSelect = document.getElementById("f-hl-font");
const ratioSelect = document.getElementById("f-ratio");

PALETTES.forEach((palette) => {
  const option = document.createElement("option");
  option.value = palette.id;
  option.textContent = palette.name;
  paletteSelect.appendChild(option);

  const swatch = document.createElement("div");
  swatch.className = "swatch";
  swatch.dataset.id = palette.id;
  swatch.style.background = palette.bg;
  swatch.innerHTML = `
    <div style="position:absolute;left:10%;top:30%;width:50%;height:12%;background:${palette.text};border-radius:2px;"></div>
    <div style="position:absolute;left:10%;top:50%;width:30%;height:18%;background:${palette.highlightBg || palette.hl};border-radius:2px;"></div>
    <div class="label">${palette.name}</div>`;
  swatch.onclick = () => {
    paletteSelect.value = palette.id;
    applyPalette(palette.id);
  };
  document.getElementById("palette-grid").appendChild(swatch);
});

FONTS.forEach((font) => {
  const option = document.createElement("option");
  option.value = font.id;
  option.textContent = font.name;
  fontSelect.appendChild(option);
});

paletteSelect.addEventListener("change", (event) => applyPalette(event.target.value));
fontSelect.addEventListener("change", render);
document.getElementById("f-pattern").addEventListener("change", render);
document.getElementById("f-pattern-opacity").addEventListener("input", render);
ratioSelect.addEventListener("change", (event) => {
  currentRatio = event.target.value;
  const size = COVER_SIZES[currentRatio];
  document.getElementById("f-size").value = size.defaultTitleSize;
  document.querySelectorAll("button[onclick='exportPNG()']").forEach((button) => {
    button.querySelector("span:last-child")
      ? (button.querySelector("span:last-child").textContent = `导出${size.name}封面`)
      : (button.textContent = `导出${size.name} PNG`);
  });
  document.querySelector(".sub").textContent = `编辑栏目、标题和摘要，生成 ${size.exportLabel} 公众号${size.name}封面`;
  render();
});

["f-tag", "f-lead", "f-main", "f-size", "f-watermark", "f-sign"].forEach((id) => {
  document.getElementById(id).addEventListener("input", render);
});

function buildPattern(type, color, opacity){
  if(type === 'none') return '';
  const c = color;
  const o = opacity;
  const svgs = {
    dots: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='2' cy='2' r='1' fill='${c}' opacity='${o}'/></svg>`,
    grid: `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><path d='M60 0H0V60' fill='none' stroke='${c}' stroke-width='0.5' opacity='${o}'/></svg>`,
    diagonal: `<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><path d='M0 30 L30 0' stroke='${c}' stroke-width='0.6' opacity='${o}'/></svg>`,
    noise: (()=>{
      let rects='';
      const seed=[3,7,11,17,23,29,37,41,43,47,53,59,61,67,71,73,79,83,89,97,2,5,13,19,31,39,44,51,57,63,69,74,78,82,88,91,95,99,6,14,22,26,34,38,46,52,58,64,68,75,81,86,92,96,4,8,12,16,21,25,33,36,42,48,54,62,66,72,77,84,87,93,98,1,9,15,18,24,28,32,35,45,49,55,60,65,70,76,80,85,90,94,10,20,27,30,40,50,56];
      for(let i=0;i<seed.length;i++){const x=(seed[i]*7)%100;const y=(seed[i]*13+i*9)%100;const s=1+seed[i]%2;rects+=`<rect x='${x}' y='${y}' width='${s}' height='${s}' fill='${c}' opacity='${o}'/>`;}
      return `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>${rects}</svg>`;
    })(),
    crosshatch: `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30' stroke='${c}' stroke-width='1.2' opacity='${o}'/><path d='M0 0 L40 40 M-10 30 L10 50 M30 -10 L50 10' stroke='${c}' stroke-width='1.2' opacity='${o}'/></svg>`
  };
  const svg = svgs[type];
  if(!svg) return '';
  return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}")`;
}

function buildCorners(color, opacity){
  // 四角装饰细线（绝对定位 SVG）
  const size = COVER_SIZES[currentRatio];
  const sx = size.width / 2500;
  const sy = size.height / 1000;
  const x1 = 80 * sx, x2 = size.width - 80 * sx, y1 = 80 * sy, y2 = size.height - 80 * sy;
  const lenX = 80 * sx, lenY = 80 * sy;
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${size.width}' height='${size.height}' style='position:absolute;inset:0;opacity:${opacity}'>
    <g stroke='${color}' stroke-width='1.2' fill='none'>
      <path d='M${x1} ${y1} L${x1} ${y1 + lenY} M${x1} ${y1} L${x1 + lenX} ${y1}'/>
      <path d='M${x2} ${y1} L${x2} ${y1 + lenY} M${x2} ${y1} L${x2 - lenX} ${y1}'/>
      <path d='M${x1} ${y2} L${x1} ${y2 - lenY} M${x1} ${y2} L${x1 + lenX} ${y2}'/>
      <path d='M${x2} ${y2} L${x2} ${y2 - lenY} M${x2} ${y2} L${x2 - lenX} ${y2}'/>
    </g>
  </svg>`;
}

function applyPalette(id) {
  currentPalette = PALETTES.find((palette) => palette.id === id) || PALETTES[0];
  document.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.classList.toggle("active", swatch.dataset.id === id);
  });
  document.getElementById("palette-name").textContent = currentPalette.name;
  render();
}

function parseMain(text) {
  return escapeHtml(text).replace(/`([^`]+)`/g, '<span class="hl">$1</span>');
}

function parseSign(text) {
  return escapeHtml(text)
    .split(/\s*[·•]\s*/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item, index) => (index === 0 ? item : `<span class="dot">·</span>${item}`))
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function render() {
  const palette = currentPalette;
  const cover = document.getElementById("cover");
  const size = COVER_SIZES[currentRatio];
  cover.className = size.className;
  cover.style.width = `${size.width}px`;
  cover.style.height = `${size.height}px`;
  cover.style.background = `linear-gradient(135deg, ${palette.bg2} 0%, ${palette.bg} 60%, ${palette.bg} 100%)`;

  const tag = document.getElementById("f-tag").value;
  const lead = document.getElementById("f-lead").value;
  const mainRaw = document.getElementById("f-main").value;
  const titleSize = document.getElementById("f-size").value;
  const watermarkInput = document.getElementById("f-watermark");
  const sign = document.getElementById("f-sign").value;

  let mainHTML;
  let highlightText = "";
  if (mainRaw.includes("`")) {
    mainHTML = parseMain(mainRaw);
    const match = mainRaw.match(/`([^`]+)`/);
    highlightText = match ? match[1] : "";
  } else {
    mainHTML = escapeHtml(mainRaw);
  }

  const watermark = watermarkInput.value.trim() || highlightText.charAt(0) || mainRaw.replace(/`/g, "").charAt(0) || "";

  const tagEl = document.getElementById("c-tag");
  tagEl.textContent = tag;
  tagEl.style.color = palette.tag;

  const leadEl = document.getElementById("c-lead");
  leadEl.textContent = lead;
  leadEl.style.color = palette.sub;

  const mainEl = document.getElementById("c-main");
  mainEl.innerHTML = mainHTML || "输入你的标题";
  mainEl.style.color = palette.text;
  mainEl.style.fontSize = `${titleSize}px`;

  const fontId = fontSelect.value;
  const font = FONTS.find((item) => item.id === fontId) || FONTS[0];
  mainEl.querySelectorAll(".hl").forEach((highlight) => {
    if (font.id === "auto") {
      highlight.style.fontFamily = "";
      highlight.style.fontWeight = "";
      highlight.style.fontStyle = "";
    } else {
      highlight.style.fontFamily = font.stack;
      highlight.style.fontWeight = font.weight;
      highlight.style.fontStyle = font.italic ? "italic" : "normal";
    }
    highlight.style.backgroundImage = "none";
    highlight.style.color = palette.highlightText || palette.hl;
    highlight.style.backgroundColor = palette.highlightBg || "";
    highlight.style.borderRadius = palette.highlightBg ? palette.highlightRadius || "0.08em" : "";
    highlight.style.padding = palette.highlightBg ? palette.highlightPadding || "0 0.1em" : "";
    highlight.style.boxShadow = palette.highlightBg ? palette.highlightShadow || "none" : "";
    highlight.style.display = palette.highlightBg ? "inline-block" : "";
    highlight.style.lineHeight = palette.highlightBg ? "0.98" : "";
    highlight.style.margin = palette.highlightBg ? "0 0.03em" : "";
  });
  fitTitle(mainEl, size, Number(titleSize));

  const watermarkEl = document.getElementById("c-watermark");
  watermarkEl.textContent = watermark;
  watermarkEl.style.color = palette.watermark;

  const patternSelect = document.getElementById("f-pattern");
  const patternOpacitySlider = document.getElementById("f-pattern-opacity");
  let patternType = patternSelect.value;
  let patternOpacityPct = Number(patternOpacitySlider.value);
  if (patternType === "auto") {
    patternType = palette.pattern || "none";
    patternOpacityPct = palette.patternOpacity ?? 20;
    patternOpacitySlider.value = patternOpacityPct;
  }
  const patternOpacity = patternOpacityPct / 100;
  const patternEl = document.getElementById("c-pattern");
  if (patternType === "none") {
    patternEl.style.backgroundImage = "";
    patternEl.innerHTML = "";
  } else if (patternType === "corners") {
    patternEl.style.backgroundImage = "";
    patternEl.innerHTML = buildCorners(palette.watermark, patternOpacity);
  } else {
    patternEl.innerHTML = "";
    patternEl.style.backgroundImage = buildPattern(patternType, palette.watermark, patternOpacity);
  }

  const signEl = document.getElementById("c-sign");
  signEl.innerHTML = parseSign(sign);
  signEl.style.color = palette.sign;

  fitPreview();
}

function fitTitle(mainEl, size, preferredSize) {
  const minSize = size.minTitleSize;
  const maxWidth = size.maxTitleWidth;
  const maxHeight = size.maxTitleHeight;
  mainEl.style.maxWidth = `${maxWidth}px`;

  for (let fontSize = preferredSize; fontSize >= minSize; fontSize -= 2) {
    mainEl.style.fontSize = `${fontSize}px`;
    if (mainEl.scrollWidth <= maxWidth + 1 && mainEl.scrollHeight <= maxHeight + 1) {
      return;
    }
  }

  mainEl.style.fontSize = `${minSize}px`;
}

function fitPreview() {
  const host = document.querySelector(".scale-host");
  const inner = document.getElementById("scale-inner");
  const cover = document.getElementById("cover");
  const size = COVER_SIZES[currentRatio];
  const hostStyle = window.getComputedStyle(host);
  const horizontalPadding = parseFloat(hostStyle.paddingLeft) + parseFloat(hostStyle.paddingRight);
  const availableWidth = Math.max(0, host.clientWidth - horizontalPadding);
  const scale = Math.min(availableWidth / size.width, 1);
  cover.style.transform = `scale(${scale})`;
  inner.style.width = `${size.width * scale}px`;
  inner.style.height = `${size.height * scale}px`;
  document.getElementById("scale-label").textContent = `${Math.round(scale * 100)}%`;
}

window.addEventListener("resize", fitPreview);

function randomPalette() {
  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
  paletteSelect.value = palette.id;
  applyPalette(palette.id);
}

function randomBackground() {
  const patterns = ["none", "dots", "grid", "diagonal", "noise", "crosshatch", "corners"];
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  const opacity = 25 + Math.floor(Math.random() * 35);
  document.getElementById("f-pattern").value = pattern;
  document.getElementById("f-pattern-opacity").value = opacity;
  render();
}

function randomHighlight() {
  const input = document.getElementById("f-main");
  const raw = input.value.replace(/`/g, "");
  const chars = [...raw];
  const chinesePositions = [];
  chars.forEach((char, index) => {
    if (/[\u4e00-\u9fa5]/.test(char)) chinesePositions.push(index);
  });
  if (chinesePositions.length === 0) {
    input.value = raw;
    render();
    return;
  }

  const maxLen = Math.min(3, chinesePositions.length);
  const len = 1 + Math.floor(Math.random() * maxLen);
  const starts = [];
  for (let index = 0; index <= chars.length - len; index += 1) {
    if (chars.slice(index, index + len).every((char) => /[\u4e00-\u9fa5]/.test(char))) {
      starts.push(index);
    }
  }
  if (starts.length === 0) {
    input.value = raw;
    render();
    return;
  }
  const start = starts[Math.floor(Math.random() * starts.length)];
  const before = chars.slice(0, start).join("");
  const highlight = chars.slice(start, start + len).join("");
  const after = chars.slice(start + len).join("");
  input.value = `${before}\`${highlight}\`${after}`;
  render();
}

function clearHighlight() {
  const input = document.getElementById("f-main");
  input.value = input.value.replace(/`/g, "");
  render();
}

function randomWatermark() {
  const raw = document.getElementById("f-main").value.replace(/`/g, "");
  const chineseChars = [...raw].filter((char) => /[\u4e00-\u9fa5]/.test(char));
  if (chineseChars.length === 0) return;
  document.getElementById("f-watermark").value = chineseChars[Math.floor(Math.random() * chineseChars.length)];
  render();
}

function clearWatermark() {
  document.getElementById("f-watermark").value = "";
  render();
}

async function exportPNG() {
  if (!window.htmlToImage) {
    alert("导出库加载失败，请联网后刷新页面。");
    return;
  }

  const cover = document.getElementById("cover");
  const inner = document.getElementById("scale-inner");
  const size = COVER_SIZES[currentRatio];
  const prevTransform = cover.style.transform;
  const prevInnerW = inner.style.width;
  const prevInnerH = inner.style.height;
  cover.style.transform = "none";
  inner.style.width = `${size.width}px`;
  inner.style.height = `${size.height}px`;

  const patternEl = document.getElementById("c-pattern");
  const inlineSvg = patternEl.querySelector("svg");
  let prevPatternBg = "";
  let prevPatternHTML = "";
  if (inlineSvg) {
    prevPatternHTML = patternEl.innerHTML;
    const svgStr = new XMLSerializer().serializeToString(inlineSvg);
    const encoded = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgStr)}`;
    patternEl.innerHTML = "";
    prevPatternBg = patternEl.style.backgroundImage;
    patternEl.style.backgroundImage = `url("${encoded}")`;
    patternEl.style.backgroundSize = "100% 100%";
  }

  try {
    const sourceDataUrl = await htmlToImage.toPng(cover, {
      width: size.width,
      height: size.height,
      pixelRatio: 1,
      cacheBust: true,
      style: { transform: "none", transformOrigin: "top left" },
    });
    const dataUrl = await downscalePng(sourceDataUrl, size.exportWidth, size.exportHeight);
    const mainText = document.getElementById("f-main").value.replace(/`/g, "").replace(/[\\/:*?"<>|]/g, "_").slice(0, 20);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `wechat_cover_${COVER_SIZES[currentRatio].name}_${mainText}_${currentPalette.id}.png`;
    link.click();
  } catch (error) {
    alert(`导出失败：${error.message}`);
  } finally {
    if (prevPatternHTML) {
      patternEl.style.backgroundImage = prevPatternBg;
      patternEl.style.backgroundSize = "";
      patternEl.innerHTML = prevPatternHTML;
    }
    cover.style.transform = prevTransform;
    inner.style.width = prevInnerW;
    inner.style.height = prevInnerH;
    fitPreview();
  }
}

function downscalePng(dataUrl, width, height) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL("image/png"));
    };
    image.onerror = reject;
    image.src = dataUrl;
  });
}

paletteSelect.value = "claude-ui";
applyPalette("claude-ui");
render();
setTimeout(fitPreview, 100);

