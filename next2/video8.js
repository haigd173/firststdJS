console.log("hello world ")

let a = {}
let b = 'a'
console.log(`kieu dl a :`,typeof a ,'kieu cua b', typeof b) 

let ojbDCH = {
    Fullname :'DOCHIHAI',
    Birthday:'2001',
    Girlfriend :false 
    
}
let d ='Fullname'
 ojbDCH.d='sa'
 ojbDCH[d] = 'not hai'

JSON
 "{}"
console.log(`His fullname`,ojbDCH.Fullname ,ojbDCH)
console.log(`His birthday`, ojbDCH['Birthday'])
console.log(`His girlfriend`,ojbDCH.Girlfriend)