import { ReactNode } from "react"
import cls from 'classnames'

interface PageProps {
  children: ReactNode,
  className?: string
}

export const Page = ({ children, className }: PageProps) => {
  return (
    <main className={cls("max-w-screen-lg min-h-screen px-10 py-5 mx-auto", className)}>
      {children}
    </main>
  )
}