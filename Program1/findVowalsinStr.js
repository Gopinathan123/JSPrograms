function vow(s){
    let v='aeiouAEIOU';
    return s.split('').filter(char=>v.includes(char))
}
let s='testyendra';
let out=vow(s);
console.log(out);
