'use client'

import { trackEvent } from '@/lib/analytics'
import { useModal } from '@/hooks/useModal'

export default function Pricing() {
  const { openModal } = useModal()

  const handlePricingClick = (tier: string) => {
    trackEvent('cta_click_pricing_tier', { tier })
    openModal(tier)
  }

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">依品牌規模與監控深度選擇方案</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">NT$ 19,000<span style={{ fontSize: '1rem' }}>/月</span></div>
            <p className="pricing-description">適合需要建立「最基本偽冒告警」流程的團隊</p>
            <ul className="pricing-features">
              <li>1 個品牌 / 1–2 個渠道</li>
              <li>每日摘要告警</li>
              <li>基本處置建議（SOP）</li>
              <li>Email 通知</li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handlePricingClick('starter')}>
              申請搶先體驗（Starter）
            </button>
          </div>
          <div className="pricing-card featured">
            <h3>Pro</h3>
            <div className="price">NT$ 49,000<span style={{ fontSize: '1rem' }}>/月</span></div>
            <p className="pricing-description">適合需要「即時告警 + 證據整理 + 追蹤」的團隊</p>
            <ul className="pricing-features">
              <li>3 個品牌 / 3 個渠道</li>
              <li>即時告警（Email + 協作工具選配）</li>
              <li>Evidence Pack（截圖/摘要/來源）</li>
              <li>案件追蹤與指派</li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handlePricingClick('pro')}>
              申請搶先體驗（Pro）
            </button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">聯繫報價</div>
            <p className="pricing-description">適合需要客製整合與 SLA 的大型組織</p>
            <ul className="pricing-features">
              <li>無上限品牌與渠道</li>
              <li>客製整合（Webhook / SIEM / Ticketing）</li>
              <li>專屬支援與 SLA</li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handlePricingClick('enterprise')}>
              聯繫產品顧問
            </button>
          </div>
        </div>
        <p className="pricing-note">
          搶先體驗名額有限。我們會優先邀請有明確偽冒風險與處置需求的團隊加入試點。
        </p>
      </div>
    </section>
  )
}