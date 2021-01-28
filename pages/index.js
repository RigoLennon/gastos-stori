import Header from '../components/comunes/Header';
import NavBar from '../components/comunes/Navbar';
import GastosFijos from '../components/GastosFijos';

function index(){
  return(
    <div>
      <Header />
      <NavBar />
      <GastosFijos />
    </div>
  );
}

export default index;