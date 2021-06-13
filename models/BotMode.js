'use strict'

let botExecutesSignals = true

module.exports = {
  turnOn(){
    botExecutesSignals = true
  },
  turnOff(){
    botExecutesSignals = false
  },
  isOn(){
    return botExecutesSignals
  }

}
