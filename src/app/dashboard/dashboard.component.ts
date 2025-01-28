import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  // isLoading: boolean  =  false;
  // data: string = '';

  // constructor(){
  //   this.getData();
  // }


  // getData(){
  //   this.isLoading = true;
  //   fetch('https://apimanager-lucasfariapp.wiremockapi.cloud/v1/profile')
  //   .then(dados=>dados.json())
  //   .then(dados =>{
  //   this.data= dados['data'][0];
  //   console.log(this.data);
  //   })
  //   .catch(erro => {console.log('Ocorreu um erro')})
  //   .finally(()=>{
  //     this.isLoading = false;
  //   })
  // }
}
