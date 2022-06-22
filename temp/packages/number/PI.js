export const PI = (mode = "api") => {
    let map = new Map();
    map.set("api", () => Math.PI);
    if (!map.has(mode)) mode = "api";
    return map.get(mode)();
};