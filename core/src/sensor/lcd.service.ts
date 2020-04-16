import { Injectable } from '@nestjs/common';
import i2c = require('i2c-bus');

@Injectable()
export class LcdService {
  private DISPLAY_RGB_ADDR = 0x62;
  private DISPLAY_TEXT_ADDR = 0x3e;

  public write(text: string, r: number, g: number, b: number) {
    const i2c1 = i2c.openSync(1);
    this.setText(i2c1, text);
    this.setRGB(i2c1, r, g, b);
    i2c1.closeSync();
  }

  private setRGB(i2c1, r: number, g: number, b: number) {
    i2c1.writeByteSync(this.DISPLAY_RGB_ADDR, 0, 0);
    i2c1.writeByteSync(this.DISPLAY_RGB_ADDR, 1, 0);
    i2c1.writeByteSync(this.DISPLAY_RGB_ADDR, 0x08, 0xaa);
    i2c1.writeByteSync(this.DISPLAY_RGB_ADDR, 4, r);
    i2c1.writeByteSync(this.DISPLAY_RGB_ADDR, 3, g);
    i2c1.writeByteSync(this.DISPLAY_RGB_ADDR, 2, b);
  }

  private setText(i2c1, text: string) {
    const textCommand = (i2c1, cmd) => {
      i2c1.writeByteSync(this.DISPLAY_TEXT_ADDR, 0x80, cmd);
    };

    textCommand(i2c1, 0x01); // clear display
    textCommand(i2c1, 0x08 | 0x04); // display on, no cursor
    textCommand(i2c1, 0x28); // 2 lines
    let count = 0;
    let row = 0;
    for (let i = 0, len = text.length; i < len; i++) {
      if (text[i] === '\n' || count === 16) {
        count = 0;
        row++;
        if (row === 2) break;
        textCommand(i2c1, 0xc0);
        if (text[i] === '\n') continue;
      }
      count++;
      i2c1.writeByteSync(this.DISPLAY_TEXT_ADDR, 0x40, text[i].charCodeAt(0));
    }
  }
}
