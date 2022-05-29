export type Tail<T extends unknown[]> = T extends [
  _: unknown,
  ...tail: infer TT
]
  ? TT
  : never;

export type T = Tail<[1, 2, 3]>; // [2,3]
export type T1 = Tail<[1]>; // []
export type T2 = Tail<[]>; // never
