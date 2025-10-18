import Magician from '../js/magician';

describe('Magician class', () => {
  test('should create Magician with correct properties', () => {
    const unit = new Magician('Gandalf');

    expect(unit).toEqual({
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('should level up correctly', () => {
    const unit = new Magician('Gandalf');
    unit.levelUp();

    expect(unit.level).toBe(2);
    expect(unit.health).toBe(100);
    expect(unit.attack).toBe(12); 
    expect(unit.defence).toBe(48); 
  });

  test('should throw error if trying to level up dead unit', () => {
    const unit = new Magician('Gandalf');
    unit.health = 0;

    expect(() => unit.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('should apply damage correctly', () => {
    const unit = new Magician('Gandalf');
    unit.damage(50);

    expect(unit.health).toBe(70);
  });

  test('should not reduce health below 0', () => {
    const unit = new Magician('Gandalf');
    unit.damage(999);

    expect(unit.health).toBe(0);
  });

  test('should not apply damage if health is 0', () => {
    const unit = new Magician('Gandalf');
    unit.health = 0;
    unit.damage(50);

    expect(unit.health).toBe(0);
  });
});
