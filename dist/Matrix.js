class Matrix {
    constructor(rowNum, columnNum) {
        this.matrix = this.generateMatrix(rowNum, columnNum)
    }
    generateMatrix(numRows, numColumns) {
        let matrix = []
        // let num = 1
        for (let i = 0; i < numRows; i++) {
            matrix.push([])
            for (let j = 0; j < numColumns; j++) {
                matrix[i].push(".")
            }
        }
        return matrix
    }

    print() {

        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }


    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    printRow(RowNum) {
        let line = ""
        for (let j = 0; j < this.matrix[RowNum].length; j++) {
            line += this.matrix[RowNum][j] + "\t"

        }
        // console.log(line)
    }
    alter(RowNum, colNum, num) {
        this.matrix[RowNum][colNum] = num
        return this.matrix
    }

    get(rowNum, colNum) {
        console.log(this.matrix[rowNum][colNum])
        return this.matrix[rowNum][colNum]
       
    }

    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === value) {
                    return { j: j, i: i }
                }
            }
        }

    }
}

// module.exports = Matrix