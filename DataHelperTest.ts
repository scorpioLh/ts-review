// DataHelper类 - 负责 localStorage 操作
class DetaHelper {
  dataKey: string
  primaryKey: string

  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey
    this.primaryKey = primaryKey
  }

  readData():any {
    const strData: string | null = localStorage.getItem(this.dataKey)
    let arrData: any = []
    if (strData) {
      arrData = JSON.parse(strData)
    }
    return strData
  }

  saveData(arrData: Array<Object>):void {
    const str: string = JSON.stringify(arrData)
    localStorage.setItem(this.dataKey, str)
  }

  addData(conStr: string): number {
    const arr: any = this.readData()
    let newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1
    let obj: any = {
      content: conStr
    }
    obj[this.primaryKey] = newId
    arr.push(obj)
    this.saveData(arr)
    return newId
  }

  removeDataById(id: string): boolean {
    const arr = this.readData()
    let index = arr.findIndex((ele: any) => {
      return ele[this.primaryKey].toString() === id.toString()
    })
    if (index > -1) {
      arr.splice(index, 1)
      this.saveData(arr)
      return true
    }
    return false
  }
}