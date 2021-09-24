export type colorsTypeKeys =
  'pink' |
  'red' |
  'green' |
  'orange' |
  'primary' |
  'secondary'

export type Colours = {
  [key in colorsTypeKeys]: string;
};
