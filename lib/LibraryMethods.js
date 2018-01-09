breakIntoHash = (str) => {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
    }
  }

  return hash;
}

module.exports = {
  breakIntoHash: breakIntoHash
};