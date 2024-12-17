import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimulationCanvasComponent } from "./components/simulation-canvas.component";
import { SimulationControlsComponent } from "./components/simulation-controls.component";
import { SimulationStatsComponent } from "./components/simulation-stats.component";

@Component({
  selector: "app-simulation",
  standalone: true,
  templateUrl: "./simulation.component.html",
  imports: [
    CommonModule,
    SimulationCanvasComponent,
    SimulationControlsComponent,
    SimulationStatsComponent,
  ],
})
export class SimulationComponent {}
