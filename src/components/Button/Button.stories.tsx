import { Button } from './Button.tsx'
import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'AverlistUI/Button',
	component: Button,
	tags: ['autodocs'],
	args: { onClick: fn() }
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Button'
	}
}

export default meta
