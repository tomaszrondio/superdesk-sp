import {startApp} from 'superdesk-core/scripts/index';

setTimeout(() => {
    startApp(
        [
            {
                id: 'publisher-extension',
                load: () => import('superdesk-publisher/publisher-extension'),
            }, 
        ],
        {},
    );
},);

export default angular.module('main.superdesk', []);
