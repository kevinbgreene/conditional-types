// import { Tail } from "./tail";

// type Reverse<T extends unknown[]> = T extends []
//   ? []
//   : T extends [infer T1]
//   ? [T1]
//   : T extends [infer T2, infer T3]
//   ? [T3, T2]
//   : T extends [infer T4, ...infer T5]
//   ? [...Reverse<T5>, T4]
//   : never;

// type Reverse<T extends unknown[]> = T extends [infer T1, ...unknown[]]
//   ? [...Reverse<Tail<T>>, T1]
//   : [];

type Reverse<T extends unknown[]> = T extends [infer T1, ...infer T2]
  ? [...Reverse<T2>, T1]
  : [];

export type T = Reverse<[1, 2, 3, 4, 5]>;
