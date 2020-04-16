import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable } from "rxjs";

import { Event } from "../models/dashConfItem.model";

import { environment } from "../../../environments/environment";

@Injectable()
export class SocketService {
  private url = environment.SOCKETEndpoint;
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(event, message) {
    this.socket.emit(event, message);
  }

  public onEvent = (event: Event) => {
    return Observable.create((observer) => {
      this.socket.on(event, (message) => {
        observer.next(message);
      });
    });
  };
}
