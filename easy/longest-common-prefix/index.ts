function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0 || !strs) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let currentStrs = strs[i];
    let j = 0;
    while (
      j < prefix.length &&
      j < currentStrs.length &&
      prefix[j] === currentStrs[j]
    ) {
      j++;
    }
    prefix = prefix.slice(0, j);
  }
  return prefix;
}
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));
