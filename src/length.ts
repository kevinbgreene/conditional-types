export type Length<T extends unknown[]> = T["length"];

export type HasLength<
  T extends unknown[],
  N extends number
> = Length<T> extends N ? true : false;

export type T = HasLength<[1, 2, 3], 3>;
export type T1 = HasLength<[1, 2, 3], 2>;
