const get = (key: string) => {
  const data = localStorage.getItem(key);
  if (!data) return "";
  return JSON.parse(data);
};

const set = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));

const remove = (key: string) => localStorage.removeItem(key);

export const AppStorage = { get, set, remove };
