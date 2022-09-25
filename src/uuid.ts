export const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    (c == "x"
      ? (Math.random() * 16) | 0
      : (Math.random() * 16) | (0 & 0x3) | 0x8
    ).toString(16)
  );
