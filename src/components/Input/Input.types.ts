import { ChangeEventHandler, KeyboardEventHandler } from 'react'

/**
 * @description Input types
 * @type {'text' | 'number' | 'password' | 'email'}
 */
export type InputType = 'text' | 'number' | 'password' | 'email'

export interface InputProps {
	/**
	 * @description Input type
	 * @type {InputType}
	 */
	type?: InputType
	/**
	 * @description Input value
	 * @type {string}
	 */
	value: string
	/**
	 * @description onChange handler
	 * @type {ChangeEventHandler<HTMLInputElement>}
	 */
	onChange: ChangeEventHandler<HTMLInputElement>
	/**
	 * @description onKeyDown handler
	 * @type {KeyboardEventHandler<HTMLInputElement>}
	 */
	onKeyDown?: KeyboardEventHandler<HTMLInputElement>
	/**
	 * @description Input placeholder
	 * @type {string}
	 */
	placeholder?: string
	/**
	 * @description Input name
	 * @type {string}
	 */
	name?: string
	/**
	 * @description Input CSS width
	 * @type {string}
	 */
	width?: string
	/**
	 * @description Input label
	 * @type {string}
	 */
	label?: string
	/**
	 * @description Input CSS margin
	 * @type {string}
	 */
	margin?: string
	/**
	 * @description Input className
	 * @type {string}
	 */
	className?: string
}
