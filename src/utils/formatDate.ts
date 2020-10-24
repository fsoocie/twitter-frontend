import {formatDistance} from 'date-fns'
import { ru } from 'date-fns/locale'

export function formatDate(date: Date): string {
  return formatDistance(new Date(date), new Date(), {locale: ru})
}
