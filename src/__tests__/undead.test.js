import Undead from '../js/undead';

describe('Undead class', () => {
  test('should create Undead with correct properties', () => {
    const unit = new Undead('Shadow');

    expect(unit).toEqual({
      name: 'Shadow',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('should level up correctly', () => {
    const unit = new Undead('Shadow');
    unit.levelUp();

    expect(unit.level).toBe(2);
    expect(unit.health).toBe(100);
    expect(unit.attack).toBe(30); 
    expect(unit.defence).toBe(30); 
  });

  test('should throw error if trying to level up dead unit', () => {
    const unit = new Undead('Shadow');
    unit.health = 0;

    expect(() => unit.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('should apply damage correctly', () => {
    const unit = new Undead('Shadow');
    unit.damage(40);

    expect(unit.health).toBe(70);
  });

  test('should not reduce health below 0', () => {
    const unit = new Undead('Shadow');
    unit.damage(1000);

    expect(unit.health).toBe(0);
  });

  test('should not apply damage if health is 0', () => {
    const unit = new Undead('Shadow');
    unit.health = 0;
    unit.damage(40);

    expect(unit.health).toBe(0);
  });
});
