import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { Block, SecondaryBlock, YoutubeBlock, MiddleBlock, ContentsBlock } from "../components/block"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import  "../components/yuristrap.min.css"

import vii from '../images/vii.png'

import warrier from '../images/warrier.png'
import war_2 from '../images/war_2.png'
import magician from '../images/magician.png'
import mag_2 from '../images/mag_2.png'
import helaer from '../images/healer.png'
import hea_2 from '../images/hea_2.png'



const IndexPage = () => {
  const [jobIdx, setJobIdx] = React.useState(0);
  const jobList = [
    {
      job: "전사",
      desc: `공격 간격이 타 직업에 비해 짧습니다.
      기믹 수행 능력과 데미지를 골고루 갖춘 직업입니다.
      근접전이 강제됩니다.`,
      ability: `기믹 능력 : 준수함
      딜량 : 준수함
      난이도 : 준수함
      `,
      src: war_2
    },
    {
      job: "법사",
      desc: `강력한 데미지를 담은 한 방의 스킬을 사용합니다.
      큰 데미지를 한번에 줄 수 있지만 의존도가 높으며 적이쉽게 맞아 준다는 장담은 없습니다.`,
      ability: `기믹 능력 : 낮음
      딜량 : 준수함
      난이도 : 높음
      `,
      src: mag_2
    },
    {
      job: "힐러",
      desc: `파티에서 중요한 존재입니다.
      데미지의 크기가 크진 않을지라도 안정적이며 전체 상황을 파악하기 쉽습니다.`,
      ability: `기믹 능력 : 높음
      딜량 : 준수함
      난이도 : 쉬움
      `,
      src: hea_2
    }
  ];
  
  const data = useStaticQuery(graphql`
  query Records($eq: Int = -1) {
    allRecordsJson(
      sort: {clearedAt: {_date: {_numberLong: ASC}}}
      filter: {raid: {gt: $eq}}
    ) {
      edges {
        node {
          users
          clearTime
          clearedAt {
            _date {
              _numberLong
            }
          }
          raid
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <div className={styles.textCenter}>
        <div
          className="game-bg-wrapper">
          <StaticImage
            src="../images/thumbnail.png"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ width: `100%`, height: `100%`,  marginBottom: `var(--space-3)`, filter: `brightness(70%)` }}
          >
          </StaticImage>
          <div
            className="game-bg-wrapper-content">
            <h2
              className="txt-main-visual">
                MORPG 협동 레이드, 로스트왁
            </h2>
            <h3
              className="txt-sub-visual">
                2022 연말공모전
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <YoutubeBlock>
          <iframe 
            className="yt-iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/"
            title="YouTube video player"
            // frameBorder={"0"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
          <div className="block-desc">
            <h3>공지사항</h3>
            <p></p>
            <p>서버 운영을 아래와 같이 운영합니다.</p>
            <p>상황에 따라 변경 될 수 있으며 운영하지 않을 수도 있습니다.</p>
            <p>- 1/5(목) 17:00 ~ 1/6(금) 4:00</p>
            <p>- 1/6(금) 17:00 ~ 1/7(토) 4:00</p>
            <p>- [미정]  1/7(토) 12:00 ~ 1/9(월) 2:00</p>
          </div>
        </YoutubeBlock>
      </div>

      <div className="secondary-container">
        <div className="container">
          <SecondaryBlock>
            <div className="col-md-6 block-desc">
              <h3>컨텐츠</h3>
              {/* <img
                className="img-contents"
                alt="contents"
                style={{ margin: 0 }}
                src={contents}
              /> */}
              <ContentsBlock></ContentsBlock>
            </div>
            <div className="col-md-6 block-desc" style={{marginTop: `5rem`}}>
              <h3>기록관</h3>
              <ul className="list-group">
                { 
                  data.allRecordsJson.edges.map((e, idx) => {
                    return (
                      <li className="list-group-item" key={idx}>{ e.node.users }</li>
                    );
                  })
                }
              </ul>
              <p className="updated-txt">업데이트 날짜 : 2023-01-04 18:00</p>
            </div>
          </SecondaryBlock>
        </div>
      </div>

      <div className="gradient-container">
        <div className="container">
          <Block>
            <div className="col-lg-6 block-desc">
              {/* 직업 3개 밖에 안되니까 그냥 노가다 */}
              <h3 className="job-name">{ jobList[jobIdx].job }</h3>
              <div className="job-desc">
                <p>{ jobList[jobIdx].desc }</p>
                <p className="job-ability">{ jobList[jobIdx].ability }</p>
              </div>
              <button className={`job-btn ${jobIdx === 0 ? 'job-selected' : ''}`} onClick={() => {setJobIdx(0)}}>
                <img src={warrier}/>
              </button>
              <button className={`job-btn ${jobIdx === 1 ? 'job-selected' : ''}`} onClick={() => {setJobIdx(1)}}>
                <img src={magician}/>
              </button>
              <button className={`job-btn ${jobIdx === 2 ? 'job-selected' : ''}`} onClick={() => {setJobIdx(2)}}>
                <img src={helaer}/>
              </button>
            </div>
            <div className="col-lg-6 hide-md">
              <img
                className="img-segu"
                alt="비챤"
                style={{ margin: 0 }}
                src={jobList[jobIdx].src}
              />
              </div>
          </Block>
        </div>
      </div>

      <div className="black-container">
        <div className="container">
          <MiddleBlock>
            <h3 className="start-txt">지금 플레이하기</h3>
            <Link to="https://github.com/lostwak/lostwak.github.io/releases/download/v1.0.2/Lostwak-v1.0.2.zip" className="start-btn">다운로드</Link>
          </MiddleBlock>
        </div>
      </div>

    </Layout>
    )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="로스트왁" />

export default IndexPage
