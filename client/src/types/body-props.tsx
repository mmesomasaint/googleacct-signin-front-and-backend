type EmailProps = {
  setPg: () => void;
  setIsLoading: (isLoading: boolean) => void;
  passEmail: (email: string) => void
};

type EmailFormData = {
  email: string;
};

type PasswordProps = {
  setPg: () => void;
  setIsLoading: (isLoading: boolean) => void;
}

type PasswordFormData = {
  password: string;
};

export type {
  EmailProps,
  EmailFormData,
  PasswordProps,
  PasswordFormData
}