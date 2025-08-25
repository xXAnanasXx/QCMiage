import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 

interface Question {
  type: 'single' | 'multiple' | 'text';
  question: string;
  options?: string[];
  answer?: any;
}

@Component({
  selector: 'app-create-group',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './doQCM.html',
  styleUrls: ['./doQCM.css']
})
export class doQCM {
  constructor(private router: Router) {} 

questions: Question[] = [
  {
    type: 'single',
    question: 'Quel décorateur Angular est utilisé pour marquer un composant ?',
    options: ['@Injectable', '@NgModule', '@Component', '@Controller'],
    answer: ''
  },
  {
    type: 'multiple',
    question: 'Parmi les options suivantes, lesquelles sont des directives Angular ?',
    options: ['*ngIf', '*ngFor', 'ngModel', '@Injectable'],
    answer: []
  },
  {
    type: 'text',
    question: 'Expliquez en quelques phrases le rôle d’un "service" dans Angular.',
    answer: ''
  },
  {
    type: 'single',
    question: 'Quel décorateur NestJS est utilisé pour définir un routeur HTTP sur un contrôleur ?',
    options: ['@Controller', '@Module', '@Injectable', '@Get'],
    answer: ''
  },
  {
    type: 'multiple',
    question: 'Parmi ces fonctionnalités, lesquelles sont fournies par NestJS ?',
    options: ['Middleware', 'Guards', 'Pipes', 'Templates Razor'],
    answer: []
  }
];

  toggleOption(q: Question, option: string) {
    const index = q.answer.indexOf(option);
    if (index === -1) {
      q.answer.push(option);
    } else {
      q.answer.splice(index, 1);
    }
  }

  submit() {
    console.log('Réponses soumises :', this.questions);
    alert('Réponses soumises ! Regardez la console pour les détails.');
  }

  saveAndGoBack(): void {
    this.router.navigate(['/']);
  }
}
