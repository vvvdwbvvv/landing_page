'use client'

import { trackEvent } from '@/lib/analytics'
import { useModal } from '@/hooks/useModal'

export default function Hero() {
  const { openModal } = useModal()

  const handlePrimaryClick = () => {
    trackEvent('cta_click_primary')
    openModal()
  }

  const handleSecondaryClick = () => {
    trackEvent('cta_click_secondary')
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="product-name">Sentinel｜企業冒名偽冒即時告警</div>
        <h1>當有人冒用你的品牌詐騙客戶，<strong>你會在第一時間知道，並立刻能處理。</strong></h1>
        <p className="subheadline">
          Sentinel 針對假冒網站、假客服帳號、假投資群組與釣魚導流訊息，提供<strong>即時告警 + 可執行的處置建議</strong>，讓資安、風控、法遵與客服不再靠民眾通報才被動救火。
        </p>
        <div className="trust-bar">
          <span>適用金融、電商、會員制與大型服務品牌</span>
          <span>多渠道偽冒監控（MVP 先支援 1–2 種高風險渠道）</span>
          <span>告警分級 + 證據整理，便於檢舉與追蹤</span>
          <span>30 分鐘內完成基本設定（無需安裝）</span>
        </div>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={handlePrimaryClick}>
            啟用冒名監控（搶先體驗）
          </button>
          <a href="#features" className="btn btn-secondary" onClick={handleSecondaryClick}>
            看看功能與價格
          </a>
        </div>
      </div>
    </section>
  )
}