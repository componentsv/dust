import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [provideLoggingService()]
})
export class AppComponent {
  constructor(private logging: LoggingService) {
    logging.log('test log');
  }
  title = 'app';
}

export const LOGGING_USE_DATE = false;
export function provideLoggingService() {
  return {
    provide: LoggingService,
    useFactory: () => new LoggingService(LOGGING_USE_DATE)
  }
}