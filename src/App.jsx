import React, { useEffect, useRef , useState } from 'react';
import 'normalize.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



// componentes
import Home from './Paginas/home/Home';
import NotFound from './Paginas/notFound/NotFound';
import DestelloAll from "../src/componentes/destello/destello"


// pendejadas
import Calculadora from './Paginas/apuntes/pendejadas/calculadora';


// componente menu
import Menu from './componentes/menus/Menu';


// importando icono de dia y noche
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Barrita from './componentes/opciones/opciones';



// logica
import TipoDeDatos from './Paginas/apuntes/logica/capitulo_1/tipoDeDato/tipoDeDato';
import OperadoresLogica from './Paginas/apuntes/logica/capitulo_1/operaciones/Operaciones';
import ImportanteLogica from './Paginas/apuntes/logica/capitulo_1/importante/importanteLogica';
import VariableLogica from './Paginas/apuntes/logica/capitulo_2/variables/variables';
import InpuLogica from './Paginas/apuntes/logica/capitulo_2/inputLogica/ImputLogica';
import ConcatenarLogica from './Paginas/apuntes/logica/capitulo_2/concatenacion/concatenar';
import ScrollToTop from './ScrollToTop';
import CondicionalesLogica from './Paginas/apuntes/logica/capitulo_3/condicionales/condicionales';
import ArreglosLogica from './Paginas/apuntes/logica/capitulo_3/arreglos/arreglos';
import ArreglosBiLogica from './Paginas/apuntes/logica/capitulo_3/arreglosBidimencionales/arreglosBi';
import BuclesLogica from './Paginas/apuntes/logica/capitulo_4/bucles/bucles';
import BucleParaLogica from './Paginas/apuntes/logica/capitulo_4/bucles/buclePara';
import FuncionesLogica from './Paginas/apuntes/logica/capitulo_4/funciones/funciones';
import PodLogica from './Paginas/apuntes/logica/capitulo_4/POD/pod';


// html
import Importante from './Paginas/apuntes/html/capitulo_1/importante/importante';
import ConseptosBasicos from './Paginas/apuntes/html/capitulo_1/conseptos basicos/conseptos_basicos';
import Etiquetas from './Paginas/apuntes/html/capitulo_2/etiquetas/Etiquetas';
import EstructuraHtml from './Paginas/apuntes/html/capitulo_2/estructuraHtml/estructuraHtml';
import HtmlSemantico from './Paginas/apuntes/html/capitulo_2/htmlSemantico/HtmlSemantico';
import EnlacesHtml from './Paginas/apuntes/html/capitulo_3/enlaces/enlaces';
import Br from './Paginas/apuntes/html/capitulo_3/br/Br';
import Listas from './Paginas/apuntes/html/capitulo_3/listas/listas';
import Multimedia from './Paginas/apuntes/html/capitulo_3/multimedia/multimedia';
import Divs from './Paginas/apuntes/html/capitulo_3/divs/divs';
import Formularios from './Paginas/apuntes/html/capitulo_3/formularios/formularios';
import Metadatos from './Paginas/apuntes/html/capitulo_3/metadatos/metadatos';
import Nav from './Paginas/apuntes/html/capitulo_4/nav/nav';
import SectionArticle from './Paginas/apuntes/html/capitulo_4/section y article/sectionArticle';
import Aside from './Paginas/apuntes/html/capitulo_4/aside/aside';
import Main from './Paginas/apuntes/html/capitulo_4/main/main';
import FooterHtmlCurso from './Paginas/apuntes/html/capitulo_4/footer/footer';
import Tablas from './Paginas/apuntes/html/capitulo_4/tablas/tablas';
import ExtraHtml from './Paginas/apuntes/html/capitulo_4/extra/extra';


// css
import IntroduccionCss from './Paginas/apuntes/css/capitulo_1/introduccion/introduccionCss';
import Selectores from './Paginas/apuntes/css/capitulo_1/selectore/selectore';
import Especificidad from './Paginas/apuntes/css/capitulo_1/especificidad/especificidad';
import Metodologia from './Paginas/apuntes/css/capitulo_1/metodologia/Metodologia';
import Unidades from './Paginas/apuntes/css/capitulo_1/unidades/unidades';
import Unidades2 from './Paginas/apuntes/css/capitulo_1/unidades/unidades2';
import Background from './Paginas/apuntes/css/capitulo_2/background/background';
import PropiedadesTexto from './Paginas/apuntes/css/capitulo_2/propiedadesTexto/porpiedadesTexto';
import Normalize from './Paginas/apuntes/css/capitulo_2/normalize/normalize';
import Cajas from './Paginas/apuntes/css/capitulo_2/cajas/cajas';
import Padding from './Paginas/apuntes/css/capitulo_2/padding/padding';
import Margin from './Paginas/apuntes/css/capitulo_2/margin/margin';
import Border from './Paginas/apuntes/css/capitulo_2/border/border';
import Sombras from './Paginas/apuntes/css/capitulo_2/sombras/sombras';
import Outline from './Paginas/apuntes/css/capitulo_2/outline/outline';
import Position from './Paginas/apuntes/css/capitulo_3/position/position';
import PositionAbsolute from './Paginas/apuntes/css/capitulo_3/position/positionAbsolute';
import Zindex from './Paginas/apuntes/css/capitulo_3/position/zIndex';
import PositionFixed from './Paginas/apuntes/css/capitulo_3/position/positionFixed';
import Fixed1 from './Paginas/apuntes/css/capitulo_3/position/fixedPages/fixed1';
import Fixed2 from './Paginas/apuntes/css/capitulo_3/position/fixedPages/fixed2';
import PositionSticky from './Paginas/apuntes/css/capitulo_3/position/positionSticky';
import StickyPage from './Paginas/apuntes/css/capitulo_3/position/fixedPages/sticky';
import Display from './Paginas/apuntes/css/capitulo_3/display/display';
import Overflow from './Paginas/apuntes/css/capitulo_3/overflow/overflow';
import Float from './Paginas/apuntes/css/capitulo_3/float/float';
import Pseudoelementos from './Paginas/apuntes/css/capitulo_3/pseudoelementos/pseudoelementos';
import Pseudoclases from './Paginas/apuntes/css/capitulo_3/pseudoclases/pseudoclases';
import ObjetFit from './Paginas/apuntes/css/capitulo_4/objectFit/objectFit';
import Cursor from './Paginas/apuntes/css/capitulo_4/cursor/cursor';
import Colorizacion from './Paginas/apuntes/css/capitulo_4/colorizacion/colorizacion';
import ResponsiveBasico from './Paginas/apuntes/css/capitulo_4/responsiveBasico/responsiveBasico';
import ResultadoResponsive1 from './Paginas/apuntes/css/capitulo_4/responsiveBasico/resultado';
import Flexbox from './Paginas/apuntes/css/capitulo_4/flexbox/flexbox';
import Resultado1Flex from './Paginas/apuntes/css/capitulo_4/flexbox/resultado/resultado1';
import FlexDirection from './Paginas/apuntes/css/capitulo_4/flexbox/flexDirection';
import FlexWrap from './Paginas/apuntes/css/capitulo_4/flexbox/flexWrap';
import Wrap1 from './Paginas/apuntes/css/capitulo_4/flexbox/resultado/wrap1';
import Wrap2 from './Paginas/apuntes/css/capitulo_4/flexbox/resultado/wrap2';
import AlineacionFlex from './Paginas/apuntes/css/capitulo_4/flexbox/alineacionFlex';
import ResultadoAlineacionFlex from './Paginas/apuntes/css/capitulo_4/flexbox/resultado/resultadoAlineacion';
import AlignItems from './Paginas/apuntes/css/capitulo_4/flexbox/resultado/AlignItems';
import ResultadoStart from './Paginas/apuntes/css/capitulo_4/flexbox/resultado/resultadoStart';
import AlignContent from './Paginas/apuntes/css/capitulo_4/flexbox/resultado/alignContent';
import AlignSelf from './Paginas/apuntes/css/capitulo_4/flexbox/resultado/alignSelf';
import FlexGrow from './Paginas/apuntes/css/capitulo_4/flexbox/flexGrow';
import FlexGrowResultado from './Paginas/apuntes/css/capitulo_4/flexbox/resultado/FlexGrow';
import Order from './Paginas/apuntes/css/capitulo_4/order/order';
import Grid from './Paginas/apuntes/css/capitulo_5/grid/grid';
import GridTemplate from './Paginas/apuntes/css/capitulo_5/grid/gridTemplate';
import GridGap from './Paginas/apuntes/css/capitulo_5/grid/gridGap';
import AsignacionEspacios from './Paginas/apuntes/css/capitulo_5/grid/asignacionEspacios';
import RepeatCss from './Paginas/apuntes/css/capitulo_5/grid/repeat';
import GridImEx from './Paginas/apuntes/css/capitulo_5/grid/gridImEx';
import GridAuto from './Paginas/apuntes/css/capitulo_5/grid/gridAuto';
import GridDinamico from './Paginas/apuntes/css/capitulo_5/grid/gridDinamico';
import AlineacionGrid from './Paginas/apuntes/css/capitulo_5/grid/alineacionGrid';
import GridArea from './Paginas/apuntes/css/capitulo_5/grid/gridArea';
import NombrarGrid from './Paginas/apuntes/css/capitulo_5/grid/nombrarGrid';
import ResponsiveDesing from './Paginas/apuntes/css/capitulo_5/responsive/responsive';
import ResponRes1 from './Paginas/apuntes/css/capitulo_5/responsive/resultados/responRes1';
import ResponRes2 from './Paginas/apuntes/css/capitulo_5/responsive/resultados/responRes2';
import ResponRes3 from './Paginas/apuntes/css/capitulo_5/responsive/resultados/responRes3';
import Transition from './Paginas/apuntes/css/capitulo_5/transition/transition';
import Animation from './Paginas/apuntes/css/capitulo_5/animation/animation';
import CubicBezier from './Paginas/apuntes/css/capitulo_6/cubicBezier/CubicBezier';
import Transform from './Paginas/apuntes/css/capitulo_6/transform/transform';
import VariablesCss from './Paginas/apuntes/css/capitulo_6/variables/variables';
import Filter from './Paginas/apuntes/css/capitulo_6/filter/filter';
import ExtraCss from './Paginas/apuntes/css/capitulo_6/extraCss/extraCss';
import ResultadoScroll from './Paginas/apuntes/css/capitulo_6/extraCss/resultado';
import Linear from './Paginas/apuntes/css/capitulo_6/linear/linear';


// JavaScropt
import RecomendadoJs from './Paginas/apuntes/javaScript/capitulo_1/recomendaciones/recomendado';
import JavaScriptBasico from './Paginas/apuntes/javaScript/capitulo_1/javaScriptBasico/javaScriptBasico';
import VariablesJavaScript from './Paginas/apuntes/javaScript/capitulo_2/variables/variables';
import BloqueCJavaScript from './Paginas/apuntes/javaScript/capitulo_2/variables/bloqueC';
import EnlazarJavaScript from './Paginas/apuntes/javaScript/capitulo_1/enlazar/enlazar';
import PromptLogica from './Paginas/apuntes/javaScript/capitulo_2/prompt/prompt';
import OperadoresJavaScript from './Paginas/apuntes/javaScript/capitulo_2/operaciones/operaciones';
import ConcatenacionJavaScript from './Paginas/apuntes/javaScript/capitulo_2/concatenacion/concatenacion';
import CamelCaseJavaScript from './Paginas/apuntes/javaScript/capitulo_2/camelCase/camelCase';
import CondicionalesJavaScript from './Paginas/apuntes/javaScript/capitulo_3/condicionales/condicionales';
import ArreglosJavaScript from './Paginas/apuntes/javaScript/capitulo_3/arreglos/arreglos';
import ArreglosAsJavaScript from './Paginas/apuntes/javaScript/capitulo_3/arreglosAs/arreglosAs';
import BuclesJavaScript from './Paginas/apuntes/javaScript/capitulo_3/bucles/bucles';
import FuncionesJavaScript from './Paginas/apuntes/javaScript/capitulo_3/funciones/funciones';
import FunFlecha from './Paginas/apuntes/javaScript/capitulo_3/funciones/funFlecha';
import JavaScriptFun from './Paginas/apuntes/javaScript/capitulo_2/javaSCriptFun/javaSCriptFun';
import PODJavaScript from './Paginas/apuntes/javaScript/capitulo_3/POD/POD';
import MetodosCadenaJavaScript from './Paginas/apuntes/javaScript/capitulo_4/metodosCadena/metodosCadena';
import MetodosArrJavaScript from './Paginas/apuntes/javaScript/capitulo_4/metodosArreglo/metodosArr';
import ObjectMathJavaScript from './Paginas/apuntes/javaScript/capitulo_4/objectMath/objectMath';
import DOMJavaScript from './Paginas/apuntes/javaScript/capitulo_5/DOM/DOM';
import SelectoresDOMJavaScript from './Paginas/apuntes/javaScript/capitulo_5/slectores/selectores';
import CambiarAttrJavaScript from './Paginas/apuntes/javaScript/capitulo_5/cambiarAttr/cambiarAttr';
import AtributosGlobalesJs from './Paginas/apuntes/javaScript/capitulo_5/atributoGlobal/atributoGlobal';
import AtributosInputsJs from './Paginas/apuntes/javaScript/capitulo_5/attrInputs/attrrINputs';
import ClasesMetJs from './Paginas/apuntes/javaScript/capitulo_5/clases y metodos/claseMet';
import ObtenModJs from './Paginas/apuntes/javaScript/capitulo_5/obtencionMod/obtenMod';
import CreacionEleJs from './Paginas/apuntes/javaScript/capitulo_5/creacionEle/creacionEle';
import ObModChildJs from './Paginas/apuntes/javaScript/capitulo_5/obtencion y mod de childs/obModChild';
import PropChildJs from './Paginas/apuntes/javaScript/capitulo_5/propiedades de childs/propChild';
import PropParJs from './Paginas/apuntes/javaScript/capitulo_5/propiedades parents/propPar';
import PropSiJs from './Paginas/apuntes/javaScript/capitulo_5/propiedades de siblings/poropSi';
import Window1Js from './Paginas/apuntes/javaScript/capitulo_6/window1';
import Window2Js from './Paginas/apuntes/javaScript/capitulo_6/window2';
import Window3Js from './Paginas/apuntes/javaScript/capitulo_6/window3/window3';
import EventListenJs from './Paginas/apuntes/javaScript/capitulo_7/enventListen';
import EventFujoJs from './Paginas/apuntes/javaScript/capitulo_7/eventFlujo';
import MouseEventJs from './Paginas/apuntes/javaScript/capitulo_7/mouseEvent/mouseEvent';
import KeyEventJs from './Paginas/apuntes/javaScript/capitulo_7/KeyEvent/keyEvent';
import InterEventJs from './Paginas/apuntes/javaScript/capitulo_7/interEvent';
import TimersJs from './Paginas/apuntes/javaScript/capitulo_7/timers';
import ControlFlujoJs from './Paginas/apuntes/javaScript/capitulo_8/controlFlujo';
import SwitchJs from './Paginas/apuntes/javaScript/capitulo_8/switch';
import ManErrJs from './Paginas/apuntes/javaScript/capitulo_8/manErr';
import CallbacksJs from './Paginas/apuntes/javaScript/capitulo_8/callbacks';
import PromesasJs from './Paginas/apuntes/javaScript/capitulo_8/promesas';
import AwaitAsyncJs from './Paginas/apuntes/javaScript/capitulo_8/awaiAsync';
import JsonJs from './Paginas/apuntes/javaScript/capitulo_9/JSON';
import AjaxJs from './Paginas/apuntes/javaScript/capitulo_9/AJAX';
import FetchJs from './Paginas/apuntes/javaScript/capitulo_9/fetch';
import AxiosJs from './Paginas/apuntes/javaScript/capitulo_9/asios';
import ProtoJs from './Paginas/apuntes/javaScript/capitulo_10/proto';
import CarProtoJs from './Paginas/apuntes/javaScript/capitulo_10/carProto';
import StrictModJs from './Paginas/apuntes/javaScript/capitulo_10/strictMod';
import FuncionesPart2Js from './Paginas/apuntes/javaScript/capitulo_10/funciones';
import ThisCon from './Paginas/apuntes/javaScript/capitulo_10/thisCon';
import RecursividadJs from './Paginas/apuntes/javaScript/capitulo_10/recursividad';
import ClausulasJs from './Paginas/apuntes/javaScript/capitulo_10/clausulas';
import ParamDefaultJs from './Paginas/apuntes/javaScript/capitulo_10/paramDefault';
import ParamRestJs from './Paginas/apuntes/javaScript/capitulo_10/paramRest';
import OpeTernaJs from './Paginas/apuntes/javaScript/capitulo_10/opeTerna';
import OpeSpread from './Paginas/apuntes/javaScript/capitulo_10/opSpread';
import ObjDateJs from './Paginas/apuntes/javaScript/capitulo_11/objDate';
import LocSeJs from './Paginas/apuntes/javaScript/capitulo_11/locSeJs';
import DragDropJs from "./Paginas/apuntes/javaScript/capitulo_11/Drag y Drop/dragDrop"
import GeolocalizationJs from './Paginas/apuntes/javaScript/capitulo_11/Geolocalization';
import HistoryAPIJs from './Paginas/apuntes/javaScript/capitulo_11/HistoryAPI';
import FileReadJs from './Paginas/apuntes/javaScript/capitulo_11/FileRead';
import IndexedDB from './Paginas/apuntes/javaScript/capitulo_11/IndexedDB';
import MatchMediaJs from './Paginas/apuntes/javaScript/capitulo_12/MatchMedia/MatchMedia';
import InObserJs from './Paginas/apuntes/javaScript/capitulo_12/inObser/inOber';
import LazyLoadJs from './Paginas/apuntes/javaScript/capitulo_12/LazyLoad/lazyLoad';
import NotificationJs from './Paginas/apuntes/javaScript/capitulo_12/notifications';
import WebWorkerJs from './Paginas/apuntes/javaScript/capitulo_12/webWorker/webWork';
import SameOrJs from './Paginas/apuntes/javaScript/capitulo_12/same origin politic/sameOr';
import ObjNavJs from './Paginas/apuntes/javaScript/capitulo_12/objNav';
import MemorizationJs from './Paginas/apuntes/javaScript/capitulo_12/memorization';
import CacheJs from './Paginas/apuntes/javaScript/capitulo_12/Caché';
import ServiWorkJs from './Paginas/apuntes/javaScript/capitulo_12/serviWork';
import CachWebJs from './Paginas/apuntes/javaScript/capitulo_12/cachWeb';
import CookiesJs from './Paginas/apuntes/javaScript/capitulo_12/cookies';
import AvisoCookJs from './Paginas/apuntes/javaScript/capitulo_12/avisoCookies/avisoCook';
import ObjScreenJs from './Paginas/apuntes/javaScript/capitulo_12/objScreen';
import CanvasJs from './Paginas/apuntes/javaScript/capitulo_12/canvas/canvas';


// git
import ConfiGit from './Paginas/apuntes/git/capitulo_1/confiGit';
import UseGit from './Paginas/apuntes/git/capitulo_1/useGit';


// react
import CreacionReact from './Paginas/apuntes/react/capitulo_1/creacion';
import SintaxisJsxReact from './Paginas/apuntes/react/capitulo_1/sintaxisJsx';
import ComponentesReact from './Paginas/apuntes/react/capitulo_1/componentesReact';
import ProprsReact from './Paginas/apuntes/react/capitulo_1/props';
import EstadoReact from './Paginas/apuntes/react/capitulo_1/estado';
import RenConReact from './Paginas/apuntes/react/capitulo_1/renCon';
import RenEleReact from './Paginas/apuntes/react/capitulo_1/renEle';
import EventClassReact from './Paginas/apuntes/react/capitulo_1/evenClass';
import EventEs7React from './Paginas/apuntes/react/capitulo_1/eventEs7';
import EventNativeReact from './Paginas/apuntes/react/capitulo_1/eventNative';
import ComuCompReact from './Paginas/apuntes/react/capitulo_2/comuCom';
import CicloVidaReact from './Paginas/apuntes/react/capitulo_2/cicloVida';
import ApiPODReact from './Paginas/apuntes/react/capitulo_2/api';
import HoksReact from './Paginas/apuntes/react/capitulo_2/hooks';
import UseEfReact from './Paginas/apuntes/react/capitulo_2/useEf';
import HooksPerReact from './Paginas/apuntes/react/capitulo_2/hooksPer';
import RefReact from './Paginas/apuntes/react/capitulo_2/ref';
import FormulariosReacr from './Paginas/apuntes/react/capitulo_2/formularios/formularios';
import EstilosReact from './Paginas/apuntes/react/capitulo_2/estilos/estilos';
import StyledComReact from './Paginas/apuntes/react/capitulo_2/styledCom/styledCom';
import FrameCssReact from './Paginas/apuntes/react/capitulo_2/frame';
import PropsChildReact from './Paginas/apuntes/react/capitulo_3/propsChild';
import PortalesReact from './Paginas/apuntes/react/capitulo_3/portales';
import ReactRouterDom from './Paginas/apuntes/react/capitulo_3/reactRouter';


// node.js
import IntroduccionNode from './Paginas/apuntes/node/capitulo 1/intoduccion/introduccion';
import ModulosNode from './Paginas/apuntes/node/capitulo 1/modulo/modulos';
import ProcessNode from './Paginas/apuntes/node/capitulo 1/process';
import OsNode from './Paginas/apuntes/node/capitulo 1/os';
import TimersNode from './Paginas/apuntes/node/capitulo 1/timers';
import FsNode from './Paginas/apuntes/node/capitulo 1/fs';
import NpmNode from './Paginas/apuntes/node/capitulo 2/npm';
import JsonNode from './Paginas/apuntes/node/capitulo 2/json';
import InstallUninstallNode from './Paginas/apuntes/node/capitulo 2/installUninstaal';
import EventsNode from './Paginas/apuntes/node/capitulo 2/events';
import PromesasNode from './Paginas/apuntes/node/capitulo 2/promesas';
import AsyncAwaitNode from './Paginas/apuntes/node/capitulo 2/asyncAwait';
import HttpNode from './Paginas/apuntes/node/capitulo 3/http';
import ModuloHttpNode from './Paginas/apuntes/node/capitulo 3/moduloHttp';
import MetodosReqNode from './Paginas/apuntes/node/capitulo 3/metodosReq';
import MetodosResNode from './Paginas/apuntes/node/capitulo 3/metodosRes';
import UrlNode from './Paginas/apuntes/node/capitulo 3/url';
import ModuloUrlNode from './Paginas/apuntes/node/capitulo 3/moduloUrl';
import RoutingNode from './Paginas/apuntes/node/capitulo 3/routing';
import NodeMon from './Paginas/apuntes/node/capitulo 3/nodemon';
import ExpressNode from './Paginas/apuntes/node/capitulo 4/express';
import RoutingExpressNode from './Paginas/apuntes/node/capitulo 4/routingEx';
import ParametrosExNode from './Paginas/apuntes/node/capitulo 4/parametros';
import ParametrosQueryNode from './Paginas/apuntes/node/capitulo 4/paramQuery';
import RoutersNode from './Paginas/apuntes/node/capitulo 4/routers';
import EstructurarExpress from './Paginas/apuntes/node/capitulo 4/estructurar';
import MetodosNode from "./Paginas/apuntes/node/capitulo 4/metodos";
import ExtraNode from './Paginas/apuntes/node/capitulo 4/extra';

// python
import ImportantePy from './Paginas/apuntes/python/capitulo_1/importante';
import DatSimplePy from './Paginas/apuntes/python/capitulo_1/datSimple';
import VariablesPy from './Paginas/apuntes/python/capitulo_1/variables';
import ArreglosPy from './Paginas/apuntes/python/capitulo_1/arreglos';
import OperadoresPy from './Paginas/apuntes/python/capitulo_1/operadores';
import CondicionalesPy from './Paginas/apuntes/python/capitulo_1/condicionales';
import MetCadPy from './Paginas/apuntes/python/capitulo_2/metCad';
import MetListPy from './Paginas/apuntes/python/capitulo_2/metList';
import MetDiccPy from './Paginas/apuntes/python/capitulo_2/metDicc';
import EntrDatosPy from './Paginas/apuntes/python/capitulo_2/entrDeDatos';
import SlicingPy from './Paginas/apuntes/python/capitulo_2/slicing';
import Variables2Py from './Paginas/apuntes/python/capitulo_3/variables2';
import Diccionarios2Python from './Paginas/apuntes/python/capitulo_3/diccionarios';
import BuclesPython from './Paginas/apuntes/python/capitulo_3/bucles';
import WhilePython from './Paginas/apuntes/python/capitulo_3/while';
import FuncIntegradasPython from './Paginas/apuntes/python/capitulo_3/funcIntegradas';
import FuncionesPython from './Paginas/apuntes/python/capitulo_3/funciones';
import Lambda from './Paginas/apuntes/python/capitulo_3/lambda';
import ModulosPy from './Paginas/apuntes/python/capitulo_4/modulos';
import EnrruModulePy from './Paginas/apuntes/python/capitulo_4/enrrutamiento';
import PaquetesPy from './Paginas/apuntes/python/capitulo_4/paquetes';
import TxtFilePy from './Paginas/apuntes/python/capitulo_4/txtFile';
import CsvFilePy from './Paginas/apuntes/python/capitulo_4/csvFile';
import GraficosPy from './Paginas/apuntes/python/capitulo_5/graficos';
import Poo1Py from './Paginas/apuntes/python/capitulo_5/poo';
import Poo2Py from './Paginas/apuntes/python/capitulo_5/poo2';
import AbstralClassPy from './Paginas/apuntes/python/capitulo_5/abstralClass';
import EspecialMethodPy from './Paginas/apuntes/python/capitulo_5/especialMehod';
import ExcepcionesPy from './Paginas/apuntes/python/capitulo_6/escepciones';
import ExpRegularPy from './Paginas/apuntes/python/capitulo_6/expRegulares';






// proyectos
// html
import Cap1ProyectoHtml from './Paginas/apuntes/proyectos/html/cap1';
import Cap3ProyHtml from './Paginas/apuntes/proyectos/html/cap3';
import Cap4ProyecHtml from './Paginas/apuntes/proyectos/html/cap4';
// CSS
import Cap1ProyCss from './Paginas/apuntes/proyectos/css/capitulo_1/cap1';
import Cap2ProyectoCss from './Paginas/apuntes/proyectos/css/capitulo_2/cap2';
import ProyCssCap3 from './Paginas/apuntes/proyectos/css/capitulo_3/cap3';
import Cap4ProyCss from './Paginas/apuntes/proyectos/css/capitulo_4/cap4';
import Cap5ProyCss from './Paginas/apuntes/proyectos/css/capitulo_5/cap5';
import Cap6ProyCss from './Paginas/apuntes/proyectos/css/capitulo_6/cap6';
// javaScript
import Cap1ProyJsV1 from './Paginas/apuntes/proyectos/javaScript/capitulo_1/cap1';
import Cap1Vs2PryJs from './Paginas/apuntes/proyectos/javaScript/capitulo_1/cap2';
import Cap3ProyJsV1 from './Paginas/apuntes/proyectos/javaScript/capitulo_2/asistencia/ca3';
import Cap3ProyJsV2 from './Paginas/apuntes/proyectos/javaScript/capitulo_2/fiesta/fiesta';
import Cap3ProyJsV3 from './Paginas/apuntes/proyectos/javaScript/capitulo_2/tienda/tienda';
import Cap4ProyJsV1 from './Paginas/apuntes/proyectos/javaScript/capitulo_4/matematicas/cap4';
import Cap4ProyJsV3 from './Paginas/apuntes/proyectos/javaScript/capitulo_4/formulario/cap4';
import Cap5ProyJsV1 from './Paginas/apuntes/proyectos/javaScript/capitulo_5/genCajitas/cap5';
import Cap5ProyJsV2 from './Paginas/apuntes/proyectos/javaScript/capitulo_5/operacionesGraf/cap5';
import Cap5ProyJsV3 from './Paginas/apuntes/proyectos/javaScript/capitulo_5/galeria/cap5';
import Cap7ProyJsV1 from './Paginas/apuntes/proyectos/javaScript/capitulo_7/contador/cap7';
import Cap7ProyJsV2 from './Paginas/apuntes/proyectos/javaScript/capitulo_7/calculadora/cap7';
import Cap7ProyJsV3 from './Paginas/apuntes/proyectos/javaScript/capitulo_7/contrasña/cap7';
import Cap7ProyJsV4 from './Paginas/apuntes/proyectos/javaScript/capitulo_7/colores/cap7';
import Cap7ProyJsV5 from './Paginas/apuntes/proyectos/javaScript/capitulo_7/preguntar/cap7';
import Cap8ProyJsV1 from './Paginas/apuntes/proyectos/javaScript/capitulo_8/adivina/cap8';
import Cap8ProyJsV2 from './Paginas/apuntes/proyectos/javaScript/capitulo_8/examen/cap8';
import Cap9ProyJsV1 from './Paginas/apuntes/proyectos/javaScript/capitulo_9/pokemon/cap9';
import Cap9ProyJsV2 from './Paginas/apuntes/proyectos/javaScript/capitulo_9/chistes/cap9';
import Cap10ProyJsV1 from './Paginas/apuntes/proyectos/javaScript/capitulo_10/cap10';
import Cap11ProyV1 from './Paginas/apuntes/proyectos/javaScript/capitulo_11/reloj/cap11';
import Cap11ProyV2 from './Paginas/apuntes/proyectos/javaScript/capitulo_11/diaNoche/cap11';
import Cap11ProyV3 from './Paginas/apuntes/proyectos/javaScript/capitulo_11/tareas/cap11';
import Cap11ProyV4 from './Paginas/apuntes/proyectos/javaScript/capitulo_11/fondo/cap11';
import Cap11ProyV5 from './Paginas/apuntes/proyectos/javaScript/capitulo_11/contactos/cap11';
import Cap12ProyV1 from "./Paginas/apuntes/proyectos/javaScript/capitulo_12/reproductor/cap12";
import Cap11ProyV4_5 from './Paginas/apuntes/proyectos/javaScript/capitulo_11/galeria/cap11';



// matematicas
import Cap1MatV1 from './Paginas/apuntes/matematicas/basico/cap1';


// mySql
import ChenMySql from "./Paginas/apuntes/mySql/capitulo_1/chen"
import InstallMySql from './Paginas/apuntes/mySql/capitulo_1/instalacion';
import InstallBrowserMySql from './Paginas/apuntes/mySql/capitulo_1/installBowser';
import DarkMySql from './Paginas/apuntes/mySql/capitulo_2/darkMode';
import CrearDbMySql from './Paginas/apuntes/mySql/capitulo_2/crear';
import TablasMySql from './Paginas/apuntes/mySql/capitulo_2/tablas';
import PrimerConsultaMySql from './Paginas/apuntes/mySql/capitulo_2/primerConsulta';
import TablaCodeMySql from './Paginas/apuntes/mySql/capitulo_2/tablaCode';
import InsertMySql from './Paginas/apuntes/mySql/capitulo_2/insertar';
import ClausulaSelectMySql from './Paginas/apuntes/mySql/capitulo_2/clausula';
import IdMyDql from './Paginas/apuntes/mySql/capitulo_3/identificadores';
import ClavesMySql from './Paginas/apuntes/mySql/capitulo_3/claves';
import Select2MySql from "./Paginas/apuntes/mySql/capitulo_3/select"
import OrderByMySql from './Paginas/apuntes/mySql/capitulo_3/order';
import WhereMySql from './Paginas/apuntes/mySql/capitulo_3/where';
import LogicosMySql from './Paginas/apuntes/mySql/capitulo_3/logicos';
import OperadorBetweenMySql from './Paginas/apuntes/mySql/capitulo_3/between';
import OperadorLikeMySql from './Paginas/apuntes/mySql/capitulo_4/like';
import NullMySql from './Paginas/apuntes/mySql/capitulo_4/null';
import OperadorInMySql from './Paginas/apuntes/mySql/capitulo_4/in';
import FuncionesAddMySql from './Paginas/apuntes/mySql/capitulo_4/funcionesAdd';
import ComentariosMySql from './Paginas/apuntes/mySql/capitulo_4/comentarios';
import GroupByMySql from './Paginas/apuntes/mySql/capitulo_5/groupBy';
import SubConsultasMySql from './Paginas/apuntes/mySql/capitulo_5/subConsultas';
import JoinMySql from './Paginas/apuntes/mySql/capitulo_5/joins';
import UnionMySql from './Paginas/apuntes/mySql/capitulo_5/union';
import CardinalidadMySql from './Paginas/apuntes/mySql/capitulo_6/Cardinalidad ';
import IndicesMySql from "./Paginas/apuntes/mySql/capitulo_6/indices"
import VistasMySql from './Paginas/apuntes/mySql/capitulo_6/vistas';
import BloqTansaccMySql from './Paginas/apuntes/mySql/capitulo_6/bloqYTransac';
import FduMySql from './Paginas/apuntes/mySql/capitulo_6/fdu';

// php
import IntroPhp from './Paginas/apuntes/php/capitulo_1/introduccion';
import PrimerosPasosPhp from './Paginas/apuntes/php/capitulo_1/primersPasos';
import TipoDatosPhp from './Paginas/apuntes/php/capitulo_1/tipoDatos';
import VariablesPhp from './Paginas/apuntes/php/capitulo_1/variables';
import NumerosPhp from './Paginas/apuntes/php/capitulo_1/numeros.jsx';
import ArrPhp from './Paginas/apuntes/php/capitulo_1/arreglos';
import ConcatenacionPhp from './Paginas/apuntes/php/capitulo_1/concatenacion';
import OperacionesPhp from './Paginas/apuntes/php/capitulo_1/operaciones';
import CondicionalesPhp from './Paginas/apuntes/php/capitulo_2/condicionales';
import BuclesPhp from './Paginas/apuntes/php/capitulo_2/bucles';
import InclRequPhp from './Paginas/apuntes/php/capitulo_2/inclRequ';
import FuncionesPhp from './Paginas/apuntes/php/capitulo_2/funciones';
import MetodosCadenaPhp from './Paginas/apuntes/php/capitulo_2/metodoStr';
import FuncMatPhp from './Paginas/apuntes/php/capitulo_2/funcMat.jsx';
import FechaHoraPhp from './Paginas/apuntes/php/capitulo_3/fechaHora.jsx';
import HashearPswPhp from './Paginas/apuntes/php/capitulo_3/hash.jsx';
import SendFormPhp from './Paginas/apuntes/php/capitulo_3/senfForm.jsx';
import IssetPhp from './Paginas/apuntes/php/capitulo_3/isset.jsx';
import ArchivosPhp from './Paginas/apuntes/php/capitulo_3/archivos.jsx';
import FetchPhp from './Paginas/apuntes/php/capitulo_3/fetch.jsx';
import CookiesPhp from './Paginas/apuntes/php/capitulo_3/cookies.jsx';
import SesionesPhp from './Paginas/apuntes/php/capitulo_4/sesiones.jsx';
import AdminWpPlugin from './Paginas/apuntes/pluginsWp/capitulo_1/menuAdmin.jsx';
import InstallWpPlugin from './Paginas/apuntes/pluginsWp/capitulo_1/install.jsx';
import AcDesBoWpPlugin from './Paginas/apuntes/pluginsWp/capitulo_1/acdesbo.jsx';
import SubmenuWpPlugin from './Paginas/apuntes/pluginsWp/capitulo_1/submenu.jsx';
import CrearTablasWpPlugin from './Paginas/apuntes/pluginsWp/capitulo_1/crearTablas.jsx';



// php


function App() {

  return (
    <Router>
      <Menu />
      <DestelloAll />
      <ScrollToTop />
      
      <Routes>
        <Route path='/*' element={<Home />} />

        {/* proyectos */}
          {/* html */}
            <Route path='/html/cap1Proy' element={<Cap1ProyectoHtml />} />
            <Route path='html/cap3Proy' element={<Cap3ProyHtml />}/>
            <Route path='html/cap4Proy' element={<Cap4ProyecHtml />} />
          {/* css */}
            <Route path='css/proyCap1' element={<Cap1ProyCss />} />
            <Route path='css/proyCap2' element={<Cap2ProyectoCss />} />
            <Route path='css/proyCap3' element={<ProyCssCap3 />} />
            <Route path='css/proyCap4' element={<Cap4ProyCss />} />
            <Route path='css/proyCap5' element={<Cap5ProyCss />} />
            <Route path='css/proyCap6' element={<Cap6ProyCss />} />
          {/* javaScript */}
            {/* capitulo 2 */}
              <Route path='javaScipt/cap1ProyV1' element={<Cap1ProyJsV1 />} />
              <Route path='javaScipt/cap1ProyV2' element={<Cap1Vs2PryJs />} />
            {/* capitulo 3 */}
              <Route path='javaScript/cap3ProyV1' element={<Cap3ProyJsV1 />} />
              <Route path='javaScript/cap3ProyV2' element={<Cap3ProyJsV2 />} />
              <Route path='javaScript/cap3ProyV3' element={<Cap3ProyJsV3 />} />
            {/* capitulo 4 */}
              <Route path='javaScript/cap4ProyV1' element={<Cap4ProyJsV1 />} />
              <Route path='javaScript/cap4ProyV3' element={<Cap4ProyJsV3 />} />
            {/* capitulos 5 */}
              <Route path='javaScript/cap5ProyV1' element={<Cap5ProyJsV1 />} />
              <Route path='javaScript/cap5ProyV2' element={<Cap5ProyJsV2 />} />
              <Route path='javaScript/cap5ProyV3' element={<Cap5ProyJsV3 />} />
            {/* capitulo 7 */}
              <Route path='javaScript/cap7ProyV1' element={<Cap7ProyJsV1 />} />
              <Route path='javaScript/cap7ProyV2' element={<Cap7ProyJsV2 />} />
              <Route path='javaScript/cap7ProyV3' element={<Cap7ProyJsV3 />} />
              <Route path='javaScript/cap7ProyV4' element={<Cap7ProyJsV4 />} />
              <Route path='javaScript/cap7ProyV5' element={<Cap7ProyJsV5 />} />
            {/* capitulo 8 */}
              <Route path='javaScript/cap8ProyV1' element={<Cap8ProyJsV1 />} />
              <Route path='javaScript/cap8ProyV2' element={<Cap8ProyJsV2 />} />
            {/* capitulo 9 */}
              <Route path='javaScript/cap9ProyV1' element={<Cap9ProyJsV1 />} />
              <Route path='javaScript/cap9ProyV2' element={<Cap9ProyJsV2 />} />
            {/* capitulo 10 */}
              <Route path='javaScript/cap10ProyV1' element={<Cap10ProyJsV1 />} />
            {/* capitulo 11 */}
              <Route path='javaScript/cap11ProyV1' element={<Cap11ProyV1 />} />
              <Route path='javaScript/cap11ProyV2' element={<Cap11ProyV2 />} />
              <Route path='javaScript/cap11ProyV3' element={<Cap11ProyV3 />} />
              <Route path='javaScript/cap11ProyV4' element={<Cap11ProyV4 />} />
              <Route path='javaScript/cap11ProyV5' element={<Cap11ProyV5 />} />
              <Route path='javaScript/cap11ProyV4_5' element={<Cap11ProyV4_5 />} />

            {/* capitulo 12 */}
              <Route path='javaScript/cap12ProyV1' element={<Cap12ProyV1 />} />





        {/* matematicas */}
          {/* capitulo 1 */}
            <Route path='/matematica/basico' element={<Cap1MatV1 />}/>
        {/* logica */}
          {/* capitulo 1 */}
            <Route path='/logica/comenzar' element={<ImportanteLogica />} />
            <Route path='/logica/tipo de datos' element={<TipoDeDatos />} />
            <Route path='/logica/operadores' element={<OperadoresLogica />} />

          {/* capitulo 2 */}
            <Route path='logica/variables' element={<VariableLogica />} />
            <Route path='logica/concatenacion' element={<ConcatenarLogica />} />
            <Route path='logica/inOuLogica' element={<InpuLogica />} />
          
          {/* capitulo 3 */}
            <Route path='logica/condicionales' element={<CondicionalesLogica />} />
            <Route path='logica/arreglos' element={<ArreglosLogica />} />
            <Route path='logica/arreglosBi' element={<ArreglosBiLogica />} />
          
          {/* capitulo 4 */}
            <Route path='logica/bucles' element={<BuclesLogica />} />
            <Route path='logica/bucles/buclePara' element={<BucleParaLogica />} />
            <Route path='logica/funciones' element={<FuncionesLogica />} />
            <Route path='logica/pod' element={<PodLogica />} />
            


        {/* html */}
          {/* capitulo 1 */}
            <Route path='/html/importante leer esto' element={<Importante />} />
            <Route path='/html/conseptos basicos' element={<ConseptosBasicos />}/>
            
          {/* capitulo 2 */}
            <Route path='/html/etiquetas' element={<Etiquetas />} />
            <Route path='/html/estructura html' element={<EstructuraHtml />}/>
            <Route path='/html/html semantico' element={<HtmlSemantico />} />

            
          {/* capitulo 3 */}
            <Route path='/html/enlaces' element={<EnlacesHtml />} />
            <Route path='/html/br' element={<Br />} />
            <Route path='/html/listas' element={<Listas /> } />
            <Route path='/html/multimedia' element={<Multimedia />} />
            <Route path='/html/divs' element={<Divs />}/>
            <Route path='/html/formularios' element={<Formularios />}/>
            <Route path='/html/metadatos' element={<Metadatos />}/>


          {/* capitulo 4 */}
            <Route path='/html/mav' element={<Nav />} />
            <Route path='/html/section y article' element={<SectionArticle />} />
            <Route path='/html/aside' element={<Aside />} />
            <Route path='/html/main' element={<Main />} />
            <Route path='/html/footer' element={<FooterHtmlCurso />} />
            <Route path='/html/tablas' element={<Tablas />} />
            <Route path='/html/extra' element={<ExtraHtml />} />


        {/* css */}        
          {/* capitulo 1 */}
            <Route path='/css/introduccion a css' element={<IntroduccionCss />} />
            <Route path='/css/selectores' element={<Selectores />} />
            <Route path='/css/especificidad' element={<Especificidad />} />
            <Route path='/css/metodologia BEM' element={<Metodologia />} />
            <Route path='/css/unidades' element={<Unidades />} />
              <Route path='/css/unidades/unidades2' element={<Unidades2 />} />
        
          {/* capitulo 2 */}
            <Route path='/css/background' element={<Background />}/>
            <Route path='/css/propiedades de texto' element={<PropiedadesTexto />}/>
            <Route path='/css/normalize' element={<Normalize />}/>
            <Route path='/css/cajas' element={<Cajas />}/>
            <Route path='/css/padding' element={<Padding />}/>
            <Route path='/css/margin' element={<Margin />}/>
            <Route path='/css/border' element={<Border />}/>
            <Route path='/css/sombras' element={<Sombras />}/>
            <Route path='/css/outline' element={<Outline />}/>

          {/* capitulo 3 */}
            <Route path='/css/position' element={<Position />}/>
              <Route path='/css/position/position absolute' element={<PositionAbsolute />}/>
              <Route path='/css/position/position absolute/z-index' element={<Zindex />}/>
              <Route path='/css/position/position absolute/z-index/position-fixed' element={<PositionFixed />}/>
                <Route path='/css/position/position absolute/z-index/position-fixed/resultado1' element={<Fixed1 />}/>
                <Route path='/css/position/position absolute/z-index/position-fixed/resultado2' element={<Fixed2 />}/>
                <Route path='/css/position/position absolute/z-index/position-fixed/position-sticky' element={<PositionSticky />}/>
                <Route path='/css/position/position absolute/z-index/position-fixed/position-sticky/resultado' element={<StickyPage />}/>
            <Route path='/css/display' element={<Display />}/>
            <Route path='/css/overflow' element={<Overflow />}/>
            <Route path='/css/float' element={<Float />}/>
            <Route path='/css/pseudoelementos' element={<Pseudoelementos />}/>
            <Route path='/css/pseudoclases' element={<Pseudoclases />}/>


          {/* capitulo 4 */}
            <Route path='css/object fit' element={<ObjetFit />}/>
            <Route path='css/cursor' element={<Cursor />}/>
            <Route path='css/colorizacion' element={<Colorizacion />}/>
            <Route path='css/responsive(basico)' element={<ResponsiveBasico />}/>
              <Route path='css/responsive(basico)/resultadoResponsiveBasico' element={<ResultadoResponsive1 />}/>
            <Route path='css/flexbox' element={<Flexbox />}/>
              <Route path='css/flexbox/resultado1' element={<Resultado1Flex />}/>
              <Route path='css/flexbox/flexDirection' element={<FlexDirection />}/>
              <Route path='css/flexbox/flexDirection/flexWrap' element={<FlexWrap />}/>
                <Route path='css/flexbox/flexDirection/flexWrap/resultadoWrap1' element={<Wrap1 />}/>
                <Route path='css/flexbox/flexDirection/flexWrap/resultadoWrap2' element={<Wrap2 />}/>
              <Route path='css/flexbox/flexDirection/flexWrap/alineacionFlex' element={<AlineacionFlex />}/>
                <Route path='css/flexbox/flexDirection/flexWrap/alineacionFlex/alineacionFlx' element={<ResultadoAlineacionFlex />}/>
                <Route path='css/flexbox/flexDirection/flexWrap/alineacionFlex/alineacionAlign' element={<AlignItems />}/>
                <Route path='css/flexbox/flexDirection/flexWrap/alineacionFlex/resultadoStart' element={<ResultadoStart />}/>
                <Route path='css/flexbox/flexDirection/flexWrap/alineacionFlex/alignContent' element={<AlignContent />}/>
                <Route path='css/flexbox/flexDirection/flexWrap/alineacionFlex/AlignSelf' element={<AlignSelf />}/>
              <Route path='css/flexbox/flexDirection/flexWrap/alineacionFlex/flex-grow' element={<FlexGrow />}/>
                <Route path='css/flexbox/flexDirection/flexWrap/alineacionFlex/flex-grow/flexGrowResultado' element={<FlexGrowResultado />}/>
            <Route path='css/order' element={<Order />}/>
        

        {/* capitulo 5 */}
          <Route path='css/grid' element={<Grid />}/>
            <Route path='css/grid/gridTemplate' element={<GridTemplate />}/>
            <Route path='css/grid/gridTemplate/grid-gap' element={<GridGap />}/>
            <Route path='css/grid/gridTemplate/grid-gap/asignacion de espacios' element={<AsignacionEspacios />}/>
            <Route path='css/grid/gridTemplate/grid-gap/asignacion de espacios/repeat' element={<RepeatCss />}/>
            <Route path='css/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx' element={<GridImEx />}/>
            <Route path='css/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto' element={<GridAuto />}/>
            <Route path='css/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto/grid dinamico' element={<GridDinamico />}/>
            <Route path='css/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto/grid dinamico/alineacionGrid' element={<AlineacionGrid />}/>
            <Route path='css/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto/grid dinamico/alineacionGrid/gridArea' element={<GridArea />}/>
            <Route path='css/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto/grid dinamico/alineacionGrid/gridArea/nombrarGrid' element={<NombrarGrid />}/>
          <Route path='css/responsive design' element={<ResponsiveDesing />}/>
            <Route path='css/responsive design/responRes1' element={<ResponRes1 />}/>
            <Route path='css/responsive design/responRes2' element={<ResponRes2 />}/>
            <Route path='css/responsive design/responRes3' element={<ResponRes3 />}/>
          <Route path='css/transition' element={<Transition />}/>
          <Route path='css/animation' element={<Animation />}/>
            
        
        {/* capitulo 6 */}
          <Route path='css/Cubic Bezier' element={<CubicBezier />}/>
          <Route path='css/Transform' element={<Transform />}/>
          <Route path='css/variables' element={<VariablesCss />}/>
          <Route path='css/filter' element={<Filter />}/>
          <Route path='css/extraCss' element={<ExtraCss />}/>
            <Route path='css/extraCss/resultadoScroll' element={<ResultadoScroll />}/>
          <Route path='css/linear' element={<Linear />}/>


        {/* javaScript */}
          {/* capitulo 1 */}
            <Route path='javaScript/recomendado' element={<RecomendadoJs />}/>
            <Route path='javaScript/javaScriptBasico' element={<JavaScriptBasico />}/>
            <Route path='javaScript/enlazarJavaScript' element={<EnlazarJavaScript />}/>

          {/* capitulo 2 */}
            <Route path='javaScript/variables' element={<VariablesJavaScript />}/>
              <Route path='javaScript/variables/bloqueDeCodigo' element={<BloqueCJavaScript />}/>
            <Route path='javaScript/javaScriptFun' element={<JavaScriptFun />}/>
            <Route path='javaScript/prompt' element={<PromptLogica />}/>
            <Route path='javaScript/javaSCriptFun' element={<JavaScriptFun />}/>
            <Route path='javaScript/operadores' element={<OperadoresJavaScript />}/>
            <Route path='javaScript/concatenacion' element={<ConcatenacionJavaScript />}/>
            <Route path='javaScript/camelCase' element={<CamelCaseJavaScript />}/>
          
          {/* capitulo 3 */}
            <Route path='javaScript/condicionales' element={<CondicionalesJavaScript />}/>
            <Route path='javaScript/arreglos' element={<ArreglosJavaScript />}/>
            <Route path='javaScript/arreglosAsociativos' element={<ArreglosAsJavaScript />}/>
            <Route path='javaScript/bucles' element={<BuclesJavaScript />}/>
            <Route path='javaScript/funciones' element={<FuncionesJavaScript />}/>
              <Route path='javaScript/funciones/funcionFlecha' element={<FunFlecha />}/>
            <Route path='javaScript/PODJavaScript' element={<PODJavaScript />}/>
            
            {/* capitulo 4 */}
              <Route path='javaScript/metodosCadena' element={<MetodosCadenaJavaScript />}/>
              <Route path='javaScript/metodosArreglo' element={<MetodosArrJavaScript />}/>
              <Route path='javaScript/objectMath' element={<ObjectMathJavaScript />}/>
            
            {/* capitulo 5 */}
              <Route path='javaScript/DOM' element={<DOMJavaScript />}/>
              <Route path='javaScript/SelectoresJavaScript' element={<SelectoresDOMJavaScript />}/>
              <Route path='javaScript/atributosJs' element={<CambiarAttrJavaScript />}/>
              <Route path='javaScript/atributoGlobal' element={<AtributosGlobalesJs />}/>
              <Route path='javaScript/attrInput' element={<AtributosInputsJs />}/>
              <Route path='javaScript/clasesMet' element={<ClasesMetJs />}/>
              <Route path='javaScript/obtenMod' element={<ObtenModJs />}/>
              <Route path='javaScript/creacionEle' element={<CreacionEleJs />}/>
              <Route path='javaScript/obChild' element={<ObModChildJs />}/>
              <Route path='javaScript/propChild' element={<PropChildJs />}/>
              <Route path='javaScript/propPar' element={<PropParJs />}/>
              <Route path='javaScript/PropSi' element={<PropSiJs />}/>
              
            
            {/* capitulo 6 */}
              <Route path='javaScript/window1' element={<Window1Js />}/>
              <Route path='javaScript/window2' element={<Window2Js />}/>
              <Route path='javaScript/window3' element={<Window3Js />}/>
            
            {/* capitulo 7 */}
              <Route path='javaScript/eventListen' element={<EventListenJs />}/>
              <Route path='javaScript/eventFlujo' element={<EventFujoJs />}/>
              <Route path='javaScript/MouseEvent' element={<MouseEventJs />}/>
              <Route path='javaScript/keyEvent' element={<KeyEventJs />}/>
              <Route path='javaScript/interEvent' element={<InterEventJs />}/>
              <Route path='javaScript/timers' element={<TimersJs />}/>
            
            {/* capitulo 8 */}
              <Route path='javaScript/controlFlujo' element={<ControlFlujoJs />}/>
              <Route path='javaScript/switch' element={<SwitchJs />}/>
              <Route path='javaScript/ManErr' element={<ManErrJs />}/>
              <Route path='javaScript/callbacks' element={<CallbacksJs />}/>
              <Route path='javaScript/promesas' element={<PromesasJs />}/>
              <Route path='javaScript/awaitAsync' element={<AwaitAsyncJs />}/>

            {/* capitulo 9 */}
              <Route path='javaScript/json' element={<JsonJs />}/>
              <Route path='javaScript/Ajsx' element={<AjaxJs />}/>
              <Route path='javaScript/fetch' element={<FetchJs />}/>
              <Route path='javaScript/axios' element={<AxiosJs />}/>

            {/* capitulo 10 */}
              <Route path='javaScript/proto' element={<ProtoJs />}/>
              <Route path='javaScript/carProto' element={<CarProtoJs />}/>
              <Route path='javaScript/strictMod' element={<StrictModJs />}/>
              <Route path='javaScript/funciones2' element={<FuncionesPart2Js />}/>
              <Route path='javaScript/thisCon' element={<ThisCon />}/>
              <Route path='javaScript/recursividad' element={<RecursividadJs />}/>
              <Route path='javaScript/clausulas' element={<ClausulasJs />}/>
              <Route path='javaScript/paramDefaul' element={<ParamDefaultJs />}/>
              <Route path='javaScript/paramRest' element={<ParamRestJs />}/>
              <Route path='javaScript/opTerna' element={<OpeTernaJs />}/>
              <Route path='javaScript/opSpread' element={<OpeSpread />}/>
              
            {/* capitulo 11 */}
              <Route path='javaScript/objDate' element={<ObjDateJs />}/>
              <Route path='javaScript/locSeJs' element={<LocSeJs />}/>
              <Route path='javaScript/dragDrop' element={<DragDropJs />}/>
              <Route path='javaScript/geolo' element={<GeolocalizationJs />}/>
              <Route path='javaScript/hisApi' element={<HistoryAPIJs />}/>
              <Route path='javaScript/FileRead' element={<FileReadJs />}/>
              <Route path='javaScript/IndexedDB' element={<IndexedDB />}/>

            {/* capitulo 12 */}
              <Route path='javaScript/MatchMedia' element={<MatchMediaJs />}/>
              <Route path='javaScript/inObser' element={<InObserJs />}/>
              <Route path='javaScript/lazyLoad' element={<LazyLoadJs />}/>
              <Route path='javaScript/Notifications' element={<NotificationJs />}/>
              <Route path='javaScript/webWork' element={<WebWorkerJs />}/>
              <Route path='javaScript/sameOr' element={<SameOrJs />}/>
              <Route path='javaScript/objNa' element={<ObjNavJs />}/>
              <Route path='javaScript/memori' element={<MemorizationJs />}/>
              <Route path='javaScript/Caché' element={<CacheJs />}/>
              <Route path='javaScript/servWork' element={<ServiWorkJs />}/>
              <Route path='javaScript/cachWeb' element={<CachWebJs />}/>
              <Route path='javaScript/Cookies' element={<CookiesJs />}/>
              <Route path='javaScript/avisoCookies' element={<AvisoCookJs />}/>
              <Route path='javaScript/objScreen' element={<ObjScreenJs />}/>
              <Route path='javaScript/objCanvas' element={<CanvasJs />}/>

          {/* git */}
            <Route path='git/confiGit' element={<ConfiGit />}/>
            <Route path='git/useGit' element={<UseGit />}/>


          {/* react */}
            {/* capitulo 1 */}
              <Route path='react/creacion' element={<CreacionReact />}/>
              <Route path='react/sintaxis' element={<SintaxisJsxReact />}/>
              <Route path='react/componentes' element={<ComponentesReact />}/>
              <Route path='react/props' element={<ProprsReact />}/>
              <Route path='react/estado' element={<EstadoReact />}/>
              <Route path='react/renCon' element={<RenConReact />}/>
              <Route path='react/renEle' element={<RenEleReact />}/>
              <Route path='react/evenClass' element={<EventClassReact />}/>
              <Route path='react/evenClass2' element={<EventEs7React />}/>
              <Route path='react/eventNative' element={<EventNativeReact />}/>

            
            {/* capitulo 2 */}
              <Route path='react/comuCompo' element={<ComuCompReact />}/>
              <Route path='react/ciclVid' element={<CicloVidaReact />}/>
              <Route path='react/apiPOD' element={<ApiPODReact />}/>
              <Route path='react/hooks' element={<HoksReact />}/>
              <Route path='react/useEffect' element={<UseEfReact />}/>
              <Route path='react/hooksPer' element={<HooksPerReact />}/>
              <Route path='react/referencias' element={<RefReact />}/>
              <Route path='react/formularios' element={<FormulariosReacr />}/>
              <Route path='react/estilos' element={<EstilosReact />}/>
              <Route path='react/styledCom' element={<StyledComReact />}/>
              <Route path='react/frameCss' element={<FrameCssReact />}/>

            {/* capitulo 3 */}
              <Route path='react/propsChild' element={<PropsChildReact />}/>
              <Route path='react/Portales' element={<PortalesReact />}/>
              <Route path='react/reactRouter' element={<ReactRouterDom />}/>
              

          
          {/* node.js */}
            {/* capitulo 1 */}
              <Route path='node/introduccion/introduccion' element={<IntroduccionNode />}/>
              <Route path='node/modulos' element={<ModulosNode />} />
              <Route path='node/process' element={<ProcessNode />} />
              <Route path='node/os' element={<OsNode />} />
              <Route path='node/timers' element={<TimersNode />} />
              <Route path='node/fs' element={<FsNode />} />
            {/* capitulo 2 */}
              <Route path='node/npm' element={<NpmNode />} />
              <Route path='node/json' element={<JsonNode />} />
              <Route path='node/installUninstall' element={<InstallUninstallNode />} />
              <Route path='node/eventsNode' element={<EventsNode />} />
              <Route path='node/promesas' element={<PromesasNode />} />
              <Route path='node/asyncAwait' element={<AsyncAwaitNode />} />
            {/* capitlo 3 */}
              <Route path='node/http' element={<HttpNode />} />
              <Route path='node/moduloHttp' element={<ModuloHttpNode />} />
              <Route path='node/metodosReq' element={<MetodosReqNode />} />
              <Route path='node/metodosRes' element={<MetodosResNode />}/>
              <Route path='node/urlNode' element={<UrlNode />}/>
              <Route path='node/moduloUrl' element={<ModuloUrlNode />}/>
              <Route path='node/routing' element={<RoutingNode />}/>
              <Route path='node/nodemon' element={<NodeMon />}/>
            {/* capitulo 4 */}
              <Route path='node/express' element={<ExpressNode />}/>
              <Route path='node/routingExpress' element={<RoutingExpressNode />}/>
              <Route path='node/parametrosUrl' element={<ParametrosExNode />}/>
              <Route path='node/parametrosQuerty' element={<ParametrosQueryNode />}/>
              <Route path='node/routers' element={<RoutersNode />}/>
              <Route path='node/estructura' element={<EstructurarExpress />}/>
              <Route path='node/metodos' element={<MetodosNode />}/>
              <Route path='node/extra' element={<ExtraNode />}/>


              
              

          {/* python */}
            {/* capitulo 1*/}
              <Route path='python/importante' element={<ImportantePy />}/>
              <Route path='python/datSimple' element={<DatSimplePy />}/>
              <Route path='python/variables' element={<VariablesPy />}/>
              <Route path='python/datComp' element={<ArreglosPy />}/>
              <Route path='python/operadores' element={<OperadoresPy />}/>
              <Route path='python/condicionales' element={<CondicionalesPy />}/>

            {/* capitulo 2 */}
              <Route path='python/metCade' element={<MetCadPy />}/>
              <Route path='python/metList' element={<MetListPy />}/>
              <Route path='python/metDicc' element={<MetDiccPy />}/>              
              <Route path='python/enDeDatos' element={<EntrDatosPy />}/>     
              <Route path='python/enDeDatos' element={<EntrDatosPy />}/>              
              <Route path='python/slicing' element={<SlicingPy />}/>              
         

            {/* capitulo 3 */}
              <Route path='python/variable2' element={<Variables2Py />}/>        
              <Route path='python/diccionarios' element={<Diccionarios2Python />}/>        
              <Route path='python/bucles' element={<BuclesPython />}/>        
              <Route path='python/while' element={<WhilePython />}/>        
              <Route path='python/funcIntegradas' element={<FuncIntegradasPython />}/>        
              <Route path='python/funciones' element={<FuncionesPython />}/>        
              <Route path='python/lambda' element={<Lambda />}/>        
            
            {/* capitulo 4 */}
              <Route path='python/modulos' element={<ModulosPy />}/>        
              <Route path='python/enrruMod' element={<EnrruModulePy />}/>        
              <Route path='python/paquetes' element={<PaquetesPy />}/>        
              <Route path='python/txtFile' element={<TxtFilePy />}/>        
              <Route path='python/csvFile' element={<CsvFilePy />}/>        
            
            {/* capitulo 5 */}
              <Route path='python/graficos' element={<GraficosPy />}/>        
              <Route path='python/poo1' element={<Poo1Py />}/>
              <Route path='python/poo2' element={<Poo2Py />}/>        
              <Route path='python/abstralClass' element={<AbstralClassPy />}/>        
              <Route path='python/especialMethod' element={<EspecialMethodPy />}/>        
            
            {/* capitulo 6 */}
              <Route path='python/excepciones' element={<ExcepcionesPy />}/>
              <Route path='python/expRegular' element={<ExpRegularPy />}/>
   

          {/* mysql */}
            {/* capitulo 1 */}
              <Route path='mySql/chen' element={<ChenMySql />}/>        
              <Route path='mySql/install' element={<InstallMySql />}/>        
              <Route path='mySql/installBrowser' element={<InstallBrowserMySql />}/>        
              <Route path='mySql/dark' element={<DarkMySql />}/>       
            {/* capitulo 2 */}
              <Route path='mySql/crear' element={<CrearDbMySql />}/>        
              <Route path='mySql/tablas' element={<TablasMySql />}/>
              <Route path='mySql/primerCon' element={<PrimerConsultaMySql />}/>
              <Route path='mySql/tablaCode' element={<TablaCodeMySql />}/>
              <Route path='mySql/insert' element={<InsertMySql />}/>
              <Route path='mySql/select' element={<ClausulaSelectMySql />}/>
            {/* capitulo 3 */}
              <Route path='mySql/id' element={<IdMyDql />}/>
              <Route path='mySql/claves' element={<ClavesMySql />}/>
              <Route path='mySql/select2' element={<Select2MySql />}/>
              <Route path='mySql/order' element={<OrderByMySql />}/>
              <Route path='mySql/where' element={<WhereMySql />}/>
              <Route path='mySql/logicos' element={<LogicosMySql />}/>
              <Route path='mySql/between' element={<OperadorBetweenMySql />}/>
            {/* capitulo 4 */}
              <Route path='mySql/like' element={<OperadorLikeMySql />}/>
              <Route path='mySql/null' element={<NullMySql />}/>
              <Route path='mySql/in' element={<OperadorInMySql />}/>
              <Route path='mySql/funcAdd' element={<FuncionesAddMySql />}/>
              <Route path='mySql/comentarios' element={<ComentariosMySql />}/>
            {/* capitulo 5 */}
              <Route path='mySql/groupBy' element={<GroupByMySql />}/>
              <Route path='mySql/subConsultas' element={<SubConsultasMySql />}/>
              <Route path='mySql/join' element={<JoinMySql />}/>
              <Route path='mySql/union' element={<UnionMySql />}/>
            {/* capitulo 6 */}
              <Route path='mySql/cardinalidad' element={<CardinalidadMySql />}/>
              <Route path='mySql/indices' element={<IndicesMySql />}/>
              <Route path='mySql/vistas' element={<VistasMySql />}/>
              <Route path='mySql/bloqTransacc' element={<BloqTansaccMySql />}/>
              <Route path='mySql/fdu' element={<FduMySql />}/>



          {/* php*/}
            {/* capitulo 1 */}
              <Route path='php/intro' element={<IntroPhp />}/>
              <Route path='php/primerosPasos' element={<PrimerosPasosPhp />}/>
              <Route path='php/tipoDatos' element={<TipoDatosPhp />}/>
              <Route path='php/variables' element={<VariablesPhp />}/>
              <Route path='php/numeros' element={<NumerosPhp />}/>
              <Route path='php/arreglos' element={<ArrPhp />}/>
              <Route path='php/concat' element={<ConcatenacionPhp />}/>
              <Route path='php/operaciones' element={<OperacionesPhp />}/>
            {/* capitulo 2 */}
              <Route path='php/condicionales' element={<CondicionalesPhp />}/>
              <Route path='php/bucles' element={<BuclesPhp />}/>
              <Route path='php/inclReq' element={<InclRequPhp />}/>
              <Route path='php/funciones' element={<FuncionesPhp />}/>
              <Route path='php/metodosStr' element={<MetodosCadenaPhp />}/>
              <Route path='php/funcMat' element={<FuncMatPhp />}/>
            {/* capitulo 3 */}
              <Route path='php/fechaHora' element={<FechaHoraPhp />}/>
              <Route path='php/hash' element={<HashearPswPhp />}/>
              <Route path='php/sendForm' element={<SendFormPhp />}/>
              <Route path='php/isset' element={<IssetPhp />}/>
              <Route path='php/archivos' element={<ArchivosPhp />}/>
              <Route path='php/fetch' element={<FetchPhp />}/>
              <Route path='php/cookies' element={<CookiesPhp />}/>
            {/* capitulo 4 */}
              <Route path='php/sesiones' element={<SesionesPhp />}/>
            
          {/* plugin wordpress */}
            {/* capitulo */}
              <Route path='wpPlugin/install' element={<InstallWpPlugin />}/>
              <Route path='wpPlugin/acdesbo' element={<AcDesBoWpPlugin />}/>
              <Route path='wpPlugin/menuAdmin' element={<AdminWpPlugin />}/>
              <Route path='wpPlugin/submenu' element={<SubmenuWpPlugin />}/>
              <Route path='wpPlugin/crearTb' element={<CrearTablasWpPlugin />}/>


              
              
              
              

              
            
              


              
              



        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App;