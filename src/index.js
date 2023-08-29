module.exports = function check(str, bracketsConfig) {
  let arr = []
  if(str.length %2 !==0) {
    return false
  }
  for(let i=0; i< str.length; i++) {
    let currItem = str[i]
    bracketsConfig.forEach((val, ind)=> {
      if(currItem === val[0] && currItem !== val[1]){
        arr.push(currItem)
      } else if(currItem === val[1] )  { //&& bracketsConfig[ind][1]=== val[1]
        let lastItemInArr = arr[arr.length-1]
        if(lastItemInArr === val[0]) {
          arr.pop()
        } else {
          return false
        }
      }
    })
  }
  return arr.length === 0 ? true : false
}
