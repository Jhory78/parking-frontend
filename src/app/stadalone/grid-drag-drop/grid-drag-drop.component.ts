import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GridItem {
  id: string | number;
  label: string;
  col: number;
  row: number;
}

@Component({
  selector: 'app-grid-drag-drop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-drag-drop.component.html',
  styleUrls: ['./grid-drag-drop.component.css']
})
export class GridDragDropComponent {
  @Input() items: GridItem[] = [];
  @Input() cols = 5;
  @Output() itemMoved = new EventEmitter<GridItem[]>();

  draggedItem: GridItem | null = null;

  onDragStart(item: GridItem): void {
    this.draggedItem = item;
  }

  onDrop(col: number, row: number): void {
    if (!this.draggedItem) return;
    this.draggedItem.col = col;
    this.draggedItem.row = row;
    this.itemMoved.emit([...this.items]);
    this.draggedItem = null;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  getCells(): { col: number; row: number }[] {
    const rows = Math.max(...this.items.map(i => i.row), 3);
    const cells = [];
    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= this.cols; c++) {
        cells.push({ col: c, row: r });
      }
    }
    return cells;
  }

  getItemAt(col: number, row: number): GridItem | undefined {
    return this.items.find(i => i.col === col && i.row === row);
  }
}
