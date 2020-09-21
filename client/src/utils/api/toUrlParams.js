const isValidAsParamValue = ([, value]) =>
  !(isNullOrUndefined(value) || (Array.isArray(value) && !value.length));

const mapToParamString = ([key, value]) => `${key}=${value}`;

const isNullOrUndefined = value => value === null || value === undefined;

export const toUrlParams = obj =>
  Object.entries(obj)
    .filter(isValidAsParamValue)
    .map(mapToParamString)
    .join('&');
