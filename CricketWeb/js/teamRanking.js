
function hideAndShowRanking(clickedId) {
    var id = '';
    if (clickedId == "testClickDiv")
    {
        id = "testdiv";
        var x = document.getElementById(id);
        document.getElementById("testId").classList.add("td-active");
        x.style.display = "block";
        document.getElementById("odidiv").style.display = "none";
        document.getElementById("odiId").classList.remove("td-active");
        document.getElementById("t20div").style.display = "none";
        document.getElementById("t20Id").classList.remove("td-active");
    }
    else if (clickedId == "odiClickDiv") {
        id = "odidiv";
        var x = document.getElementById(id);

        x.style.display = "block";
        document.getElementById("odiId").classList.add("td-active");

        document.getElementById("testdiv").style.display = "none";
        document.getElementById("testId").classList.remove("td-active");
        document.getElementById("t20div").style.display = "none";
        document.getElementById("t20Id").classList.remove("td-active");
    }
    else if (clickedId == "t20ClickDiv") {
        id = "t20div";
        var x = document.getElementById(id);

        x.style.display = "block";
        document.getElementById("t20Id").classList.add("td-active");
        document.getElementById("odidiv").style.display = "none";
        document.getElementById("odiId").classList.remove("td-active");
        document.getElementById("testdiv").style.display = "none";
        document.getElementById("testId").classList.remove("td-active");
    }
    
}
