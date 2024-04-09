import { FC } from 'react'
import { LoaderProps } from './Loader.type.ts'

/**
 * @description Loader component
 * @type {FC<LoaderProps>}
 */
export const Loader: FC<LoaderProps> = ({
	size = 24,
	color = '#6c5dd4',
	strokeWidth = 8
}) => {
	return (
		<svg
			display='block'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMidYMid'
			width={size}
			height={size}
		>
			<g>
				<circle
					cx='50'
					cy='50'
					r='32'
					strokeWidth={strokeWidth}
					stroke={color}
					strokeDasharray='50.26548245743669 50.26548245743669'
					fill='none'
					strokeLinecap='round'
				>
					<animateTransform
						attributeName='transform'
						type='rotate'
						repeatCount='indefinite'
						dur='1s'
						keyTimes='0;1'
						values='0 50 50;360 50 50'
					/>
				</circle>
			</g>
		</svg>
	)
}
