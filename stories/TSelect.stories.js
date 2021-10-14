import TSelect from '../src/components/Forms/TSelect';
import TCard from '../src/components/Elements/TCard';


export default {
	title: 'FORMS/TSelect',
	component: TSelect,
	argTypes: { 
		color: {
			name: 'color',
			description: 'Tailwind classname for fill color of checkbox',
			control: { type: 'text' }
		},
		multiple: {
			name: 'multiple',
			description: 'Allow selection of multiple options',
			control: { type: 'boolean' }
		},
		returnObject: {
			name: 'returnObject',
			description: 'Toggle between returning objects/only values',
			control: { type: 'boolean' }
		},
		loading: {
			name: 'loading',
			description: 'Toggle between loading state',
			control: { type: 'boolean' }
		}
	},
};

export const Standard = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TSelect },
	template: 
		`
		<div>
			<t-select label="Select an option" v-model="value" required v-bind="$props" />
			<div class="mt-16">returnObject is set to <b>{{ returnObject }}</b>, so v-model equals: <br> {{ value }}</div>
		</div>
		`,
});

Standard.args = {
	color: 'indigo',
	options: ['exclude', 'include'],
	returnObject: false,
};

export const MultipleSelect = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { TSelect },
	template: `
		<div>
			<t-select label="Select an option" v-model="value" required v-bind="$props" />
			<div class="mt-8">
				Selected: <br>
				{{ value }}
			</div>
		</div>
	`,
});

MultipleSelect.args = {
	color: 'indigo',
	options: [
        {
            label: 'option 1',
            value: 'option_1'
        },
        {
            label: 'option 2',
            value: 'option_2'
        },
        {
            label: 'option 3',
            value: 'option_3'
        }
    ],
	returnObject: false,
	multiple: true,
	value: ["option_1", "option_3"] // Selected option(s) by default
};


export const DifferentStates = (argTypes) => ({
	props: Object.keys(argTypes),
	components: { TSelect, TCard },
    data: () => ({
		empty: null,
        value: null,
		multipleValue: null,
		optionsArrayDefault: 'option_1',
		withDefault: 'option_1',
		withDefaultArray: ['option_1','option_2'],
		optionsArray: ['option_1','option_2','option_3','option_4'],
		options: [
			{
				label: 'option 1',
				value: 'option_1'
			},
			{
				label: 'option 2',
				value: 'option_2'
			},
			{
				label: 'option 3',
				value: 'option_3'
			}
		],
		optionsWithKey: [
			{
				label: 'option 1',
				key: 'option_1'
			},
			{
				label: 'option 2',
				key: 'option_2'
			},
			{
				label: 'option 3',
				key: 'option_3'
			}
		],
    }),
	template: 
		`
        <div class="p-6 bg-gray-100">
            <div class="max-w-2xl">

                <t-card title="Standard">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select v-model="value" label="Standard" :options="options" placeholder="Select One" />
						<t-select searchable v-model="value" label="Searchable" :options="options" placeholder="Select One" />
					</div>
				</t-card>

				<t-card title="Standard with Default Value" class="mt-4">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select v-model="withDefault" label="Standard" :options="options" placeholder="Select One" />
						<t-select searchable v-model="withDefault" label="Searchable" :options="options" placeholder="Select One" />
					</div>
				</t-card>

				<t-card title="Standard with Different itemValue" class="mt-4">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select itemValue="key" v-model="empty" label="Standard" :options="optionsWithKey" placeholder="Select One" />
						<t-select itemValue="key" searchable v-model="empty" label="Searchable" :options="optionsWithKey" placeholder="Select One" />
					</div>
				</t-card>

				<t-card title="Standard (Array Options + default)" class="mt-4">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select v-model="optionsArrayDefault" label="Standard" :options="optionsArray" placeholder="Select One" />
						<t-select searchable v-model="optionsArrayDefault" label="Searchable" :options="optionsArray" placeholder="Select One" />
					</div>
				</t-card>


				<t-card title="Multiple" class="mt-4">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select multiple v-model="multipleValue" label="Standard" :options="options" placeholder="Select Many" />
						<t-select multiple searchable v-model="multipleValue" label="Searchable" :options="options" placeholder="Select Many" />
					</div>
				</t-card>

				<t-card title="Multiple with Default Value" class="mt-4">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select multiple v-model="withDefaultArray" label="Standard" :options="options" placeholder="Select Many" />
						<t-select multiple searchable v-model="withDefaultArray" label="Searchable" :options="options" placeholder="Select Many" />
					</div>
				</t-card>

				<t-card title="Empty Options" class="mt-4">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select v-model="value" label="Standard"  placeholder="Select One" />
						<t-select searchable v-model="value" label="Searchable" placeholder="Select One" />
					</div>
				</t-card>

				<t-card title="Loading State" class="mt-4">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select loading v-model="value" label="Standard"  placeholder="Select One" />
						<t-select loading searchable v-model="value" label="Searchable" placeholder="Select One" />
					</div>
				</t-card>

				<t-card title="Empty External Options" class="mt-4">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select v-model="value" label="Standard"  placeholder="Select One" external />
						<t-select searchable v-model="value" label="Searchable" placeholder="Select One" external />
					</div>
				</t-card>

				<t-card title="Disabled" class="mt-4">
					<div class="w-full mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:space-x-2 sm:flex-row sm:items-end sm:justify-around">
						<t-select disabled v-model="value" label="Standard Disabled" :options="options" placeholder="Select One" />
						<t-select disabled searchable v-model="value" label="Disabled Searchable" :options="options" placeholder="Select One" />
					</div>
				</t-card>

			</div>
		</div>
		`,
});
