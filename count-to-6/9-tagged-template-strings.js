// ' | &apos;
// " | &quot;
// < | &lt;
// > | &gt;
// & | &amp;

module.exports = (username, comment) => {

    let fix = (text) => {
        switch(text){
            case "'":
                return '&apos;';
            case '"':
                return '&quot;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            default:
                break;
        }
    };

    let html = (content, fn) => 
    console.log(html`<b>${ username } says</b>: "${ comment }"`);
};

