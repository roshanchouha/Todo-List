import image from '../image/sun.png'
import work from '../image/suitcase.png'
import planned from '../image/task.png'
import Personal from '../image/bussiness-man.png'
import shopping from '../image/shopping-bag.png';
import other from '../image/delivery-box.png'
import { Ptask } from '../Planned'
import { Petask } from '../Personal'
import { Ttask } from '../Today'
import { Wtask } from '../Work'
import { useEffect } from 'react'
import { Stask } from '../Shooping';
import { Otask } from '../Other';

const data = [
  {
    id: '1',
    image: image,
    heading: 'Today',
    task: Ttask,
  },
  {
    id: 2,
    image: planned,
    heading: 'Planned',
    task: Ptask,
  },
  {
    id: 3,
    image: Personal,
    heading: 'Personal',
    task: Petask,
  },
  {
    id: 4,
    image: work,
    heading: 'Work',
    task: Wtask,
  },
  {
    id: 5,
    image: shopping,
    heading: 'Shopping',
    task: Stask,
  },
  {
    id: 6,
    image: other,
    heading: 'Other',
    task: Otask,
  }
]  
export default data;