//o operador expande um iterável (como um array) em mais elementos

const q1 = ["Jan", "Fev", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

//usando o spread - sao os 3 pontinhos

const year = [...q1, ...q2,...q3,...q4];

console.log(year); 