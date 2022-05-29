declare function echo(a: string): string;
declare function echo(a: number): number;
declare function echo(a: string | number): string | number;

declare function echo2<T extends string | number>(
  a: T
): T extends string ? string : number;
