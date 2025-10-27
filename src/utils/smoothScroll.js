// Smooth scroll con inercia/momentum - versión ligera y optimizada
class SmoothScroll {
  constructor() {
    this.target = 0
    this.current = 0
    this.ease = 0.075 // Suavidad del scroll (más bajo = más suave pero más lento)
    this.velocity = 0
    this.friction = 0.85 // Fricción para el momentum (más bajo = más arrastre)
    this.rafId = null
    this.isScrolling = false
    
    this.init()
  }

  init() {
    // Deshabilitar scroll nativo
    document.body.style.position = 'fixed'
    document.body.style.top = '0'
    document.body.style.left = '0'
    document.body.style.right = '0'
    
    // Escuchar eventos de scroll
    window.addEventListener('wheel', this.onWheel.bind(this), { passive: false })
    window.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false })
    window.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false })
    window.addEventListener('touchend', this.onTouchEnd.bind(this))
    
    // Iniciar loop de animación
    this.raf()
  }

  onWheel(e) {
    e.preventDefault()
    
    // Agregar momentum al scroll
    const delta = e.deltaY * 1.5 // Multiplicador para velocidad
    this.target += delta
    this.velocity = delta * 0.3 // Momentum inicial
    
    // Limitar scroll
    this.target = Math.max(0, Math.min(this.target, this.getMaxScroll()))
    
    if (!this.isScrolling) {
      this.isScrolling = true
    }
  }

  touchStartY = 0
  touchStartTarget = 0

  onTouchStart(e) {
    this.touchStartY = e.touches[0].clientY
    this.touchStartTarget = this.target
  }

  onTouchMove(e) {
    e.preventDefault()
    const delta = this.touchStartY - e.touches[0].clientY
    this.target = this.touchStartTarget + delta
    this.target = Math.max(0, Math.min(this.target, this.getMaxScroll()))
  }

  onTouchEnd() {
    // Pequeño momentum en mobile
    this.velocity = (this.target - this.current) * 0.1
  }

  getMaxScroll() {
    return document.body.scrollHeight - window.innerHeight
  }

  raf() {
    // Aplicar fricción al momentum
    this.velocity *= this.friction
    
    // Agregar momentum al target
    if (Math.abs(this.velocity) > 0.1) {
      this.target += this.velocity
      this.target = Math.max(0, Math.min(this.target, this.getMaxScroll()))
    } else {
      this.velocity = 0
      if (Math.abs(this.target - this.current) < 0.1) {
        this.isScrolling = false
      }
    }
    
    // Interpolación suave
    this.current += (this.target - this.current) * this.ease
    
    // Aplicar transform
    document.body.style.transform = `translateY(-${this.current}px)`
    
    // Continuar loop
    this.rafId = requestAnimationFrame(() => this.raf())
  }

  destroy() {
    // Limpiar
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }
    
    window.removeEventListener('wheel', this.onWheel)
    window.removeEventListener('touchstart', this.onTouchStart)
    window.removeEventListener('touchmove', this.onTouchMove)
    window.removeEventListener('touchend', this.onTouchEnd)
    
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.transform = ''
  }
}

export default SmoothScroll
