export function greeting(){
  return "Hello World!"
}

const CONSTANT = {
  "NAME" : "CORN",
  "AGE" : "31",
  "print":function(){
    return `${this.NAME} : ${this.AGE}`
  }
}

export {CONSTANT}

export default{
  bye(){
    return 'Good bye'
  },
  name:'옥수수'
}