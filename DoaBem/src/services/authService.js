import { mockLogin } from './mockAuth.js'

export function login(email, password) {
  return mockLogin(email, password)
}
