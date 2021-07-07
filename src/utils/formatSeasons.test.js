import { formatSeasons } from './formatSeasons';

const input = [
    {
      id: 49288,
      url: 'http://www.tvmaze.com/episodes/49288/futurama-1x01-space-pilot-3000',
      name: 'Space Pilot 3000',
      season: 1,
      number: 1,
      airdate: '1999-03-28',
      airtime: '22:00',
      airstamp: '1999-03-29T03:00:00+00:00',
      runtime: 30,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143950.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/143950.jpg'
      },
      summary: '<p>A delivery boy frozen in the year 1999 awakens in the year 3000. Phillip J. Fry delivers a pizza to a Cryogenics lab on New Years eve, only to discover that it is a prank delivery and then accidentally falls into a open cryogenics chamber, is put to sleep and wakes up in the far future.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/49288'
        }
      }
    },
    {
      id: 49289,
      url: 'http://www.tvmaze.com/episodes/49289/futurama-1x02-the-series-has-landed',
      name: 'The Series Has Landed',
      season: 2,
      number: 2,
      airdate: '1999-04-04',
      airtime: '22:00',
      airstamp: '1999-04-05T02:00:00+00:00',
      runtime: 30,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143951.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/143951.jpg'
      },
      summary: '<p>The crew takes a mission to an amusement park on the moon.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/49289'
        }
      }
    },
    {
      id: 49290,
      url: 'http://www.tvmaze.com/episodes/49290/futurama-1x03-i-roommate',
      name: 'I, Roommate',
      season: 3,
      number: 3,
      airdate: '1999-04-06',
      airtime: '22:00',
      airstamp: '1999-04-07T02:00:00+00:00',
      runtime: 30,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143952.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/143952.jpg'
      },
      summary: '<p>Bender offers to let Fry move in with him when Fry is forced to move out of the Planet Express because of his slob style of living.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/49290'
        }
      }
    },
    {
      id: 49291,
      url: 'http://www.tvmaze.com/episodes/49291/futurama-1x04-loves-labors-lost-in-space',
      name: 'Love\'s Labors Lost in Space',
      season: 4,
      number: 4,
      airdate: '1999-04-13',
      airtime: '22:00',
      airstamp: '1999-04-14T02:00:00+00:00',
      runtime: 30,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143953.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/143953.jpg'
      },
      summary: '<p>The crew encounters infamous space captain Zapp Brannigan.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/49291'
        }
      }
    },
    {
      id: 49292,
      url: 'http://www.tvmaze.com/episodes/49292/futurama-1x05-fear-of-a-bot-planet',
      name: 'Fear of a Bot Planet',
      season: 4,
      number: 5,
      airdate: '1999-04-20',
      airtime: '22:00',
      airstamp: '1999-04-21T02:00:00+00:00',
      runtime: 30,
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/144085.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/144085.jpg'
      },
      summary: '<p>The crew makes a delivery to a planet of human-hating robots.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/49292'
        }
      }
    },
];

const expected = {
    'Season 1': [
        {
            id: 49288,
            url: 'http://www.tvmaze.com/episodes/49288/futurama-1x01-space-pilot-3000',
            name: 'Space Pilot 3000',
            season: 1,
            number: 1,
            airdate: '1999-03-28',
            airtime: '22:00',
            airstamp: '1999-03-29T03:00:00+00:00',
            runtime: 30,
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143950.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/143950.jpg'
            },
            summary: '<p>A delivery boy frozen in the year 1999 awakens in the year 3000. Phillip J. Fry delivers a pizza to a Cryogenics lab on New Years eve, only to discover that it is a prank delivery and then accidentally falls into a open cryogenics chamber, is put to sleep and wakes up in the far future.</p>',
            _links: {
              self: {
                href: 'http://api.tvmaze.com/episodes/49288'
              }
            }
        }
    ],
    'Season 2': [
        {
            id: 49289,
            url: 'http://www.tvmaze.com/episodes/49289/futurama-1x02-the-series-has-landed',
            name: 'The Series Has Landed',
            season: 2,
            number: 2,
            airdate: '1999-04-04',
            airtime: '22:00',
            airstamp: '1999-04-05T02:00:00+00:00',
            runtime: 30,
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143951.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/143951.jpg'
            },
            summary: '<p>The crew takes a mission to an amusement park on the moon.</p>',
            _links: {
              self: {
                href: 'http://api.tvmaze.com/episodes/49289'
              }
            }
        }
    ],
    'Season 3': [
        {
            id: 49290,
            url: 'http://www.tvmaze.com/episodes/49290/futurama-1x03-i-roommate',
            name: 'I, Roommate',
            season: 3,
            number: 3,
            airdate: '1999-04-06',
            airtime: '22:00',
            airstamp: '1999-04-07T02:00:00+00:00',
            runtime: 30,
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143952.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/143952.jpg'
            },
            summary: '<p>Bender offers to let Fry move in with him when Fry is forced to move out of the Planet Express because of his slob style of living.</p>',
            _links: {
              self: {
                href: 'http://api.tvmaze.com/episodes/49290'
              }
            }
        }
    ],
    'Season 4': [
        {
            id: 49291,
            url: 'http://www.tvmaze.com/episodes/49291/futurama-1x04-loves-labors-lost-in-space',
            name: 'Love\'s Labors Lost in Space',
            season: 4,
            number: 4,
            airdate: '1999-04-13',
            airtime: '22:00',
            airstamp: '1999-04-14T02:00:00+00:00',
            runtime: 30,
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143953.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/143953.jpg'
            },
            summary: '<p>The crew encounters infamous space captain Zapp Brannigan.</p>',
            _links: {
              self: {
                href: 'http://api.tvmaze.com/episodes/49291'
              }
            }
        },
        {
            id: 49292,
            url: 'http://www.tvmaze.com/episodes/49292/futurama-1x05-fear-of-a-bot-planet',
            name: 'Fear of a Bot Planet',
            season: 4,
            number: 5,
            airdate: '1999-04-20',
            airtime: '22:00',
            airstamp: '1999-04-21T02:00:00+00:00',
            runtime: 30,
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/144085.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/144085.jpg'
            },
            summary: '<p>The crew makes a delivery to a planet of human-hating robots.</p>',
            _links: {
              self: {
                href: 'http://api.tvmaze.com/episodes/49292'
              }
            }
        }
    ],
}

test('takes in episodes and returns sorted into seasons', () => {
    expect(formatSeasons(input)).toEqual(expected);

    const result = formatSeasons(input);

    expect(result['Season 1']).toHaveLength(1);
    expect(result['Season 2']).toHaveLength(1);
    expect(result['Season 3']).toHaveLength(1);
    expect(result['Season 4']).toHaveLength(2);
})