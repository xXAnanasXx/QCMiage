import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Group {
  name: string;
  members: string[];
  searchText: string;
  errorMessage: string;
}

@Component({
  selector: 'app-create-group',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './createGroup.html',
  styleUrls: ['./createGroup.css']
})
export class CreateGroupComponent {
  allStudents: string[] = [
    'Alice Dupont',
    'Bob Martin',
    'Charlie Durand',
    'David Petit',
    'Emma Leroy',
    'Fanny Moreau',
    'Gabriel Dubois',
    'Hugo Fontaine'
  ];

  groups: Group[] = [
    { name: 'Groupe 1', members: [], searchText: '', errorMessage: '' }
  ];

  getFilteredStudents(group: Group): string[] {
    return this.allStudents.filter((s: string) =>
      s.toLowerCase().includes(group.searchText.toLowerCase()) &&
      !this.isInAnyGroup(s)
    );
  }

  isInAnyGroup(student: string): boolean {
    return this.groups.some((g: Group) => g.members.includes(student));
  }

  addToGroup(group: Group): void {
    const student = group.searchText.trim();

    if (!student) return;

    if (!this.allStudents.includes(student)) {
      group.errorMessage = 'Cet élève n’existe pas dans la liste.';
      return;
    }

    if (this.isInAnyGroup(student)) {
      group.errorMessage = 'Cet élève est déjà dans un groupe.';
      return;
    }

    group.members.push(student);
    group.searchText = '';
    group.errorMessage = '';
  }

  removeFromGroup(group: Group, student: string): void {
    group.members = group.members.filter((s: string) => s !== student);
  }

  addGroup(): void {
    const newIndex = this.groups.length + 1;
    this.groups.push({ name: `Groupe ${newIndex}`, members: [], searchText: '', errorMessage: '' });
  }

  removeGroup(index: number): void {
    this.groups.splice(index, 1);
  }
}
