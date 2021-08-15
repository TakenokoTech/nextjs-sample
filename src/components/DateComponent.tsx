import { parseISO, format } from 'date-fns';

export default function DateComponent({ dateString }) {
  try {
    const date = parseISO(dateString);
    const str = format(date, 'LLLL d, yyyy');
    return <time dateTime={dateString}>{str}</time>;
  } catch (e) {
    return <div>error</div>;
  }
}
