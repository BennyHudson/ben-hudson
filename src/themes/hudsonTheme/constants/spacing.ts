import { Spacing } from './spacing.types'

const unit = 8

const fixed = {
  0: 0,
  1: unit * 1,
  2: unit * 2,
  3: unit * 3,
  4: unit * 4,
  5: unit * 5,
  6: unit * 6,
  7: unit * 7,
  8: unit * 8,
  9: unit * 9,
  10: unit * 10,
}

const spacing: Spacing = {
  unit,
  fixed,
  responsive: {
    0: {
      sm: fixed[0],
      md: fixed[0],
      lg: fixed[0],
      xl: fixed[0],
    },
    1: {
      sm: fixed[1],
      md: fixed[1],
      lg: fixed[1],
      xl: fixed[1],
    },
    2: {
      sm: fixed[2],
      md: fixed[2],
      lg: fixed[2],
      xl: fixed[2],
    },
    3: {
      sm: fixed[2],
      md: fixed[3],
      lg: fixed[3],
      xl: fixed[3],
    },
    4: {
      sm: fixed[3],
      md: fixed[4],
      lg: fixed[4],
      xl: fixed[4],
    },
    5: {
      sm: fixed[3],
      md: fixed[4],
      lg: fixed[5],
      xl: fixed[5],
    },
    6: {
      sm: fixed[4],
      md: fixed[5],
      lg: fixed[6],
      xl: fixed[6],
    },
    7: {
      sm: fixed[5],
      md: fixed[6],
      lg: fixed[7],
      xl: fixed[7],
    },
    8: {
      sm: fixed[6],
      md: fixed[7],
      lg: fixed[8],
      xl: fixed[8],
    },
    9: {
      sm: fixed[6],
      md: fixed[7],
      lg: fixed[9],
      xl: fixed[9],
    },
    10: {
      sm: fixed[6],
      md: fixed[7],
      lg: fixed[10],
      xl: fixed[10],
    },
  },
}

export default spacing
