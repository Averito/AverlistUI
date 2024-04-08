import { Loader } from './Loader.tsx'
import { Meta, StoryObj } from '@storybook/react'

/**
 * @description Meta for Storybook
 * @type {Meta<typeof Loader>}
 */
const meta: Meta<typeof Loader> = {
	title: 'AverlistUI/Loader',
	component: Loader,
	tags: ['autodocs']
}

/** @description Type Story for Storybook */
type Story = StoryObj<typeof meta>

/**
 * @description Small Loader Story for Storybook
 * @type {Story}
 */
export const SmallLoader: Story = {
	args: {
		size: 24
	}
}
/**
 * @description Medium Loader Story for Storybook
 * @type {Story}
 */
export const MediumLoader: Story = {
	args: {
		size: 30
	}
}

/**
 * @description Large Loader Story for Storybook
 * @type {Story}
 */
export const LargeLoader: Story = {
	args: {
		size: 40
	}
}

export default meta
