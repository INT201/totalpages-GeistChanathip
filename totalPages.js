const { template } = require('@babel/core')
/*ให้เขียน Function ชื่อ totalPages (arrayItems, rowsPerPage) โดยที่ arrayItems คือ array ของรายการ Items ทั้งหมด และ rowsPerPage 
คือ จำนวนรายการ Item ที่จะแสดงต่อ 1 Page โดยฟังก์ชันจะ return จำนวน page ที่คำนวณได้
กรณี arrayItems เป็น null หรือ undefined ให้ return undefined
กรณี rowsPerPage เป็น null หรือ undefined หรือเป็น 0 จะ return 1*/
function totalPages(arrayItems, rowsPerPage) {
  
 if(arrayItems==null||arrayItems==undefined){
  return undefined
 }else if (rowsPerPage===null||rowsPerPage===undefined||rowsPerPage===0){
  return 1
 }else{
  let page = arrayItems.length/rowsPerPage
  return Math.ceil(page)
 }
 
}

//let  arr=['item1', 'item2', 'item3','item4', 'item5', 'item6','item7', 'item8', 'item9']
//console.log(totalPages(arr,0))
module.exports = totalPages
