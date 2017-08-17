let fix = (a) => {

    return a.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/'/g, '&apos;')
            .replace(/"/g, '&quot;');
};

let html = (wrapping, ...args) => {
    let result = wrapping[0];
    for (let i = 0; i < args.length; ++i) {
        result += fix(args[i]) + wrapping[i+1];
    }
    return result;
};

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);