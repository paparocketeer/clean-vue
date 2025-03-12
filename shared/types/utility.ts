export type NestedKeyOf<OT extends object> = {
  [Key in keyof OT & (string | number)]: OT[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<OT[Key]>}`
    : `${Key}`;
}[keyof OT & (string | number)];
