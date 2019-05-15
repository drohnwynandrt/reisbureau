
 var allHol = [ {
    place: "Denmark",
    price: 340,
    order: "<button onclick='toDes(\"Denmark\")'>Go</button>"
},
{
    place: "England",
    price: 250,
    order: "<button onclick='toDes(\"England\")'>Go</button>"
},
{
    place: "Egypt",
    price: 560,
    order: "<button onclick='toDes(\"Egypt\")'>Go</button>"
},
{
    place: "China",
    price: 890,
    order: "<button onclick='toDes(\"China\")'>Go</button>"
},
{
    place: "India",
    price: 1340,
    order: "<button onclick='toDes(\"India\")'>Go</button>"
},
{
    place: "Japan",
    price: 1250,
    order: "<button onclick='toDes(\"Japan\")'>Go</button>"
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
   
    function toDes(a){
        x = allHol.find(function(b) {
            return b.place === a
        });

        document.getElementById("confirmDes").innerHTML = "Would you like to go to " + x.place + " for €"+x.price+"?" + " <button id='conDesBut'  onclick='confirmDes()'>Yes</button>";
    }

function confirmDes(){
    document.getElementById("form").style.display="block";
    document.getElementById("listHol").style.display = "none";
    document.getElementById("soplb").style.display = "none";
    document.getElementById("soprb").style.display = "none";
    document.getElementById("conDesBut").style.display = "none";
    document.getElementById("confirmDes").innerHTML = "Please fill in the following form to complete your order.";
}

function completeOrder(){
    var customerName = document.getElementById("customerNameField").value;
    var customerEmail = document.getElementById("customerEmailField").value;

    if (customerName == ""  ){
        alert ("Please fill in your name")
    }
    else if (customerEmail == ""){
        alert ("Please fill in your e-mail")
    }
    else  {
        alert("Thank you "+ customerName+" for your purchase. We will contact you through e-mail!");
        window.location = "file:///C:/Users/Drohn%20Wynand%20Tyrad/Documents/CodeGorilla/reisbureau/reisbureau.html";
    } 
}

function cancelOrder(){
    window.location = "file:///C:/Users/Drohn%20Wynand%20Tyrad/Documents/CodeGorilla/reisbureau/reisbureau.html";
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
