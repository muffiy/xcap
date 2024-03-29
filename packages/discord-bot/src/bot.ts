import 'reflect-metadata';

import { dirname, importx, isESM } from '@discordx/importer';
// Use the Client that is provided by discordx NOT discord.js
import { Intents, Message } from 'discord.js';
import { Client } from 'discordx';

import { CONFIG } from './config.js';

const thisDir = isESM ? dirname(import.meta.url) : __dirname;

async function initDiscordBot(): Promise<Client> {
  await importx(
    // Within a docker container: We are using tsc, so we want to load the compiled files.
    // For local dev, we are transpiling: Load the .ts files.
    process.env.RUNTIME_ENV === 'docker'
      ? `${thisDir}/discord/**/*.js`
      : `${thisDir}/discord/**/!(*.d).ts`,
  );

  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES, // required for simple commands it seems
      Intents.FLAGS.GUILD_MEMBERS,
    ],
    silent: false,
    simpleCommand: {
      prefix: '!mg ',
      responses: {
        notFound: (command: Message<boolean>) => {
          command.reply(`${CONFIG.botName} doesn't recognize that command.`);
        },
      },
    },
    botGuilds:
      process.env.RUNTIME_ENV === 'docker' ? undefined : ['808834438196494387'],
  });

  client.once('ready', async () => {
    // make sure all guilds are in cache
    await client.guilds.fetch();
  });

  client.on('messageCreate', (message) => {
    client.executeCommand(message);
  });

  await client.login(CONFIG.discordBotToken);
  return client;
}

export { initDiscordBot };
