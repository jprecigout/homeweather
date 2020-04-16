import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthUserDto } from './auth-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  register(@Body() user: AuthUserDto) {
    return this.userService.create(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() user: AuthUserDto) {
    return this.authService.login(user);
  }
}
