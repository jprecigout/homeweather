import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from './auth-user.dto';
import { User } from 'src/user/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private async getUser(userDto: AuthUserDto) {
    const user: User = await this.userService.find(userDto.username);
    if (user && (await user.comparePassword(userDto.password, user.password))) {
      return user;
    }
    return null;
  }

  async login(userDto: AuthUserDto) {
    const user: User = await this.getUser(userDto);
    const payload = { id: user.id, username: user.username };
    return {
      id: user.id,
      username: user.username,
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<User> {
    const userDto: AuthUserDto = { username: username, password: pass };
    return this.getUser(userDto);
  }
}
