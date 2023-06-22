import {MarginBottomField, MarginTopField} from "schemas/components/fields";

export default {
	name: 'CodeEmbed',
	title: 'CodeEmbed',
	type: 'object',
	fields: [
		{
			name: 'code',
			title: 'Code',
			type: 'text',
			description: "Please use this component with extreme caution. Using anonymous codes can cause damage and result in customers data being stolen",
		},
		{...MarginTopField},
		{...MarginBottomField},
	],
	preview: {
		prepare() {
			return {
				title: 'Code Embed'
			}
		}
	}
}
