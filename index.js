// Write your solution here!
'use strict'

const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  drivers.push(name)
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
    drivers.shift()
}
function appendDriver(name){
  let tmp = drivers.slice()
  tmp.push(name)
  return tmp
}
function prependDriver(name){
  let tmp = drivers.slice()
  tmp.unshift(name)
  return tmp
}
function removeLastDriver(){
  let tmp = drivers.slice()
  tmp.pop()
  return tmp
}
function removeFirstDriver(){
  let tmp = drivers.slice()
  tmp.shift()
  return tmp
}
