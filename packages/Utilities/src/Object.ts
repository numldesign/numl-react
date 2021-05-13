const isRefernceNull = (refer: any): boolean =>
  refer &&
  refer.current &&
  refer.current != null &&
  refer.current !== undefined;

function isPlainObject(input: any): boolean {
  return input && !Array.isArray(input) && typeof input === 'object';
}

export { isRefernceNull, isPlainObject };
