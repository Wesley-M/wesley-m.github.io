import percentageToHex from './percentageToHex'

export function addOpacity(color, opacity = 100) {
    return color + percentageToHex(opacity);
}