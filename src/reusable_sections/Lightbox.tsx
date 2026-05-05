import { useEffect } from 'react'

interface LightboxProps {
  photos: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  alt?: string
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext, alt = 'Photo' }: LightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Close */}
      <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '24px', background: 'none', border: 'none', color: '#fff', fontSize: '38px', cursor: 'pointer', lineHeight: 1 }}>✕</button>

      {/* Prev */}
      {index > 0 && (
        <button onClick={e => { e.stopPropagation(); onPrev() }} style={{ position: 'absolute', left: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', fontSize: '32px', cursor: 'pointer', borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
      )}

      {/* Image */}
      <img
        src={photos[index]}
        alt={alt}
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '88vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
      />

      {/* Counter */}
      <div style={{ position: 'absolute', bottom: '24px', left: 0, right: 0, textAlign: 'center', color: '#fff', fontSize: '15px', fontWeight: 600 }}>
        {index + 1} / {photos.length}
      </div>

      {/* Next */}
      {index < photos.length - 1 && (
        <button onClick={e => { e.stopPropagation(); onNext() }} style={{ position: 'absolute', right: '16px', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', fontSize: '32px', cursor: 'pointer', borderRadius: '50%', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
      )}
    </div>
  )
}
