import { Args, Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components'
import { ChangeEvent, FC, useState } from 'react'

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

const InputWithHooks: FC<Args> = props => {
	const [changeValue, setChangeValue] = useState(props?.value ?? '')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setChangeValue(e.target.value)
	}

	return <Input {...props} value={changeValue} onChange={handleChange} />
}

/**
 * @description Default Input Story for Storybook
 * @type {Story}
 */
export const DefaultInput: Story = {
	render: args => <InputWithHooks {...args} />,
	args: {
		placeholder: 'Default Input',
		label: 'Default Input'
	}
}

export default meta
