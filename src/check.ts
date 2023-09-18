// 返回一个校验方法

// 校验函数
type CheckFunc = (str: string) => Boolean

function useChecker(reg: string): CheckFunc
function useChecker(reg: RegExp): CheckFunc

function useChecker(reg: string | RegExp) {
  if (typeof reg === 'string') {
    return (str: string) => new RegExp(reg).test(str)
  }

  if (reg instanceof RegExp) {
    return (str: string) => reg.test(str)
  }
}

export { useChecker, CheckFunc }
