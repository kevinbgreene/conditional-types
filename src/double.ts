type Double<T extends 1 | 2 | 3> = T extends 1
  ? 2
  : T extends 2
  ? 4
  : T extends 3
  ? 6
  : never;

declare function double<T extends 1 | 2 | 3>(a: T): Double<T>;

export const x = double(1);
export const y = double(2);
export const z = double(3);
