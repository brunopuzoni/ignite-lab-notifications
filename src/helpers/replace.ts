export type Replace<OriginalType, ReplaceKey> = Omit<
  OriginalType,
  keyof ReplaceKey
> &
  ReplaceKey;
