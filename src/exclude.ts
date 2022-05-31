type ExcludeProps<T extends object, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export type T = ExcludeProps<
  {
    one: string;
    two: string;
  },
  "two"
>;

export type T1 = Pick<
  {
    one: string;
    two: string;
  },
  "one"
>;
