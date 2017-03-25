import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode, HNode } from '@dojo/widget-core/interfaces';
import { v, w } from '@dojo/widget-core/d';
import DateObject from '@dojo/core/DateObject';

import router, { indexRoute, logRoute, habitRoute } from './router';
import HabitCalendar, { HabitCalendarProperties } from './HabitCalendar';

const today: DateObject = new DateObject();
const indexLink = indexRoute.link();
const todayLink = logRoute.link({ id: 'today' });
const habitLink = habitRoute.link();

interface MenuLinkProperties {
	title: string;
	link: string;
}

export default class BulletJournal extends WidgetBase<any> {

	private renderLink(link: string, active?: boolean): HNode {
		const menuLinks: any = {
			index: {
				title: 'Index',
				link: indexLink
			},
			today: {
				title: 'Daily Log',
				link: todayLink
			},
			habit: {
				title: 'Habit Calendar',
				link: habitLink
			}
		};
		const item: MenuLinkProperties = menuLinks[link];
		const href: string = item.link;
		const innerHTML: string = item.title;

		return v('li', [v('a', {
			href,
			innerHTML,
			onClick: () => {
				router.dispatch(this.properties.store, item.link);
			}
		})])
	}

	protected render(): DNode {
		const route = this.properties.store.route;
		const isIndex = route === indexLink;
		const isToday = route === todayLink;
		const isHabit = route === habitLink;

		let content: DNode;

		if (isIndex) {
			content = v('p', { innerHTML: 'Index' });
		} else if (isToday) {
			content = v('p', { innerHTML: 'Today' });
		} else if (isHabit) {
			content = v('p', { innerHTML: 'Habit' });
		} else {
			content = v('p', { innerHTML: 'NOT FOUND' });
		}

		return v('div', [
			v('header', [
				v('div', [
					v('ul', [
						this.renderLink('index', isIndex),
						this.renderLink('today', isToday),
						this.renderLink('habit', isHabit)
					])
				])
			]),
			content
		]);
	}
}
