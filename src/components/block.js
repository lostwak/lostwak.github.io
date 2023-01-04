import * as React from "react"


import card_0 from '../images/contents/card_0.png'
import card_1 from '../images/contents/card_1.png'
import card_2 from '../images/contents/card_2.png'
import card_3 from '../images/contents/card_3.png'
import card_4 from '../images/contents/card_4.png'
import card_5 from '../images/contents/card_5.png'
import card_6 from '../images/contents/card_6.png'
import card_7 from '../images/contents/card_7.png'
import card_8 from '../images/contents/card_8.png'

export const Block = ({ children }) => {
  return (
    <>
      <div 
        className="block row"
      >
        {children}
      </div>
    </>
  )
}
export const SecondaryBlock = ({ children }) => {
  return (
    <>
      <div 
        className="block secondary-block row"
      >
        {children}
      </div>
    </>
  )
}
export const MiddleBlock = ({ children }) => {
  return (
    <>
      <div 
        className="block row f-column align-items-center"
      >
        {children}
      </div>
    </>
  )
}

export const YoutubeBlock = ({ children }) => {
  return (
    <>
      <div 
        className="block youtube-block row"
      >
        {children}
      </div>
    </>
  )
}

const contentsList = [
  {
    name: '생활',
    src: card_0,
  },
  {
    name: '던전',
    src: card_1,
  },
  {
    name: '레이드',
    src: card_2,
  },
  {
    name: '커스터마이징',
    src: card_3,
  },
  {
    name: '퀘스트',
    src: card_4,
  },
  {
    name: '호감도',
    src: card_5,
  },
  {
    name: '요리/조합',
    src: card_6,
  },
  {
    name: '구출',
    src: card_7,
  },
  {
    name: '에스더',
    src: card_8,
  },
]

export const ContentsBlock = ({}) => {
  return (
    <div className="row">
      {
        contentsList.map(e => {
          return (
            <div className="col-md-4" key={e.name}>
              <img className="contents-img" src={e.src} />
              <p className="contents-name">{e.name}</p>
            </div>
          )
        })
      }
    </div>


  )
}