export type KeyMap = {
  keys: string;
};

export type Handlers = {
  [key: string]: () => void;
};
