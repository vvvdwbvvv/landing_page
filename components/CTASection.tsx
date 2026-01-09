'use client'

import { trackEvent } from '@/lib/analytics'
import { useModal } from '@/hooks/useModal'

export default function CTASection() {
  const { openModal } = useModal()

  const handleClick = () => {
    trackEvent('cta_click_mid_section')
    openModal()
  }

  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="section-title">想知道你的品牌目前是否正在被偽冒？</h2>
        <p className="cta-description">
          提交申請後，我們會寄出一份「初步偽冒風險盤點」與搶先體驗資訊，協助你快速建立偽冒處置流程。
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={handleClick}>
            啟用冒名監控（搶先體驗）
          </button>
        </div>
      </div>
    </section>
  )
}