import img1 from '../images/img1.webp';
import img2 from '../images/img2.webp';
import {Play} from 'lucide-react';
import bodyimg from '../images/body-img.webp';

const article = {
    articleWithPics:[
    {
      id: 1,
    img: img1,
    title: `'We just had to flee:' Fear and tension in Lebanon under deadly Israeli bombardment`,
    desc: 'Israel says it hit 1,600 Hezbollah targets and tells civilians to flee areas near the group’s weapons.',
    date: '29 day ago | Middle East',
    },
    {
      id: 2,
      img: img2,
      title: '  India anger over alleged sexual assault on woman inside police station',
      desc: '  A video of the woman, detailing her alleged abuse by police, has gone viral and led to an outcry in India.',
      date: '29 day ago | Asia',
    }
  ],
  
  articleWithoutPics:[
    {
      id: 1,
    title: `  CrowdStrike: Company to face questions over global IT outage`,
    desc: '   Cancer delays, holidays ruined, businesses out of pocket - the CrowdStrike outage examined.',
    date: '29 day ago | Technology',
    },
    {
      id: 2,
      title: ' Astronauts return to Earth after longest stay on ISS',
      desc: 'One Nasa astronaut and two Russian cosmonauts, who spent 374 days in space, were aboard the shuttle.',
      date: '8 hrs ago | World'
    },
    {
      id: 3,
  title: 'I Ex-minister found guilty in case that gripped Singapore',
  desc: '      S Iswaran, best known for bringing the F1 to Singapore, pleaded guilty to receiving gifts while in office.',
  date: '2 hrs ago | Asia',
    },
    {
      id: 4,
      title: ' Listen: The Global Story - America and the world',
      desc: `  What is the US's relationship with the world today, and how would Donald Trump and Kamala Harris shape it?`,
      date: '9 hrs ago | Middle East',
      icon: Play
    }
  ],

  articleWithBigPic:[
    {
      img: bodyimg,
      title: 'Israel air strikes kill 492 people in Lebanon, including 100 children',
      desc: "Israel says it hit 1,600 Hezbollah targets and tells civilians to flee areas near the group's weapons.",
      date: '29 day ago | Middle East'
    }
  ]
}

export default article;