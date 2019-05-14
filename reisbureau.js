
 var allHol = [ {
    place: "Denmark",
    price: 340,
    order: "<button onclick='toDes(\"Denmark\")'>clickmeden</button>"
},
{
    place: "England",
    price: 250,
    order: "<button onclick='toDes(\"England\")'>clickmeeng</button>"
},
{
    place: "Egypt",
    price: 560,
    order: "<button onclick='toDes(\"Egypt\")'>clickmeegypt</button>"
},
{
    place: "China",
    price: 890,
    order: "<button onclick='toDes(\"China\")'>clickmechina</button>"
},
{
    place: "India",
    price: 1340,
    order: "<button onclick='toDes(\"India\")'>clickmeind</button>"
},
{
    place: "Japan",
    price: 1250,
    order: "<button onclick='toDes(\"Japan\")'>clickmejap</button>"
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

   
    function toDes(a){
        x = allHol.find(function() {
            
            console.log(a)
            return allHol.place === a
        });

        console.log(x)

        document.getElementById("form").innerHTML = "Would you like to go to " + x.place +"?"
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
