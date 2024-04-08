import { MouseEventHandler } from 'react'

export interface ButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement>
	className?: string
	disabled?: boolean
	size?: 'small' | 'medium' | 'large'
}
