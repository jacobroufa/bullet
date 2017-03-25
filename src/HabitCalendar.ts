import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/widget-core/interfaces';
import { WNode } from '@dojo/widget-core/interfaces';
import { v, w } from '@dojo/widget-core/d';
import LeGrid, { GridProperties } from 'le-grid/LeGrid';
import ArrayDataProvider from 'le-grid/providers/ArrayDataProvider';

export interface HabitCalendarProperties extends WidgetProperties {
	days: number;
}

export default class HabitCalendar extends WidgetBase<HabitCalendarProperties> {
	public days: number;

	protected render(): WNode {
		const columns = [];
		const data = [];

		for (let i = 1; i <= this.days; i++) {
			let rowData: any = {
				id: String(i - 1)
			};

			rowData[i - 1] = {
				habit1: false,
				habit2: false,
				habit3: false,
			}

			data.push(rowData);

			columns.push({
				id: String(i),
				field: String(i),
				label: String(i),
				sortable: false,
				renderer: (value: any) => {
					let habits = [];
					for (let habit in value) {
						let tag = 'div' + (value[habit] && '.complete');
						habits.push(v(tag, {
							innerHTML: habit
						}))
					}
					return 'crap';
					// return v('div', habits);
				}
			});
		}

		return w<GridProperties>(LeGrid, {
			dataProvider: new ArrayDataProvider(data),
			columns
		});
	}
};
