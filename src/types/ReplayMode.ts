export const ReplayMode = {
  Normal: "normal",
  Boundary: "boundary",
  Never: "never",
} as const;

export type ReplayMode =
  typeof ReplayMode[keyof typeof ReplayMode];