import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';

/**
 * Generated class for the ActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actividad',
  templateUrl: 'actividad.html',
})
export class ActividadPage {
  letras:Array<{id:number,name:String, img:String, quiz:{opt1:String, opt2:String, opt3:String}}>

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    
  }
  showAlert(mensaje:string) {
    const alert = this.alertCtrl.create({
      title: 'Aviso',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActividadPage');
    console.log(this.showQuestions());
  }
  showQuestions(){
    this.letras = [
      {id:1,name:"pan",img:"https://vivanda.vteximg.com.br/arquivos/ids/167112-1000-1000/76371.jpg?v=636137837998900000", quiz:{opt1:"pan", opt2:"pen", opt3:"pin"}},
      {id:2,name:"jugo", img:"https://www.laylita.com/recetas/wp-content/uploads/2016/09/Jugo-de-pina-casero.jpg", quiz:{opt1:"juga", opt2:"jugo", opt3:"jega"}},
      {id:3,name:"sopa", img:"https://www.gallinablanca.es/files/thumbs/4c803e7811a3fe7e274dce7ae907d113d088df68_r900_480_2.jpg", quiz:{opt1:"soup", opt2:"supa", opt3:"sopa"}},
      {id:4,name:"queso", img:"https://cdn.20m.es/img2/recortes/2018/02/06/632621-600-338.jpg", quiz:{opt1:"quiso", opt2:"caso", opt3:"queso"}}
      
    
    ];

    return this.letras;
  }
  respuesta(opcion:String, id:number){
    for(let i=0;i<this.letras.length;i++){
      if(this.letras[i].id == id && this.letras[i].name == opcion){
        this.showAlert("Ganaste");
        break;
      }else{
        if(i == 3){
          this.showAlert("perdiste");
        }
        continue;
      }
    }

  }



}
