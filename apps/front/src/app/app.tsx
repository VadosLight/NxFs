// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

export function App() {
  // коммит не должен пройти в дев
  return (
    <>
      <NxWelcome title="front" />
      <div />
    </>
  );
}

export default App;
