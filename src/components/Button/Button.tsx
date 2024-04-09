import { FC, memo, PropsWithChildren } from 'react'
import { ButtonProps } from './Button.types.ts'
import { Loader } from '@components/Loader'
import classnames from 'classnames'
import styles from './Button.module.scss'

/**
 * @description Button Component
 * @type {FC<PropsWithChildren<ButtonProps>>}
 */
export const Button: FC<PropsWithChildren<ButtonProps>> = memo(
	({
		disabled = false,
		onClick,
		className,
		size = 'medium',
		loading = false,
		children = 'Button'
	}) => {
		return (
			<button
				type='button'
				className={classnames(
					styles.averui_button,
					styles[`averui_button--${size}`],
					styles[`averui_button--loading-${loading}`],
					className
				)}
				onClick={onClick}
				disabled={loading ? true : disabled}
			>
				{children}
				{loading && (
					<>
						{size === 'small' && <Loader color='#fff' size={14} />}
						{size === 'medium' && <Loader color='#fff' size={16} />}
						{size === 'large' && <Loader color='#fff' size={18} />}
					</>
				)}
			</button>
		)
	}
)
