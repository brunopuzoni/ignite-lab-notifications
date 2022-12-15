import { Module } from '@nestjs/common';
import { SendNotification } from '@application/usecases/send-notification/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/usecases/cancel-notification/cancel-notification';
import { CountRecipientNotifications } from '@application/usecases/count-recipient-notifications/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/usecases/get-recipient-notifications/get-recipient-notifications';
import { ReadNotification } from '@application/usecases/read-notification/read-notification';
import { UnreadNotification } from '@application/usecases/unread-notification/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
