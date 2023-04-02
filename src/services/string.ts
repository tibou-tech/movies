/*
|--------------------------------------------------------------------------
| String helpers
|--------------------------------------------------------------------------
|
| This is where you can register string helpers.
|
*/

import { truncate } from 'lodash'

declare global {
  interface String {
    limit(length: number): string
    capitalize(): string
  }
}

String.prototype.limit = function (this: string, limit = 32) {
  return truncate(this, {
    length: limit
  })
}

String.prototype.capitalize = function (this: string) {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
