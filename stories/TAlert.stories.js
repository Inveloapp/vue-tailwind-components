import TAlert from '../src/components/Elements/TAlert.vue';
import TIcon from '../src/components/Elements/TIcon.vue';

export default {
	title: 'Elements/TAlert',
	component: TAlert,
	argTypes: {
		color: {
			name: 'color',
			description: 'Set color of alert',
			control: { type: 'text' }
		},
		textColor: {
			type: 'textColor',
			description: 'Set color of text',
			control: { type: 'text' }
		},
		outlined: {
			name: 'outlined',
			description: 'Toggle outline of alert',
			control: { type: 'boolean' }
		},
		rounded: {
			name: 'rounded',
			description: 'Switch between round and square avatar',
			control: { type: 'boolean' }
		},
		shadow: {
			name: 'shadow',
			description: 'Toggle shadow of alert',
			control: { type: 'boolean' }
		},
		textOnly: {
			name: 'textOnly',
			description: 'Toggle between text only alert',
			control: { type: 'boolean' }
		},
		icon: {
			name: 'icon',
			description: 'Name of icon',
			control: { type: 'text' }
		},
		iconSize: {
			name: 'iconSize',
			description: 'Set size of icon'
		}
	}
};

export const Error = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TAlert, TIcon },
	template: `
	<t-alert v-bind="$props" v-slot>
		<t-icon :value="icon" :size="iconSize" class="mr-2" />
		Your notifications are turned off
	</t-alert>
	`
});

Error.args = {
	color: 'red',
	icon: 'bell',
	iconSize: 5,
	rounded: true,
}

export const Warning = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TAlert, TIcon },
	template: `
	<t-alert v-bind="$props" v-slot>
		<t-icon :value="icon" :size="iconSize" class="mr-2" />
		Your car's extended warranty expires soon
	</t-alert>
	`
});

Warning.args = {
	color: 'yellow',
	textColor: 'yellow-600',
	icon: 'exclamation-circle',
	iconSize: 5,
	outlined: true,
	rounded: true,
	shadow: false
}

export const Success = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TAlert, TIcon },
	template: 
	`
		<t-alert v-bind="$props" v-slot>
			<t-icon :value="icon" :size="iconSize" class="mr-2" />
			Your entry has been confirmed
		</t-alert>
	`
});

Success.args = {
	color: 'green',
	icon: 'check',
	iconSize: 5,
	shadow: true,
	rounded: true
}
