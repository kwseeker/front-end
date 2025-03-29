<map version="freeplane 1.9.13">
<!--To view this file, download free mind mapping software Freeplane from https://www.freeplane.org -->
<node TEXT="前端技术栈" FOLDED="false" ID="ID_696401721" CREATED="1610381621824" MODIFIED="1652332191075" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false" associatedTemplateLocation="template:/standard-1.6.mm" followedTemplateLocation="template:/standard-1.6.mm" followedMapLastTime="1651300690000" show_icon_for_attributes="true" show_note_icons="true"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ID="ID_271890427" ICON_SIZE="12 pt" COLOR="#000000" STYLE="fork">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" DASH="" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_271890427" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
<richcontent CONTENT-TYPE="plain/auto" TYPE="DETAILS"/>
<richcontent TYPE="NOTE" CONTENT-TYPE="plain/auto"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.selection" BACKGROUND_COLOR="#4e85f8" BORDER_COLOR_LIKE_EDGE="false" BORDER_COLOR="#4e85f8"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important" ID="ID_67550811">
<icon BUILTIN="yes"/>
<arrowlink COLOR="#003399" TRANSPARENCY="255" DESTINATION="ID_67550811"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10 pt" SHAPE_VERTICAL_MARGIN="10 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="9" RULE="ON_BRANCH_CREATION"/>
<node TEXT="开发环境" POSITION="right" ID="ID_534501101" CREATED="1652332392215" MODIFIED="1652332444486" STYLE="bubble">
<edge COLOR="#0000ff"/>
<node TEXT="VSCode" ID="ID_290298875" CREATED="1652332722386" MODIFIED="1652332735270" STYLE="bubble"/>
<node TEXT="WebStorm" ID="ID_1774207664" CREATED="1652332728198" MODIFIED="1652332735007" STYLE="bubble"/>
</node>
<node TEXT="浏览器原理" POSITION="right" ID="ID_1708324718" CREATED="1652340876119" MODIFIED="1652340891931" STYLE="bubble">
<edge COLOR="#7c007c"/>
<node TEXT="渲染原理" ID="ID_1265573034" CREATED="1652340918417" MODIFIED="1652340920861" STYLE="bubble"/>
</node>
<node TEXT="前端基础" POSITION="right" ID="ID_469008140" CREATED="1652332223551" MODIFIED="1652332243976" STYLE="bubble">
<edge COLOR="#ff0000"/>
<node TEXT="HTML" ID="ID_195572048" CREATED="1652332272919" MODIFIED="1652332706860" STYLE="bubble"/>
<node TEXT="HTML5" ID="ID_609200308" CREATED="1652332275472" MODIFIED="1652332707266" STYLE="bubble"/>
<node TEXT="CSS" ID="ID_1322319662" CREATED="1652332278567" MODIFIED="1652332707555" STYLE="bubble"/>
<node TEXT="CSS3" ID="ID_1797345517" CREATED="1652332280950" MODIFIED="1652332707830" STYLE="bubble"/>
<node TEXT="JS(ES5)" ID="ID_857607471" CREATED="1652332291717" MODIFIED="1652332708263" STYLE="bubble"/>
<node TEXT="JS(ES6/7/8/9)" ID="ID_1393092464" CREATED="1652332300854" MODIFIED="1652332708626" STYLE="bubble"/>
<node TEXT="Deno" ID="ID_828494676" CREATED="1652332487567" MODIFIED="1652332709151" STYLE="bubble"/>
</node>
<node TEXT="工程架构" POSITION="right" ID="ID_832013924" CREATED="1652332523025" MODIFIED="1652332534506" STYLE="bubble">
<edge COLOR="#00ff00"/>
<node TEXT="设计模式" ID="ID_1443188231" CREATED="1652332535619" MODIFIED="1652332544566" STYLE="bubble"/>
<node TEXT="MVC" ID="ID_639700306" CREATED="1652332544747" MODIFIED="1652332557945" STYLE="bubble"/>
<node TEXT="MVVM" ID="ID_109533524" CREATED="1652332552208" MODIFIED="1652332557631" STYLE="bubble"/>
<node TEXT="模块化开发" ID="ID_1570255491" CREATED="1652332606939" MODIFIED="1652332613069" STYLE="bubble"/>
<node TEXT="工程化" ID="ID_1315768929" CREATED="1652332814284" MODIFIED="1652332825521" STYLE="bubble"/>
</node>
<node TEXT="开发框架" POSITION="right" ID="ID_253564934" CREATED="1652332564686" MODIFIED="1652332576331" STYLE="bubble">
<edge COLOR="#ff00ff"/>
<node TEXT="基础框架" ID="ID_1153078634" CREATED="1652332653883" MODIFIED="1652332659213" STYLE="bubble">
<node TEXT="JQuery" ID="ID_1245484710" CREATED="1652332577230" MODIFIED="1652332586746" STYLE="bubble"/>
<node TEXT="Bootstrap" ID="ID_290767770" CREATED="1652332580340" MODIFIED="1652332586358" STYLE="bubble"/>
<node TEXT="Swiper" ID="ID_1462908434" CREATED="1652332588046" MODIFIED="1652332596844" STYLE="bubble"/>
</node>
<node TEXT="常用框架" ID="ID_1534381205" CREATED="1652332597118" MODIFIED="1652332680409" STYLE="bubble">
<node TEXT="Vue" ID="ID_1908325453" CREATED="1652332681463" MODIFIED="1652332701483" STYLE="bubble"/>
<node TEXT="React" ID="ID_1569547514" CREATED="1652332686121" MODIFIED="1652332700866" STYLE="bubble"/>
<node TEXT="Agular" ID="ID_696155523" CREATED="1652332692755" MODIFIED="1652332700383" STYLE="bubble"/>
</node>
</node>
<node TEXT="前后端交互" POSITION="right" ID="ID_1809002454" CREATED="1652332752993" MODIFIED="1652332763716" STYLE="bubble">
<edge COLOR="#00ffff"/>
<node TEXT="Ajax" ID="ID_670217224" CREATED="1652332764662" MODIFIED="1652332773184" STYLE="bubble"/>
<node TEXT="Nodejs" ID="ID_406834556" CREATED="1652332773342" MODIFIED="1652332797953" STYLE="bubble"/>
<node TEXT="Express" ID="ID_644834633" CREATED="1652332781354" MODIFIED="1652332797127" STYLE="bubble"/>
<node TEXT="Koa2" ID="ID_612992779" CREATED="1652332787308" MODIFIED="1652332796880" STYLE="bubble"/>
</node>
<node TEXT="小程序相关" POSITION="right" ID="ID_1994766818" CREATED="1652332850751" MODIFIED="1652332857519" STYLE="bubble">
<edge COLOR="#7c0000"/>
<node TEXT="微信小程序" ID="ID_1789167046" CREATED="1652332874126" MODIFIED="1652332899051" STYLE="bubble"/>
<node TEXT="QQ小程序" ID="ID_180793362" CREATED="1652332884630" MODIFIED="1652332898756" STYLE="bubble"/>
<node TEXT="抖音小程序" ID="ID_74031451" CREATED="1652332888619" MODIFIED="1652332898540" STYLE="bubble"/>
</node>
<node TEXT="移动端应用" POSITION="right" ID="ID_1406506355" CREATED="1652332988750" MODIFIED="1652332999269" STYLE="bubble">
<edge COLOR="#007c00"/>
<node TEXT="Flutter" ID="ID_1121164410" CREATED="1652333000346" MODIFIED="1652333004186" STYLE="bubble"/>
</node>
<node TEXT="大数据可视化" POSITION="right" ID="ID_1447492943" CREATED="1652332908841" MODIFIED="1652332915361" STYLE="bubble">
<edge COLOR="#00007c"/>
<node TEXT="Echarts" ID="ID_221150554" CREATED="1652332916400" MODIFIED="1652332931392" STYLE="bubble"/>
<node TEXT="D3.js" ID="ID_1441889058" CREATED="1652332931689" MODIFIED="1652332936773" STYLE="bubble"/>
<node TEXT="three.js" ID="ID_1170585261" CREATED="1652332936930" MODIFIED="1652332946428" STYLE="bubble"/>
<node TEXT="AntV" ID="ID_2398" CREATED="1652332946609" MODIFIED="1652332953602" STYLE="bubble"/>
</node>
</node>
</map>
