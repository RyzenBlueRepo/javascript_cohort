const teas = {
    name : "Lemon tea",
    type : "Green",
    caffine : "low"
}
// acess name and type
console.log(teas.name);
console.log(teas.type);
console.log(teas["type"]);
//add new property to object
teas.orign = "China";
console.log(teas);

teas.caffine = "medium"
delete teas.type

console.log("origin" in teas);








