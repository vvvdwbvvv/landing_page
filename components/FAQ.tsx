'use client'

import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Q1：需要安裝軟體或修改系統嗎？',
      answer: '不需要。搶先體驗版本以外部監控與告警為主，快速上線。',
    },
    {
      question: 'Q2：會不會很多誤報？',
      answer: '我們提供風險分級、白名單與關鍵字策略，讓團隊把時間用在真正高風險事件上。',
    },
    {
      question: 'Q3：目前支援哪些渠道？',
      answer: '搶先體驗（MVP）會先支援 1–2 個最常見且高風險渠道；其他渠道會依試點客戶需求逐步擴充。',
    },
    {
      question: 'Q4：你們會協助下架或檢舉嗎？',
      answer: '我們會提供可直接使用的檢舉證據包與 SOP。若需要代辦或顧問協助，可在申請中說明。',
    },
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}