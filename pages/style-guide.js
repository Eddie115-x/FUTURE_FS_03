import Head from 'next/head';
import StyleExamples from '../components/StyleExamples';

export default function StyleGuide() {
  return (
    <>
      <Head>
        <title>NF Brand Style Guide</title>
        <meta name="description" content="NF Brand Style Guide - Cinematic, minimal design system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <main className="bg-obsidian min-h-screen">
        <StyleExamples />
      </main>
    </>
  );
}
