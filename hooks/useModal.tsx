'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ModalContextType {
  isOpen: boolean
  selectedPlan: string
  openModal: (plan?: string) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const openModal = (plan = '') => {
    setSelectedPlan(plan)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedPlan('')
  }

  return (
    <ModalContext.Provider value={{ isOpen, selectedPlan, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}