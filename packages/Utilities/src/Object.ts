const isRefernceNull = (refer: any) => {
  return refer && refer.current && refer.current != null && refer.current != undefined;
};

export { isRefernceNull };
