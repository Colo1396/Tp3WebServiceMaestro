import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Reclamo } from 'src/app/interfaces/reclamo';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-create-reclamo',
  templateUrl: './create-reclamo.component.html',
  styleUrls: ['./create-reclamo.component.css']
})
export class CreateReclamoComponent implements OnInit {
  reclamo: Reclamo = {
    id: 0,
    estado: '',
    compraId: 0
  }

  constructor(
    private router: Router,
    private authService: AuthService ,
    private reclamoService: ReclamoService,
  ) {}

  ngOnInit(): void {
  }


  onSubmit(){
    const formData = new FormData();
    formData.append('id', this.reclamo.id.toString());
    formData.append('estado', this.reclamo.estado);
    formData.append('compraId', this.reclamo.compraId.toString());

    this.reclamoService.create(formData).subscribe(d =>{
      this.router.navigate(['/']);
    });

  }
}
