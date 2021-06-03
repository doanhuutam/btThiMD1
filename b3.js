let str= prompt("Nhập chuỗi ");
let count=0
let arr = str.split("");
let arr2=["a","e","u","i","o"]
function checK(arr){
    for(let i=0;i<=arr.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr[i]==arr2[j]){
                count++;
            }
        }
    }
    if(count==0)
        return false;
    else return count;
}
document.write(checK(arr));