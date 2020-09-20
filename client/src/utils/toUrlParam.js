type inputType = [String, any];

const mapToParamString = ([key, value]: inputType): string => `${key}=${value}`;

type props<T> = {
  T: string;
};
export const toUrlParams = (obj: props<string>): string =>
  Object.entries(obj).map(mapToParamString).join("&");
