/** 
 * 
 * 基础类型 
 * 
 */
// 1、字符串类型
let dName: string = 'Ruiky'

// 2、数值类型
let dAge: number = 12

// 3、bool类型
let isSingleDog: boolean = true

// 4、undefined 和 null
let undef: undefined = undefined
let nul: null = null

// 5、数组
let arrHero: string[] = ['aaa', 'bbb', 'ccc']
let arrHeroAge: number[] = [1, 2, 3]
let arrHeroAge2: Array<number> = [11, 22, 33]

// 6、元组(tuple): 一个已知元素数量 和 每个元素类型的数组，内部的元素类型 不必相同
let tup1: [string, number, boolean] = ['卧槽？', 22, true] 
tup1 = ['???', 33, false]

// 7、枚举(enum): 用一组标识来代表数值，方便程序员调用理解
// 7.1 创建性别枚举
enum Gender {
  Boy = 1,
  Girl = 2,
  Unknown = 3
}

enum Gender2 {
  Boy,
  Girl,
  Unknown
}
console.log(Gender2.Boy)      // 0
console.log(Gender2.Girl)     // 1
console.log(Gender2.Unknown)  // 2

// 7.2 使用性别枚举
let usrSex: Gender = Gender.Boy
console.log(usrSex)
if (usrSex === Gender.Boy) {
  console.log('相等') // 1
} else {
  console.log(usrSex)
}

/** 
 * 
 * 函数 
 * 
 */
// 1、函数 返回值类型
function sayHi() {
  return 'hi~old driver~'
}
let res1: string = sayHi()
// 2、函数 形参 类型
function jumpSan(cityName: string): void {
  console.log('去哪里跳伞？')
  console.log(`去${cityName}`)
}
jumpSan('北京')