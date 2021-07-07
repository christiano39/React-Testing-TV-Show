import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from '../components/Episodes';

const episodes = [
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
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143950jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/57143950.jpg'
      },
      summary: '<p>A delivery boy frozen in the year 1999 awakens in the year 3000.Phillip J. Fry delivers a pizza to a Cryogenics lab on New Years eve, only todiscover that it is a prank delivery and then accidentally falls into a opencryogenics chamber, is put to sleep and wakes up in the far future.</p>',
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
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143951jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/57143951.jpg'
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
        medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/57/143952jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/57143952.jpg'
      },
      summary: '<p>Bender offers to let Fry move in with him when Fry is forced tomove out of the Planet Express because of his slob style of living.</p>',
      _links: {
        self: {
          href: 'http://api.tvmaze.com/episodes/49290'
        }
      }
    },
]

test("Episodes renders without errors", () => {
    render(<Episodes episodes={[]}/>);
});

test("displays episodes as the episodes prop is updated", () => {
    const { rerender } = render(<Episodes episodes={[]}/>);

    expect(screen.queryAllByTestId('episode')).toHaveLength(0);

    expect(screen.queryByText(/space pilot 3000/i)).toBeNull();
    expect(screen.queryByText(/the series has landed/i)).toBeNull();
    expect(screen.queryByText(/i, roommate/i)).toBeNull();

    rerender(<Episodes episodes={episodes}/>);
    
    expect(screen.getAllByTestId('episode')).toHaveLength(3);

    expect(screen.getByText(/space pilot 3000/i)).toBeInTheDocument();
    expect(screen.getByText(/the series has landed/i)).toBeInTheDocument();
    expect(screen.getByText(/i, roommate/i)).toBeInTheDocument();
});
