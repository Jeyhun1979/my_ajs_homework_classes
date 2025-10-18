import Bowerman from '../js/bowerman';

describe('Bowerman class', () => {
  let unit;

  beforeEach(() => {
    unit = new Bowerman('Robin');
  });

  test('should create Bowerman with correct name and type', () => {
    expect(unit.name).toBe('Robin');
    expect(unit.type).toBe('Bowman');
  });

  test('should set default health to 100', () => {
    expect(unit.health).toBe(100);
  });

  test('should set default level to 1', () => {
    expect(unit.level).toBe(1);
  });

  test('should set attack and defence specific to Bowerman', () => {
    expect(unit.attack).toBe(25);
    expect(unit.defence).toBe(25);
  });

  test('should throw error if name is invalid', () => {
    expect(() => new Bowerman('')).toThrow();
    expect(() => new Bowerman('A')).toThrow();
    expect(() => new Bowerman('VeryLongName')).toThrow();
  });
});
