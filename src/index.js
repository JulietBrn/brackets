module.exports = function check(str, bracketsConfig) {
  let arr = []
  if(str.length %2 !==0) {
    return false
  }
  for(let i=0; i< str.length; i++) {
    let currItem = str[i]
    bracketsConfig.forEach((val, ind)=> {
      if(currItem === val[0]){
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
  // console.log(bracketsConfig)
  // console.log(str.includes(bracketsConfig))
  // str = str.replaceAll(...bracketsConfig, '')
  // console.log(str)
  // let strIncludesConf = 0
  // function checkStr() {
  //   for(let i =0; i<bracketsConfig.length; i++) {
  //     if(str.includes(bracketsConfig[i])){
  //       strIncludesConf = 1
  //     } else {
  //     strIncludesConf=0
  //     } 
  //   }
  // }
  // do  {
  //     checkStr()
  //     if(strIncludesConf == 1) {
  //       str = str.replaceAll(...bracketsConfig, '')
  //     }
  // } while (strIncludesConf == 1)
  
  // console.log(strIncludesConf)

  // return str.length == 0? true: false
