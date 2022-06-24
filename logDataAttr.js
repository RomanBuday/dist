function logDataAttr(event){ 
let el = Object.entries(event.target.dataset); 
if(el.length === 0) console.log('У этого элемента 0 дата аттрибутов') 
else { 
    console.log(`У этого элемента ${el.length} дата ${declOfNum(el.length, ['аттрибут', 'аттрибута', 'аттрибутов'])}`); 
    el.forEach(item => console.log(`Аттрибут ${item[0]} - ${item[1]}`)) 
} 
} 
 
function declOfNum(number, titles) {   
    cases = [2, 0, 1, 1, 1, 2];   
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];   
}
