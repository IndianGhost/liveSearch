$(document).ready(function(){
    $.getJSON("js/data.json", function(results){
        var thead = "";
        var tbody = "";
        var keyNames = Object.keys(results[0]);
        for (var i = 0; i < keyNames.length; i++) {
            thead += "<th>"+keyNames[i]+"</th>";
            console.log(results[0][keyNames[i]]);
        }
        
        for(var j=0; j<results.length; j++)
        {
            tbody += "<tr>";
            for(var i=0; i<keyNames.length; i++)
            {
                tbody += "<td>"+results[j][keyNames[i]]+"</td>";
            }
            tbody += "</tr>";
        }
            
        $("thead").append("<tr>"+thead+"</tr>");
        $("tbody").append(tbody);
    });
});