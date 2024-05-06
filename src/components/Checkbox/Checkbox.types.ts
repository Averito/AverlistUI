export interface CheckboxProps {
	/**
	 * @description Checkbox id
	 * @type {string}
	 */
	id?: string
	/**
	 * @description Checkbox checked
	 * @type {boolean}
	 */
	checked: boolean
	/**
	 * @description onChange handler
	 * @type {string}
	 */
	onChange: (checked: boolean) => void
	/**
	 * @description Checkbox label
	 * @type {string}
	 */
	label?: string
}
