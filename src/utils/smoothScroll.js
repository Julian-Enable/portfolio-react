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
    // Crear wrapper para el contenido
    const appElement = document.querySelector('#root')
    if (!appElement) return
    
    // Configurar estilos para smooth scroll
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    appElement.style.position = 'fixed'
    appElement.style.top = '0'
    appElement.style.left = '0'
    appElement.style.width = '100%'
    appElement.style.willChange = 'transform'
    
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
    const appElement = document.querySelector('#root')
    if (!appElement) return 0
    return appElement.scrollHeight - window.innerHeight
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
    
    // Aplicar transform al contenedor principal
    const appElement = document.querySelector('#root')
    if (appElement) {
      appElement.style.transform = `translate3d(0, -${this.current}px, 0)`
    }
    
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
    
    const appElement = document.querySelector('#root')
    if (appElement) {
      appElement.style.position = ''
      appElement.style.top = ''
      appElement.style.left = ''
      appElement.style.width = ''
      appElement.style.transform = ''
      appElement.style.willChange = ''
    }
    
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }
}

export default SmoothScroll
