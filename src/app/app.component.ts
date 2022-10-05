import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Redesigned';
  isExpanded: boolean = true;
  avatar: string | any = '/assets/images/globe.png';
  editIcon: string | any = '/assets/images/pencil-square.svg';
  viewProfile: string | any = '/assets/images/person-video3.svg';
  Logout: string | any = '/assets/images/toggle-off.svg';
  toggle: string | any = '/assets/images/fixed.png';
  opened = true
  showFooter: Boolean = false;
  merchantId: string | any = '/assets/images/merchnatId.svg';
  location: string | any = '/assets/images/location.svg';
  accountNumber: string | any = '/assets/images/accountNumber.svg';
  back: string | any = '/assets/images/backk1.png';
  ubaLogo: string | any = '/assets/images/bigg.png';

  cloud: string | any = '/assets/images/clouds.svg';
  rolez: string | any = '/assets/images/ticks.svg';
  medical: string | any = '/assets/images/medical.svg';
  checkList: string | any = '/assets/images/card-checklist.svg';
  response: string | any = '/assets/images/response.svg';
  Check: string | any = '/assets/images/persons.svg';
  powerOff: string | any = '/assets/images/power.svg';
  register: string | any = '/assets/images/people.svg';

  search: string = '/assets/images/search.svg';
  bell: string = '/assets/images/bell.svg';
  avatar1: string = '/assets/images/black.jpg';
  grid: string = '/assets/images/grid.png';
  dashboard: string = '/assets/images/dashboard.png';
  people: string = '/assets/images/people.png';
  book: string = '/assets/images/book.png';
  suitcase: string = '/assets/images/suitcase.png';
  suitcase1: string = '/assets/images/suitcase1.png';
  connect: string = '/assets/images/connect.png';
  back1: string = '/assets/images/back.png';
  download: string = '/assets/images/bluee1.png';
  showSidebar:boolean = true;

  projectProvider:string = 'Edmund .O';
  projectComplexityLevel:string = 'Level 3';
  projectStatus: string = 'N/A';
  duration: string = '240hrs';
  projectType: string = 'Team Project';
  panelOpenState:boolean = false;
  showSearchBar: boolean = false;

controlSize(){
  if(this.panelOpenState == true){
    let screenHeightValue:any = <HTMLInputElement>document.getElementById('supreme');
  }
}

}
