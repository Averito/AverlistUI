import { MouseEventHandler } from 'react'

export interface ButtonProps {
	label: string
	className?: string
	disabled?: boolean
	onClick?: MouseEventHandler<HTMLButtonElement>
}
