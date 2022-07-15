import { Component } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }

  // ---------- GLOBAL VARS -------- //
  title = 'davici-front';
  file:any;
  fileString:any= "";
  dataLines:any = [];
  arrayTypes: any = [];
  // ---------- GLOBAL VARS -------- //

  openFile(){
    console.log("Select a txt file");
    let input = document.querySelector('input');
    if(input){
      input.click();
    }
  }

  handleChange(e: any) {
      this.file = e.target.files[0];
      this.uploadDocument(this.file);
  }

  uploadDocument(file: any) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      if(fileReader.result && typeof fileReader.result === 'string'){
        var lines = fileReader.result.split('\n');
        
        for(var line = 0; line < lines.length; line++){
          let inputDiv = document.getElementById('inputFile');
          if(inputDiv){
            inputDiv.innerHTML += lines[line] + '<br/>';
          }
          let newLine = lines[line].split(/[-_,.*\r]+/);
          newLine.pop();
          this.dataLines.push(newLine);
        }
        console.log(this.dataLines);
        this.printInputs();
      }
      this.fileString = fileReader.result;
    }
    fileReader.readAsText(this.file);
  }

  getMaxLength(){
    let maxLength = 0;
    for(let i = 0; i < this.dataLines.length; i++){
      if(this.dataLines[i].length > maxLength){
        maxLength = this.dataLines[i].length;
      }
    }
    return maxLength;
  }

  printInputs(){
    let maxLength = this.getMaxLength();
    let divInputs = document.getElementById('inputChoices');

    if(divInputs){
      divInputs.innerHTML = "";
      for(let i = 0; i < maxLength; i++){
        
        var selectOptions = document.createElement('div');
        selectOptions.innerHTML = `
        <p> Campo ${ i } </p>
        <select>
          <option value = "X"> Ninguno </option>
          <option value = "N"> Nombres </option>
          <option value = "A"> Apellidos </option>
          <option value = "T"> Telefonos </option>
          <option value = "D"> Direcciones </option>
        </select>
        `;
        divInputs.appendChild(selectOptions);
      }
    }
  }

  createArray(){
    var selectCollection = document.getElementsByTagName('select');
    if(selectCollection){
      let selectArray = Array.from(selectCollection);
      selectArray.forEach((select, index) => {
        this.arrayTypes.push(select.value);
        
      });
      console.log("---------");
      console.log(this.arrayTypes);
      console.log("---------");
      this.sendInformation();
    }
  }

  sendInformation(){
    this.dataLines.forEach((value: any) => {
      var user: any = {}
      user.nombre = "";
      user.apellido = "";
      user.telefonos = [];
      user.direcciones = [];
      value.forEach((item: any, index: any) => {
        let type: any = this.arrayTypes[index];
        switch(type){
          case 'X':
            break;
          case 'N':
            user.nombre = item;
            break;
          case 'A':
            user.apellido = item;
            break;
          case 'T':
            user.telefonos.push(item);
            break;
          case 'D':
            user.direcciones.push(item);
            break;
        }
      });
      const headers = new HttpHeaders().set("Content-Type", "application/json");
      this.http.post<any>('http://localhost:3000/client/create', 
      user).subscribe(data => {
        console.log(data);
      })
      console.log(user);
    })
  }


}
