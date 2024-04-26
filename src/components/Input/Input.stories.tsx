import { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components'
import { useState } from 'react'

/**
 * @description Meta for Storybook
 * @type {Meta<typeof Input>}
 */
const meta: Meta<typeof Input> = {
	title: 'AverlistUI/Input',
	component: Input,
	tags: ['autodocs']
}

/** @description Type Story for Storybook */
type Story = StoryObj<typeof meta>

const InputWithHooks = () => {
	const [changeValue, setChangeValue] = useState(meta.args?.value ?? '')

	const handleChange = (value: string) => {
		setChangeValue(value)
	}

	return (
		<Input
			{...meta.args}
			value={changeValue}
			onChange={e => {
				handleChange(e.currentTarget.value)
			}}
		/>
	)
}

/**
 * @description Default Input Story for Storybook
 * @type {Story}
 */
export const DefaultInput: Story = {
	render: () => <InputWithHooks />,
	args: {
		placeholder: 'Default Input'
	}
}

export default meta
