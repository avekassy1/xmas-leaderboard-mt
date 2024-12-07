'use client';

import { useState } from 'react';
import { Container, Title, Grid } from '@mantine/core';
import QuoteCard from '../QuoteCard/QuoteCard';
import { EntriesDB } from '../../data/entries'

interface Quote {
    id: number;
    rank: number;
    quote: string;
    name: string;
    town: string;
    votes: number;
}

const mockQuotes: Quote[] = [
    { id: 1, rank: 1, quote: "I don't need a recipe, I'm the chef!", name: 'Aunt Martha', town: 'Ajka', votes: 123 },
    { id: 2, rank: 2, quote: "Are you *still* single?", name: 'Uncle Bob', town: 'Budapest', votes: 98 },
    { id: 3, rank: 3, quote: "Eggnog counts as breakfast.", name: 'Cousin Tim', town: 'Kismaros', votes: 76 },
  ];


  const Entries = () => {
    // const [quotes, setQuotes] = useState<Quote[]>(mockQuotes);
    const [quotes, setQuotes] = useState<Quote[]>(EntriesDB);
  
    const handleVote = (id: number) => {
      setQuotes((prevQuotes) =>
        prevQuotes.map((quote) =>
          quote.id === id ? { ...quote, votes: quote.votes + 1 } : quote
        )
      );
    };
  
    return (
      <Container>
        {/* <Title style={{ marginBottom: 20 }}>
          🎄 Christmas Quote Leaderboard 🎄
        </Title> */}
        <Grid>
          {quotes.map((quote) => (
            <Grid.Col key={quote.id} span={12}>
                {/* { base: 12, md: 6, lg: 3} */}
              <QuoteCard
                rank={quote.rank}
                quote={quote.quote}
                submittedBy={quote.name}
                town={quote.town}
                votes={quote.votes}
                onVote={() => handleVote(quote.id)}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default Entries;