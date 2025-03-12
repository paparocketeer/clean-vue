export interface IUpdateProfile {
  fullname: string;
  email: string;
  phone: string;
  position: string;
}

export interface IGetPasswordRulesRes {
  generatedPasswordExample: string;
  rules: {
    digits: number;
    lowerCase: number;
    maxLength: number;
    minLength: number;
    specialChars: number;
    upperCase: number;
  };
}
