// function echo(a: string): string;
// function echo(a: number): number;
// function echo(a: string | number): string | number {
//   return a;
// }

declare function echo2<T extends string | number>(
  a: T
): T extends string ? string : number;
