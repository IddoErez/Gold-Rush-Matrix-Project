class GoldRush extends Matrix {
    constructor(rowNum, columnNum) {
        super(rowNum, columnNum)
        this.players = [{ num: 1, score: 0 }, { num: 2, score: 0 }]
        this.rowNum = parseInt(rowNum)
        this.columnNum = parseInt(rowNum)
        this.numC = Math.round(0.33 * (parseInt(rowNum) * parseInt(rowNum)))
        this.numWall = Math.round(0.2 * (parseInt(rowNum) * parseInt(rowNum)))
    }
    loadBoard() {
        this.matrix[0][0] = this.players[1].num
        this.matrix[this.rowNum - 1][this.columnNum - 1] = this.players[0].num
        let boardLoaded = false
        let wallsRemain = this.numWall
        let coinsRemain
        this.numC % 2 == 0 ? coinsRemain = this.numC-1 : coinsRemain = this.numC
        while (!boardLoaded) {
            let randomRowWall = Math.floor(Math.random() * Math.floor(this.rowNum))
            let randomColumnWall = Math.floor(Math.random() * Math.floor(this.columnNum))
            if (this.matrix[randomRowWall][randomColumnWall] === "." && wallsRemain > 0) {
                this.matrix[randomRowWall][randomColumnWall] = "Wall"
                wallsRemain--
            }
            let randomRowCoin = Math.floor(Math.random() * Math.floor(this.rowNum))
            let randomColumnCoin = Math.floor(Math.random() * Math.floor(this.columnNum))
            if (this.matrix[randomRowCoin][randomColumnCoin] === "." && coinsRemain > 0) {
                this.matrix[randomRowCoin][randomColumnCoin] = "c"
                coinsRemain--
            }
            boardLoaded = wallsRemain === 0 && coinsRemain === 0
        }
        return this.matrix
    }
    alertWinnerStartOver(player) {
        let self = this
        setTimeout(() => {
            alert(`The winner is player ${player}. \n  Enjoyed? refresh, choose board size and press play`)
        }, 2)

    }
    otherPlayer(i, j) {
        if (this.matrix[i][j] === 1 || this.matrix[i][j] === 2) {
            return true
        }
    }
    winner(player) {
        if (player.score > (this.numC * 10) / 2) { return true }
    }
    wall(i, j) {
        if (this.matrix[i][j] === "Wall") { return true }
    }
    coin(i, j, player) {
        if (this.matrix[i][j] === "c") {
            player.score += 10
            return true
        }
    }
    outOfBounds(move, spot, i) {
        if (move === "up" && spot === 0 ||
            move === "down" && spot > this.matrix.length - 1 ||
            move === "left" && spot === 0 ||
            move === "right" && spot > this.matrix[i].length - 1) { return true }
    }

    movePlayer(player, move) {
        let i = this.findCoordinate(player).i
        let j = this.findCoordinate(player).j

        if (move === "up") {
            let movingPlayer = this.players.find(p => p.num === player)
            if (this.outOfBounds(move, i)) { return alert("You are going out of bounds, dummy") }
            if (this.otherPlayer(i - 1, j)) { return alert("Other player's spot") }
            if (this.wall(i - 1, j)) { return alert("That's a wall. Ouch") }
            this.matrix[i][j] = "."
            if (this.coin(i - 1, j, movingPlayer)) {
                if (this.winner(movingPlayer)) {
                    this.alter(i - 1, j, player)
                    this.alertWinnerStartOver(movingPlayer.num)
                }
            }
            this.alter(i - 1, j, player)
        }

        else if (move === "down") {
            let movingPlayer = this.players.find(p => p.num === player)
            if (this.outOfBounds(move, i + 1)) { return alert("You are going out of bounds, dummy") }
            if (this.otherPlayer(i + 1, j)) { return alert("Other player's spot") }
            if (this.wall(i + 1, j)) { return alert("That's a wall. Ouch") }
            this.matrix[i][j] = "."
            if (this.coin(i + 1, j, movingPlayer)) {
                if (this.winner(movingPlayer)) {
                    this.alter(i + 1, j, player)
                    this.alertWinnerStartOver(movingPlayer.num)
                }
            }
            this.alter(i + 1, j, player)
        }

        else if (move === "right") {
            let movingPlayer = this.players.find(p => p.num === player)
            if (this.outOfBounds(move, j + 1, i)) { return alert("You are going out of bounds, dummy") }
            if (this.otherPlayer(i, j + 1)) { return alert("Other player's spot") }
            if (this.wall(i, j + 1)) { return alert("That's a wall. Ouch") }
            this.matrix[i][j] = "."
            if (this.coin(i, j + 1, movingPlayer)) {
                if (this.winner(movingPlayer)) {
                    this.alter(i, j + 1, player)
                    this.alertWinnerStartOver(movingPlayer.num)
                }
            }
            this.alter(i, j + 1, player)
        }

        else if (move === "left") {
            let movingPlayer = this.players.find(p => p.num === player)
            if (this.outOfBounds(move, j)) { return alert("You are going out of bounds, dummy") }
            if (this.otherPlayer(i, j - 1)) { return alert("Other player's spot") }
            if (this.wall(i, j - 1)) { return alert("That's a wall. Ouch") }
            this.matrix[i][j] = "."
            if (this.coin(i, j - 1, movingPlayer)) {
                if (this.winner(movingPlayer)) {
                    this.alter(i, j - 1, player)
                    this.alertWinnerStartOver(movingPlayer.num)
                }
            }
            this.alter(i, j - 1, player)
        }
        return
    }
}


