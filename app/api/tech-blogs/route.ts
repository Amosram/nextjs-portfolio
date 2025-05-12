import { NextRequest, NextResponse } from 'next/server';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
}

interface XAIResponse {
  results: NewsItem[];
}

async function fetchFromXAI(query: string): Promise<XAIResponse> {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    throw new Error('xAI API key is missing. Please add XAI_API_KEY to .env.local.');
  }
  console.log('API Key:', process.env.XAI_API_KEY ? 'Present' : 'Missing');

  try {
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'grok-beta',
        messages: [
          {
            role: 'user',
            content: `Search for the latest tech news and blogs about ${query}. Provide a list of articles with titles, descriptions, URLs, sources, and publication dates.`,
          },
        ],
        max_tokens: 1000,
        extra: { mode: 'DeepSearch' }, // Enabling DeepSearch for web scraping
      }),
    });

    if (!response.ok) {
      throw new Error(`xAI API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    // Transform xAI response to NewsItem format
    // Note: The actual response structure may vary; adjust based on API documentation or testing
    const articles = data.choices?.[0]?.message?.content
      ? JSON.parse(data.choices[0].message.content) // Assuming Grok returns JSON-formatted articles
      : [];

    return {
      results: articles.map((article: any) => ({
        title: article.title || 'Untitled',
        description: article.description || article.snippet || 'No description available',
        url: article.url || 'https://example.com',
        source: article.source || 'Unknown',
        publishedAt: article.publishedAt || new Date().toISOString(),
      })),
    };
  } catch (error) {
    console.error('xAI API error:', error);
    throw error;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query } = body as { query?: string };

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
    }

    // Ensure the query is tech-related
    const techQuery = query.toLowerCase().includes('tech') ? query : `tech ${query}`;
    const data = await fetchFromXAI(techQuery);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching tech news:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}