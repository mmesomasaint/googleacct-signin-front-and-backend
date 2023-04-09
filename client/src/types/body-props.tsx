type EmailBodyProps = {
  setIsLoading: (isLoading: boolean) => void
  passBack: (id: string, email: string, ) => void
}

type EmailFormData = {
  userId: string
  email: string
}

type PasswordBodyProps = {
  userId: string
  setIsLoading: (isLoading: boolean) => void
  passPassword: (password: string) => void
}

type PasswordFormData = {
  userId: string
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
