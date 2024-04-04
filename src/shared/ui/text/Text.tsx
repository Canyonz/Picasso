import cls from 'classnames'

type SizeType = 'sm' | 'md' | 'lg'
type TitleTagType = 'h1' | 'h2' | 'h3'
type AlignType = 'left' | 'center' | 'right'

interface TextProps {
  text?: string,
  title?: string,
  size?: SizeType,
  align?: AlignType,
  className?: string
}

const sizeToTitleTag: Record<SizeType, TitleTagType> = {
  lg: 'h1',
  md: 'h2',
  sm: 'h3'
}

const alignToAlignClass: Record<AlignType, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
}

export const Text = ({ text, title, size = 'md', align = 'left', className }: TextProps) => {
  const TitleTag = sizeToTitleTag[size]
  const alignClass = alignToAlignClass[align]

  if (title)
    return <TitleTag className={cls('block', alignClass, className)}>{title}</TitleTag>

  return (
    <span className={cls('block', alignClass, className)}>{text}</span>
  )
}