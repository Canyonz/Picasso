import { Link } from "react-router-dom"
import cls from 'classnames'


type LinkSize = "sm" | "md" | "lg"

interface LinkProps {
  text: string,
  href: string,
  size?: LinkSize,
  className?: string
}

const sizeToSizeClass: Record<LinkSize, string> = {
  "sm": "px-2 py-1",
  "md": "px-4 py-2",
  "lg": "px-6 py-3",
}

export const AppLink = ({ size = "md", text, href, className }: LinkProps) => {
  const sizeClass = sizeToSizeClass[size]

  return (
    <Link to={href} className={cls("block w-max bg-slate-300 rounded-md", sizeClass, className)}>{text}</Link>
  )
}