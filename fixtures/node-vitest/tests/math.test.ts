import { describe, it, expect } from 'vitest'
import { sum, subtract, multiply, divide } from '../src/math'

describe('math', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  // 1) Deve somar números negativos corretamente
  it('soma números negativos corretamente', () => {
    expect(sum(-5, -7)).toBe(-12)
    expect(sum(-3, 8)).toBe(5)
  })

  // 2) Deve manter identidade aditiva com zero
  it('mantém a identidade aditiva com zero', () => {
    expect(sum(0, 10)).toBe(10)
    expect(sum(10, 0)).toBe(10)
  })

  // 3) Deve subtrair dois números corretamente
  it('subtrai dois números corretamente', () => {
    expect(subtract(10, 3)).toBe(7)
    expect(subtract(3, 10)).toBe(-7)
  })

  // 4) Deve multiplicar por zero resultando em zero
  it('multiplica por zero resultando em zero', () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(5, 0)).toBe(0)
  })

  // 5) Deve multiplicar números negativos alterando o sinal corretamente
  it('multiplica números negativos alterando o sinal corretamente', () => {
    expect(multiply(-4, 3)).toBe(-12)
    expect(multiply(-4, -3)).toBe(12)
  })

  it('should divide two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(7, 3)).toBe(2.3333333333333335);
    expect(divide(0, 5)).toBe(0);
  });

  it('should handle division by zero correctly', () => {
    expect(() => divide(10, 0)).toThrow();
  });
})
