import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ServiceHttpService } from "../../services/service-http.service";


@Component({
  selector: 'app-form-contact',
  standalone: true,
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
  imports: [CommonModule, FormsModule],
})


export class FormContactComponent {

  isValidate = false;
  onError = false;
  emptyName = false;
  emptyEmail = false;
  emptyMessage = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSucess(): void {
    this.isValidate = true;
    setTimeout(() => this.isValidate = false, 3000)
  }

  constructor(private httpService: ServiceHttpService) { }

  onSubmit(): void {
    if (this.formData.name != "" && this.formData.email != "" && this.formData.message != "") {
      this.emptyName = false;
      this.emptyEmail = false;
      this.emptyMessage = false;
      this.onError = false
      this.httpService.submitFormData(this.formData).subscribe(
        response => {
          console.log('Réponse du backend :', response);
          this.onSucess()
          this.formData = {
            name: '',
            email: '',
            message: ''
          };
        },
        error => {
          this.onError = true;
          console.error('Erreur lors de la réception de la réponse du backend :', error);
          console.log('Réponse du serveur (erreur) :', error.error);
        }
      );
    } else {
      if (this.formData.name == "") {
        this.emptyName = true
      } if (this.formData.email == "") {
        this.emptyEmail = true
      } if (this.formData.message == "") {
        this.emptyMessage = true
      }
    }

  }
}
