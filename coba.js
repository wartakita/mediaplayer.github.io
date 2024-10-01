var ps = location.href.substr(location.href.indexOf("html?") + 5).split("&");

var vs = {
    id: "playerjs"
};

for (var i = 0; i < ps.length; i++) {
    var p = ps[i].substr(0, ps[i].indexOf("="));
    var v = ps[i].substr(ps[i].indexOf("=") + 1);
    if (p != v) {
        vs[p] = decodeURIComponent(v);
    }
}

var playerjs = new Playerjs(vs);
