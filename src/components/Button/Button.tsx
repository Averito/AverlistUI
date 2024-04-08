import { FC, memo, PropsWithChildren } from 'react'
import { ButtonProps } from './Button.types.ts'
import classnames from 'classnames'
import styles from './Button.module.scss'

export const Button: FC<PropsWithChildren<ButtonProps>> = memo(
	({ disabled = false, onClick, className, size = 'medium', children }) => {
		return (
			<button
				type='button'
				className={classnames(
					styles.averlistui_button,
					styles[`averlistui_button--${size}`],
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
