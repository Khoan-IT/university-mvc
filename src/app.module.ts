import { AdminModule } from './modules/admin/admin.module';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), AdminModule],
  providers: [AppService],
})
export class AppModule {}
