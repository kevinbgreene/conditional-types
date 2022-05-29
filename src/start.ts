type Start<T extends unknown[]> = T extends [...start: infer TT, _: unknown]
  ? TT
  : never;

export type T = Start<[1, 2, 3, 4]>;
