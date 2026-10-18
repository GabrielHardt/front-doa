const MOCK_USERS = [
  {
    email: 'coordenador@doabem.test',
    password: 'Coord@123',
    user: {
      id: 1,
      name: 'Coordenador Demo',
      email: 'coordenador@doabem.test',
      role: 'COORDINATOR',
    },
  },
  {
    email: 'operador@doabem.test',
    password: 'Oper@123',
    user: {
      id: 2,
      name: 'Operador Demo',
      email: 'operador@doabem.test',
      role: 'OPERATOR',
    },
  },
]

const NETWORK_DELAY_MS = 800

export function mockLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const normalizedEmail = email.trim().toLowerCase()
      const found = MOCK_USERS.find(
        (account) => account.email === normalizedEmail && account.password === password,
      )

      if (!found) {
        reject(new Error('E-mail ou senha incorretos.'))
        return
      }

      resolve({
        token: `mock-token-${found.user.id}`,
        user: found.user,
      })
    }, NETWORK_DELAY_MS)
  })
}
