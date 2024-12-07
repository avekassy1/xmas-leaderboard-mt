"use client"
import { Card, Text, Group, Badge, Button } from '@mantine/core';

interface QuoteCardProps {
  rank: number;
  quote: string;
  submittedBy: string;
  town: string;
  votes: number;
  onVote: () => void; // Callback for the vote button
}

const QuoteCard: React.FC<QuoteCardProps> = ({ rank, quote, submittedBy, town, votes, onVote }) => {
  return (
    <Card shadow="sm" padding="lg" style={{ marginBottom: '20px' }}>
      <Group style={{ marginBottom: 10 }}>
        <Badge color="red" variant="light">Rank #{rank}</Badge>
        <Text size="sm" c="dimmed">By {submittedBy}, {town}</Text>
      </Group>
      <Text size="lg" fw={500} style={{ marginBottom: 15 }}>
        {quote}
      </Text>
      <Group>
        <Text fw={700} size="sm">{votes} Votes</Text>
        <Button variant="light" color="red" size="xs" onClick={onVote}>
          ❤️ Vote
        </Button>
      </Group>
    </Card>
  );
};

export default QuoteCard;