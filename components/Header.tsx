'use client'

import { trackEvent } from '@/lib/analytics'
import { useModal } from '@/hooks/useModal'

export default function Header() {
  const { openModal } = useModal()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#early-access') {
      e.preventDefault()
      trackEvent('nav_cta_click')
      openModal()
    }
  }

  return (
    <header>
      <nav className="container">
        <div className="logo">Sentinel</div>
        <div className="nav-links">
          <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>功能</a>
          <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>如何運作</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')}>方案與價格</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a>
          <a href="#early-access" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#early-access')}>
            申請搶先體驗
          </a>
        </div>
      </nav>
    </header>
  )
}