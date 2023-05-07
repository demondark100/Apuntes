import React from 'react';
import 'normalize.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


// componentes
import Home from './Paginas/home/Home';
import NotFound from './Paginas/notFound/NotFound';


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
import CssHome from './Paginas/apuntes/css/CssHome';
import Capitulo1Css from "./Paginas/apuntes/css/capitulo_1/capitulo1Css";
import IntroduccionCss from './Paginas/apuntes/css/capitulo_1/introduccion/introduccionCss';
import Selectores from './Paginas/apuntes/css/capitulo_1/selectore/selectore';
import Especificidad from './Paginas/apuntes/css/capitulo_1/especificidad/especificidad';
import Metodologia from './Paginas/apuntes/css/capitulo_1/metodologia/Metodologia';
import Unidades from './Paginas/apuntes/css/capitulo_1/unidades/unidades';
import Unidades2 from './Paginas/apuntes/css/capitulo_1/unidades/unidades2';
import Capitulo2Css from './Paginas/apuntes/css/capitulo_2/capitulo2Css';
import Background from './Paginas/apuntes/css/capitulo_2/background/background';
import PropiedadesTexto from './Paginas/apuntes/css/capitulo_2/propiedadesTexto/porpiedadesTexto';
import Normalize from './Paginas/apuntes/css/capitulo_2/normalize/normalize';
import Cajas from './Paginas/apuntes/css/capitulo_2/cajas/cajas';
import Padding from './Paginas/apuntes/css/capitulo_2/padding/padding';
import Margin from './Paginas/apuntes/css/capitulo_2/margin/margin';
import Border from './Paginas/apuntes/css/capitulo_2/border/border';
import Sombras from './Paginas/apuntes/css/capitulo_2/sombras/sombras';
import Outline from './Paginas/apuntes/css/capitulo_2/outline/outline';
import Capitulo3Css from './Paginas/apuntes/css/capitulo_3/capitulo3Css';
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
import Capitulo4Css from './Paginas/apuntes/css/capitulo_4/capitulo4Css';
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
import Capitulo5Css from './Paginas/apuntes/css/capitulo_5/Capitulo5Css';
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


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

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

      <Route path='/css' element={<CssHome />} />
        
        {/* capitulo 1 */}

        <Route path='/css/capitulo 1' element={<Capitulo1Css />}/>
          <Route path='/css/capitulo 1/introduccion a css' element={<IntroduccionCss />} />
          <Route path='/css/capitulo 1/selectores' element={<Selectores />} />
          <Route path='/css/capitulo 1/especificidad' element={<Especificidad />} />
          <Route path='/css/capitulo 1/metodologia BEM' element={<Metodologia />} />
          <Route path='/css/capitulo 1/unidades' element={<Unidades />} />
            <Route path='/css/capitulo 1/unidades/unidades2' element={<Unidades2 />} />
        
        {/* capitulo 2 */}

        <Route path='/css/capitulo 2' element={<Capitulo2Css />}/>
          <Route path='/css/capitulo 2/background' element={<Background />}/>
          <Route path='/css/capitulo 2/propiedades de texto' element={<PropiedadesTexto />}/>
          <Route path='/css/capitulo 2/normalize' element={<Normalize />}/>
          <Route path='/css/capitulo 2/cajas' element={<Cajas />}/>
          <Route path='/css/capitulo 2/padding' element={<Padding />}/>
          <Route path='/css/capitulo 2/margin' element={<Margin />}/>
          <Route path='/css/capitulo 2/border' element={<Border />}/>
          <Route path='/css/capitulo 2/sombras' element={<Sombras />}/>
          <Route path='/css/capitulo 2/outline' element={<Outline />}/>

        {/* capitulo 3 */}
        <Route path='/css/capitulo 3' element={<Capitulo3Css />}/>
          <Route path='/css/capitulo 3/position' element={<Position />}/>
              <Route path='/css/capitulo 3/position/position absolute' element={<PositionAbsolute />}/>
              <Route path='/css/capitulo 3/position/position absolute/z-index' element={<Zindex />}/>
              <Route path='/css/capitulo 3/position/position absolute/z-index/position-fixed' element={<PositionFixed />}/>
              <Route path='/css/capitulo 3/position/position absolute/z-index/position-fixed/resultado1' element={<Fixed1 />}/>
              <Route path='/css/capitulo 3/position/position absolute/z-index/position-fixed/resultado2' element={<Fixed2 />}/>
              <Route path='/css/capitulo 3/position/position absolute/z-index/position-fixed/position-sticky' element={<PositionSticky />}/>
              <Route path='/css/capitulo 3/position/position absolute/z-index/position-fixed/position-sticky/resultado' element={<StickyPage />}/>
          <Route path='/css/capitulo 3/display' element={<Display />}/>
          <Route path='/css/capitulo 3/overflow' element={<Overflow />}/>
          <Route path='/css/capitulo 3/float' element={<Float />}/>
          <Route path='/css/capitulo 3/pseudoelementos' element={<Pseudoelementos />}/>
          <Route path='/css/capitulo 3/pseudoclases' element={<Pseudoclases />}/>

          {/* capitulo 4 */}
          <Route path='css/capitulo 4' element={<Capitulo4Css />}/>
            <Route path='css/capitulo 4/object fit' element={<ObjetFit />}/>
            <Route path='css/capitulo 4/cursor' element={<Cursor />}/>
            <Route path='css/capitulo 4/colorizacion' element={<Colorizacion />}/>
            <Route path='css/capitulo 4/responsive(basico)' element={<ResponsiveBasico />}/>
              <Route path='css/capitulo 4/responsive(basico)/resultadoResponsiveBasico' element={<ResultadoResponsive1 />}/>
            <Route path='css/capitulo 4/flexbox' element={<Flexbox />}/>
              <Route path='css/capitulo 4/flexbox/resultado1' element={<Resultado1Flex />}/>
              <Route path='css/capitulo 4/flexbox/flexDirection' element={<FlexDirection />}/>
              <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap' element={<FlexWrap />}/>
                <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/resultadoWrap1' element={<Wrap1 />}/>
                <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/resultadoWrap2' element={<Wrap2 />}/>
              <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex' element={<AlineacionFlex />}/>
                <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex/alineacionFlx' element={<ResultadoAlineacionFlex />}/>
                <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex/alineacionAlign' element={<AlignItems />}/>
                <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex/resultadoStart' element={<ResultadoStart />}/>
                <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex/alignContent' element={<AlignContent />}/>
                <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex/AlignSelf' element={<AlignSelf />}/>
              <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex/flex-grow' element={<FlexGrow />}/>
                <Route path='css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex/flex-grow/flexGrowResultado' element={<FlexGrowResultado />}/>
            <Route path='css/capitulo 4/order' element={<Order />}/>
        
        {/* capitulo 5 */}

        <Route path='css/capitulo 5' element={<Capitulo5Css />}/>
          <Route path='css/capitulo 5/grid' element={<Grid />}/>
            <Route path='css/capitulo 5/grid/gridTemplate' element={<GridTemplate />}/>
            <Route path='css/capitulo 5/grid/gridTemplate/grid-gap' element={<GridGap />}/>
            <Route path='css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios' element={<AsignacionEspacios />}/>
            <Route path='css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios/repeat' element={<RepeatCss />}/>
            <Route path='css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx' element={<GridImEx />}/>
            <Route path='css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto' element={<GridAuto />}/>
            <Route path='css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto/grid dinamico' element={<GridDinamico />}/>
            <Route path='css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto/grid dinamico/alineacionGrid' element={<AlineacionGrid />}/>
            <Route path='css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto/grid dinamico/alineacionGrid/gridArea' element={<GridArea />}/>
            <Route path='css/capitulo 5/grid/gridTemplate/grid-gap/asignacion de espacios/repeat/gridImEx/grid auto/grid dinamico/alineacionGrid/gridArea/nombrarGrid' element={<NombrarGrid />}/>
          <Route path='css/capitulo 5/responsive design' element={<ResponsiveDesing />}/>
            <Route path='css/capitulo 5/responsive design/responRes1' element={<ResponRes1 />}/>
            <Route path='css/capitulo 5/responsive design/responRes2' element={<ResponRes2 />}/>
            <Route path='css/capitulo 5/responsive design/responRes3' element={<ResponRes3 />}/>
          <Route path='css/capitulo 5/transition' element={<Transition />}/>

            
            
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App;