let arr=[1,2,3]
function checK (a,b){

    for (let i=0;i<arr.length;i++){
        if (a==arr[i]){
            a=document.write('số có nằm trong mảng đang ở vị trí số '+i);
            return
        }else{
            a=document.write('số không nằm trong mảng');

        }
        return a;
    }
}
checK(4,arr)