import { SET_PROJECT_CARDS } from './types';

export function fetchProjectCards() {
    return ({
        type: SET_PROJECT_CARDS,
        payload: [
            {
                _id: 0,
                title: 'code',
                subtitle: 'ios + web projects',
                description: 'here you can see a collection of projects I\'ve built for myself and organizations'
            },
            {
                _id: 1,
                title: 'youtube',
                subtitle: 'content I\'ve built to teach others the ways of a code master',
                description: 'here you can see a collection of course projects I\'ve built'
            },
            {
                _id: 2,
                title: 'digital media',
                subtitle: 'photo + film projects',
                description: 'here you can see a collection of projects, I\'ve done outside of my main focus'
            }
        ]
    })
}
