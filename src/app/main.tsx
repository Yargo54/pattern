import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ui/App';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

import { ConfigProvider } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';
import dayjs from 'dayjs';
import moment from 'moment';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';

const store = setupStore();

declare global {
  interface Window {
    _env_: {
      [key: string]: string;
    };
  }
}

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

moment.updateLocale('ru', {
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  weekdays: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  monthsShort: [
    'Янв',
    'Фев',
    'Март',
    'Апр',
    'Май',
    'Июнь',
    'Июль',
    'Авг',
    'Сен',
    'Окт',
    'Нояб',
    'Дек',
  ],

  weekdaysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  week: {
    dow: 1,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={ru_RU}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
);
