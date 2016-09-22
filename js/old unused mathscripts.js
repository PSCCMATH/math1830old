console.log("entered javascript file");
//solutions are visible by default if changed in the css file then set below to false
var solutionsVisible = true;
//answers are visible by default if changed in the css file then set below to false
var answersVisible = true;
//toggle button for solutions

// function w3_open()
// {
//     document.getElementById("mySidenav").style.display = "block";
//     document.getElementById("myOverlay").style.display = "block";
// }

// function w3_close()
// {
//     document.getElementById("mySidenav").style.display = "none";
//     document.getElementById("myOverlay").style.display = "none";
// }

function togglesolutions()
{
    w3_close();
    console.log("entered solution toggle function, solutionsVisible is " + solutionsVisible);

    if (solutionsVisible == false)
    {
        showsolutions();
        showanswers();
    }
    else
    {
        hidesolutions();
        hideanswers();
    }
}

//hide button for solutions
function hidesolutions()
{
    console.log("entered hide function for class m1830-solution");
    var tagslist = document.getElementsByClassName("m1830-solution");
    // var numtabs = tagslist.length;
    solutionsVisible = false;
    document.getElementById("togglesolution").className = "w3-hover-green";

    i = 0;
    while (i < tagslist.length)
    {
        //    tagslist[i].style.display = "none";
        tagslist[i].style.visibility = "hidden";
        i++;
    }
    // hideanswers();
}

//show button for solutions
function showsolutions()
{
    console.log("entered show function for class name m1830-solution");
    var tagslist = document.getElementsByClassName("m1830-solution");
    // var numtabs = tagslist.length;
    solutionsVisible = true;
    document.getElementById("togglesolution").className = "w3-hover-green w3-pale-red";
    i = 0;
    while (i < tagslist.length)
    {
        //  tagslist[i].style.display = "inline-block";
        tagslist[i].style.visibility = "visible";
        i++;
    }

}


function toggleanswers()
{
    w3_close();
    console.log("entered answer toggle function, answersVisible is " + answersVisible);

    if (answersVisible == false)
    {
        showanswers();
    }
    else
    {
        hideanswers();
        hidesolutions();
    }
}

//hide button for answers
function hideanswers()
{
    console.log("entered hide function for class m1830-answer");
    var tagslist = document.getElementsByClassName("m1830-answer");
    // var numtabs = tagslist.length;
    answersVisible = false;
    document.getElementById("toggleanswer").className = "w3-hover-green";
    i = 0;
    while (i < tagslist.length)
    {
        //    tagslist[i].style.display = "none";
        tagslist[i].style.visibility = "hidden";
        i++;
    }

}

//show button for answers
function showanswers()
{
    console.log("entered show function for class name answer");
    var tagslist = document.getElementsByClassName("m1830-answer");
    // var numtabs = tagslist.length;
    answersVisible = true;
    document.getElementById("toggleanswer").className = "w3-hover-green w3-pale-red";
    i = 0;
    while (i < tagslist.length)
    {
        //  tagslist[i].style.display = "inline-block";
        tagslist[i].style.visibility = "visible";
        i++;
    }
}
