import { SignInForm } from '@/components/signin-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signin/')({
  component: () => <SignInForm />
})