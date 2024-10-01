function decodeBase64(input) {
    return decodeURIComponent(escape(atob(input)));
}

var params = new URLSearchParams(location.search);

var vs = {
    id: "playerjs"
};

params.forEach((value, key) => {
    // Hanya decode parameter tertentu dari Base64 (misal: 'name')
    if (key === 'name') {
        vs[key] = decodeBase64(decodeURIComponent(value));  // Decode dari Base64
    } else {
        vs[key] = decodeURIComponent(value);
    }
});

var playerjs = new Playerjs(vs);
