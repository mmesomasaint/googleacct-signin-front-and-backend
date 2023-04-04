type EmailBodyProps = {
  setPg: () => void
  setIsLoading: (isLoading: boolean) => void
  passEmail: (email: string) => void
}

type EmailFormData = {
  email: string
}

type PasswordBodyProps = {
  email: string
  setPg: () => void
  setIsLoading: (isLoading: boolean) => void
}

type PasswordFormData = {
  email: string
  password: string
}

type PasswordHeaderProps = {
  email: string
}

export type {
  EmailBodyProps,
  EmailFormData,
  PasswordBodyProps,
  PasswordFormData,
  PasswordHeaderProps,
}
