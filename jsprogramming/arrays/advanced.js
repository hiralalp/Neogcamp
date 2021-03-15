
let readlineSync = require('readline-sync');

const makeMatrix=()=>{
    let r = parseInt(readlineSync.question(`Enter number of row: `));
    let c = parseInt(readlineSync.question(`Enter number of column: `));
    let mat=Array(r).fill().map(()=>Array(c).fill())
    for (let i=0; i<r; i++){
        mat[i] = [];                     
        for (let j=0; j<c; j++){
          mat[i][j]= parseInt(readlineSync.question('Enter a value for the cell ' + i + 'x' + j)); 
        }
      }
      return mat
}


//2.transpose of matrix

function transpose(){
    let mat =makeMatrix()
    let tempMatrix=mat[0].map((_, colIndex) => mat.map(row => row[colIndex]));

      return tempMatrix;
}

console.log(transpose())

//3.Find the identity matrix
function is_identity_Matrix(matrix_data) {
  for (let i = 0; i < matrix_data.length; i++) 
   {
    for (let j = 0; j < matrix_data.length; j++)
     {
      if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j)
      {
        return false;
      }
    }
  }
  return true;
}

console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]]))


//1.addition of two matrices
const sumMatrices=(mat1, mat2)=>{

  let r = mat1.length
  let c = mat1[0].length
  let mat=Array(r).fill().map(()=>Array(c).fill())
  for (let i=0; i<r; i++){
      mat[i] = [];                     
      for (let j=0; j<c; j++){
        mat[i][j]= mat1[i][j]+mat2[i][j]
      }
    }
    return mat
}

console.log(sumMatrices([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]],[[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))