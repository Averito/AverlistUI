import { FC, memo, PropsWithChildren } from 'react'
import classnames from 'classnames'
import { ButtonProps } from './Button.types.ts'
import styles from './Button.module.scss'

export const Button: FC<PropsWithChildren<ButtonProps>> = memo(
	({ label, disabled = false, onClick, className, ...props }: ButtonProps) => {
		return (
			<button
				type='button'
				className={classnames(styles.storybook_button, className)}
				onClick={onClick}
				disabled={disabled}
				{...props}
			>
				{label}
			</button>
		)
	}
)
