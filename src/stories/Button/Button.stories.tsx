import { Button } from './Button.tsx'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
	title: 'AverlistUI/Button',
	component: Button,
	tags: ['autodocs'],
	args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'Button'
	}
}
