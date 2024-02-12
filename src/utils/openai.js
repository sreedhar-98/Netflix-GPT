import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_gpt_Secretkey,
  dangerouslyAllowBrowser: true
});

export default openai;