import { Flex } from './Flex.tsx'
import { Meta, StoryObj } from '@storybook/react'

/**
 * @description Meta for Storybook
 * @type {Meta<typeof Flex>}
 */
const meta: Meta<typeof Flex> = {
	title: 'AverlistUI/Flex',
	component: Flex,
	tags: ['autodocs']
}

/** @description Type Story for Storybook */
type Story = StoryObj<typeof meta>

/**
 * @description Default Flex Story for Storybook
 * @type {Story}
 */
export const DefaultFlex: Story = {
	args: {
		children: <p>Example Text</p>,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#fff',
		margin: '2px',
		width: 'fit-content'
	}
}

export default meta
