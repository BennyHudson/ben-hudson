import type { ReactNode } from 'react'

export interface ParagraphProps {
  children?: ReactNode
  text?: string
  size?: 1 | 2 | 3
  weight?: 1 | 2 | 3
  inverse?: boolean
  noMargin?: boolean
}
