import Swordsman from '../js/swordsman';

describe('Swordsman class', () => {
  test('should create Swordsman with correct properties', () => {
    const unit = new Swordsman('Warrior');

    expect(unit).toEqual({
      name: 'Warrior',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('should level up correctly', () => {
    const unit = new Swordsman('Warrior');
    unit.levelUp();

    expect(unit.level).toBe(2);
    expect(unit.health).toBe(100);
    expect(unit.attack).toBe(48); 
    expect(unit.defence).toBe(12); 
  });

  test('should throw error if trying to level up dead unit', () => {
    const unit = new Swordsman('Warrior');
    unit.health = 0;

    expect(() => unit.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('should apply damage correctly', () => {
    const unit = new Swordsman('Warrior');
    unit.damage(50);

    expect(unit.health).toBe(55);
  });

  test('should not reduce health below 0', () => {
    const unit = new Swordsman('Warrior');
    unit.damage(1000);

    expect(unit.health).toBe(0);
  });

  test('should not apply damage if health is 0', () => {
    const unit = new Swordsman('Warrior');
    unit.health = 0;
    unit.damage(50);

    expect(unit.health).toBe(0);
  });
});
