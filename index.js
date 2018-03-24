// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

destructivelyAppendDriver = (name) => {
  drivers.push(name)
}

destructivelyPrependDriver = (name) => {
  drivers.unshift(name)
}

destructivelyRemoveLastDriver = () => {
  drivers.pop()
}

destructivelyRemoveFirstDriver = () => {
  drivers.shift()
}

appendDriver = (name) => {
  const newArray = [...drivers, name]
  return newArray
}

prependDriver = (name) => {
  const newArray = [name, ...drivers]
  return newArray
}

removeLastDriver = () => {
  const newArray = drivers.slice(0, drivers.length-1)
  return newArray
}

removeFirstDriver = () => {
  const newArray = drivers.slice(1)
  return newArray

}
