import { Checkbox } from './Checkbox'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

/**
 * @description Meta for Storybook
 * @type {Meta<typeof Checkbox>}
 */
const meta: Meta<typeof Checkbox> = {
	title: 'AverlistUI/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	args: {
		checked: false
	}
}

/** @description Type Story for Storybook */
type Story = StoryObj<typeof meta>

const CheckboxWithHooks = () => {
	const [checked, setChecked] = useState(meta.args?.checked ?? false)

	const handleChange = (value: boolean) => {
		setChecked(value)
	}

	return <Checkbox {...meta.args} checked={checked} onChange={handleChange} />
}

/**
 * @description Default Checkbox Story for Storybook
 * @type {Story}
 */
export const Default: Story = {
	render: () => <CheckboxWithHooks />,
	args: {
		checked: false
	}
}

/**
 * @description Checked Checkbox Story for Storybook
 * @type {Story}
 */
export const Checked: Story = {
	render: () => <CheckboxWithHooks />,
	args: {
		checked: true
	}
}

/**
 * @description NotChecked Checkbox Story for Storybook
 * @type {Story}
 */
export const NotChecked: Story = {
	render: () => <CheckboxWithHooks />,
	args: {
		checked: false
	}
}

export default meta
