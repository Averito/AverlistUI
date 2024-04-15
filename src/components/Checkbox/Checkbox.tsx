import { CheckboxProps } from '@components/Checkbox/Checkbox.types.ts'
import { FC } from 'react'
import { Flex } from '@/components'
import styles from './Checkbox.module.scss'

export const Checkbox: FC<CheckboxProps> = ({
	id,
	onChange,
	checked,
	label
}) => {
	return (
		<Flex alignItems='center'>
			<input
				className={styles.checkbox}
				type='checkbox'
				checked={checked}
				id={id}
				onChange={e => onChange(e.currentTarget.checked)}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</Flex>
	)
}
