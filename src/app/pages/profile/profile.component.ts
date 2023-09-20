import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  address = '123 Main St, City, Country';
  isEditMode = false;
  editAddress() {
    // Implement your address editing logic here
    // You can open a dialog or navigate to an edit page
    // For now, let's just change the address to a placeholder value
    this.address = 'New Address, City, Country';
  }


  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    // Perform save logic here (e.g., update the backend)
    // After saving, exit edit mode
    this.isEditMode = false;
  }

  cancelEdit() {
    // Reset any changes made during edit and exit edit mode
    this.isEditMode = false;
  }
}
