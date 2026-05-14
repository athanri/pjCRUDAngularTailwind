import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Profile {
  firstname: string;
  lastname: string;
  email: string;
}

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  protected showForm = false;
  protected saved = false;
  protected editingIndex: number | null = null;
  protected formData: Profile = {
    firstname: '',
    lastname: '',
    email: ''
  };
  protected profiles: Profile[] = [];

  protected onCreate(): void {
    this.showForm = true;
    this.saved = false;
    this.editingIndex = null;
    this.formData = {
      firstname: '',
      lastname: '',
      email: ''
    };
  }

  protected onSave(): void {
    if (!this.formData.firstname || !this.formData.lastname || !this.formData.email) {
      return;
    }

    if (this.editingIndex === null) {
      this.profiles = [...this.profiles, { ...this.formData }];
    } else {
      this.profiles = this.profiles.map((profile, index) =>
        index === this.editingIndex ? { ...this.formData } : profile
      );
    }

    this.saved = true;
    this.editingIndex = null;
    this.formData = {
      firstname: '',
      lastname: '',
      email: ''
    };
  }

  protected onCancel(): void {
    this.showForm = false;
    this.saved = false;
    this.editingIndex = null;
    this.formData = {
      firstname: '',
      lastname: '',
      email: ''
    };
  }

  protected onEdit(index: number): void {
    const profile = this.profiles[index];
    this.formData = { ...profile };
    this.editingIndex = index;
    this.showForm = true;
    this.saved = false;
  }

  protected onDelete(index: number): void {
    this.profiles = this.profiles.filter((_, profileIndex) => profileIndex !== index);
  }
}
