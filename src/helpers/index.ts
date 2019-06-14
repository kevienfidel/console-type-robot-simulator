import { CONSTANTS } from "../constants";

const { NORTH, SOUTH, EAST, WEST } = CONSTANTS

export const calculateX = (xAxis: number, facingDirection: string) => {
  if (facingDirection === EAST){
    return xAxis + 1
  }
  if (facingDirection === WEST){
    return xAxis - 1
  }

  return xAxis
}

export const calculateY = (yAxis: number, facingDirection: string) => {
  if (facingDirection === NORTH){
    return yAxis + 1
  }
  if (facingDirection === SOUTH){
    return yAxis - 1
  }

  return yAxis
}

export const determineDirectionAfterLeft = ( facingDirection: string ) => {
  switch (facingDirection) {
    case NORTH:
      return WEST

    case SOUTH:
      return WEST

    case EAST:
      return NORTH

    case WEST:
      return SOUTH

    default:
      return facingDirection
  }
}

export const determineDirectionAfterRight = ( facingDirection: string ) => {
  switch (facingDirection) {
    case NORTH:
      return EAST

    case SOUTH:
      return EAST

    case EAST:
      return SOUTH

    case WEST:
      return NORTH

    default:
      return facingDirection
  }
}

export const validateCommand = ( commandString: string ) => {
  let isValid = false

  const placeCommandRegExp = /PLACE [0-9][,][0-9][,](NORTH|SOUTH|EAST|WEST)/
  const moveRegExp = /MOVE/
  const leftRegExp = /LEFT/
  const rightRegExp = /RIGHT/
  const clearRegExp = /CLEAR/
  const reportRegExp = /REPORT/

  const regExpArray = [placeCommandRegExp, moveRegExp, leftRegExp, rightRegExp, clearRegExp, reportRegExp]

  isValid = regExpArray.map((regExp) => {
    return regExp.test(commandString)
  }).includes(true)

  return isValid
}