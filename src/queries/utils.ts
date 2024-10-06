export type GetNullable<T, Prop extends keyof NonNullable<T>> = NonNullable<T>[Prop]
