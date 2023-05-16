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




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />

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
            <Route path='javaScript/prompt' element={<PromptLogica />}/>
            

              
            



        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App;