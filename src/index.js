
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0) return []
  return matrix.map((el, index)=> !(index%2)? el : el.reverse()).flat()
}
