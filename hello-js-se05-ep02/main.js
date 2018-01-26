console.log("Hello you!")

const gibberish = require("./lib2").gibberish // note o './' dando o caminho
console.log(gibberish("Hello you!"))

const template = require("./lib2").template;
console.log(template,'abc');

x = [1,2,3,4,5,6,7,8,9];

x = x.splice(2, 3);

console.log(x);

y = [];
for (i=1; i <=10; i++) {
    y.push(i);
}

console.log(y);

yl = y.map(e => {
    if (e % 2 == 0) {
        return e + "p";
    } else {
        return e + "i";
    }
});
console.log(yl);

yf = y.map(function poi(e) {
    if (e % 2 == 0) {
        return e + "p";
    } else {
        return e + "i";
    }
});
console.log(yf);

yt = y.map(e=>(e%2)?e+"i":e+"p")
console.log(yt);

yf = y.filter(function poi(e) {
    if (e % 2 == 0) {
        return e;
    }
});
console.log(yf);


// ZmwiiWiOjA8CFPL64+ADb0wl3R2dA+cjZ4SyjJnw3u0=