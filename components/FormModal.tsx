'use client'

import { useState, useEffect, FormEvent } from 'react'
import { useModal } from '@/hooks/useModal'
import { trackEvent } from '@/lib/analytics'

export default function FormModal() {
  const { isOpen, selectedPlan, openModal, closeModal } = useModal()
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    if (isOpen) {
      trackEvent('form_start')
      setShowThankYou(false)
    }
  }, [isOpen])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const budget = formData.get('budget') as string
    const role = formData.get('role') as string
    const timeline = formData.get('timeline') as string
    
    // Validate checkboxes
    const concerns = formData.getAll('concern')
    if (concerns.length === 0) {
      alert('請至少選擇一個偽冒渠道')
      return
    }

    trackEvent('form_submit')
    
    if (budget) trackEvent('budget_selected', { value: budget })
    if (role) trackEvent('role_selected', { value: role })
    if (timeline) trackEvent('time_to_launch_selected', { value: timeline })

    setShowThankYou(true)
    
    // In a real implementation, you would send the form data to a backend here
    const formObject: Record<string, any> = Object.fromEntries(formData)
    formObject.concern = concerns
    console.log('Form submitted:', formObject)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal active" onClick={handleBackdropClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>&times;</button>
        {!showThankYou ? (
          <div id="formContent">
            <h2 style={{ marginBottom: '1rem' }}>申請搶先體驗：啟用冒名監控</h2>
            <p style={{ marginBottom: '1.5rem', color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>
              請留下基本資訊。我們將依你的產業與偽冒風險情境，寄出搶先體驗資訊與初步風險盤點建議。
            </p>
            <form id="earlyAccessForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">工作信箱（企業信箱）*</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">公司名稱 *</label>
                <input type="text" id="company" name="company" required />
              </div>
              <div className="form-group">
                <label htmlFor="website">公司官網 *</label>
                <input type="url" id="website" name="website" required />
              </div>
              <div className="form-group">
                <label htmlFor="industry">產業別 *</label>
                <select id="industry" name="industry" required>
                  <option value="">請選擇</option>
                  <option value="finance">金融</option>
                  <option value="ecommerce">電商零售</option>
                  <option value="service">服務業</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="role">你的部門/角色 *</label>
                <select id="role" name="role" required>
                  <option value="">請選擇</option>
                  <option value="security">資安</option>
                  <option value="risk">風控反詐</option>
                  <option value="compliance">法遵</option>
                  <option value="customer-service">客服營運</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="concern">目前最常見的偽冒渠道（可複選）*</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="concern" value="fake-website" />
                    假網站/網域
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="concern" value="social-account" />
                    社群帳號
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="concern" value="messaging-group" />
                    通訊軟體群組
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="concern" value="phishing" />
                    釣魚訊息導流
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="concern" value="other" />
                    其他
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="incidents">過去 3 個月是否發生疑似偽冒事件 *</label>
                <select id="incidents" name="incidents" required>
                  <option value="">請選擇</option>
                  <option value="0">0</option>
                  <option value="1-3">1–3</option>
                  <option value="4-10">4–10</option>
                  <option value="10+">10+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="brandAssets">想監控的品牌資產（品牌名、官方網域、關鍵字）*</label>
                <textarea id="brandAssets" name="brandAssets" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="plan">偏好方案 *</label>
                <select id="plan" name="plan" required defaultValue={selectedPlan || ''}>
                  <option value="">請選擇</option>
                  <option value="starter">Starter</option>
                  <option value="pro">Pro</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">每月預算區間 *</label>
                <select id="budget" name="budget" required>
                  <option value="">請選擇</option>
                  <option value="<20k">&lt; 20k</option>
                  <option value="20-50k">20–50k</option>
                  <option value="50-100k">50–100k</option>
                  <option value="100k+">100k+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">希望多久內上線 *</label>
                <select id="timeline" name="timeline" required>
                  <option value="">請選擇</option>
                  <option value="2weeks">2 週內</option>
                  <option value="1month">1 個月</option>
                  <option value="1quarter">1 季度</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="notes">其他補充（選填）</label>
                <textarea id="notes" name="notes" rows={3}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                送出並申請搶先體驗
              </button>
            </form>
          </div>
        ) : (
          <div className="thank-you active">
            <h2>已收到申請</h2>
            <p>感謝你。我們將在 2 個工作天內寄出搶先體驗資訊與初步偽冒風險盤點建議。<br />若你希望更快對焦需求，可直接預約 15 分鐘需求討論。</p>
            <div className="thank-you-actions">
              <a href="#" className="btn btn-primary" onClick={() => trackEvent('calendly_click')}>
                預約 15 分鐘需求討論
              </a>
              <a href="#" className="btn btn-secondary" onClick={() => trackEvent('download_checklist')}>
                下載：偽冒事件處置清單（PDF）
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}