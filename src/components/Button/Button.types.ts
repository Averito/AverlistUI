import { MouseEventHandler } from 'react'

export interface ButtonProps {
	/**
	 * @description OnClick handler
	 * @type {MouseEventHandler<HTMLButtonElement>}
	 */
	onClick?: MouseEventHandler<HTMLButtonElement>

	/**
	 * @description Props "Additional HTML Class name"
	 * @type {string}
	 */
	className?: string

	/**
	 * @description Props "Is disabled button"
	 * @type {boolean}
	 */
	disabled?: boolean

	/**
	 * @description Props "Size button"
	 * @type {string}
	 */
	size?: 'small' | 'medium' | 'large'
}
