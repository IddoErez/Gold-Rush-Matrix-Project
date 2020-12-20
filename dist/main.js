let render = new Renderer()
let board

$("button").on("click", ()=>{
    let rows = $("#rows").val()
    let columns= $("#columns").val()
    board = new GoldRush(rows, columns)
    board.loadBoard()
    render.renderBoard(board.matrix)
    $("#matrix").css("grid-template-rows", `repeat(${rows}, 1fr)`)
    $(".matrix").css("grid-template-columns", `repeat(${columns}, 1fr`)
    render.renderScore1(board.players[1].score)
    render.renderScore2(board.players[0].score)   
})

$(document).keypress(function (e) {
    switch (e.which) {
        case 105:
            board.movePlayer(1, "up")
            render.renderBoard(board.matrix)
            render.renderScore1(board.players[0].score)
            break;
        case 107: 
            board.movePlayer(1, "down")
            render.renderBoard(board.matrix)
            render.renderScore1(board.players[0].score)
            break;
        case 106:
            board.movePlayer(1, "left")
            render.renderBoard(board.matrix)
            render.renderScore1(board.players[0].score)
            break;
        case 108:
            board.movePlayer(1, "right")
            render.renderBoard(board.matrix)
            render.renderScore1(board.players[0].score)
            break;
        case 119:
            board.movePlayer(2, "up")
            render.renderBoard(board.matrix)
            render.renderScore2(board.players[1].score)
            break;
        case 115:
            board.movePlayer(2, "down")
            render.renderBoard(board.matrix)
            render.renderScore2(board.players[1].score)
            break;
        case 97:
            board.movePlayer(2, "left")
            render.renderBoard(board.matrix)
            render.renderScore2(board.players[1].score)
            break;
        case 100:
            board.movePlayer(2, "right")
            render.renderBoard(board.matrix)
            render.renderScore2(board.players[1].score)
            break;
    }
})


