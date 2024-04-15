import { CheckboxProps } from '@components/Checkbox/Checkbox.types.ts'
import { ChangeEventHandler, FC } from 'react'
import { Flex } from '@/components'
import styles from './Checkbox.module.scss'

export const Checkbox: FC<CheckboxProps> = ({
	id,
	onChange,
	checked,
	label
}) => {
	const onChangeWrapper: ChangeEventHandler<HTMLInputElement> = event => {
		onChange(event.currentTarget.checked)
	}

	return (
		<Flex alignItems='center'>
			<input
				className={styles.checkbox}
				type='checkbox'
				checked={checked}
				id={id}
				onChange={onChangeWrapper}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</Flex>
	)
}
