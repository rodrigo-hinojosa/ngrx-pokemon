import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexContainerComponent } from './components/pokedex-container/pokedex-container.component';
import { PokedexDetailComponent } from './components/pokedex-detail/pokedex-detail.component';

@NgModule({
    declarations: [
        PokedexContainerComponent,
        PokedexDetailComponent
    ],
    imports: [
        SharedModule,
        PokedexRoutingModule
    ]
})
export class PokedexModule { }
