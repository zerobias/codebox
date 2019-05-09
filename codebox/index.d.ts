export const endpoint: string

export function terser(code: string): Promise<{
  success: boolean,
  code: string,
}>

export function prettier(code: string): Promise<{
  success: boolean,
  code: string,
}>

export function babel(code: string): Promise<{
  success: boolean,
  code: string,
}>

export function rollup(opts: {
  files: Array<{name: string, code: string}>,
  entry?: string,
}): Promise<{
  success: boolean,
  code: string,
}>
