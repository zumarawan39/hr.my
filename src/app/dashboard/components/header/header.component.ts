import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() userSidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit(); // Toggle the left sidebar
  }

  toggleUserSidebar() {
    this.userSidebarToggle.emit(); // Toggle the right sidebar
  }
  
}
