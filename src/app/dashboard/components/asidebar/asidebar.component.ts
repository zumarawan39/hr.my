import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent {
  @Input() isSidebarOpen = false; // Start with the sidebar hidden
  @Output() sidebarClose = new EventEmitter<void>(); // Emit event to close the sidebar

  // State variables for each submenu
  isEmployeeSubmenuOpen = false;
  isLeaveSubmenuOpen = false;
  isExpenseOpen = false;
  isAttendanceOpen = false;
  isDocumentOpen = false;
  isIncidentOpen = false;
  isTeamOpen = false;
  isPayrollOpen = false;
  isEmployerOpen = false;
  isCrowdOpen = false;

  toggleSidebar() {
    this.sidebarClose.emit(); // Emit the close event to parent component
  }

  toggleSubmenu(menu: string) {
    // Close all submenus except the one being toggled
    this.isEmployeeSubmenuOpen = menu === 'employee' ? !this.isEmployeeSubmenuOpen : false;
    this.isLeaveSubmenuOpen = menu === 'leave' ? !this.isLeaveSubmenuOpen : false;
    this.isExpenseOpen = menu === 'expense' ? !this.isExpenseOpen : false;
    this.isAttendanceOpen = menu === 'attendance' ? !this.isAttendanceOpen : false;
    this.isDocumentOpen = menu === 'documents' ? !this.isDocumentOpen : false;
    this.isIncidentOpen = menu === 'incident' ? !this.isIncidentOpen : false;
    this.isTeamOpen = menu === 'team' ? !this.isTeamOpen : false;
    this.isPayrollOpen = menu === 'payroll' ? !this.isPayrollOpen : false;
    this.isEmployerOpen = menu === 'employer' ? !this.isEmployerOpen : false;
    this.isCrowdOpen = menu === 'crowd' ? !this.isCrowdOpen : false;
  }
}
