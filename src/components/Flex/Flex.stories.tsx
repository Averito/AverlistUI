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
		children: (
			<>
				<p>Example Text</p>
				<p>Example Text</p>
				<p>Example Text</p>
			</>
		),
		width: '15px',
		backgroundColor: '#fff',
		gap: '15px'
	}
}

/**
 * @description Direction And Wrap Flex Story for Storybook
 * @type {Story}
 */
export const DirectionAndWrapFlex: Story = {
	args: {
		children: (
			<>
				<p>Example Text</p>
				<p>Example Text</p>
				<p>Example Text</p>
			</>
		),
		flexDirection: 'column',
		flexWrap: 'wrap'
	}
}

/**
 * @description Justify And Align Flex Story for Storybook
 * @type {Story}
 */
export const JustifyAndAlignFlex: Story = {
	args: {
		children: (
			<>
				<p>Example Text</p>
				<p>Example Text</p>
				<p>Example Text</p>
			</>
		),
		justifyContent: 'center',
		alignItems: 'center'
	}
}

/**
 * @description Margin And Padding Flex Story for Storybook
 * @type {Story}
 */
export const MarginAndPaddingFlex: Story = {
	args: {
		children: (
			<>
				<p>Example Text</p>
				<p>Example Text</p>
				<p>Example Text</p>
			</>
		),
		margin: '15px',
		padding: '15px'
	}
}

export default meta
