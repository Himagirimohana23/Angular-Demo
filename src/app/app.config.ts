import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {CurrencyPipe} from '@angular/common';
import {SignedNumberPipe} from './shared/pipes/signed-number-pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    CurrencyPipe,
    SignedNumberPipe,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
