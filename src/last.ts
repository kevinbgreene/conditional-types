type Last<T extends unknown[]> = T extends [...unknown[], infer TT]
  ? TT
  : never;

type T = Last<[1, 2, 3]>; // 3
type T1 = Last<[1]>; // 1
type T2 = Last<[]>; // never
