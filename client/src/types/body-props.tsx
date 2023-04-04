type EmailProps = {
  setPg: () => void
  setIsLoading: (isLoading: boolean) => void
  passEmail: (email: string) => void
}

type EmailFormData = {
  email: string
}

type PasswordProps = {
  email: string
  setPg: () => void
  setIsLoading: (isLoading: boolean) => void
}

type PasswordFormData = {
  email: string
  password: string
}

export type { EmailProps, EmailFormData, PasswordProps, PasswordFormData }
