'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
          <p className="mt-4 text-lg">Cargando...</p>
        </div>
      </main>
    )
  }

  if (!session) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              ¡Bienvenido!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Has iniciado sesión correctamente con GitHub
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex flex-col items-center gap-6">
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt="Avatar"
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-gray-200 dark:border-gray-700"
                />
              )}

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">
                  {session.user?.name || 'Usuario de GitHub'}
                </h2>
                {session.user?.email && (
                  <p className="text-gray-600 dark:text-gray-400">
                    {session.user.email}
                  </p>
                )}
              </div>

              <div className="w-full bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-center">Información de la sesión</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Usuario:</span>
                    <span className="font-medium">{session.user?.name || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Email:</span>
                    <span className="font-medium">{session.user?.email || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Proveedor:</span>
                    <span className="font-medium">GitHub OAuth</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full"
              >
                Cerrar sesión
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>✓ Autenticación OAuth exitosa</p>
            <p className="mt-1">Powered by Next.js + NextAuth.js</p>
          </div>
        </div>
      </div>
    </main>
  )
}
