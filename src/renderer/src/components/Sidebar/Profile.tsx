import { CaretDown, User } from 'phosphor-react'

export function Profile() {
  const isAuthenticated = false

  if (!isAuthenticated) {
    return (
      <button className="text-dotdoc-100 flex mx-5 items-center gap-2 text-sm font-medium group">
        <div className="h-5 w-5 rounded-sm bg-dotdoc-500 p-1">
          <User className="h-3 w-3 text-dotdoc-300" />
        </div>
        Fazer login
      </button>
    )
  }

  return (
    <button className="text-dotdoc-50 flex mx-5 items-center gap-2 text-sm font-medium group">
      <img
        className="h-5 w-5 rounded-sm"
        src="https://github.com/Tonybsilva-dev.png"
        alt="profile photo"
      />
      Antonio Silva
      <CaretDown className="w-4 h-4 text-dotdoc-100 group-hover:text-dotdoc-50" />
    </button>
  )
}
