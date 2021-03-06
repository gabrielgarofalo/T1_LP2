import { Injectable } from '@angular/core';
   
import { ToastrService } from 'ngx-toastr';
   
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
   
  constructor(private toastr: ToastrService) { }
   
  showSuccess(message){
      this.toastr.success(message, "Sucesso")
  }
   
  showError(message){
      this.toastr.error(message, "Erro")
  }

  showWarning(message){
    this.toastr.warning(message, "Atenção")
}
}
   
