function longestCommonPrefix(strs) {
    if (strs.length === 0 || !strs) {
        return "";
    }
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        var currentStrs = strs[i];
        var j = 0;
        while (j < prefix.length &&
            j < currentStrs.length &&
            prefix[j] === currentStrs[j]) {
            j++;
        }
        prefix = prefix.slice(0, j);
    }
    return prefix;
}
var strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));
