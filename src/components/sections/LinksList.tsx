import type { LinkItem } from '../../types';
import { PlatformIcon } from './icons';
import './links.css';

export default function LinksList({ items }: { items: LinkItem[] }) {
  return (
    <ul className="links">
      {items.map((item) => (
        <li key={item.url}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <PlatformIcon platform={item.platform} className="links__icon" />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
