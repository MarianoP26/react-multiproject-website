/* eslint-disable import/no-anonymous-default-export */
import StringReverser from './algos/StringReverser';
import CustomFibonacci from './algos/CustomFibonacci';
import ComponentThree from './algos/ComponentThree';
import ComponentFour from './algos/ComponentFour';

export default [
	{
		component: StringReverser,
		name: 'String Reverser',
		id: 0,
	},
	{
		component: CustomFibonacci,
		name: 'Custom Fibonacci',
		id: 1,
	},
	{
		component: ComponentThree,
		name: 'SongSplitter',
		id: 2,
	},
	{
		component: ComponentFour,
		name: 'Chess',
		id: 3,
	}
]