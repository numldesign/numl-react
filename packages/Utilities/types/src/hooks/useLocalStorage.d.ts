export declare function useLocalStorage<T>(
  key: string,
  initialValue: T
): readonly [T, (value: any) => void];
