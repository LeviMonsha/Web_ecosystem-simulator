import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-simulation-controls",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2 class="text-lg font-semibold mb-4">Simulation Controls</h2>
      <div class="space-y-4">
        <div class="flex space-x-2">
          <button>Add ...</button>
          <button>Add ...</button>
        </div>
      </div>
    </div>
  `,
})
export class SimulationControlsComponent {}
