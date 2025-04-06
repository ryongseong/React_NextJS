import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import { DayPicker } from 'react-day-picker'

import styles from './Calendar.module.scss'
import 'react-day-picker/dist/style.css'

const cx = classNames.bind(styles)

const css = `
  .rdp-month_caption {
    display: none;
  }
  .rdp-nav {
    display: none;
  }

  .rdp-day {
    cursor: default;
  }

  .rdp-weekday {
    font-weight: 500;
    font-size: 14px;
    font-weight: bold;
  }

  .rdp-selected {
    font-weight: bold;
    color: #000000;
  }
  
  .rdp-selected:hover {
  }
`

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          mode="single"
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
