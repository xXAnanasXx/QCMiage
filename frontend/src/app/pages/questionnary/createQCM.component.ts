import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


interface Option {
  value: string;
  isCorrect: boolean;
}

interface Question {
  type: 'radio' | 'libre' | 'multiple';
  text: string;
  bareme: number;
  options: Option[];
}

@Component({
  selector: 'app-create-qcm',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './createQCM.html',
  styleUrls: ['./createQCM.css']
})



export class CreateQCMComponent {
  titreQcm = '';
  descriptionQcm = '';
  questions: Question[] = [];

  // ✅ Nouveau : liste des groupes et sélection
  groupesDisponibles = ['Groupe A', 'Groupe B', 'Groupe C'];
  groupesAssignes: string[] = [];

  // ✅ Nouveau : points négatifs (activé par défaut)
  pointsNegatifs = true;

  onGroupChange(event: Event) {
  const select = event.target as HTMLSelectElement;
  this.groupesAssignes = Array.from(select.selectedOptions).map(opt => opt.value);
}
  addQuestion() {
    this.questions.push({
      type: 'radio',
      text: '',
      bareme: 1,
      options: [{ value: '', isCorrect: false }]
    });
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  addOption(question: Question) {
    question.options.push({ value: '', isCorrect: false });
  }

  removeOption(question: Question, index: number) {
    if (question.options.length > 1) {
      question.options.splice(index, 1);
    }
  }

  trackByIndex(index: number) {
    return index;
  }

  trackByOption(index: number, item: Option) {
    return index;
  }

  isChoiceQuestion(question: Question) {
    return question.type === 'radio' || question.type === 'multiple';
  }

  checkOption(question: Question, index: number) {
    if (question.type === 'radio') {
      question.options.forEach((opt, i) => {
        opt.isCorrect = i === index;
      });
    } else {
      question.options[index].isCorrect = !question.options[index].isCorrect;
    }
  }

  sauvegarderQCM() {
    const qcm = {
      titre: this.titreQcm,
      description: this.descriptionQcm,
      groupes: this.groupesAssignes, // ✅ on sauvegarde les groupes
      pointsNegatifs: this.pointsNegatifs, // ✅ on sauvegarde le choix
      questions: this.questions
    };
    console.log('QCM sauvegardé :', qcm);
    alert('QCM sauvegardé ! Vérifie la console pour voir les données.');
  }
}
