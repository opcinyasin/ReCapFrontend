import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {LocalstorageService} from '../../services/localstorage.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  checkUser: boolean = false;

  constructor(private storageService:LocalstorageService,private toastrService:ToastrService) {

  }

  ngOnInit(): void {
    this.checkAuthenticated();
  }

  checkAuthenticated() {
    if (this.storageService.isAuthenticated()) {
      this.checkUser = true;
      return;
    }
    this.checkUser = false;
  }

  logout(){
    this.storageService.removeItem("token");
    this.toastrService.success("Çıkış Yapıldı.")
  }
}
