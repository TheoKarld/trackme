var INC = {
  list: "bi bi-list",
  clock: "bi bi-clock",
  fclock: "bi bi-clock-fill",
  esmile: "bi bi-emoji-smile",
  efsmile: "bi bi-emoji-smile-fill",
  lfcarrow: "bi bi-left-circle-fill",
  rfcarrow: "bi bi-right-circle-fill",
  larrow: "bi bi-left-arrow",
  rarrow: "bi bi-right-arrow",
  rparrow: "bi bi-arrow-repeat",
  lrarrow: "bi bi-arrow-left-right",
  lbarrow: "bi bi-arrow-bar-left",
  rbarrow: "bi bi-arrow-bar-right",
  arrowdf: "bi bi-arrow-down-square-fill",
  printer: "bi bi-printer",
  fprinter: "bi bi-printer-fill",
  power: "bi bi-power",
  personx: "bi bi-person-x",
  aperson: "bi bi-person-plus",
  faperson: "bi bi-person-plus-fill",
  fpersonx: "bi bi-person-x-fill",
  huricane: "bi bi-hurricane",
  people: "bi bi-people",
  person: "bi bi-person",
  cperson: "bi bi-person-circle",
  fpeople: "bi bi-people-fill",
  server: "bi bi-server",
  shield: "bi bi-shield",
  cshield: "bi bi-shield-check",
  cfshield: "bi bi-shield-fill-check",
  fshield: "bi bi-shield-fill",
  trophy: "bi bi-trophy",
  ftrophy: "bi bi-trophy-fill",
  xcircle: "bi bi-x-circle",
  fxcircle: "bi bi-x-circle-fill",
  x: "bi bi-x",
  xlg: "bi bi-x-lg",
  txtarea: "bi bi-textarea",
  sticky: "bi bi-stickies",
  stick: "bi bi-sticky",
  fsticky: "bi bi-sticky-fill",
  stack: "bi bi-stack",
  stacko: "bi bi-stack-overflow",
  chkperson: "bi bi-person-check",
  persons: "bi bi-person-square",
  personf: "bi bi-person-lines-fill",
  personrd: "bi bi-person-rolodex",
  personws: "bi bi-person-workspace",
  personv: "bi bi-person-video2",
  personbb: "bi bi-person-bounding-box",
  fchkperson: "bi bi-person-check-fill",
  daperson: "bi bi-person-dash",
  fdaperson: "bi bi-person-dash-fill",
  minode: "bi bi-node-minus",
  fminode: "bi bi-node-minus-fill",
  plnode: "bi bi-node-plus",
  fplnode: "bi bi-node-plus-fill",
  mortarb: "bi bi-mortarboard",
  fmortarb: "bi bi-mortarboard-fill",
  jplus: "bi bi-journal-plus",
  jminus: "bi bi-journal-minus",
  jcheck: "bi bi-journal-check",
  fow: "bi bi-foward",
  ffow: "bi bi-foward-fill",
  lboxa: "bi bi-box-arrow-in-left",
  rboxa: "bi bi-box-arrow-in-right",
  book: "bi bi-book",
  hbook: "bi bi-book-half",
  fbook: "bi bi-book-fill",
  bookm: "bi bi-bookmark",
  cbookm: "bi bi-bookmark-check",
  fbookm: "bi bi-bookmark-fill",
  griph: "bi bi-grip-horizontal",
  gripv: "bi bi-grip-vertical",
  medium: "bi bi-medium",
  phone: "bi bi-phone",
  phonef: "bi bi-phone-fill",
  phonel: "bi bi-phone-landscape",
  phonelf: "bi bi-phone-landscape-fill",
  signp: "bi bi-signpost",
  signpf: "bi bi-signpost-fill",
  signp2: "bi bi-signpost-2",
  signp2f: "bi bi-signpost-2-fill",
  slack: "bi bi-slack",
  viewl: "bi bi-view-list",
  views: "bi ib-view-stacked",
  bwidth: "bi bi-border-width",
  bank: "bi bi-bank",
  bank2: "bi bi-bank2",
  calendar: "bi bi-calendar",
  fcalendar: "bi bi-calendar-fill",
  rcalendar: "bi bi-calendar-range",
  frcalendar: "bi bi-calendar-range-fill",
  wcalendar: "bi bi-calendar4-week",
  ccalendar: "bi bi-calendar-check",
  fcccalendar: "bi bi-calendar-check-fill",
  dtcalendar: "bi bi-calendar-date",
  fdtcalendar: "bi bi-calendar-date-fill",
  dycalendar: "bi bi-calendar-day",
  fdycalendar: "bi bi-calendar-day-fill",
  ecalendar: "bi bi-calendar-event",
  fecalendar: "bi bi-calendar-event-fill",
  cardhead: "bi bi-card-heading",
  cardcheck: "bi bi-card-checklist",
  cardlist: "bi bi-card-list",
  command: "bi bi-command",
  malign: "bi bi-align-middle",
  app: "bi bi-app",
  appin: "bi bi-app-indicator",
  barstep: "bi bi-bar-chart-steps",
  pcloud: "bi bi-cloud-plus",
  fpcloud: "bi bi-cloud-plus-fill",
  lock: "bi bi-lock",
  flock: "bi bi-lock-fill",
  activity: "bi bi-activity",
  chatd: "bi bi-chart-dotted",
  pencil: "bi bi-pencil",
  fpencil: "bi bi-pencil-fill",
  pen: "bi bi-pen",
  fpen: "bi bi-pen-fill",
  pencils: "bi bi-pencil-square",
  house: "bi bi-house",
  fhouse: "bi bi-house-fill",
  image: "bi bi-image",
  fimage: "bi bi-image-fill",
  images: "bi bi-images",
  aimage: "bi bi-image-alt",
  film: "bi bi-film",
  efilep: "bi bi-file-earmark-person",
  credcard: "bi bi-credit-card",
};

function cta(o) {
  var a = [];
  for (var i in o) a.push(i);
  return a;
}
function cto(a, v) {
  var o = {};
  for (var i = 0; i < ocn(a); i++) {
    o[a[i]] = v ? v : "";
  }
  return o;
}
function datemap(dm = "") {
  var y = date("y", dm),
    m = date("m", dm),
    d = date("dt", dm),
    o = {
      f: date("f", dm),
      y: y,
      m: m,
      d: d,
      dy: date("dy", dm),
      h: date("h", dm),
      mn: date("mn", dm),
      s: date("s", dm),
      ms: date("ms", dm),
      t: date("f", dm).split(" ")[4],
    };
  o.key =
    o.ms +
    "" +
    o.mn +
    "" +
    o.y +
    "" +
    o.d +
    "" +
    o.dy +
    "" +
    o.h +
    "" +
    o.m +
    "" +
    o.s;
  return o;
}
function date(r, dm) {
  var o = dm ? dm : new Date(),
    v;
  if (r === "f") v = o.toString().split("+")[0];
  if (r === "m") v = o.getMonth();
  if (r === "y") v = o.getFullYear();
  if (r === "dt") v = o.getDate();
  if (r === "dy") v = o.getDay();
  if (r === "do") v = o;
  if (r === "h") v = o.getHours();
  if (r === "mn") v = o.getMinutes();
  if (r === "s") v = o.getSeconds();
  if (r === "ms") v = o.getMilliseconds();
  return v;
}
function $$$(e, i, c, at, y) {
  var d = document.createElement(e);
  if (i) d.id = i;
  if (c) d.className = c;
  attme(d, at);
  if (y) feedme(d, y);
  return d;
}
function attme(c, o) {
  if (!o) return;
  for (var i in o) c.setAttribute(i, o[i]);
}
function feedme(p, c) {
  if (!p || !c) return;
  if (typeof c === "string" || typeof c === "number") {
    p.innerHTML += c;
  } else {
    for (var i in c) if (c[i]) APP(p, c[i]);
  }
}
function APP(p, c) {
  if (!p || !c) return;
  try {
    p.appendChild(c);
  } catch (err) {
    var pi = iso(p) && p.id ? p.id : "",
      ci = iso(c) && c.id ? p.id : "";
    console.log(pi + "-----" + ci);
  }
}
var iso = (el) => {
  return typeof el === "object";
};
function clg(t) {
  console.log(t);
}
function ocn(o) {
  var c = 0;
  for (var i in o) {
    c += 1;
  }
  return c;
}
function revarray(v) {
  var c = [],
    r = "";
  for (var i = ocn(v) - 1; i > -1; i--) c.push(v[i]);
  return c;
}
var flashbox = (v, ia, r) => {
  var h = small("Notice", "blue").e,
    rd = colbox("nopad", 3, 2, 4, 11),
    eo = { e: rd, f1: myf1 },
    it,
    x1,
    y = 0.8,
    zz = {};
  APP(document.body, rd);
  rootstyle(
    rd,
    "position:fixed;overflow:hidden;z-index:99999999999999;right:.3em;top:3em;width:39%;"
  );
  function myf1(v, ia, r) {
    y = 0.5;
    var k = "flash-" + datemap().key + (ocn(zz) + 1),
      x1 = sect(
        r ? "bred2" : "bblue3",
        "ohidden my-2 px-2 py-3 widthun white animated zoomIn",
        "",
        [
          par(
            [
              strong([icon2(r ? "fminode" : "fplnode", "white")]).e,
              small(v, "white", "font13").e,
            ],
            "pad2"
          ),
        ]
      ),
      x2;
    zz[k] = x1;
    clg(k);
    APP(rd, x1);
    rootstyle(
      x1,
      "border-radius:.2em;overflow:hidden;z-index:99999999999999;box-shadow:.2em .5em .4em #bbba;transition:opacity:.4s;"
    );
    x2 = setTimeout(() => {
      myfx(k);
      clearTimeout(x2);
    }, 90);
    clg(k);
  }
  function myfx(k) {
    if (!zz[k]) return;
    var it = ia
        ? setInterval(() => {
            y = y - 0.1;
            zz[k].style.opacity = y;
            if (y < 0.1) clearInterval(it);
          }, 100)
        : "",
      x1 = setTimeout(() => {
        if (zz[k]) X(zz[k]);
        delete zz[k];
        clearTimeout(x1);
      }, 3000);
  }
  return eo;
};
var strong = (tx, id, c, at) => {
  var rd = $$$("strong", id, c, at),
    eo = {};
  eo.e = rd;
  typeof tx === "string" || typeof tx === "number"
    ? (rd.innerHTML = tx)
    : feedme(rd, tx);
  return eo;
};
var small = (tx, id, c, at) => {
  var rd = $$$("small", id, c, at),
    eo = {};
  eo.e = rd;
  typeof tx === "string" || typeof tx === "number"
    ? (rd.innerHTML = tx)
    : feedme(rd, tx);
  return eo;
};
var sup = (tx, id, c, at) => {
  var rd = $$$("sup", id, c, at),
    eo = { e: rd };
  typeof tx === "string" || typeof tx === "number"
    ? (rd.innerHTML = tx)
    : feedme(rd, tx);
  return eo;
};
var sub = (tx, id, c, at) => {
  var rd = $$$("sub", id, c, at),
    eo = { e: rd };
  typeof tx === "string" || typeof tx === "number"
    ? (rd.innerHTML = tx)
    : feedme(rd, tx);
  return eo;
};
var center = (tx, id, c, at) => {
  var rd = $$$("center", id, c, at),
    eo = {};
  eo.e = rd;
  typeof tx === "string" ? (rd.innerHTML = tx) : feedme(rd, tx);
  return eo;
};
var colbox = function (id, l, m, s, x, cl, c, at) {
  var rd = DIV(
    id,
    "col-lg-" + l + " col-md-" + m + " col-sm-" + s + " col-xs-" + x + " colbox"
  );
  if (cl) for (var i in cl) APP(rd, cl[i]);
  if (c) addclass(rd, c);
  if (at) attme(rd, at);
  return rd;
};
var DIV = (id, c, at, cl) => {
  var rd = $$$("div", id, c);
  attme(rd, at);

  if (cl) feedme(rd, cl);
  return rd;
};
var sect = (id, c, at, cl) => {
  var rd = $$$("section", id, c);
  attme(rd, at);

  if (cl) feedme(rd, cl);
  return rd;
};
var par = function (tx, id, c, at) {
  var p = $$$("p", id, c);
  attme(p, at);
  if (typeof tx != "object") {
    p.innerHTML = tx ? tx : "";
  } else {
    feedme(p, tx);
  }
  return p;
};
var anc = function (rf, cn, cl, id, ro) {
  var a = $$$("a", id, cl);
  if (rf) a.href = rf;
  if (cn) {
    if (typeof cn != "object") {
      a.innerHTML = cn;
    } else {
      feedme(a, cn);
    }
  }
  attme(a, ro);
  return a;
};
var icon2 = (v, i, c, at) => {
  var a = $$$("i", i, INC[v]);
  if (c) addclass(a, c);
  if (at) attme(a, at);
  return a;
};
function addclass(e, c) {
  e.className = claz(e) ? claz(e) + " " + c : c;
}
function claz(c) {
  return c.className;
}
function rootstyle(e, o) {
  attme(e, { style: o });
}
function X(c) {
  if (c.parentNode) POP(c.parentNode, c);
}
function POP(p, c) {
  p.removeChild(c);
}
function capname(n) {
  if (n.length === 1) return n.toUpperCase();
  var a = n.charAt(0).toUpperCase(),
    b = n.slice(1, n.length).toLowerCase(),
    c = a + b;
  return c;
}
function acronym(w) {
  var a = w.split("."),
    s = true;
  if (ocn(a) > 1) {
    for (var i in a)
      if (ocn(a[i]) > 1) {
        s = false;
        break;
      }
  } else {
    s = false;
  }
  return s;
}
function cleaname(n) {
  if (!n) return "";
  if (parseInt(n) || typeof n === "number") return n;
  var a = n.split(" "),
    c = "",
    d = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i]) {
      d.push(acronym(a[i]) ? a[i].toUpperCase() : capname(a[i]));
    }
  }
  for (var k = 0; k < d.length; k++) {
    if (k === d.length - 1) {
      c += d[k];
    } else {
      c += d[k] + " ";
    }
  }
  if (acronym(c)) return c.toUpperCase();
  return c;
}
function cleantxt(n) {
  if (!n) return "";
  if (parseInt(n) || typeof n === "number") return n;
  var a = n.split(" "),
    c = "",
    d = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i]) {
      d.push(a[i]);
    }
  }
  for (var k = 0; k < d.length; k++) {
    if (k === d.length - 1) {
      c += d[k];
    } else {
      c += d[k] + " ";
    }
  }
  return c;
}
function joinus(a) {
  var v = "";
  for (var i in a) {
    v = v + "" + a[i];
  }
  return v;
}
function ee(e) {
  var r = e || window.event;
  r = e.target || e.srcElement;
  return r;
}
function clonetxt(tx) {
  if (typeof tx != "string") return tx;
  var a = tx.split(""),
    b = "";
  for (var i in a) b += a[i];

  return b;
}
function clonea(a) {
  var r = [];
  for (var i in a) r.push(a[i]);
  return r;
}
function cloneo(a) {
  if (!a) return {};
  var x = jp(clonetxt(Js(a))),
    r = {};
  for (var i in a) r[i] = x[i];
  return r;
}
function jp(s) {
  var o;
  try {
    o = JSON.parse(s);
    return o;
  } catch (err) {
    return false;
  }
}
function Js(o) {
  return JSON.stringify(o);
}
function js(o) {
  return JSON.stringify(o);
}

export {
  datemap,
  date,
  $$$,
  clg,
  ocn,
  revarray,
  flashbox,
  cleaname,
  addclass,
  claz,
  rootstyle,
  cleantxt,
  joinus,
  anc,
  center,
  sup,
  sub,
  ee,
  cta,
  cto,
  clonea,
  cloneo,
  clonetxt,
  jp,
  js,
  Js,
};
