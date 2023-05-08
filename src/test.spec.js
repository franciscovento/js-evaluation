const {usersByFilter, findSongByDuration, commonElements, showCapitalStrings} = require('./checkpoint')
const { users, songs, array1, array2, strings } = require('./data')

describe('First problem', () => {
  test('on users from data should return Maria, Sofia', ( )  => {
    expect(usersByFilter(users)).toStrictEqual(["María", "Sofia"])
  })
  test('on empty array of users, should return "No hay personas con ese filtro"', () => {
    expect(usersByFilter([])).toBe("No hay personas con ese filtro")
  })
  test('if nobody has this condition, should return "No hay personas con ese filtro"', () => {
    expect(usersByFilter([{name: "Roberto", age: 20, country: "Perú"}])).toBe("No hay personas con ese filtro")
  })
})

describe('Second problem', () => {
  test('on songs from data should return "{name: Sweet Child O Mine, artist: Led zeppelin}"', () => {
    expect(findSongByDuration(songs)).toStrictEqual({name: "Stairway to Heaven" , artist: "Led Zeppelin"})
  })
  test('on empty data should return "Ninguna canción cumple con esta condición"', () => {
    expect(findSongByDuration([])).toBe("Ninguna canción cumple con esta condición")
  })
  test('if no songs has more than 6:30 seconds should return "Ninguna canción cumple con esta condición"',() => {
    expect(findSongByDuration([{ name: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" }])).toBe("Ninguna canción cumple con esta condición")
  } )
})

describe('Third problem', () => {
  test('on array1 and array2 from data should return "[manzana, banana]"', () => {
    expect(commonElements(array1, array2)).toStrictEqual(["manzana", "banana"])
  })
  test('if pass empty array should return an empty array', () => {
    expect(commonElements([], [])).toStrictEqual([])
  })
  test('if no matches should return an empty array', () => {
    expect(commonElements(["manzana", "pera", "melocotón"], ["zapato", "zanahoria", "cangrejo"])).toStrictEqual([])
  })
})

describe('Fourth problema', () => {
  test('on strings from data should return [Manzana, Kiwi]', () => {
    expect(showCapitalStrings(strings)).toStrictEqual(["Manzana", "Kiwi"])
  })
  test('on empty array should return "No hay palabras con mayúsculas""', () => {
    expect(showCapitalStrings([])).toBe("No hay palabras con mayúsculas")
  })
  test('if no word starts with capital letters', () => {
    expect(showCapitalStrings(["perro", "cangrejo", 3, 12, "aLejandO"])).toBe("No hay palabras con mayúsculas")
  })
})

