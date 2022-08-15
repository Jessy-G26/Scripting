export default function array3D(input1, input2, input3) {
  const matrix = [];

  for (let a = 0; a < input1; a++) {
    matrix[a] = [];
    for (let b = 0; b < input2; b++) {
      matrix[a][b] = [];
      for (let c = 0; c < input3; c++) {
        matrix[a][b][c] = a * b * c;
      }
    }
  }

  return matrix;
}
