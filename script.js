const val=document.getElementById("item")
const p1=document.getElementById("p1")

    const wrapper=document.getElementById("wrapper")
    const array=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
    function color(){
        let val='#';
        for(let i=0;i<6;i++){
            val=val+array1()
        }
        wrapper.style.backgroundColor=val
        p1.innerHTML= val;
        console.log(val)
    }
    function array1(){
    let result=Math.floor(Math.random(array)*16)
    return array[result]
    
}