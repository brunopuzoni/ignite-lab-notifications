import { Content } from './content';

describe('Notification Content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Valid content!');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('***')).toThrow();
  });

  it('Should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('*'.repeat(241))).toThrow();
  });
});
