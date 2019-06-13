import { CONSTANTS } from "../constants";
import { calculateX, calculateY, determineDirectionAfterLeft, determineDirectionAfterRight } from "../helpers";

const { PLACE, MOVE, FACE_LEFT, FACE_RIGHT, REPORT, CLEAR, NORTH } = CONSTANTS

export interface IState {
  xAxis: number
  yAxis: number
  facingDirection: string
  reported: boolean
}

export const initialState:IState = {
  xAxis: 0,
  yAxis: 0,
  facingDirection: NORTH,
  reported: false
}

export const report = (state = initialState, action: {type: string, xAxis?: number, yAxis?: number, facingDirection?: string, reported?: boolean }) => {
  switch (action.type) {

    case PLACE:
      return Object.assign(
        {}, state,
        {
          xAxis: action.xAxis && action.xAxis < 5 ? action.xAxis : state.xAxis, // retains xAxis if the robot gets out of the table
          yAxis: action.yAxis && action.yAxis < 5 ? action.yAxis : state.yAxis, // retains yAxis if the robot gets out of the table
          facingDirection: action.facingDirection && action.facingDirection
        })

    case MOVE:
      const calculatedX = calculateX(state.xAxis, state.facingDirection)
      const calculatedY = calculateY(state.yAxis, state.facingDirection)

      let isOutOfTable = false

      if ( calculatedX < 0 || calculatedX > 4 ) {
        isOutOfTable = true
      }
      else if ( calculatedY < 0 || calculatedY > 4 ) {
        isOutOfTable = true
      }

      return Object.assign(
        {}, state,
        {
          xAxis: isOutOfTable ? state.xAxis : calculatedX,
          yAxis: isOutOfTable ? state.yAxis: calculatedY
        }
      )

    case FACE_LEFT:
      return Object.assign(
        {}, state,
        {facingDirection: determineDirectionAfterLeft(state.facingDirection)}
      )

    case FACE_RIGHT:
      return Object.assign(
        {}, state,
        {facingDirection: determineDirectionAfterRight(state.facingDirection)}
      )

    case REPORT:
      return Object.assign(
        {}, state,{reported: true})

    case CLEAR:
      return Object.assign(
        {}, initialState)

    default:
      return state
  }
}