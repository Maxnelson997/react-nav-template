

const INITIAL_STATE = {
    cards: [
        {
            _id: 0,
            height: 'auto',
            front: {
                title: 'Course Development',
                subtitle: 'Courses I\'ve developed for udemy and bootcamps',
                imageUrl: 'https://source.unsplash.com/collection/1816977/1600x900',
            },
            back: {
                title: 'Featured',
                info: 'in Course Development',
                projects: [
                    {
                        title: 'proj 1',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 2',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 3',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 4',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    }
                ]
            }
        },
        {
            _id: 1,
            height: 'auto',
            front: {
                title: 'Web Development',
                subtitle: 'Websites I\'ve built for myself and companies',
                imageUrl: 'https://source.unsplash.com/collection/1144691/1600x900',
            },
            back: {
                title: 'Featured',
                info: 'in Web Development',
                projects: [
                    {
                        title: 'proj 1',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 2',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 3',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 4',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    }
                ]
            }
        },
        
        {
            _id: 2,
            height: 'auto',
            front: {
                title: 'iOS Development',
                subtitle: 'iOS App Projects I\'ve developed for other companies.',
                imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900',
            },
            back: {
                title: 'Featured',
                info: 'in iOS Development',
                projects: [
                    {
                        title: 'proj 1',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 2',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 3',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 4',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    }
                ]
            }
        },
        {
            _id: 3,
            height: 'auto',
            front: {
                title: 'Photo + Video',
                subtitle: 'I keep life balanced. See my photo and video projects here.',
                imageUrl: 'https://source.unsplash.com/collection/1424240/1600x900',
            },
            back: {
                title: 'Featured',
                info: 'in photo + video',
                projects: [
                    {
                        title: 'proj 1',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 2',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 3',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    },
                    {
                        title: 'proj 4',
                        imageUrl: 'https://source.unsplash.com/collection/2737036/1600x900'
                    }
                ]
            }
        }
    ]
        
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        default: return state
    }
}