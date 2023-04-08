import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
})
export class ResumoPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToGerarProtocolo(){
    this.router.navigate(['/home/gerar-protocolo']);
  }
}
