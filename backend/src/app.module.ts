import {Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // pour que ce soit disponible partout
        }),
        // TypeOrmModule.forRoot({
        //     type: 'postgres',
        //     host: process.env.DB_HOST,
        //     port: parseInt(process.env.DB_PORT),
        //     username: process.env.DB_USER,
        //     password: process.env.DB_PASSWORD,
        //     database: process.env.DB_NAME,
        //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
        //     synchronize: true, // à désactiver en prod
        // }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
