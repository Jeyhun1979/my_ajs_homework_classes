import Character from '../js/character';

describe('Character class', () => {
  test('should create character with valid name and type', () => {
    const char = new Character('Hero', 'Bowman');
    expect(char.name).toBe('Hero');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBeNull();
    expect(char.defence).toBeNull();
  });

  test('should throw error for invalid name (too short)', () => {
    expect(() => new Character('A', 'Swordsman')).toThrow();
  });

  test('should throw error for invalid name (too long)', () => {
    expect(() => new Character('VeryLongName123', 'Swordsman')).toThrow();
  });

  test('should throw error for non-string name', () => {
    expect(() => new Character(123, 'Magician')).toThrow();
  });

  test('should throw error for invalid type', () => {
    expect(() => new Character('Hero', 'Knight')).toThrow();
  });

  test('levelUp should increase level, restore health, and boost stats', () => {
    const char = new Character('Archer', 'Bowman');
    char.attack = 20;
    char.defence = 30;
    char.health = 50;

    char.levelUp();

    expect(char.level).toBe(2);
    expect(char.health).toBe(100);
    expect(char.attack).toBe(Math.round(20 * 1.2));
    expect(char.defence).toBe(Math.round(30 * 1.2));
  });

  test('levelUp should throw error if health is 0', () => {
    const char = new Character('Ghost', 'Undead');
    char.health = 0;
    expect(() => char.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('levelUp does not change attack/defence if they are null', () => {
    const char = new Character('Neutral', 'Zombie');
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBe(null);
    expect(char.defence).toBe(null);
    expect(char.health).toBe(100);
  });

  test('damage reduces health correctly with defence', () => {
    const char = new Character('Tank', 'Undead');
    char.defence = 20;
    char.damage(50); 
    expect(char.health).toBe(60);
  });

  test('damage reduces health correctly when defence is null', () => {
    const char = new Character('Dummy', 'Daemon');
    char.defence = null;
    char.damage(30); 
    expect(char.health).toBe(70);
  });

  test('damage does nothing if health is 0', () => {
    const char = new Character('Dead', 'Magician');
    char.health = 0;
    char.damage(50);
    expect(char.health).toBe(0);
  });

  test('health should not go below 0 after damage', () => {
    const char = new Character('Weakling', 'Bowman');
    char.defence = 0;
    char.damage(200);
    expect(char.health).toBe(0);
  });
});
