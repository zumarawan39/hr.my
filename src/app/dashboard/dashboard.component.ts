import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isSidebarOpen = false;  // Controls the left sidebar
  isUserSidebarOpen = false;  // Controls the right sidebar

  // Toggle the left sidebar
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Close the left sidebar
  closeSidebar() {
    this.isSidebarOpen = false;
  }

  // Toggle the right sidebar (User Sidebar)
  toggleUserSidebar() {
    this.isUserSidebarOpen = !this.isUserSidebarOpen;
  }

  // Close the right sidebar (User Sidebar)
  closeUserSidebar() {
    this.isUserSidebarOpen = false;
  }
  // Detect clicks outside of the sidebar to close it
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isSidebar = target.closest('app-asidebar');
    const isHeader = target.closest('app-header');

    if (this.isSidebarOpen && !isSidebar && !isHeader) {
      this.isSidebarOpen = false;
    }
  }
}
