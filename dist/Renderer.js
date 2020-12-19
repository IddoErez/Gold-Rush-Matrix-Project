class Renderer {
       renderBoard(matrix) {
        const source = $("#matrix-template").html()
        const template = Handlebars.compile(source)
        const board = template({ matrix })
        $("#matrix").empty().append(board)

    }
    renderScore1(score1) {
        const source = $("#score1-template").html()
        const template = Handlebars.compile(source)
        const scorePlayer1 = template({score1}) 
        $("#score1").empty().append(scorePlayer1)
    }
    renderScore2(score2) {
        const source = $("#score2-template").html()
        const template = Handlebars.compile(source)
        const scorePlayer2 = template({score2})
        $("#score2").empty().append(scorePlayer2)
    }
}



    // renderExpenses(expensesList) {
    //     $("#expenses-list").empty()
    //     $("#newExpense").empty()
    //     const source = $("#Expenses-template").html()
    //     const template = Handlebars.compile(source)
    //     let newHtml = template({ expensesList })
    //     $("#expenses-list").append(newHtml)
    // }
    // renderAdd(NewExpense) {
    //     $("#newExpense").empty()
    //     const source = $("#addExpense-template").html()
    //     const template = Handlebars.compile(source)
    //     let newHtml = template( NewExpense )
    //     $("#newExpense").append(newHtml)




