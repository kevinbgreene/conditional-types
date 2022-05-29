type Head<T extends unknown[]> = T extends [infer TT, ...unknown[]]
  ? TT
  : never;

export type T = Head<[1, 2, 3]>;
export type T1 = Head<[1]>;
export type T2 = Head<[]>;

// declare function head<T extends unknown[]>(a: T): Head<T>;
