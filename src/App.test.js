import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');

const showData = {
    id: 538,
    url: 'http://www.tvmaze.com/shows/538/futurama',
    name: 'Futurama',
    type: 'Animation',
    language: 'English',
    genres: [
      'Comedy',
      'Adventure',
      'Science-Fiction'
    ],
    status: 'Ended',
    runtime: 30,
    premiered: '1999-03-28',
    officialSite: 'http://www.cc.com/shows/futurama',
    schedule: {
      time: '22:00',
      days: [
        'Wednesday'
      ]
    },
    rating: {
      average: 9
    },
    weight: 89,
    network: {
      id: 23,
      name: 'Comedy Central',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York'
      }
    },
    webChannel: null,
    externals: {
      tvrage: 3628,
      thetvdb: 73871,
      imdb: 'tt0149460'
    },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/4/11403.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/4/11403.jpg'
    },
    summary: '<p><b>Futurama</b> follows pizza guy Philip J. Fry, who reawakens in 31st century New New York after a cryonics lab accident. Now part of the Planet Express delivery crew, Fry travels to the farthest reaches of the universe with his robot buddy Bender and cyclopsian love interest Leela, discovering freaky mutants, intergalactic conspiracies and other strange stuff.</p>',
    updated: 1593255316,
    _links: {
      self: {
        href: 'http://api.tvmaze.com/shows/538'
      },
      previousepisode: {
        href: 'http://api.tvmaze.com/episodes/49411'
      }
    },
    _embedded: {
      episodes: [
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
          season: 1,
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
          season: 1,
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
      ]
    }
}

test('data is fetched and rendered correctly', async () => {
    mockFetchShow.mockResolvedValueOnce(showData);

    render(<App />);

    expect(screen.queryByText(/futurama/i)).not.toBeInTheDocument();

    await waitFor(async () => {
        expect(await screen.findAllByText(/futurama/i)).toHaveLength(2);
    })

    expect(screen.getByText(/select a season/i)).toBeInTheDocument();
});