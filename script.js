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

// The charCodeAt() method returns the Unicode (ASCII for non-special characters) of the character at the specified index in a string.
// On the other hand, charAt() method returns the character at the specified index in a string.
// For example, if you have a string str = "hello", str.charCodeAt(0) will return 104 which is the ASCII value of h, while str.charAt(0) will simply return the character h.
// In your case, you need to use charCodeAt() because you're using the ASCII values as indices for your freq array. 
