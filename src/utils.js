export const toObj = str => JSON.parse(str);

export const toStr = obj => JSON.stringify(obj);
export const toStrP = obj => JSON.stringify(obj, null, 2);

export const logObj = obj => console.log(toStr(obj));
export const logObjP = obj => console.log(toStrP(obj));

export const alertObj = obj => alert(toStr(obj));
export const alertObjP = obj => alert(toStrP(obj));
