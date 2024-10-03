// React import removed as it's not used in this component
import '../stylesheet/body-2.css';
import save from '../images/save.webp';
 import sea from '../images/sea.webp';
import Body from './body';

function Body2() {
  const news1 = [{
    id: 1,
    img: save,
    title: `The 'mind bombs' that changed the whaling industry`,
    desc: "IIn the 1970s, a small group of Greenpeace activists had a unique idea for how they could put an end to commercial whaling.",
    date: '29 days ago | Future',
  }];

  const news2 = [{
    id: 2,
    img: sea,
    title: `Europe's under-the-radar Nordic destination`,
    desc: `Considered the gateway to the world's largest archipelago and renowned for its food scene, Finland's second city is well worth a detour.`,
    date: '2 days ago | Travel'
  }];

  // const news3 = [{
  //   id: 3,
  //   img: imgc,
  //   title: 'New technology breakthrough in clean energy',
  //   desc: 'Scientists announce a major advancement in renewable energy technology.',
  //   date: '5 days ago | Technology'
  // }];

  return (
    <div className="body-2">
      <Body news={news1} />
      <Body news={news2} />
    </div>
  );
}

export default Body2;
