import { forwardRef } from 'react'
import { InputProps } from './Input.types.ts'
import styles from './Input.module.scss'
import classnames from 'classnames'

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			value,
			onChange,
			onKeyDown,
			placeholder,
			className,
			name,
			width = '240px',
			label,
			type,
			margin
		},
		ref
	) => {
		const marginStyle = { margin }

		return (
			<div style={marginStyle}>
				{label && <p className={styles.label}>{label}</p>}
				<input
					ref={ref}
					type={type}
					className={classnames(styles.input, className)}
					style={{ width: width }}
					name={name}
					value={value}
					onChange={onChange}
					onKeyDown={onKeyDown}
					placeholder={placeholder}
					autoComplete='off'
				/>
			</div>
		)
	}
)