import { Component } from '@angular/core';

import { User, AuthService } from '../servicios/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = {
    email: '',
    password: ''
  }

  constructor(private as: AuthService, private nc: NavController) { }

  async inicioSesion() {
    try {
      const response = await this.as.login(this.user)
      alert('Inicio sesion correctamente! Sera redirigido a la galeria...')
      this.nc.navigateRoot('/galeria')
      console.log(response)
    } catch (error) {
      console.error(error)
      alert('El usuario o contraseña no es correcto. Tratar de nuevo o registrarse.')
    }
  }
}

