import { Injectable } from '@angular/core';
import { Productinfo } from './productinfo';

@Injectable({
  providedIn: 'root',
})
export class DetailingService {
  url = 'http://localhost:3000/products';
  // protected productInfoList: Productinfo[] =[
  // {
  //   id: 0,
  //   name: 'Веб-камера Logitech HD Webcam C270',
  //   photo:
  //     '/assets/images/Products/Веб-камера Logitech HD Webcam C270/Веб-камера Logitech HD Webcam C270.jpg',
  //   photo1:'/assets/images/Products/Веб-камера Logitech HD Webcam C270/Веб-камера Logitech HD Webcam C2701.jpg',
  //   photo2:'/assets/images/Products/Веб-камера Logitech HD Webcam C270/Веб-камера Logitech HD Webcam C2702.jpg',
  //   rating: 5.0,
  //   link: 'https://kaspi.kz/shop/p/logitech-hd-webcam-c270-9000118/?srsltid=AfmBOor3E8jwnLWrqYToOhxMJihRPTFS5pT0n7taXxE-lZ37VlOUY9My',
  //   linkText: 'Link to the Kaspi',
  //   cost: 8.971,
  //   description: 'Действительно простые видеовызовы в формате высокой четкости с разрешением 720p через большинство основных клиентов для обмена мгновенными сообщениями, включая Logitech Vid HD.',
  // },
  // {
  //   id: 1,
  //   name: 'Игровой контроллер Logitech Driving Force Shifter черный',
  //   photo:
  //     '/assets/images/Products/Игровой контроллер Logitech Driving Force Shifter черный/Игровой контроллер Logitech Driving Force Shifter черный.jpg',
  //   photo1:'/assets/images/Products/Игровой контроллер Logitech Driving Force Shifter черный/Игровой контроллер Logitech Driving Force Shifter черный1.jpg',
  //   photo2:'/assets/images/Products/Игровой контроллер Logitech Driving Force Shifter черный/Игровой контроллер Logitech Driving Force Shifter черный2.jpg',
  //   rating: 5.0,
  //   link: 'https://kaspi.kz/shop/p/logitech-driving-force-shifter-chernyi-13000077/?srsltid=AfmBOoqlNO0HUVAvCpj1yOfTITS1PRl4ZP1g_7Sr3_oRQQ6744Q_vQ31',
  //   linkText: 'Link to the Kaspi',
  //   cost: 39.644,
  //   description: 'Коробка передач Logitech Driving Force Shifter создана для того, чтобы сделать гоночные игры максимально реалистичными. Ее используют с рулями G920 (для Xbox One и ПК) и G29 (для PS4 и ПК) из той же серии.',
  // },
  // {
  //   id: 2,
  //   name: 'Игровой контроллер Logitech G29 Driving Force Racing Wheel черный',
  //   photo:
  //     '/assets/images/Products/Игровой контроллер Logitech G29 Driving Force Racing Wheel черный/Игровой контроллер Logitech G29 Driving Force Racing Wheel черный.jpg',
  //   photo1:'/assets/images/Products/Игровой контроллер Logitech G29 Driving Force Racing Wheel черный/Игровой контроллер Logitech G29 Driving Force Racing Wheel черный1.jpg',
  //   photo2:'/assets/images/Products/Игровой контроллер Logitech G29 Driving Force Racing Wheel черный/Игровой контроллер Logitech G29 Driving Force Racing Wheel черный2.jpg',
  //   rating: 5.0,
  //   link: 'https://kaspi.kz/shop/p/logitech-g29-driving-force-racing-wheel-chernyi-13000007/?srsltid=AfmBOoozRfTC4iHNcM2m9ZZfamsOaDvfjwuUiYbTVpRZ4UedOIbu304z',
  //   linkText: 'Link to the Kaspi',
  //   cost: 151.641,
  //   description: 'Разработан для идеального вождения благодаря двухмоторной обратной связи по усилию, подрулевым лепесткам из нержавеющей стали и прошитому вручную кожаному рулю. Регулируемые напольные педали позволяют ускоряться, тормозить и переключать передачи с ощущением настоящего автомобиля.',
  // },
  // {
  //   id: 3,
  //   name: 'Клавиатура Logitech G213 Prodigy черный',
  //   photo:
  //     '/assets/images/Products/Клавиатура Logitech G213 Prodigy черный/Клавиатура Logitech G213 Prodigy черный.jpg',
  //   photo1:'/assets/images/Products/Клавиатура Logitech G213 Prodigy черный/Клавиатура Logitech G213 Prodigy черный1.jpg',
  //   photo2:'/assets/images/Products/Клавиатура Logitech G213 Prodigy черный/Клавиатура Logitech G213 Prodigy черный2.jpg',
  //   rating: 4.5,
  //   link: 'https://kaspi.kz/shop/p/logitech-g213-prodigy-chernyi-9200432/?srsltid=AfmBOooxtbWzV4fTvT6XnY4FP_C_K-nWIaYbWvuxckK7095vLMCE-1wQ',
  //   linkText: 'Link to the Kaspi',
  //   cost: 38.164,
  //   description: 'Игровая клавиатура G213 оснащена клавишами Logitech G Mech-Dome с особой настройкой, обеспечивающей отличный тактильный отклик и стабильную высокую производительность на уровне механических клавиатур. Клавиши Mech-Dome имеют стандартную высоту и полную глубину хода — 4 мм. Они работают совершенно бесшумно и активируются при силе нажатия 50 г.',
  // },
  // {
  //   id: 4,
  //   name: 'Клавиатура Logitech K380 920-007584 серый',
  //   photo:
  //     '/assets/images/Products/Клавиатура Logitech K380 920-007584 серый/Клавиатура Logitech K380 920-007584 серый.jpg',
  //   photo1:'/assets/images/Products/Клавиатура Logitech K380 920-007584 серый/Клавиатура Logitech K380 920-007584 серый1.jpg',
  //   photo2:'/assets/images/Products/Клавиатура Logitech K380 920-007584 серый/Клавиатура Logitech K380 920-007584 серый2.jpg',
  //   rating: 5.0,
  //   link: 'https://kaspi.kz/shop/p/logitech-k380-920-007584-seryi-9200752/?srsltid=AfmBOopOk4iwPnGcb6pjSJ_XL4eiIgY8nH6tNzXgwo6VgUH_5Q8yhg08',
  //   linkText: 'Link to the Kaspi',
  //   cost: 18.520,
  //   description: 'Перед Вами максимально удобная в процессе эксплуатации клавиатура беспроводная для планшета Logitech K380. С помощью представленного устройства Вы сможете быстро вводить текст на своем планшете или смартфоне точно так же, как и на ноутбуке или на ПК. Модель Logitech K380 спроектирована с большой скрупулезностью инженерами бренда Logitech, профиль которого – изготовление первоклассных клавиатур, пультов дистанционного управления, веб-камер и прочих вспомогательных компьютерных аксессуаров.Logitech K380 – это универсальная клавиатура, которая совместима с большим количеством ОС, что делает ее особенно заманчивой для приобретения. Отличительной особенностью клавиатуры является то, что она является компактной. За счет этого Вы с легкостью сможете использовать ее не только дома, но и за его пределами. Конструкция клавиатуры предусматривает присутствие 80 клавиш. Питание прибора осуществляется от двух батареек типа ААА. При этом клавиатура обладает крайне низким энергопотреблением. Длительность работы от батареек составляет 2 года.',
  // },
  // {
  //   id: 5,
  //   name: 'Мышь Logitech G Pro X Superlight 2 розовый',
  //   photo:
  //     '/assets/images/Products/Мышь Logitech G Pro X Superlight 2 розовый/Мышь Logitech G Pro X Superlight 2 розовый.jpg',
  //   photo1:'/assets/images/Products/Мышь Logitech G Pro X Superlight 2 розовый/Мышь Logitech G Pro X Superlight 2 розовый1.jpg',
  //   photo2:'/assets/images/Products/Мышь Logitech G Pro X Superlight 2 розовый/Мышь Logitech G Pro X Superlight 2 розовый2.jpg',
  //   rating: 5.0,
  //   link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-rozovyi-113957944/?srsltid=AfmBOopNW9AySODhp4MaIEeXsfNwVZtNapPbdJMuVVBohYsbE44Y7SU1',
  //   linkText: 'Link to the Kaspi',
  //   cost: 74.924,
  //   description: 'Мышь Logitech G Pro X Superlight 2 розовый.',
  // },
  // {
  //   id: 6,
  //   name: 'Мышь Logitech G102 Lightsync черный',
  //   photo:
  //     '/assets/images/Products/Мышь Logitech G102 Lightsync черный/Мышь Logitech G102 Lightsync черный.jpg',
  //   photo1:'/assets/images/Products/Мышь Logitech G102 Lightsync черный/Мышь Logitech G102 Lightsync черный1.jpg',
  //   photo2:'/assets/images/Products/Мышь Logitech G102 Lightsync черный/Мышь Logitech G102 Lightsync черный2.jpg',
  //   rating: 4.8,
  //   link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?srsltid=AfmBOooj2osd75NQZ2uMvGXAN-i5ZBuOKLCPiEZld0d5FHOvnKCJkO2y',
  //   linkText: 'Link to the Kaspi',
  //   cost: 9.043,
  //   description: 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой кнопках используется металлический пружинный механизм для исключительно точного срабатывания.',
  // },
  // {
  //   id: 7,
  //   name: 'Мышь Logitech MX Master 3S 910-006559 черный',
  //   photo:
  //     '/assets/images/Products/Мышь Logitech MX Master 3S 910-006559 черный/Мышь Logitech MX Master 3S 910-006559 черный.jpg',
  //   photo1:'/assets/images/Products/Мышь Logitech MX Master 3S 910-006559 черный/Мышь Logitech MX Master 3S 910-006559 черный1.jpg',
  //   photo2:'/assets/images/Products/Мышь Logitech MX Master 3S 910-006559 черный/Мышь Logitech MX Master 3S 910-006559 черный2.jpg',
  //   rating: 5.0,
  //   link: 'https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006559-chernyi-106172365/?srsltid=AfmBOoptVvgGbwUO2xW2IY4zKAt8Fi8xhL-Oer41Dwk4xuG7X60IQcNN',
  //   linkText: 'Link to the Kaspi',
  //   cost: 46.900,
  //   description: 'Мышь Logitech MX Master 3S 910-006559 черный.',
  // },
  // {
  //   id: 8,
  //   name: 'Наушники Logitech G435 фиолетовый',
  //   photo:
  //     '/assets/images/Products/Наушники Logitech G435 фиолетовый/Наушники Logitech G435 фиолетовый.jpg',
  //   photo1:'/assets/images/Products/Наушники Logitech G435 фиолетовый/Наушники Logitech G435 фиолетовый1.jpg',
  //   photo2:'/assets/images/Products/Наушники Logitech G435 фиолетовый/Наушники Logitech G435 фиолетовый2.jpg',
  //   rating: 4.7,
  //   link: 'https://kaspi.kz/shop/p/logitech-g435-fioletovyi-107183308/?srsltid=AfmBOopYUrKvUhG7qJbkaKdwrkxemnZGwWk4zRKGTzzSK0ZrIqIqzPG2',
  //   linkText: 'Link to the Kaspi',
  //   cost: 36.489,
  //   description: 'Оснащенная мягкими амбушюрами и регулируемым оголовьем радиочастотная гарнитура Logitech G435 LIGHTSPEED исключительно комфортна. Эксплуатация устройства в течение многих часов подряд не доставит пользователю неудобств. Это актуально: гарнитура ориентирована на использование в играх. Модель совместима с консолями Nintendo Switch, PS4 и PS5. Одной из особенностей гарнитуры является поддержка технологии объемного звука Dolby Atmos.',
  // },
  // {
  //   id: 9,
  //   name: 'Наушники Logitech G435 черный',
  //   photo:
  //     '/assets/images/Products/Наушники Logitech G435 черный/Наушники Logitech G435 черный.jpg',
  //   photo1:'/assets/images/Products/Наушники Logitech G435 черный/Наушники Logitech G435 черный1.jpg',
  //   photo2:'/assets/images/Products/Наушники Logitech G435 черный/Наушники Logitech G435 черный2.jpg',
  //   rating: 4.8,
  //   link: 'https://kaspi.kz/shop/p/logitech-g435-chernyi-108443610/?srsltid=AfmBOornFhuFfhC1hGzBawJV9Jn-RJOEapxJrX1Sz85F7XNg1C1ofAu9',
  //   linkText: 'Link to the Kaspi',
  //   cost: 33.083,
  //   description: 'Оснащенная мягкими амбушюрами и регулируемым оголовьем радиочастотная гарнитура Logitech G435 LIGHTSPEED исключительно комфортна. Эксплуатация устройства в течение многих часов подряд не доставит пользователю неудобств. Это актуально: гарнитура ориентирована на использование в играх. Модель совместима с консолями Nintendo Switch, PS4 и PS5. Одной из особенностей гарнитуры является поддержка технологии объемного звука Dolby Atmos.',
  // }
  // ];

  constructor() {}

  //   getAllProductInfo(): Productinfo[] {
  //     return this.productInfoList;
  //   }
  //   getProductInfoById(id: number): Productinfo | undefined {
  //     return this.productInfoList.find(productInfo => productInfo.id === id);
  //   }
  // }

  async getAllProductInfo(): Promise<Productinfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getProductInfoById(id: number): Promise<Productinfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
