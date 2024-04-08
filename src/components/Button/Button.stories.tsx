import { Button } from './Button.tsx'
import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'

/**
 * @description Meta for Storybook
 * @type {Meta<typeof Button>}
 */
const meta: Meta<typeof Button> = {
	title: 'AverlistUI/Button',
	component: Button,
	tags: ['autodocs'],
	args: { onClick: fn() }
}

/** @description Type Story for Storybook */
type Story = StoryObj<typeof meta>

/**
 * @description Small Button Story for Storybook
 * @type {Story}
 */
export const SmallButton: Story = {
	args: {
		children: 'Small Button',
		size: 'small'
	}
}
/**
 * @description Medium Button Story for Storybook
 * @type {Story}
 */
export const MediumButton: Story = {
	args: {
		children: 'Medium Button',
		size: 'medium'
	}
}

/**
 * @description Large Button Story for Storybook
 * @type {Story}
 */
export const LargeButton: Story = {
	args: {
		children: 'Large Button',
		size: 'large'
	}
}

export default meta
