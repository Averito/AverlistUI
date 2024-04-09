import {
	memo,
	MouseEventHandler,
	NamedExoticComponent,
	PropsWithChildren
} from 'react'
import { ButtonProps } from './Button.types.ts'
import { Loader } from '@components/Loader'
import classnames from 'classnames'
import styles from './Button.module.scss'

/**
 * @description Button Component
 * @type {NamedExoticComponent<PropsWithChildren<ButtonProps>>}
 */
export const Button: NamedExoticComponent<PropsWithChildren<ButtonProps>> =
	memo(
		({
			disabled = false,
			onClick,
			className,
			size = 'medium',
			loading = false,
			children = 'Button'
		}) => {
			const onClickWrapper: MouseEventHandler<HTMLButtonElement> = event => {
				if (loading) {
					return
				}
				onClick?.(event)
			}

			return (
				<button
					type='button'
					className={classnames(
						styles.averui_button,
						styles[`averui_button--${size}`],
						{ [styles[`averui_button--loading`]]: loading },
						className
					)}
					onClick={onClickWrapper}
					disabled={disabled}
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
