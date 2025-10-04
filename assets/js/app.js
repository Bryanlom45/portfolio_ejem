
import { proyectos } from './data-proyectos.js';
import { renderProyectos } from './render-proyectos.js';
import { activarFiltros } from './filtro-proyectos.js';
import { controlarBotonCV } from './cv-floating.js';
import { controlarNavegacion, controlarPanelFiltros } from './nav-mobile.js';

renderProyectos(proyectos);
activarFiltros();
controlarBotonCV();
controlarNavegacion();
controlarPanelFiltros();

