import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Etudiant } from 'src/app/Interface/etudiant';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';

@Component({
  selector: 'etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{

  public etudiants: Etudiant[] = [];
  
  constructor (private etudiantService: EtudiantServiceService){

  }

  ngOnInit(): void {
    this.getEtudiants();
  }

  public getEtudiants(): void{
    this.etudiantService.getAllEtudiant().subscribe(
      (response: Etudiant[]) =>{
        this.etudiants = response;
      },
      (error: HttpErrorResponse) =>{
       console.log("Erreur lors de la récupération des étudiants");
        alert(error.message)
      }
    )
  }

  @ViewChild('DisplayEmploi', { static: true }) DisplayEmploi!: TemplateRef<any>;

  // ...
  DisplayBulletin: boolean = false;
  // ...
  DisplayNote: boolean = false;
  //...
  DisplayProfil: boolean = false;
  //...
  //DisplayEmploi: boolean = true;
  //...
  DisplayPayement: boolean = false;
  //...
  DisplayAbsence: boolean = false;
  //...
  DisplayReclation: boolean = false;
  //...
  DisplaySupport: boolean = false;
  //...

  DisplayOrHiddenBulletin(): void {
    this.DisplayBulletin = !this.DisplayBulletin;
    this.DisplayNote = false;
    //this.DisplayEmploi = false;
    this.DisplayPayement = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }
  
  DisplayOrHiddenNote():void{
    this.DisplayNote = !this.DisplayNote;
    this.DisplayBulletin = false;
   // this.DisplayEmploi = false;
    this.DisplayPayement = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }

  DisplayOrHiddenEmploi():void{
   // this.DisplayEmploi = !this.DisplayEmploi;
    this.DisplayBulletin = false;
    this.DisplayNote = false;
    this.DisplayPayement = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }

  DisplayOrHiddenPayement():void{
    this.DisplayPayement = !this.DisplayPayement;
    this.DisplayBulletin = false;
    this.DisplayNote = false;
   // this.DisplayEmploi = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenAbsence():void{
    this.DisplayAbsence = !this.DisplayAbsence
    this.DisplayBulletin = false;
    this.DisplayNote = false;
    //this.DisplayEmploi = false;
    this.DisplayReclation = false;
    this.DisplaySupport = false;
    this.DisplayPayement = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenReclation():void{
    this.DisplayReclation = !this.DisplayReclation
    this.DisplayBulletin = false;
    this.DisplayNote = false;
    //this.DisplayEmploi = false;
    this.DisplaySupport = false;
    this.DisplayAbsence = false;
    this.DisplayPayement = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenSupport():void{
    this.DisplaySupport = !this.DisplaySupport
    this.DisplayBulletin = false;
    this.DisplayNote = false;
  //  this.DisplayEmploi = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplayPayement = false;
    this.DisplayProfil = false;

  }
  DisplayOrHiddenProfil():void{
    this.DisplayProfil = !this.DisplayProfil
    this.DisplaySupport = false;
    this.DisplayBulletin = false;
    this.DisplayNote = false;
   // this.DisplayEmploi = false;
    this.DisplayAbsence = false;
    this.DisplayReclation = false;
    this.DisplayPayement = false;

  }
  // public onOpenModals( mode: string): void{
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'bulletinDisplay') {
  //     button.setAttribute('data-target', '#BulletinDisplayModal');
  //   }
  //   if (mode === 'noteDisplay') {
  //     button.setAttribute('data-target', '#NoteDisplayModal');
  //   }
  //   container?.appendChild(button);
  //   button.click()  ;
  // }
}
