import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
         🎄 Xmas{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Leaderboard
        </Text> 🎄
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl" style={{ marginBottom: 40}}>
        Karacsony. A szeretet unnepe. Megannyi josag az asztalon: frissen sult bejgli, 
        gozolgo halaszle mellett, szaloncukor. Karacsonydiszites, Reszkessetek 
        Betorok es Frank Sinatra - micsoda orom! De legbelul mindannyian tudjuk, hogy az 
        egyutt toltott idot igazan a rokonainkkal folytatott beszelgetesek teszik emlekezetesse.  

        {/* <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor> */}
      </Text>
    </>
  );
}
