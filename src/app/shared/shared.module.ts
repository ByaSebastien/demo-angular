import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';

@NgModule({
  declarations: [CustomCurrencyPipe, ConvertTimePipe],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, CustomCurrencyPipe, ConvertTimePipe],
})
export class SharedModule {}
