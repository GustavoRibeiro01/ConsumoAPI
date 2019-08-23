import { Component } from '@angular/core';
import { APIService } from '../Services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ListaCliente
  ListaCliente1

  constructor(public api:APIService) {

    this.listarClientes()

  }

  listarClientes = () =>{

    this.api.getClientes().then(response => {

      this.ListaCliente = response
      console.log(this.ListaCliente)

    }).catch(erro =>{

      console.log(erro)

    })
  }

  Gravar = (): void =>{

    this.api.postCliente()
      .then(response =>{

        this.listarClientes()

      })
      .catch(erro =>{

        console.log(erro)
    
      })

  }

  Atualizar = (Cliente) =>{

    this.api.putCliente(Cliente)
      .then(response =>{

        this.listarClientes()

      })
      .catch(erro =>{

        console.log(erro)

      })
  }

  Deletar = (Id: number) =>{

    this.api.deleteCliente(Id)
      .then(response =>{

        this.listarClientes()

      })
      .catch(erro =>{
        
        console.log(erro)

      })

  }

}
