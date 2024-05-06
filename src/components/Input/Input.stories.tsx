import { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components'
import { ChangeEvent, useState } from 'react'

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

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setChangeValue(e.target.value)
	}

	return <Input {...meta.args} value={changeValue} onChange={handleChange} />
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
