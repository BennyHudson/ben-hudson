export type colorsTypeKeys =
  'pink' |
  'red' |
  'green' |
  'orange' |
  'yellow' |
  'blue' |
  'primary' |
  'secondary'

export type Colours = {
  [key in colorsTypeKeys]: string;
};
