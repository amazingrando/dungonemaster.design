import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwords } from '@fortawesome/duotone-light-svg-icons';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-lg">
        <FontAwesomeIcon 
          icon={faSwords} 
          className="h-6 w-6"
          style={{
            '--fa-primary-color': 'var(--foreground)',
            '--fa-secondary-color': '#666666',
            '--fa-secondary-opacity': 0.6,
          } as React.CSSProperties}
        />
        <h1 className="text-2xl font-bold text-balance flex items-center gap-2">
          Crafting digital experiences worthy of legend
        </h1>
        <p>
          Like a great <abbr title="Dungeon Master">DM</abbr>, I set the vision, create the structure, and adapt as the story unfolds—whether that's a design system, a website, or an award-winning project.
        </p>
        <p>Explore the work of Randy Oest at <a href="https://amazingrando.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">amazingrando.com</a></p>
      </main>
    </div>
  );
}