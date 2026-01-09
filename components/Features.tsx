export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">為「偽冒告警」而設計的完整工作流</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>1) Brand Watchlist（監控名單）</h3>
            <p>輸入品牌名、官方網域、客服管道與關鍵字，建立你的監控範圍。</p>
          </div>
          <div className="feature-card">
            <h3>2) Multi-Channel Monitoring（多渠道監控）</h3>
            <p>監控假冒網站/網域、社群冒名帳號、通訊軟體群組與釣魚導流訊息。（MVP 先聚焦 1–2 個高風險渠道）</p>
          </div>
          <div className="feature-card">
            <h3>3) Risk Scoring（風險分級）</h3>
            <p>依可疑訊號自動分級（高/中/低），降低誤報干擾，讓團隊先處理最緊急事件。</p>
          </div>
          <div className="feature-card">
            <h3>4) Evidence Pack（證據包）</h3>
            <p>自動整理 URL、來源、關鍵截圖與摘要，方便法務或平台檢舉與內部稽核留存。</p>
          </div>
          <div className="feature-card">
            <h3>5) Response Playbooks（處置劇本）</h3>
            <p>依渠道與事件類型提供可直接交辦的處置建議與公告範本，縮短處理時間。</p>
          </div>
          <div className="feature-card">
            <h3>6) Case Management（案件追蹤）</h3>
            <p>事件指派、狀態與 SLA 追蹤，讓跨部門協作可視化、可交接、可回溯。</p>
          </div>
        </div>
      </div>
    </section>
  )
}