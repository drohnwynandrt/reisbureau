function ssPrice(){
var allHol = [ {
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

var colHol = 1;
var htmlTable = "<table><tr><td>Destination</td><td>Euro</td></tr><tr>";

for (var i=0; i<allHol.length;i++){
    htmlTable += "<td>" + sortPrice[i].place + "</td><td>" + sortPrice[i].price +"</td>";
    var next=i+1;
    if(next%colHol==0 && next!=allHol.length){
        htmlTable += "</tr><tr>";
    
    }
}
htmlTable+= "</tr></table>";

document.getElementById("listHol").innerHTML = htmlTable;
};

function ssPlace(){
    var allHol = [ {
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
    
    var sortPlace = allHol.sort(function (a,b){
        if (a.place>b.place) return 1;
        if (b.place>a.place) return -1;
        return 0;

    });
    
    console.log(sortPlace)
    var colHol = 1;
    var htmlTable = "<table><tr><td>Destination</td><td>Euro</td></tr><tr>";
    
    for (var i=0; i<allHol.length;i++){
        htmlTable += "<td>" + sortPlace[i].place + "</td><td>" + sortPlace[i].price +"</td>";
        var next=i+1;
        if(next%colHol==0 && next!=allHol.length){
            htmlTable += "</tr><tr>";
        
        }
    }
    htmlTable+= "</tr></table>";
    
    document.getElementById("listHol").innerHTML = htmlTable;
    };

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
