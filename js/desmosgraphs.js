//load graphs
console.log("entered javascript file desmos graphs");

function graphsload()
{
    console.log("entered graphsload function");

    //begin a graph item
    //change below ID to match the div in the html file Id, change latex, change math bounds, change axis info
    var elt = document.getElementById('u1spp1');

    var calculator = Desmos.Calculator(elt,
    {
        zoomButtons: false,
        expressions: false,
        settingsMenu: false
    });
    calculator.setExpressions([
        //don't change the id, but change the latex formula
        {
            id: 'graph',
            latex: 'y=2x+3'
        }
    ]);
    calculator.setMathBounds(
    {
        //change below to change graph bounds
        left: -10,
        right: 10,
        bottom: -10,
        top: 10
    });
    calculator.setGraphSettings(
    {
        //change values below to set axis scale or labels - set to 0 for auto
        xAxisLabel: '', //set this to 2 single quotes for nothing ''
        yAxisLabel: '',
        xAxisStep: 2, // x axis count step
        yAxisStep: 2
    }); //end the graph item

} //end graphsload function
