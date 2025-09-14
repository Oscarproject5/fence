// Security utilities for input validation and sanitization

// HTML entities that need to be escaped
const htmlEntities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
}

// Escape HTML to prevent XSS attacks
export function escapeHtml(text: string): string {
  if (typeof text !== 'string') return ''
  return text.replace(/[&<>"'\/]/g, (char) => htmlEntities[char] || char)
}

// Sanitize input by removing dangerous characters and limiting length
export function sanitizeInput(input: string, maxLength: number = 1000): string {
  if (typeof input !== 'string') return ''

  // Remove null bytes
  let sanitized = input.replace(/\0/g, '')

  // Remove control characters except newlines and tabs
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')

  // Limit length
  sanitized = sanitized.slice(0, maxLength)

  // Trim whitespace
  sanitized = sanitized.trim()

  return sanitized
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email) && email.length <= 254
}

// Validate phone number (US format)
export function isValidPhone(phone: string): boolean {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '')

  // Check if it's a valid US phone number (10 digits, optionally with 1 at the start)
  return digitsOnly.length === 10 || (digitsOnly.length === 11 && digitsOnly.startsWith('1'))
}

// Validate name (letters, spaces, hyphens, apostrophes only)
export function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s\-']+$/
  return nameRegex.test(name) && name.length >= 2 && name.length <= 100
}

// Validate address (alphanumeric, spaces, common punctuation)
export function isValidAddress(address: string): boolean {
  const addressRegex = /^[a-zA-Z0-9\s,.\-#]+$/
  return addressRegex.test(address) && address.length >= 5 && address.length <= 200
}

// Sanitize form data
export interface FormData {
  name?: string
  email?: string
  phone?: string
  address?: string
  message?: string
  service?: string
  fenceType?: string
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
  sanitizedData: FormData
}

export function validateAndSanitizeForm(data: FormData): ValidationResult {
  const errors: string[] = []
  const sanitizedData: FormData = {}

  // Validate and sanitize name
  if (data.name) {
    sanitizedData.name = sanitizeInput(data.name, 100)
    if (!isValidName(sanitizedData.name)) {
      errors.push('Invalid name format')
    }
  }

  // Validate and sanitize email
  if (data.email) {
    sanitizedData.email = sanitizeInput(data.email.toLowerCase(), 254)
    if (!isValidEmail(sanitizedData.email)) {
      errors.push('Invalid email format')
    }
  }

  // Validate and sanitize phone
  if (data.phone) {
    sanitizedData.phone = sanitizeInput(data.phone, 20)
    if (!isValidPhone(sanitizedData.phone)) {
      errors.push('Invalid phone number format')
    }
  }

  // Validate and sanitize address
  if (data.address) {
    sanitizedData.address = sanitizeInput(data.address, 200)
    if (!isValidAddress(sanitizedData.address)) {
      errors.push('Invalid address format')
    }
  }

  // Sanitize message
  if (data.message) {
    sanitizedData.message = sanitizeInput(data.message, 2000)
  }

  // Sanitize service
  if (data.service) {
    sanitizedData.service = sanitizeInput(data.service, 50)
  }

  // Sanitize fence type
  if (data.fenceType) {
    const validFenceTypes = ['wood', 'chain', 'iron', 'ranch', 'repair', 'gate', 'other']
    if (validFenceTypes.includes(data.fenceType.toLowerCase())) {
      sanitizedData.fenceType = data.fenceType.toLowerCase()
    } else {
      errors.push('Invalid fence type selected')
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  }
}

// Check for potential spam patterns
export function checkForSpam(text: string): boolean {
  if (!text) return false

  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|winner|congratulations|claim.*prize)\b/i,
    /\b(click here|buy now|limited time|act now|order now)\b/i,
    /\b(million.*dollars|inheritance|nigerian.*prince)\b/i,
    /(http|https):\/\/[^\s]+/g, // URLs in message (could be legitimate, but worth checking)
  ]

  for (const pattern of spamPatterns) {
    if (pattern.test(text)) {
      return true
    }
  }

  // Check for excessive caps (more than 50% capitals)
  const capsCount = (text.match(/[A-Z]/g) || []).length
  const letterCount = (text.match(/[a-zA-Z]/g) || []).length
  if (letterCount > 10 && capsCount / letterCount > 0.5) {
    return true
  }

  return false
}

// Generate a secure nonce for inline scripts (if needed)
export function generateNonce(): string {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return Buffer.from(array).toString('base64')
}

// Honeypot field check (for bot protection)
export function isHoneypotTriggered(honeypotValue: string | undefined): boolean {
  return !!honeypotValue && honeypotValue.length > 0
}

// Time-based validation (form filled too quickly = likely bot)
export function isFilledTooQuickly(startTime: number, minimumSeconds: number = 3): boolean {
  const elapsedSeconds = (Date.now() - startTime) / 1000
  return elapsedSeconds < minimumSeconds
}