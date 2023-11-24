import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { WithDataCustomPreloadStrategy } from 'tools-routes';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(WithDataCustomPreloadStrategy)), // : TODO: miss ActivatedRoute
    provideClientHydration()
  ]
};
