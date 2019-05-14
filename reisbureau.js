
 var allHol = [ {
    place: "Denmark",
    price: 340,
    order: "<button id='godenmark'>clickmeden</button>"
},
{
    place: "England",
    price: 250,
    order: "<button id='goengland'>clickmeeng</button>"
},
{
    place: "Egypt",
    price: 560,
    order: "<button id='goegypt'>clickmeegypt</button>"
},
{
    place: "China",
    price: 890,
    order: "<button id='gochina'>clickmechina</button>"
},
{
    place: "India",
    price: 1340,
    order: "<button id='goindia'>clickmeind</button>"
},
{
    place: "Japan",
    price: 1250,
    order: "<button id='gojapan'>clickmejap</button>"
}
]
function ssPrice(){
var sortPrice = allHol.sort(function(a, b){
 return a.price - b.price;
});

var colHol = 1;
var htmlTable = "<table class='table is-fullwidth'><tr><td>Destination</td><td>Euro</td><td>Order</td></tr><tr>";

for (var i=0; i<allHol.length;i++){
    htmlTable += "<td>" + sortPrice[i].place + "</td><td>" + sortPrice[i].price +"</td><td>" + sortPrice[i].order + "</td>";
    var next=i+1;
    if(next%colHol==0 && next!=allHol.length){
        htmlTable += "</tr><tr>";
    
    }
}
htmlTable+= "</tr></table>";

document.getElementById("listHol").innerHTML = htmlTable;
};

function ssPlace(){
    
    var sortPlace = allHol.sort(function (a,b){
        if (a.place>b.place) return 1;
        if (b.place>a.place) return -1;
        return 0;

    });
    
    var colHol = 1;
    var htmlTable = "<table class='table is-fullwidth'><tr><td>Destination</td><td>Euro</td><td>Order</td></tr><tr>";
    
    for (var i=0; i<allHol.length;i++){
        htmlTable += "<td>" + sortPlace[i].place + "</td><td>" + sortPlace[i].price +"</td><td>" + sortPlace[i].order + "</td>";
        var next=i+1;
        if(next%colHol==0 && next!=allHol.length){
            htmlTable += "</tr><tr>";
        
        }
    }
    htmlTable+= "</tr></table>";
    
    document.getElementById("listHol").innerHTML = htmlTable;
    };

// below code not working yet
    function destination(){
        var i= 0;
        document.getElementById("form").innerHTML = "to" + allHol[i].place;

    }

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
