import Route from '@dojo/routing/Route';
import { Parameters } from '@dojo/routing/interfaces';
import DateObject from '@dojo/core/DateObject';
import Router from '@dojo/routing/Router';

import history from './history';

interface LogParams extends Parameters {
	id: string;
}

const title = document.querySelector('title');

export const indexRoute = new Route({
	exec () {
		if (title) {
			title.textContent = 'Index';
		}
	}
});

export const logRoute = new Route({
	path: '/{id}',
	params ([ id ]) {
		let isToday = id === 'today';
		let formattedDate;

		if (isToday) {
			let today: DateObject = new DateObject();
			let m: string = today.month.toString();
			let d: string = today.dayOfMonth.toString();
			let y: string = today.year.toString();
			formattedDate = m + '-' + d + '-' + y;
		}

		return {
			id: isToday ? formattedDate : id
		}
	},
	exec (request) {
		// TODO: figure out how to properly type this
		let { id }: any = request.params;
		if (title) {
			title.textContent = id;
		}
	},
	guard (request) {
		// TODO: figure out how to properly type this
		let { id }: any = request.params;
		if (!id.match(/\d+-\d+-\d+/i)) {
			return false;
		}

		return true;
	}
});

export const habitRoute = new Route({
	path: '/habits',
	exec () {
		if (title) {
			title.textContent = 'Habit Calendar';
		}
	}
});

const router = new Router({
	context: {},
	fallback (request) {
		console.log('not found', request);
	},
	history
});

router.append([ indexRoute, logRoute, habitRoute ]);

router.on('navstart', event => {
	console.log(event.path, ' requested');
});

router.on('error', event => {
	console.log('ERROR: ', event);
});

export default router;
