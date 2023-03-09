import Header from './components/Header';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div className="App">
      <Header />
      <main>{cards}</main>
    </div>
  );
}
