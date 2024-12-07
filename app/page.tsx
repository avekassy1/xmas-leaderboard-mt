import Entries from '@/components/Entries/Entries';
import { Welcome } from '../components/Welcome/Welcome';
import { AppShell, AppShellMain, Stack } from '@mantine/core';

export default function HomePage() {
  return (
    <AppShell>
      <AppShellMain>
        <Stack>
          <Welcome />
          <Entries />
        </Stack>
      </AppShellMain>
    </AppShell>
  );
}
