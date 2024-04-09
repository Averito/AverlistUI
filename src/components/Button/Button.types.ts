import { MouseEventHandler } from 'react'

export interface ButtonProps {
	/**
	 * @description OnClick handler
	 * @type {MouseEventHandler<HTMLButtonElement>}
	 */
	onClick?: MouseEventHandler<HTMLButtonElement>

	/**
	 * @description Additional HTML Class name
	 * @type {string}
	 */
	className?: string

	/**
	 * @description Is disabled button
	 * @type {boolean}
	 */
	disabled?: boolean

	/**
	 * @description Size button
	 * @type {string}
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'large'

	/**
	 * @description Is loading button
	 * @type {boolean}
	 * @default false
	 */
	loading?: boolean
}
