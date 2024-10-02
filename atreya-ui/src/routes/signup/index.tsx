import SignUpForm from '@/components/signup-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signup/')({
  component: () => <SignUpForm />
})