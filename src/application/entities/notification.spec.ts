import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Valid content!'),
      category: 'social',
      recipientId: 'lalala-123',
    });

    expect(notification).toBeTruthy();
  });
});
