function myFunction(){
    // var ele = document.getElementById('primary')
    // var a = ele.getBoundingClientRect()
    // var eles1 = document.getElementById('flag1')
    // var eles2 = document.getElementById('flag2')
    // if(!(a.top>0)){
    //     eles1.style.position = 'fixed'
        // eles2.style.position = 'fixed'
        // eles2.style.right = '8px'
    // }else{
    //     eles1.style.position = 'absolute'
        // eles2.style.position = 'absolute'
        // eles2.style.right = '0px'
    // }

    var eleNew = document.getElementById('vibrant')
        var b = eleNew.getBoundingClientRect() 
        var eles3 = document.getElementById('flag3')
        console.log(b.top);
        if(b.top<-225){
            eles3.style.visibility = 'visible'
        }else{
            eles3.style.visibility = 'hidden'
        }    
}