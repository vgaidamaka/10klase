const objectA={
    an:[10,20,30],
    bn:true,
    dn: function () { console.log('greeting') }
}


//JSON.parse()
const jsonnVar = JSON.stringify(objectA)

let k=100
let kstr=k.toString()
//jauns masīva Elements
objectA.cn=[] // vai objectA['cn']=[] 
 
objectA.cn[0]='abc'
objectA.cn[1]='def'


const objectB = () =>{
    console.log(objectA.an.toString())
    console.log(kstr)
    console.log(objectA.cn)
}
//function aa(){
//    console.log(objectA.an.toString())
//}
objectB()
delete objectA.cn
objectA.dn()
console.log(jsonnVar)

