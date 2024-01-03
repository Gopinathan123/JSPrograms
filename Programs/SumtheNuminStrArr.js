const arr = ['abc123', '2d5', 'cv', 'w0', 'r7'];
//123+25+0+7;
//output = 155
const res = arr.reduce((acc, cur) => {
const chars = cur.split('');
const tot = + chars.filter(a => !isNaN(a)).join('');
return acc + tot;
}, 0);
console.log(res);