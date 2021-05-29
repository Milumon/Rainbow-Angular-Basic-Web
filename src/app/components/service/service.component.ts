import { Component, OnInit, Provider } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  frase = "Service";  
  providerList: Provider[];

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.providerSelect().subscribe(
      (res: Provider[]) => {
        this.providerList = res; 
      }
    )
  }

}

 