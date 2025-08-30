import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import {UtilisateurModule} from "./utilisateur.module";
import {AuthController} from "../controllers/auth.controller";

@Module({
    imports: [
        UtilisateurModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'secret123',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
