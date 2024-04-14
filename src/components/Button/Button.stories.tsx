import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components'

const meta: Meta<typeof Button> = {
	component: Button,
	argTypes: {
		children: {
			control: 'text',
			description: 'Children'
		},
		size: {
			description: 'Size',
			options: ['Small', 'Medium', 'Large'],
			control: { type: 'radio' }
		},
		disabled: {
			description: 'Is disabled',
			control: 'boolean'
		},
		loading: {
			description: 'Is loading',
			control: 'boolean'
		}
	}
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		children: 'Default',
		size: 'medium'
	}
}

export const Small: Story = {
	args: {
		children: 'Small',
		size: 'medium'
	}
}

export const Medium: Story = {
	args: {
		children: 'Medium',
		size: 'medium'
	}
}

export const Large: Story = {
	args: {
		children: 'Large',
		size: 'large'
	}
}
