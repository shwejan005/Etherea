import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: "Oh dear! It looks like you forgot to ask a question. Could you please try again?" },
        { status: 400 }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;

    if (!geminiApiKey) {
      return NextResponse.json(
        { error: "Oops! I seem to be missing a special key that helps me think. Maybe my grown-up friends can fix it?" },
        { status: 500 }
      );
    }

    const payload = {
      contents: [
        {
          parts: [
            {
              text: `Hello there, little friend! I'm your gentle AI tutor, and I'm here to help you learn in the easiest and happiest way possible. 
              Please listen carefully as I explain:
              
              User's Question: ${query}.
              
              I'll do my very best to give a super simple answer that makes learning fun! I promise I won’t use big words or anything tricky.`
            }
          ]
        }
      ]
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const responseData = await response.json();
    console.log('Gemini API Response:', responseData);

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.error?.message || "Oh no! I couldn't find an answer this time. Maybe we can try again together?" },
        { status: response.status }
      );
    }

    const chatbotResponse = responseData?.candidates?.[0]?.content?.parts?.[0]?.text || "Hmm... I tried really hard, but I don't know the answer. Maybe you can ask a grown-up for help too?";

    return NextResponse.json({ response: chatbotResponse });

  } catch (error) {
    console.error('Error during chatbot response generation:', error);
    return NextResponse.json(
      { error: "Oopsie! Something went wrong. I'm just a little AI tutor, but I'll try again if you want!" },
      { status: 500 }
    );
  }
}