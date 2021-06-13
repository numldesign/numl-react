declare const useBinding: (
  name: string,
  form: {
    [x: string]: any;
  },
  initialValue: any
) => [any, any];
export { useBinding };
