import Zombie from '../js/zombie';

describe('Zombie class', () => {
  test('should create Zombie with correct properties', () => {
    const unit = new Zombie('Walker');

    expect(unit).toEqual({
      name: 'Walker',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });

  test('should level up correctly', () => {
    const unit = new Zombie('Walker');
    unit.levelUp();

    expect(unit.level).toBe(2);
    expect(unit.health).toBe(100);
    expect(unit.attack).toBe(48); 
    expect(unit.defence).toBe(12); 
  });

  test('should throw error if trying to level up dead unit', () => {
    const unit = new Zombie('Walker');
    unit.health = 0;

    expect(() => unit.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('should apply damage correctly', () => {
    const unit = new Zombie('Walker');
    unit.damage(50);

    expect(unit.health).toBe(55);
  });

  test('should not reduce health below 0', () => {
    const unit = new Zombie('Walker');
    unit.damage(1000);

    expect(unit.health).toBe(0);
  });

  test('should not apply damage if health is 0', () => {
    const unit = new Zombie('Walker');
    unit.health = 0;
    unit.damage(50);

    expect(unit.health).toBe(0);
  });
});
