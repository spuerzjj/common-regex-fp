import { CheckFunc } from './check'

// 函数式编程相关

// 并
const and = (...args: Array<CheckFunc>): CheckFunc => {
  let len = args.length
  let lastFn = args[len - 1]
  return (str: string) => {
    let lastResult = lastFn(str)
    if (len === 1 || lastResult === false) {
      return lastResult
    } else {
      return and(...args.slice(0, len - 1))(str)
    }
  }
}

// 或
const or = (...args: Array<CheckFunc>): CheckFunc => {
  let len = args.length
  let lastFn = args[len - 1]
  return (str: string) => {
    let lastResult = lastFn(str)
    if (len === 1 || lastResult === true) {
      return lastResult
    } else {
      return or(...args.slice(0, len - 1))(str)
    }
  }
}

export { and, or }
