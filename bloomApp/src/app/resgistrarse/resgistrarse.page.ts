import { Component } from '@angular/core';

import { User, AuthService } from '../servicios/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resgistrarse',
  templateUrl: 'resgistrarse.page.html',
  styleUrls: ['resgistrarse.page.scss'],
})
export class ResgistrarsePage {
  user: User = {
    email: '',
    password: ''
  }

  constructor(private as: AuthService, private nc: NavController) { }

  async registrarse() {
    try {
      const response = await this.as.register(this.user)
      alert('Se registro exitosamente! Inicie sesion para continuar...')
      this.nc.navigateRoot('/home')
      console.log(response)
    } catch (error) {
      alert('El correo electronico esta repetido. Intenta con otro.')
      console.error(error)
    }
  }
}
