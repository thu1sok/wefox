import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Custom Modules
import { ApiService } from './services/api.services';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: []
})
export class ApiModule {}
