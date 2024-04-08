import { FC, memo, PropsWithChildren } from 'react'
import { ButtonProps } from './Button.types.ts'
import classnames from 'classnames'
import styles from './Button.module.scss'

/**
 * @description Button Component
 * @type {FC<PropsWithChildren<ButtonProps>>}
 */
export const Button: FC<PropsWithChildren<ButtonProps>> = memo(
	({ disabled = false, onClick, className, size = 'medium', children }) => {
		return (
			<button
				type='button'
				className={classnames(
					styles.averui_button,
					styles[`averui_button--${size}`],
					className
				)}
				onClick={onClick}
				disabled={disabled}
			>
				{children}
			</button>
		)
	}
)
