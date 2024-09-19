import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css']
})
export class RightsidebarComponent {
  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>();

  // Method to hide the sidebar
  hideSidebar() {
    this.close.emit();
  }

  // Sign out function (placeholder for actual logic)
  signOut() {
    console.log('User signed out');
    this.hideSidebar();  // Hide sidebar after signing out
  }
}
