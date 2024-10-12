import SignUpForm from '@/components/signup-form'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/signup/')({
  component: () => <SignUpForm />
})