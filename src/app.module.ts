import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, TypeOrmModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
