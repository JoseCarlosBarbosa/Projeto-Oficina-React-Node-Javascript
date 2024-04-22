


import AppBarLateral from "../componets/componetsAgrupados/AppBarLateral";
import CabecalhoPag from "../componets/componetsAgrupados/CabecalhoPagInicial";
import InfoCentral from "../componets/componetsAgrupados/InfoCentral";
import "../style/StylePG1.css";


function Home() {
    return (
        <main>
            <CabecalhoPag></CabecalhoPag>
            <AppBarLateral></AppBarLateral>
            <InfoCentral></InfoCentral>
        </main>
    );
}
export default Home;