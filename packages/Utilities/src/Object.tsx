const isRefernceNull = (refer: any): boolean =>
  refer &&
  refer.current &&
  refer.current != null &&
  refer.current !== undefined;

function isPlainObject(input: any): boolean {
  return input && !Array.isArray(input) && typeof input === 'object';
}
function isExist(input: any): boolean {
  return (
    input &&
    input !== null &&
    input !== undefined &&
    input !== '' &&
    typeof input !== 'undefined'
  );
}

export { isRefernceNull, isPlainObject, isExist };
