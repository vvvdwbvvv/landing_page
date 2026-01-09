export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <h2 className="section-title">偽冒事件不是「會不會發生」，而是「何時發生」</h2>
        <p className="section-intro">
          對高信任品牌來說，冒名偽冒往往不是一次性的資安事件，而是持續性的風險：它會造成客訴、詐騙受害、公關危機與內部處理成本，並直接侵蝕品牌信任。
        </p>
        <div className="problem-cards">
          <div className="problem-card">
            <h3>發現太晚</h3>
            <p>多數偽冒事件要等到客戶受害、客服爆量，甚至媒體報導才被動得知。</p>
          </div>
          <div className="problem-card">
            <h3>處置分散</h3>
            <p>資安、風控、法遵、客服各自處理，缺乏可複用 SOP 與證據整理，處理效率低且難交接。</p>
          </div>
          <div className="problem-card">
            <h3>難以衡量 ROI</h3>
            <p>你知道它很痛，但無法量化「事件數、渠道分布、處置進度與節省工時」，管理層難以決策投入。</p>
          </div>
        </div>
      </div>
    </section>
  )
}