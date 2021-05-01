const isRefernceNull = (refer: any) => {
  return refer && refer.current && refer.current != null && refer.current != undefined;
};

function isPlainObject(input: any) {
  return input && !Array.isArray(input) && typeof input === 'object';
}

export { isRefernceNull, isPlainObject };
