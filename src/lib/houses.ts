import { House } from './types';

export const houses: House[] = [
  {
    id: 'petrini',
    name: 'Petrini House',
    name_el: 'Πέτρινο Σπίτι',
    capacity: 4,
    price: 120,
    image: '/houses/petrini.jpg',
    description: 'Stone wooden house with sea view, 2 bedrooms, veranda overlooking olive groves.',
    description_el: 'Πέτρινο ξύλινο σπίτι με θέα θάλασσα, 2 υπνοδωμάτια, βεράντα με ελιές.'
  },
  {
    id: 'elia',
    name: 'Elia House',
    name_el: 'Σπίτι της Ελιάς',
    capacity: 2,
    price: 95,
    image: '/houses/elia.jpg',
    description: 'Cozy house for 2, perfect for horse riders, next to stables.',
    description_el: 'Ιδανικό για 2 άτομα, δίπλα στους στάβλους.'
  }
];