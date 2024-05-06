import { CheckboxProps } from '@components/Checkbox/Checkbox.types.ts'
import { ChangeEventHandler, FC, KeyboardEventHandler } from 'react'
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

	const onKeyDownWrapper: KeyboardEventHandler = event => {
		if (event.key == 'Enter') {
			onChange(!checked)
		}
	}

	return (
		<Flex alignItems='center'>
			<input
				className={styles.checkbox}
				type='checkbox'
				checked={checked}
				id={id}
				onChange={onChangeWrapper}
				onKeyDown={onKeyDownWrapper}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</Flex>
	)
}
