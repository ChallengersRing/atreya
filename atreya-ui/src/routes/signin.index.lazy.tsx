import { SignInForm } from '@/components/signin-form'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/signin/')({
  component: () => <SignInForm />
})