import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';

import history from './history';
import router from './router';
import BulletJournal from './BulletJournal';

interface JournalState {
	route: undefined | string;
}

const Projector = ProjectorMixin(BulletJournal);

const projector = new Projector();
const journalState: JournalState = {
	route: undefined
};

projector.setProperties({
	store: journalState
});

projector.append().then(() => {
	console.log('Application Started!');

	router.on('navstart', () => {
		journalState.route = history.current;
	});

	router.start();
});
