export function debounce(func,delay) {
  let timer = null
  return function(...arg) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // 大于delay时间才返回传进来的func
      func.apply(this,arg)
    }, delay);
  }
  
}