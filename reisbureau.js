function showHol(){
var allHol = [["Australia", "1350"], ["Germany", "200"], ["UK", "250"], ["Italy", "400"], ["America", "1250"]];
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


