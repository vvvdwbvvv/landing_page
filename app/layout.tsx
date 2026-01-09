import type { Metadata } from 'next'
import './globals.css'
import { ModalProvider } from '@/hooks/useModal'

export const metadata: Metadata = {
  title: 'Sentinel - 冒名監控解決方案',
  description: 'Sentinel 針對假冒網站、假客服帳號、假投資群組、釣魚訊息導流等偽冒情境，提供即時告警與可執行處置建議',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  )
}