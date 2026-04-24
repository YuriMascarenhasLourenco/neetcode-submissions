class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length !== t.length) return false
       let map = {}
       for(let i=0; i<s.length;i++){
            map[s[i]]= (map[s[i]] || 0) + 1
        }
       for(let j=0;j<t.length;j++){
         if(!map[t[j]]){
            return false
         }
          map[t[j]]--
        }
    return true
}
}