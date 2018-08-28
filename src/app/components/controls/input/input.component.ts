import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-rp-input',
    templateUrl: './input.component.html'
})

export class InputComponent implements OnInit {
    printStuff: () => void;
    @Input() inputData: any;
    constructor() {

    }

    ngOnInit() {
        this.printStuff = () => console.log(this.inputData);
    }
}
