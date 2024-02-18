import { Routes } from '@angular/router';
import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';
import { Ex03Component } from './ex03/ex03.component';
import { Ex04Component } from './ex04/ex04.component';
import { Ex05Component } from './ex05/ex05.component';
import { Ex06Component } from './ex06/ex06.component';
import { Ex07Component } from './ex07/ex07.component';
import { Ex08Component } from './ex08/ex08.component';
import { Ex10Component } from './ex10/ex10.component';
import { Ex09Component } from './ex09/ex09.component';

export const routes: Routes = [
    {path: 'ex1',component:Ex01Component,},
    {path: 'ex2',component:Ex02Component,},
    {path: 'ex3',component:Ex03Component,},
    {path: 'ex4',component:Ex04Component,},
    {path: 'ex5',component:Ex05Component,},
    {path: 'ex6',component:Ex06Component,},
    {path: 'ex7',component:Ex07Component,},
    {path: 'ex8',component:Ex08Component,},
    {path: 'ex10',component:Ex10Component,},
    {path:'ex9',component:Ex09Component}
    

];
