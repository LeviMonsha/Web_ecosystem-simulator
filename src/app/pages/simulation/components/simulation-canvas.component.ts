import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-simulation-canvas",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <canvas #simulationCanvas class="w-full h-[600px]"></canvas>
    </div>
  `,
})
export class SimulationCanvasComponent {}
