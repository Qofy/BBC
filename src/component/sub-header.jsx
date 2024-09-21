import '../stylesheet/sub-header.css';

const head = [
  {
    text: "Home"
  },
  {
    text: "News"
  },
  {
    text: "Sport"
  },
  {
    text: "Business"
  },
  {
    text: "Innovation"
  },
  {
    text: "Culture"
  },
  {
    text: "Travel"
  },
  {
    text: "Art"
  },
  {
    text: "Earth"
  },
  {
    text: "Video"
  },
  {
    text: "Live"
  }
]

const headMap= head.map((item, index) => {
  return (
      <p className="head-item" key={index}>{item.text}</p>
  )
})

export default function SubHeader() {
  return (
    <div className="sub-header">
          <div className="txt">
          {headMap}
          </div>

    </div>
  )
}