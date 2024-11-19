import Header from '../components/Header';
import Archive from '../components/Multimedia/Archive';
import Footer from '../components/Footer';

const Formulario = () => {
  return (
    <div>
      <Header client:visible title='Los frutos del aguacate HASS Colombiano son para todos' subtitle1='Nuestra Trayectoria' subtitle2='“Cultivamos y vendemos por ti”' />
      <Archive client:visible />
      <Footer client:visible />
    </div>
  );
};

export { Formulario };
