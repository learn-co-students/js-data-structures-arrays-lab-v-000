const drivers = ["Milo", "Otis", "Garfield"]

destructivelyAppendDriver = (name) => (
  drivers.push(name)
)

destructivelyPrependDriver = (name) => (
  drivers.unshift(name)
)

destructivelyRemoveLastDriver = (name) => (
  drivers.pop(name)
)
destructivelyRemoveFirstDriver = (name) => (
  drivers.shift(name)
)

appendDriver = (name) => (
  [...drivers, name]
)

prependDriver = (name) => (
  [name, ...drivers]
)

removeLastDriver = (name) => {
  let elementCount = drivers.length
  return drivers.slice(0, elementCount - 1)
}

removeFirstDriver = (name) => {
  let elementCount = drivers.length
  return drivers.slice(1, elementCount)
}
