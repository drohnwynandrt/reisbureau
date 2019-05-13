allHol = [ {
    place: "Denmark",
    price: 340
},
{
    place: "England",
    price: 250
},
{
    place: "Egypt",
    price: 560
},
{
    place: "China",
    price: 890
},
{
    place: "India",
    price: 1340
},
{
    place: "Japan",
    price: 1250
}
]

var sortPrice = allHol.sort(function(a, b){
 return a.price - b.price;
});

function ssPrice(){
    document.getElementById("listHol").innerHTML = sortPrice[0].place +" "+ sortPrice[0].price;
}

console.log(sortPrice)

/*
var allHol = [["Australia", "1350"], ["Germany", "200"], ["UK", "250"], ["Italy", "400"], ["America", "1250"]];
function showHol(){

var colHol = 1;
htmlTable = "<table><tr>";

for (var i=0; i<allHol.length;i++){
    htmlTable += "<td>" + allHol[i][0] +"</td><td>" +allHol[i][1] + "</td>";
    var next=i+1;
    if(next%colHol==0 && next!=allHol.length){
        htmlTable += "</tr><tr>";
    
    }
}
htmlTable+= "</tr></table>";

document.getElementById("listHol").innerHTML = htmlTable;
};

function sortHol(){
    allHol.sort(a,b);
}

*/
