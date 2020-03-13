export type ValidationError = string;

export interface CommonValidationErrorCollection {
  [key: string]: ValidationError;
}

export interface Error {
  message?: string;
  code?: number;
  status_code?: number;
  validation?: CommonValidationErrorCollection;
}

export interface ServiceResponse<F, FT> {
  original: F;
  transformed: FT;
}
