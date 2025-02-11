import { Component, Input } from '@angular/core';
import { Quest } from '../models/quest';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-main-quest',
  imports: [CommonModule],
  templateUrl: './main-quest.component.html',
  styleUrl: './main-quest.component.scss'
})
export class MainQuestComponent {
@Input() quest!: Quest
}
