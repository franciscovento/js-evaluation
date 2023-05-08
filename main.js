const { usersByFilter, findSongByDuration, commonElements, showCapitalStrings } = require("./src/checkpoint");
const { users, songs, array1, array2, strings } = require("./src/data");


const resp = usersByFilter(users)
const resp2 = findSongByDuration(songs)
const resp3 = commonElements(array1, array2)
const resp4 = showCapitalStrings(strings)

console.log({1: resp})
console.log({2: resp2})
console.log({3: resp3})
console.log({4: resp4})