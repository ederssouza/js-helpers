export function sum (num1: number, num2: number): number {
  return num1 + num2
}

interface IJStest {
  name: string
  surname: string
}

export class JStest implements IJStest {
  constructor ({ name = '', surname = '' }) {
    this.name = name
    this.surname = surname
  }

  name: string
  surname: string

  fullName () {
    return `${this.name} ${this.surname}`
  }
}
