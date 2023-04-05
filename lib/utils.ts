export const enumToArrayOfObjects = (e: any) => {
    return Object.keys(e).map(key => ({ title: key, value: e[key] }));
};
