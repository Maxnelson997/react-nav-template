import { SET_PROJECT_CARDS } from './types';

export function fetchProjectCards() {
    return ({
        type: SET_PROJECT_CARDS,
        payload: [
            {
                _id: 0,
                title: 'code',
                subtitle: 'ios + web projects',
                description: 'projects I\'ve built for myself + organizations.'
            },
            {
                _id: 1,
                title: 'youtube',
                subtitle: 'courses I\'ve built',
                description: 'course projects I\'ve built.'
            },
            {
                _id: 2,
                title: 'digital media',
                subtitle: 'photo + film projects',
                description: 'other creative projects I\ve built.'
            }
        ]
    })
}
