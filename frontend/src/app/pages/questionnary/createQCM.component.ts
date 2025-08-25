import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-qcm',
    templateUrl: './createQCM.html',
    styleUrls: []
})




export class CreateQCMComponent {
    // qcmForm: FormGroup;

    // constructor(private fb: FormBuilder) {
    //     this.qcmForm = this.fb.group({
    //         title: ['', Validators.required],
    //         description: [''],
    //         questions: this.fb.array([])
    //     });
    // }

    // get questions(): FormArray {
    //     return this.qcmForm.get('questions') as FormArray;
    // }

    // addQuestion() {
    //     const question = this.fb.group({
    //         text: ['', Validators.required],
    //         options: this.fb.array([
    //             this.fb.control('', Validators.required)
    //         ]),
    //         correctAnswer: [0, Validators.required]
    //     });
    //     this.questions.push(question);
    // }

    // addOption(questionIndex: number) {
    //     const options = (this.questions.at(questionIndex).get('options') as FormArray);
    //     options.push(this.fb.control('', Validators.required));
    // }

    // removeOption(questionIndex: number, optionIndex: number) {
    //     const options = (this.questions.at(questionIndex).get('options') as FormArray);
    //     if (options.length > 1) {
    //         options.removeAt(optionIndex);
    //     }
    // }

    // removeQuestion(index: number) {
    //     this.questions.removeAt(index);
    // }

    // submit() {
    //     if (this.qcmForm.valid) {
    //         // Handle form submission, e.g., send to API
    //         console.log(this.qcmForm.value);
    //     }
    // }
}