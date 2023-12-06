export const periodRegex = /^\d+(\.\d{0,2})?$/;

export const integerRegex = /^([1-9]|[1-9][0-9]|[1][0-9][0-9]|30[0-0])$/;

export const dniRegex = /^\d{8}(?:[-\s]\d{4})?$/;

export const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
