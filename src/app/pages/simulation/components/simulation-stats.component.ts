import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-simulation-stats",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2 class="text-lg font-semibold mb-4">Statistics</h2>
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-500">Plants</p>
          <p class="text-2xl font-semibold">{{ 1 }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Herbivores</p>
          <p class="text-2xl font-semibold">{{ 2 }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Carnivores</p>
          <p class="text-2xl font-semibold">{{ 3 }}</p>
        </div>
      </div>
    </div>
  `,
})
export class SimulationStatsComponent {}
