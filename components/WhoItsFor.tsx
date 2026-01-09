export default function WhoItsFor() {
  return (
    <section className="who-its-for">
      <div className="container">
        <h2 className="section-title">特別適合下列團隊與情境</h2>
        <div className="who-its-for-grid">
          <div className="who-column">
            <h3>你的團隊可能是：</h3>
            <ul>
              <li>資安 / SOC / Threat Intelligence</li>
              <li>風控 / 反詐 / 法遵</li>
              <li>客服營運 / Trust & Safety</li>
              <li>法務 / 品牌公關（事件應對）</li>
            </ul>
          </div>
          <div className="who-column">
            <h3>你可能正在面對：</h3>
            <ul>
              <li>冒名官方客服、假理專/假投顧導流詐騙</li>
              <li>假網站仿冒登入/付款頁面</li>
              <li>社群冒名粉專、群組招攬投資或交易</li>
              <li>通訊軟體散播釣魚連結與假活動頁</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}