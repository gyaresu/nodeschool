function sum(x, y) {
    if (y > 0) {
    return sum(x + 1, y-1) ;
    } else {
        return x;
    }
}

console.log(sum(1, 10)); // => 11