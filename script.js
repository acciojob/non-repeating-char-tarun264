function firstNonRepeatedChar(str) {
 let freq = new Array(256).fill(0);
    for(let i = 0; i < str.length; i++){
        freq[str.charCodeAt(i)]++;
    }
    let ans = null;
    for(let i = 0; i < str.length; i++){
        if(freq[str.charCodeAt(i)] == 1){
            ans = str.charAt(i);
            break;
        }
    }
return ans;
}
  const input = prompt("Enter a string");
  alert(firstNonRepeatedChar(input)); 
