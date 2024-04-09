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
 * @description Default Button Story for Storybook
 * @type {Story}
 */
export const DefaultButton: Story = {
	args: {
		children: 'Button',
		size: 'medium'
	}
}

/**
 * @description Loading Button Story for Storybook
 * @type {Story}
 */
export const LoadingButton: Story = {
	args: {
		children: 'Loading Button',
		size: 'medium',
		loading: true
	}
}

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
