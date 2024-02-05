import { AssemblyAI } from "assemblyai";

export const client = new AssemblyAI({
  apiKey: 'd08bebfd09f04e2fac3e8f6e8f714fb6',
});

export const createTranscription = async (config) => {
    const transcript = await client.transcripts.transcribe(config);
    console.log(transcript);
    console.log(transcript.text);
}

export const rt = client.realtime.transcriber();