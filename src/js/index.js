import '../css/main.scss';
import Siema from 'siema';


window.addEventListener('load', (e) => {
    const siema = new Siema({
        selector: '.siema',
        duration: 300,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
      });

    setInterval(() => {
        siema.next();
    }, 3500);
});
