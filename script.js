let parityPlayer = 0;
let gameStatus = document.getElementById("status");
const grid = [...Array(10).keys()]
const clicked = (id) =>
{
    const subgrid = document.getElementById(id);
    placeAction(subgrid);
    rowWinner();
    columnWinner();
    diaWinner();
    tie();
}
const placeAction = (subgrid) =>
{
    if (subgrid.innerHTML.includes("x") || subgrid.innerHTML.includes("o"))
        return;
    else
    {
        if (parityPlayer % 2 === 0)
        {
            subgrid.innerHTML = "x"
            grid[Array.from(subgrid.parentNode.children).indexOf(subgrid)] = "x";
        }
        else
        {
            subgrid.innerHTML = "o"
            grid[Array.from(subgrid.parentNode.children).indexOf(subgrid)] = "o";
        }       
    }
}
const rowWinner = () =>
{
    if ((grid[0] === "x" && grid[1] === "x" && grid[2] === "x") || (grid[0] === "o" && grid[1] === "o" && grid[2] === "o") ) 
        winner();
    else if ((grid[3] === "x" && grid[4] === "x" && grid[5] === "x") || (grid[3] === "o" && grid[4] === "o" && grid[5] === "o"))
        winner();
    else if ((grid[6] === "x" && grid[7] === "x" && grid[8] === "x") || (grid[6] === "o" && grid[7] === "o" && grid[8] === "o"))
        winner();

}

const columnWinner = () =>
{
    if ((grid[0] === "x" && grid[3] === "x" && grid[6] === "x") || (grid[0] === "o" && grid[3] === "o" && grid[6] === "o") )
        winner();
    else if ((grid[1] === "x" && grid[4] === "x" && grid[7] === "x") || (grid[1] === "o" && grid[4] === "o" && grid[7] === "o"))
        winner();
    else if ((grid[2] === "x" && grid[5] === "x" && grid[8] === "x") || (grid[2] === "o" && grid[5] === "o" && grid[8] === "o"))
        winner();
}

const diaWinner = () =>
{
    if ((grid[0] === "x" && grid[4] === "x" && grid[8] === "x") || (grid[0] === "o" && grid[4] === "o" && grid[8] === "o") )
        winner();
    else if ((grid[2] === "x" && grid[4] === "x" && grid[6] === "x") || (grid[2] === "o" && grid[4] === "o" && grid[6] === "o"))
        winner();
}
const tie =() =>
{
    if (parityPlayer > 7)
        gameStatus.innerHTML = "TIE"
    parityPlayer++;
}
const winner = () =>
{
    if (parityPlayer % 2 === 0)
        gameStatus.innerHTML = "X is the winner"
    else
        gameStatus.innerHTML = "O is the winner"
}