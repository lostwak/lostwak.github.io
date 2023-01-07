import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../components/index.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const updateMessage = [
  {
    version: "v1.1.4",
    message: `업데이트 날짜 : 2023-01-08

    마녀두(하드)
    1. 기믹 표기 변경
    2. 클리어 시 해당 데이터가 마녀두(노말)로 인식되던 버그 및 데이터들을 수정했습니다.
    3. 클리어 이후 마을 복귀가 되지 않던 버그를 수정했습니다.

    UI
    1. 기록관의 계륵 / 마녀두(하드)의 정렬 기준이 변경되지 않던 버그를 수정했습니다.
    `
  },
  {
    version: "v1.1.0",
    message: `업데이트 날짜 : 2023-01-07

    장비 버그
    1. 인벤토리 개수 제한으로 인해 아이템이 표기되지 않던 버그를 수정했습니다.
    2. 제작 무기를 여러번 만들 수 있던 점을 최초 1회로 변경했습니다.

    일반아이템 추가
    1. 일반아이템 상의 1종이 추가 되었습니다.
    2. 일반아이템 하의 1종이 추가 되었습니다.

    밸런싱
    1. 힐러의 '겨울봄' 스킬의 데미지 계수가 110% 상향 되었습니다.
    2. 힐러의 '위치 맞추기' 스킬의 데미지 계수가 120% 상향 되었습니다.

    귀상어두
    1. 귀상어두 레이드 중 immune 가 지속되던 버그 중 하나를 수정했습니다.

    계륵
    1. 계륵 암기 패턴의 경고 범위가 피격 판정 범위보다 작던 버그를 수정했습니다.

    마녀두
    1. 마녀두의 레이저 패턴 이후 대기 시간이 1초 증가 되었습니다.
    2. 마녀두의 넥행기 소환 모션 가시성을 개선했습니다.

    서버
    1. 서버로부터 강제 종료 기능이 추가 되었습니다.
    1-1. 모니터링 중 욕설/비방 등의 비알잘딱 행동 발견 시 강제 종료 됩니다.
    
    신규 레이드
    1. 마녀두(하드)가 추가되었습니다.

    마녀두(하드)
    - 마녀두(하드)는 후발대 유저를 위해 추가되었습니다.
    - 마녀두의 모든 공격들이 매우 강력해졌습니다.
    - 기록 갱신을 위한 힐러 비선호 현상이 개선 되었으면 하는 바람입니다.
    - 버그가 있을 수 있으며 긴급 패치가 있을 수 있습니다.
    `
  },
  {
    version: "v1.0.2",
    message: `업데이트 날짜 : 2023-01-04

    1. 멤버 미표기 수정
    2. 로그인 화면 UI 위치 이동 수정
    3. 완드 아이템 수치 변경
    3. 곡괭이 아이템 수치 변경
    `
  },
  {
    version: "v1.0.1",
    message: `업데이트 날짜 : 2023-01-01
    
    정식 버전입니다.
    방송에서 처음 공개됩니다.
    `
  },

]

const UpdatePage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div
        className="game-bg-wrapper sub-wrapper">
        <StaticImage
          src="../images/update_thumbnail.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ width: `100%`, height: `100%`,  marginBottom: `var(--space-3)`, filter: `brightness(110%)` }}
        >
        </StaticImage>
      </div>
    </div>
    
    <div className="white-container sub-container">
      <div className="container">
        <h2 className="credit-h2">업데이트</h2>

        {
          updateMessage.map((log, idx) => {
            return (
              <div className="version-block" key={idx}>
                <h3>{log.version} {idx === 0 && <span className="badge badge-primary">Latest</span>} </h3>
                <p>{log.message}</p>
              </div>
            )}
          )
        }

      </div>
    </div>




  </Layout>
)

export const Head = () => <Seo title="업데이트" />

export default UpdatePage
