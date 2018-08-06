import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './counter/counter.component';

import { NgxsModule, State, Action, StateContext } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CounterState, CounterState2 } from './store/counter.state';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgxsModule.forRoot([CounterState, CounterState2], { developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  declarations: [ AppComponent, HelloComponent, CounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
