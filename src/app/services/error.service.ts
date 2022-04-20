import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private toastrService: ToastrService) {}

  showBackendError(errorResponse: any, otherErrorMessage: string) {
    if (
      errorResponse.error.ValidationErrors &&
      errorResponse.error.ValidationErrors.length > 0
    ) {
      for (let i = 0; i < errorResponse.error.ValidationErrors.length; i++) {
        this.toastrService.error(
          errorResponse.error.ValidationErrors[i].otherErrorMessage,
          'Doğrulama hatası'
        );
      }
    } else {
      this.toastrService.error(errorResponse.error.message, otherErrorMessage);
    }
  }
}
