/**
 * @param value string // that you want to change.
 * @param forceExecute boolean // in case want to function works optional, use this param.
 * @returns string
 */

export function lastCharToUpperCase(value: string, forceExecute?: boolean) {
  switch (forceExecute) {
    case false:
      return value;
    default:
      return `spacing_${value.charAt(value.length - 1).toUpperCase()}`;
  }
}
