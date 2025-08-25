import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-group',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './createGroup.html',
  styleUrls: ['./createGroup.css']
})

export class CreateGroupComponent {

}
