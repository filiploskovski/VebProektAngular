import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataTransferService {
  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  // SetMessage
  setMessage(message: any): void {
    this.messageSource.next(message);
  }

  // ReadMessage
  readMessage(): any {
    let message = null;
    this.currentMessage.subscribe({
      next: (m: any) => (message = m),
      complete: () => {}
    });

    setTimeout(() => {
      this.setMessage("");
    }, 150);

    console.log("Poraka", message);
    return message;
  }
}
