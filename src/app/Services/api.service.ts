import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  public Clientes: object[]
  private pathAPI: string = "http://localhost:60334/api/"
  private axios = require('axios');
  

  constructor() { }

  getClientes = (): Promise<any>  =>{

    return new Promise((resolve, reject) => {

          this.axios.get(`${this.pathAPI}Cliente/Get`)
              .then((response) => resolve(response.data))
              .catch((error) => reject(error));
      });
  }

  postCliente = (): Promise<any> =>{

    return new Promise((resolve, reject) =>{
      
      this.axios.post(`${this.pathAPI}Cliente`, 
      {
        "nome": "Pedro",
        "cpf": "222.222.222-22",
        "email": "pedro@gmail.com",
        "endereco": "Rua  Dois",
        "sexo": "Masculino",
        "profissao": "Programador",
        "empresa": "ProgDois",
        "tag": "654321"
      })
        .then((response) => {
          resolve(response)
        })
        .catch(function (error) {
          reject(error);
        })
    })
  }

  putCliente = (Cliente: any) =>{

    Cliente.nome = "Luan"

    return new Promise((resolve,reject) =>
    
      this.axios.put(`${this.pathAPI}Cliente`, Cliente)
        .then(response =>{

          resolve(response)

        })
        .catch(erro => {

          reject(erro)

        })
    )

  }

  deleteCliente = (Id: Number):Promise<any> =>{

    return new Promise((resolve, reject) =>{

      this.axios.delete(`${this.pathAPI}Cliente?id=${Id}`, {  })
      .then(response =>{

        resolve(response)
      
      })
      .catch(erro =>{

        reject(erro)

      })
    })

  }

}
