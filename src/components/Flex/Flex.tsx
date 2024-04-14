import { forwardRef, PropsWithChildren } from 'react'
import styles from './Flex.module.scss'
import classnames from 'classnames'
import { FlexProps } from './Flex.types.ts'

export const Flex = forwardRef<HTMLDivElement, PropsWithChildren<FlexProps>>(
	(
		{
			className,
			justifyContent,
			flexDirection,
			backgroundColor,
			alignItems,
			padding,
			margin,
			onClick,
			width,
			flexWrap,
			gap,
			children
		},
		ref
	) => {
		const style = {
			justifyContent,
			alignItems,
			flexDirection,
			backgroundColor,
			margin,
			width,
			flexWrap,
			padding,
			gap
		}

		return (
			<div
				ref={ref}
				className={classnames(styles.flex, className)}
				onClick={onClick}
				style={style}
			>
				{children}
			</div>
		)
	}
)
