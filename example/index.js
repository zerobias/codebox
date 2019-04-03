
const {flow, prettier, babel} = require('@zerobias/codebox')

void async function run() {
  const code = `
  //@flow

  class Box<T> {
    value: T = null
  }
  export const box = new Box<number>()

  `
  const typecheck = await flow(code)
  const compiled = await babel(code)
  const pretty = await prettier(code)

  console.log(`typecheck\n`, typecheck.code)
  console.log(`compiled\n`, compiled.code)
  console.log(`pretty\n`, pretty.code)
}()
