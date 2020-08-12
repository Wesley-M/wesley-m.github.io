export default function percentageToHex(input) {
  const maxOpacity = 255

  if (input < 0 || input > 100) {
    throw Error('Percent opacity must be a value between 0 and 100')
  }

  const percentage = 100 / input
  const opacity = Math.round(maxOpacity / percentage)
  const hexOpacity = opacity.toString(16)

  return padToTwo(hexOpacity).toUpperCase()
}

function padToTwo (number) {
  return ('0' + number).slice(-2)
}