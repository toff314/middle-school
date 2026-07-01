import { Navigate } from 'react-router-dom'

export default function Admin() {
  // For now, redirect to home. In a real app, this would check auth.
  return <Navigate to="/" replace />
}
