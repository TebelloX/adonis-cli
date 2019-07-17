/*
* @adonisjs/cli
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import * as boxen from 'boxen'
import { BaseCommand } from '@adonisjs/ace'

/**
 * Logs info with help text
 */
export function logInfo (command: BaseCommand, message: string, helpText?: string) {
  command.$info(`${message} ${helpText ? command.colors.dim().yellow(helpText) : ''}`)
}

/**
 * Logs the ts compile error inside a box, so that it's easy
 * to discover visually.
 */
export function logTsCompilerError (title: string, body: string) {
  console.error(boxen(`${title}\n${body}`, {
    padding: {
      top: 0,
      bottom: 0,
      left: 1,
      right: 1,
    },
    borderColor: 'red',
  }))
}

/**
 * Logs pair text
 */
export function logPairs (command: BaseCommand, textPairs: string[][]) {
  let message = ''

  textPairs.forEach((pair) => {
    message += `${pair[0]}${command.colors.dim().yellow(pair[1])}`
  })

  command.$info(message)
}
