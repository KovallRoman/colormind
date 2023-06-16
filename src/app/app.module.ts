import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './components/colormind/colormind.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorCardComponent } from './components/color-card/color-card.component';
import { DescriptionComponent } from './components/description/description.component';
import { ColorsUseComponent } from './components/colors-use/colors-use.component';
import { PostComponent } from './components/post/post.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { ColorDescriptionCardComponent } from './components/color-description-card/color-description-card.component';
import { ColorSemanticsComponent } from './components/color-semantics/color-semantics.component';
import { UiComponentsComponent } from './components/ui-components/ui-components.component';
import { UiBtnComponent } from './components/ui-btn/ui-btn.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ButtonsTableComponent } from './components/buttons-table/buttons-table.component';
import { HoverColorDirective } from './directives/hover-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    BusinessCardComponent,
    ButtonsTableComponent,
    ColorComponent,
    ColorCardComponent,
    ColorDescriptionCardComponent,
    ColorSemanticsComponent,
    ColorsUseComponent,
    DescriptionComponent,
    DropdownComponent,
    InputsComponent,
    PostComponent,
    TabsComponent,
    NavBarComponent,
    UiComponentsComponent,
    UiBtnComponent,
    HoverColorDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
