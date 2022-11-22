import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { DotsThree } from 'phosphor-react'
import { ReactNode } from 'react'

interface LinkProps {
  to: string
  children: ReactNode
}

export function Link({ to, children }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return clsx(
          'flex items-center text-sm gap-2 text-dotdoc-100 hover:text-dotdoc-50 py-1 px-3 rounded group hover:bg-dotdoc-700',
          {
            'bg-dotdoc-700': isActive,
          },
        )
      }}
    >
      <span className="truncate flex-1">{children}</span>

      <div className="flex items-center h-full group-hover:visible ml-auto text-dotdoc-100">
        <button className="px-px rounded-sm hover:bg-dotdoc-500">
          <DotsThree weight="bold" className="h-4 w-4" />
        </button>
      </div>
    </NavLink>
  )
}
