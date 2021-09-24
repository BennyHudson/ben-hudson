export type SpacingKeys = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type SpacingPresets = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Spacing = {
  unit: number;
  fixed: { [P in SpacingKeys]: number };
  responsive: {
    [P in SpacingPresets]: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
};
