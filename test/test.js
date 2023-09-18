import { useChecker, REG, and, or } from 'field-checker'

let checker1 = useChecker(REG.Phone)
let checker2 = useChecker(REG.Id)

let c1 = and(checker1, checker2)
let c2 = or(checker1, checker2)

console.log(c1('18036507270'))
console.log(c2('18036507270'))
